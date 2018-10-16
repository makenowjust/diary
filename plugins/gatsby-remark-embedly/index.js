const visit = require('unist-util-visit');
const is = require('unist-util-is');

module.exports = ({markdownAST}) => {
  visit(markdownAST, 'paragraph', node => {
    if (node.children.length !== 1 || !is('link', node.children[0])) {
      return;
    }

    const link = node.children[0];
    // Add `embedly-card` to `className` for embedly.
    link.data = {
      hProperties: {
        className: 'embedly-card',
      },
    };
  });
};
