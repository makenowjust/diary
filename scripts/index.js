const main = require('../lib').default;

main()
  .then(
    () => undefined,
    err => console.log(err.stack)
  );
