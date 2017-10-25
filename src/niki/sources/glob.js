// @flow

import glob from 'glob';
import { Observable } from 'rxjs/Observable';

import Item from '../item';
import type { Items } from '../types';

export default (pattern: string): Items<void> => {
  return Observable.create(observer => {
    glob(pattern, {}, (err, paths) => {
      if (err) {
        observer.error(err);
        return;
      }

      paths.forEach(path => {
        observer.next(new Item(path, async () => undefined));
      });
      observer.complete();
    });
  });
};
