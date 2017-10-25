// @flow

import fs from 'fs';
import path from 'path';
import type {Readable} from 'stream';

import {Observable} from 'rxjs/Observable';
import {rxToStream} from 'rxjs-stream';

import copyStream from './utils/copy-stream';
import mkdirp from './utils/mkdirp';

import type Item from './item';
import type {Items, Output} from './types';

const outputToStream = (output: Output): Readable => {
  if (typeof output === 'string') {
    return rxToStream(Observable.from([output]));
  } else {
    return output;
  }
};

export default (option: Option, items: Items<Output>): Promise<void> =>
  items
    .flatMap(async item => {
      const outputPath = path.join(option.destination, item.path);
      const outputStream = outputToStream(await item.content());

      await mkdirp(path.dirname(outputPath));
      await copyStream(outputPath, outputStream);
    })
    .toPromise();

export interface Option {
  destination: string;
}
