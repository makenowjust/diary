// @flow

export default class Item<C> {
  path: string;
  _reader: () => Promise<C>;

  constructor(path: string, reader: () => Promise<C>): void {
    this.path = path;
    this._reader = reader;
  }

  content(): Promise<C> {
    return this._reader();
  }
}
