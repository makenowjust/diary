const low = require('lowlight');
const visit = require('unist-util-visit');

module.exports = ({markdownAST}) => {
  visit(markdownAST, 'code', node => {
    node.data = node.data || {};
    const {lang, value, data} = node;

    if (!lang) {
      return;
    }

    try {
      data.hChildren = low.highlight(lang, value).value;
    } catch (error) {
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
