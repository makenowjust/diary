// @flow

import fs from 'fs';
import path from 'path';
import type { Readable } from 'stream';

import copyStream from './utils/copy-stream';
import mkdirp from './utils/mkdirp';
import rimraf from './utils/rimraf';

import type Item from './item';
import type { Items } from './types';

export default async (
  option: Option,
  items: Items<Readable>
): Promise<void> => {
  if (option.cleanup) {
    await rimraf(option.destination);
  }

  await items
    .flatMap(async item => {
      const outputPath = path.join(option.destination, item.path);
      const outputStream = await item.content();

      await mkdirp(path.dirname(outputPath));
      await copyStream(outputPath, outputStream);
    })
    .toPromise();
};

export interface Option {
  cleanup: boolean;
  destination: string;
}
