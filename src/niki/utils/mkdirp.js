// @flow

import mkdirp from 'mkdirp';

export default (path: string): Promise<void> =>
  new Promise((resolve, reject) =>
    mkdirp(path, err => {
      if (err) {
        reject(err);
        return;
      }
      resolve(undefined);
    })
  );
