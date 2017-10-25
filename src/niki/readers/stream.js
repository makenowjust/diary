// @flow

import fs from 'fs';
import type {Readable} from 'stream';

import Item from '../item';
import type {Items, Operator} from '../types';

export default (): Operator<void, Readable> =>
  item => new Item(
    item.path,
    async () => fs.createReadStream(item.path)
  );
