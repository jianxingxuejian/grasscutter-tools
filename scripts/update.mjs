// import path from 'path'
// import fs from 'fs-extra'
// import fetch from 'node-fetch'
// import { getOctokit, context } from '@actions/github'

// const i18nList = ['en-US', 'zh-CN']
// const startReg = /^## v[\d\.]+/
// const endReg = /^------/

// async function updater() {
//   if (process.env.GITHUB_TOKEN === undefined) {
//     throw new Error('GITHUB_TOKEN is required')
//   }

//   const options = { owner: context.repo.owner, repo: context.repo.repo }
//   const github = getOctokit(process.env.GITHUB_TOKEN)

//   const { tag_name, published_at, assets, body } = (await github.rest.repos.getLatestRelease()).data

//   i18nList.forEach(async locale => {
//     const logPath = path.join(process.cwd(), 'CHANGELOG_' + locale + '.md')
//     if (!(await fs.pathExists(logPath))) {
//       throw new Error('could not found CHANGELOG_' + locale + '.md')
//     }
//     const text = fs.readFileSync(logPath, 'utf-8')
//   })
// }

// updater().catch(console.error)
