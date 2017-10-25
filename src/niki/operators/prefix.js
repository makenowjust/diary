// @flow

import Item from '../item';
import type {Items, Operator} from '../types';

export default <C>(prefix: string): Operator<C, C> =>
    item => {
      const path = item.path;
      return new Item(
        path.startsWith(prefix) ? path.slice(prefix.length) : path,
        () => item.content()
      );
    }
