'use strict'

// == require ==

const path = require('path')

const beautify = require('js-beautify')
const cpx = require('cpx')
const fsp = require('fs-promise')
const globp = require('glob-promise')
const log = require('fancy-log')
const markdownIt = require('markdown-it')
const mkdirpp = require('mkdirp-promise')
const moment = require('moment')
const pug = require('pug')
const pygments = require('pygments')
const rimrafp = require('rimraf-promise')
const yaml = require('js-yaml')

const cpxp = (...arg) => new Promise((resolve, reject) => cpx.copy(...arg, (err, result) => {
  if (err) {
    return reject(err)
  }
  resolve(result)
}))

// == config ==

const projectRoot = path.join(__dirname, '..')

const articleRoot = path.join(projectRoot, 'article')
const assetRoot = path.join(projectRoot, 'src', 'asset')
const outputRoot = path.join(projectRoot, 'output')
const templateRoot = path.join(projectRoot, 'src', 'template')

const baseUrl = process.env.NODE_ENV === 'production' ?
  'https://makenowjust.github.io/diary' :
  ''

const defaultAuthor = {
  name: 'TSUYUSATO Kitsune',
  url: 'https://github.com/MakeNowJust',
}

// == markdown ==

const convertMarkdown = markdown => {
  let data = {}
  const content = markdownIt({
      html: true,
      linkify: true,
      breaks: true,
      highlight: (code, lang) => {
        if (lang) {
          const spans = pygments.colorizeSync(code, lang === 'crystal' ? 'ruby' : lang, 'html', {O: 'nowrap=True'})
          return spans === '' ? '' : `<pre><code>${spans}</code></pre>`
        }
        return ''
      },
    })
    .use(require('markdown-it-front-matter'), fm => {
      data = yaml.safeLoad(fm)
    })
    .render(markdown)
  return Object.assign({content}, data)
}

// == pug ==

const templateCache = new Map
const template = name => {
  if (templateCache.has(name)) {
    return templateCache.get(name)
  }

  const pugRender = pug.compileFile(path.join(templateRoot, `${name}.pug`), {basedir: templateRoot})
  const render = locals => beautify.html(pugRender(locals), {indent_size: 2})
  templateCache.set(name, render)
  return render
}

// == article ==

const getArticles = async () => {
  const articles = []

  for (const filename of await globp('*.md', {cwd: articleRoot})) {
    const [_, key, year, month, day, base] = filename.match(/^((\d{4})-(\d{2})-(\d{2})-(.*)).md$/)

    const article = await convertMarkdown(await fsp.readFile(path.join(articleRoot, filename), 'utf-8'))

    article.author = article.author || defaultAuthor
    article.date = moment(`${year}/${month}/${day}`, 'YYYY/MM/DD')
    article.key = key
    article.path = `article/${year}/${month}/${day}/${base}.html`
    article.output = path.join(outputRoot, article.path)
    article.url = `${baseUrl}/${article.path}`

    articles.push(article)
  }

  return articles.sort((a, b) =>
    a.date > b.date ? -1 : a.date - b.date ? 1 :
    a.path > b.path ? 1 : a.path < b.path ? -1 : 0)
}

// == build ==

const setup = async () => {
  log('setup: start')

  // cleanup output directory
  await rimrafp(outputRoot)

  // make output directory tree
  await mkdirpp(outputRoot)

  // copy assets into output directory
  await cpxp(path.join(assetRoot, '**/*'), outputRoot)

  log('setup: finish')
}

const build = async () => {
  await setup()

  const indexTemplate = template('index')
  const articleTemplate = template('article')

  const articles = await getArticles()

  const html = indexTemplate({baseUrl, articles})
  await fsp.writeFile(path.join(outputRoot, 'index.html'), html)
  log(`write: index.html`)

  for (const article of articles) {
    const html = articleTemplate(Object.assign({baseUrl, articles}, article))
    await mkdirpp(path.dirname(article.output))
    await fsp.writeFile(article.output, html)
    log(`write: ${article.path}`)
  }
}

// == export ==

module.exports = build
