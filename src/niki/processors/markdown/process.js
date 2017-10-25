// @from

import remark from 'remark';

import highlight from 'rehype-highlight';
import inlineLinks from 'remark-inline-links';
import katex from 'rehype-katex';
import mathInline from 'remark-math/inline';
import remark2rehype from 'remark-rehype';
import stringify from 'rehype-stringify';

import embedly from './embedly';

const processor = remark()
  .use(mathInline)
  .use(inlineLinks)
  .use(embedly)
  .use(remark2rehype, {
    allowDangerousHTML: true
  })
  .use(katex)
  .use(highlight)
  .use(stringify, {
    allowDangerousCharacters: true,
    allowDangerousHTML: true
  });

export default (markdown: string): Promise<string> =>
  new Promise((resolve, reject) => {
    processor.process(markdown, (err, file) => {
      if (err) {
        reject(err);
        return;
      }

      resolve(String(file));
    });
  });
