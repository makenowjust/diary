// @flow

import Item from '../item';

export default () => <M>(item: Item<Meta<M>>): Item<M> =>
  new Item(item.path, async () => {
    const { meta } = await item.content();
    return meta;
  });

interface Meta<M> {
  meta: M;
}
