const ghPages = require('gh-pages');
const dir = require('../config/dir');

const GH_TOKEN = process.env.GH_TOKEN;
const COMMIT = process.env.TRAVIS_COMMIT_RANGE || process.env.TRAVIS_COMMIT;

ghPages.publish(dir.output, {
  repo: `https://${GH_TOKEN}@github.com/MakeNowJust/diary`,
  user: {
    name: 'TSUYUSATO Kitsune',
    email: 'make.just.on@gmail.com'
  },
  message: `[ci skip] update gh-pages ${COMMIT}`,
  silent: true
}, () => {
  console.log(`done updating gh-pages ${COMMIT}`)
});
