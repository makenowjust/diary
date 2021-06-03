const breaks = require('remark-breaks');

module.exports = ({markdownAST}) => {
  breaks()(markdownAST);
};
