// @flow

import type {Observable} from 'rxjs/Observable';
import type Item from './item';

export type Items<C> = Observable<Item<C>>;
