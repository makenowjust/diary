// @flow

import Item from '../item';

export default (re: RegExp, target: string) =>
  <C>(item: Item<C>): Item<C> => new Item(
    item.path.replace(re, target),
    () => item.content()
  );
