// @flow

import Item from '../item';
import type {Items, Operator} from '../types';

export default <C>(re: RegExp, target: string): Operator<C, C> =>
    item => new Item(item.path.replace(re, target), () => item.content());
