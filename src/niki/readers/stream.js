// @flow

import fs from 'fs';
import type { Readable } from 'stream';

import Item from '../item';

export default () => (item: Item<void>): Item<Readable> =>
  new Item(item.path, async () => fs.createReadStream(item.path));
