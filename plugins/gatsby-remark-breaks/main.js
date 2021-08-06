import breaks from 'remark-breaks';

module.exports = ({markdownAST}) => {
  breaks()(markdownAST);
};
