import path from 'path'
import fs from 'fs-extra'
import fetch from 'node-fetch'
import { getOctokit, context } from '@actions/github'

const i18nList = ['en-US', 'zh-CN']

export async function updater() {
  if (process.env.GITHUB_TOKEN === undefined) {
    throw new Error('GITHUB_TOKEN is required')
  }

  const options = { owner: context.repo.owner, repo: context.repo.repo }
  const github = getOctokit(process.env.GITHUB_TOKEN)
  const { tag_name, published_at } = (await github.rest.repos.getLatestRelease({ ...options })).data
  const downloadUrl = 'https://github.com/jianxingxuejian/grasscutter-tools/releases/download/' + tag_name + '/'
  const version = tag_name.slice(1)

  const downloadUrl_win = downloadUrl + `grasscutter-tools_${version}_x64_en-US.msi.zip`
  const signature_win = getSignature(downloadUrl_win)
  const downloadUrl_darwin = downloadUrl + 'grasscutter-tools.app.tar.gz'
  const signature_darwin = getSignature(downloadUrl_darwin)
  const download_linux = downloadUrl + `grasscutter-tools_${version}_amd64.AppImage.tar.gz`
  const signature_linux = getSignature(download_linux)

  const updateData = {
    version: tag_name,
    pub_date: published_at,
    changelog: '',
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

  i18nList.forEach(async locale => {
    const logPath = path.join(process.cwd(), `CHANGELOG.${locale}.md`)
    if (!(await fs.pathExists(logPath))) {
      throw new Error(`could not found CHANGELOG.${locale}.md`)
    }

    const asset = updateRelease.assets.find(item => item.name.includes(locale))

    const read = fs.readFileSync(logPath, 'utf-8').split('\n')
    const changelog = read
      .slice(
        read.findIndex(item => /^## v[\d.]+/.test(item)),
        read.findIndex(item => /^------/.test(item))
      )
      .filter(item => item)
      .join('\n')
    updateData.changelog = changelog

    if (asset) {
      await github.rest.repos.deleteReleaseAsset({ ...options, asset_id: asset.id })
    }

    await github.rest.repos.uploadReleaseAsset({
      ...options,
      release_id: updateRelease.id,
      name: `update_${locale}.json`,
      data: JSON.stringify(updateData)
    })
  })
}

async function getSignature(url) {
  const response = await fetch(url + '.sig', {
    method: 'GET',
    headers: { 'Content-Type': 'application/octet-stream' }
  })

  return response.text()
}

updater().catch(console.error)
