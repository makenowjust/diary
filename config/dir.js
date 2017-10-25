const path = require('path');

const root = path.join(__dirname, '..');

const src = path.join(root, 'src');
const templates = path.join(src, 'templates');

const public = path.join(root, 'public');
const output = path.join(root, 'output');
const articles = path.join(root, 'articles');

module.exports = {
  root,
  src,
  templates,
  public,
  output,
  articles,
};
