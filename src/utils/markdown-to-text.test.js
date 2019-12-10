import markdown2text from './markdown-to-text';

test('strip Markdown symbols', () => {
  const text = markdown2text('# hello world');
  expect(text).toBe('hello world');
});
