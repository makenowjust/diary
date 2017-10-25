// @flow

import Item from '../item';

export default <C>(path: string) =>
  (item: Item<C>): Item<C> => new Item(
    path,
    () => item.content()
  );
