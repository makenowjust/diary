// @flow

import type { Readable } from 'stream';

import { Observable } from 'rxjs/Observable';
import { rxToStream } from 'rxjs-stream';

import Item from '../item';

export default () => (item: Item<string>): Item<Readable> =>
  new Item(item.path, async () => {
    const content = await item.content();
    return rxToStream(Observable.from([content]));
  });
