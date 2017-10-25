// @flow

import Item from '../item';

export default (path: string) =>
  <C>(item: Item<C>): Item<C> => new Item(
    path,
    () => item.content()
  );
