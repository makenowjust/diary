const remark = require('remark');
const strip = require('strip-markdown');

const processor = remark().use(strip);

module.exports = markdown => {
  const file = processor.processSync(markdown);
  return file.contents;
};
