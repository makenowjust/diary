// @flow

import type {Readable} from 'stream';

import type {Observable} from 'rxjs/Observable';
import type Item from './item';

export type Items<C> = Observable<Item<C>>;

export type Output = string | Readable;
