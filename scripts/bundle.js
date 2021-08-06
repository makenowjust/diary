const esbuild = require('esbuild');

const main = async () => {
  const files = [
    {
      input: 'plugins/gatsby-remark-breaks/main.js',
      output: 'plugins/gatsby-remark-breaks/index.js',
    },
    {
      input: 'plugins/gatsby-remark-embedly/main.js',
      output: 'plugins/gatsby-remark-embedly/index.js',
    },
    {
      input: 'plugins/gatsby-remark-highlight/main.js',
      output: 'plugins/gatsby-remark-highlight/index.js',
    },
    {input: 'src/utils/markdown-to-text.mjs', output: 'src/utils/markdown-to-text.js'},
  ];

  for (const {input, output} of files) {
    // eslint-disable-next-line no-await-in-loop
    await esbuild.build({
      entryPoints: [input],
      outfile: output,
      platform: 'node',
      bundle: true,
    });
  }
};

main().catch(error => {
  console.error(error);
  // eslint-disable-next-line unicorn/no-process-exit
  process.exit(1);
});
