const build = require('../src/build')

build()
  .catch(err => {
    console.log(err.stack || err)
  })
