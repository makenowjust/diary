import {remark} from 'remark';
import strip from 'strip-markdown';

const processor = remark().use(strip);

export default markdown => {
  const file = processor.processSync(markdown);
  return String(file).trim();
};
