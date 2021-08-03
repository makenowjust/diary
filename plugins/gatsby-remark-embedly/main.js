import {visit} from 'unist-util-visit';
import {is} from 'unist-util-is';

export default ({markdownAST}) => {
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
