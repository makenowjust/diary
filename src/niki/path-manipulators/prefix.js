// @flow

import Item from '../item';

export default <C>(prefix: string) =>
  (item: Item<C>): Item<C> => {
    const path = item.path;
    return new Item(
      path.startsWith(prefix) ? path.slice(prefix.length) : path,
      () => item.content()
    );
  };
