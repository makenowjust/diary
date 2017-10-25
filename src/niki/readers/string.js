// @flow

import readFile from '../utils/read-file';

import Item from '../item';

export default () =>
  (item: Item<void>): Item<string> => new Item(
    item.path,
    () => readFile(item.path)
  );
