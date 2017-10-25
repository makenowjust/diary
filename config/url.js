const base =
  process.env.NODE_ENV === 'production'
    ? 'https://makenowjust.github.io/diary'
    : '';

module.exports = {
  base,
  fromPath: path => `${base}/${path}`
};
