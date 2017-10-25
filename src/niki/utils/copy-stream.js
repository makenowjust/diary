// @flow

import fs from 'fs';
import type { Readable } from 'stream';

import pEvent from 'p-event';

export default (path: string, readable: Readable): Promise<void> =>
  Promise.resolve().then(() => {
    const writable = fs.createWriteStream(path);
    readable.pipe(writable);
    return pEvent(writable, 'finish');
  });
