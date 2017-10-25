// @flow

import moment from 'moment';

import build from './niki';
import Item from './niki/item';

import glob from './niki/sources/glob';
import markdown from './niki/processors/markdown';
import meta from './niki/processors/meta';
import prefix from './niki/path-manipulators/prefix';
import replace from './niki/path-manipulators/replace';
import stream from './niki/readers/stream';
import string from './niki/readers/string';
import stringStream from './niki/processors/string-stream';
import template from './niki/processors/template';

import dir from '../config/dir';
import url from '../config/url';

const articles = glob(`${dir.articles}/*.md`)
  .map(string())
  .map(prefix(`${dir.articles}/`))
  .map(replace(/^(\d{4})-(\d{2})-(\d{2})-(.*)\.md/, '$1/$2/$3/$4.html'))
  .map(markdown())
  .map(
    item =>
      new Item(item.path, async () => {
        const date = moment(item.path, 'YYYY/MM/DD');
        const { meta: { title }, body } = await item.content();
        return {
          meta: { title, date, path: item.path },
          body,
          baseURL: url.base
        };
      })
  );

const index = articles
  .map(meta())
  .toArray()
  .map(
    items =>
      new Item('index.html', async () => {
        const articles = await Promise.all(items.map(item => item.content()));
        articles.sort(
          ({ date: a }, { date: b }) => (a < b ? 1 : a > b ? -1 : 0)
        );
        return { articles, baseURL: url.base };
      })
  )
  .map(template('index'))
  .map(stringStream());

const assets = glob(`${dir.public}/**/*.css`)
  .map(stream())
  .map(prefix(`${dir.public}/`));

const all = articles
  .map(template('article'))
  .map(stringStream())
  .concat(index)
  .concat(assets);

const option = {
  cleanup: true,
  destination: dir.output
};

export default () => build(option, all);
