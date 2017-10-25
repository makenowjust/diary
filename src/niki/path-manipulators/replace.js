// @flow

import Item from '../item';

export default <C>(re: RegExp, target: string) =>
  (item: Item<C>): Item<C> => new Item(
    item.path.replace(re, target),
    () => item.content()
  );
