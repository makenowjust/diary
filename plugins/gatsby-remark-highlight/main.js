import {lowlight} from 'lowlight/lib/all';
import {visit} from 'unist-util-visit';

export default ({markdownAST}) => {
  visit(markdownAST, 'code', node => {
    node.data = node.data || {};
    const {lang, value, data} = node;

    if (!lang) {
      return;
    }

    try {
      data.hChildren = lowlight.highlight(lang, value).children;
    } catch {
      return;
    }

    data.hProperties = data.hProperties || {};
    data.hProperties.className = [
      'hljs',
      ...(data.hProperties.className || []),
      `language-${lang}`,
    ];
  });
};
