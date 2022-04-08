import {remark} from 'remark';

import embedly from './main';

test('add embedly-card class to link which is only child of paragraph', () => {
  const context = {markdownAST: remark.parse('<http://example.com/>')};
  embedly(context);
  expect(context.markdownAST).toMatchSnapshot('link');
});

test('dont add embedly-card class to non link which is only child of paragraph', () => {
  const context = {markdownAST: remark.parse('non link')};
  embedly(context);
  expect(context.markdownAST).toMatchSnapshot('non-link');
});
