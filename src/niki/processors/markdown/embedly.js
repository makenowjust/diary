// @flow

import visit from 'unist-util-visit';
import is from 'unist-util-is';

export default () => (tree: any, file: any) => {
  let injected = false;

  return visit(tree, 'paragraph', node => {
    if (node.children.length === 1 && is('link', node.children[0])) {
      const link = node.children[0];
      link.data = {
        hProperties: {
          className: 'embedly-card',
        },
      };

      if (!injected) {
        injected = true;
        tree.children.unshift({
          type: 'embedlyScript',
          data: {
            hName: 'script',
            hProperties: {
              async: true,
              src: '//cdn.embedly.com/widgets/platform.js'
            }
          }
        });
      }
    }
  });
};
