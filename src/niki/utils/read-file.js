// @flow

import fs from 'fs';
import util from 'util';

const readFileSync = util.promisify(fs.readFile);

export default (path: string): Promise<string> => readFileSync(path, 'utf-8');
