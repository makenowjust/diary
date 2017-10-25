// @flow

import build from './niki';

import glob from './niki/sources/glob';
import markdown from './niki/processors/markdown';
import meta from './niki/processors/meta';
import prefix from './niki/path-manipulator/prefix';
import replace from './niki/path-manipulator/replace';
import stream from './niki/readers/stream';
import string from './niki/readers/string';
import template from './niki/processors/template';

const option = {
  cleanup: true,
  destination: 'dest'
};

const articles = glob('articles/*.md')
  .map(string)
  .map(prefix('articles'))
  .map(replace(/^(\d{4})-(\d{2})-(\d{2})-(.*)\.md/, '$1/$2/$3/$4.html'))
  .map(markdown);

const index = articles.map(meta).toArray()
  .map(items => new Item('index.html', async () => {
    const articles = await Promise.all(item.map(item => item.content()));
    articles.sort(
      (a, b) => a.title < b.title ? 1 : a.title > b.title ? -1 : 0
    );
    return {articles};
  }))
  .map(template('index.pug'));

const public = glob('public/**/*')
  .map(stream)
  .map(prefix('public'))

export default build(
  option,
  Observable.concat(
    articles.map(template('article.pug')),
    index,
    public
  )
);
