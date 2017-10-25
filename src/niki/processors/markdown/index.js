// @from

import grayMatter from 'gray-matter';

import process from './process';
import Item from '../../item';

export default () => (item: Item<string>): Item<Result> =>
  new Item(item.path, async () => {
    const string = await item.content();
    const { content, data } = grayMatter(string);
    const body = await process(content);
    return {
      meta: data,
      body
    };
  });

interface Result {
  meta: any;
  body: string;
}
