// @flow

import path from 'path';

import pug from 'pug';

import Item from '../../item';

import dir from '../../../../config/dir';

const cache: Map<string, (locals: any) => string> = new Map();
const template = (name: string): ((locals: any) => string) => {
  const cached = cache.get(name);
  if (cached) {
    return cached;
  }

  const renderer = pug.compileFile(
    path.join(dir.templates, `${name}.pug`),
    {basedir: dir.templates}
  );
  cache.set(name, renderer);
  return renderer;
};

export default (name: string) =>
  (item: Item<any>): Item<string> => new Item(
    item.path,
    async () => {
      const renderer = template(name);
      const locals = await item.content();
      return renderer(locals);
    }
  );
