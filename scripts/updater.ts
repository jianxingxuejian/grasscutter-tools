import path from 'path'
import fs from 'fs-extra'
import fetch from 'node-fetch'
import { getOctokit, context } from '@actions/github'

const i18nList = ['en-US', 'zh-CN']

export async function updater() {
  if (process.env.GITHUB_TOKEN === undefined) {
    throw new Error('GITHUB_TOKEN is required')
  }

  const notes: Record<string, string> = {}

  i18nList.forEach(async locale => {
    const logPath = path.join(process.cwd(), `CHANGELOG.${locale}.md`)
    if (!(await fs.pathExists(logPath))) {
      throw new Error(`could not found CHANGELOG.${locale}.md`)
    }

    const read = fs.readFileSync(logPath, 'utf-8').split('\n')
    const changelog: string[] = []
    let count = 0
    for (const line of read) {
      if (/^## [v[\d.]+/.test(line)) {
        count++
      }
      if (count > 1) break
      if (line.startsWith('##') || line.startsWith('-')) {
        changelog.push(line)
      }
    }
    notes[locale] = changelog.join('\n')
  })

  const options = { owner: context.repo.owner, repo: context.repo.repo }
  const github = getOctokit(process.env.GITHUB_TOKEN)
  const { tag_name, published_at } = (await github.rest.repos.getLatestRelease({ ...options })).data
  const downloadUrl = 'https://github.com/jianxingxuejian/grasscutter-tools/releases/download/' + tag_name + '/'
  const version = tag_name.slice(1)

  const downloadUrl_win = downloadUrl + `grasscutter-tools_${version}_x64_en-US.msi.zip`
  const signature_win = await getSignature(downloadUrl_win)
  const downloadUrl_darwin = downloadUrl + 'grasscutter-tools.app.tar.gz'
  const signature_darwin = await getSignature(downloadUrl_darwin)
  const download_linux = downloadUrl + `grasscutter-tools_${version}_amd64.AppImage.tar.gz`
  const signature_linux = await getSignature(download_linux)

  const updateData = {
    version: tag_name,
    pub_date: published_at,
    notes: JSON.stringify(notes),
    platforms: {
      win64: {
        url: downloadUrl_win,
        signature: signature_win
      },
      darwin: {
        url: downloadUrl_darwin,
        signature: signature_darwin
      },
      linux: {
        url: download_linux,
        signature: signature_linux
      },
      'windows-x86_64': {
        url: downloadUrl_win,
        signature: signature_win
      },
      'darwin-x86_64': {
        url: downloadUrl_darwin,
        signature: signature_darwin
      },
      'darwin-aarch64': {
        url: downloadUrl_darwin,
        signature: signature_darwin
      },
      'linux-x86_64': {
        url: download_linux,
        signature: signature_linux
      }
    }
  }

  const { data: updateRelease } = await github.rest.repos.getReleaseByTag({ ...options, tag: 'updater' })
  const asset = updateRelease.assets.find(item => item.name.includes('update'))
  if (asset) {
    await github.rest.repos.deleteReleaseAsset({ ...options, asset_id: asset.id })
  }

  await github.rest.repos.uploadReleaseAsset({
    ...options,
    release_id: updateRelease.id,
    name: `update.json`,
    data: JSON.stringify(updateData)
  })
}

async function getSignature(url: string) {
  const response = await fetch(url + '.sig', {
    method: 'GET',
    headers: { 'Content-Type': 'application/octet-stream' }
  })
  const text = await response.text()
  return text
}

for (let i = 0; i < 3; i++) {
  try {
    await updater()
  } catch (err) {
    console.log(err)
    continue
  }
  break
}
