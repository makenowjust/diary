// @flow

import rimraf from 'rimraf';

export default (path: string): Promise<void> =>
  new Promise((resolve, reject) => {
    rimraf(path, err => {
      if (err) {
        reject(err);
        return;
      }
      resolve(undefined);
    });
  });
