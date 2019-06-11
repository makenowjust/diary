const visit = require('unist-util-visit');
const is = require('unist-util-is');

module.exports = ({markdownAST}) => {
  visit(markdownAST, 'paragraph', node => {
    if (node.children.length !== 1 || !is(node.children[0], 'link')) {
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
