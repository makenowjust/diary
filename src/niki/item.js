// @flow

export default class Item<C> {
  path: string;
  content: () => Promise<C>;

  constructor(path: string, content: () => Promise<C>): void {
    this.path = path;
    this.content = content;
  }
}
