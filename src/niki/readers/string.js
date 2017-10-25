// @flow

import readFile from '../utils/read-file';

import Item from '../item';
import type {Items, Operator} from '../types';

export default (): Operator<void, string> =>
  item => new Item(
    item.path,
    () => readFile(item.path)
  );
