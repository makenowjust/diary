const path = require('path');

const {createFilePath} = require(`gatsby-source-filesystem`);

const markdown2text = require('./src/utils/markdown-to-text');

const POSTS_PER_LIST_PAGE = 20;

exports.onCreateNode = ({node, getNode, actions}) => {
  const {createNodeField} = actions;
  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({node, getNode, basePath: path.join(__dirname, 'src/posts')});
    createNodeField({
      node,
      name: 'slug',
      value: `/post${slug}`,
    });

    // `slug` is a string value like `'/2018-10-15-xxx/'`.
    // And it extracts a part `'2018-10-15'` as the above example.
    const date = slug.slice(1, 11);
    if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
      throw new Error(`unexpected post filename: ${path.basename(node.fileAbsolutePath)}`);
    }

    createNodeField({
      node,
      name: 'date',
      value: date,
    });

    const text = markdown2text(node.rawMarkdownBody);
    createNodeField({
      node,
      name: 'text',
      value: text,
    });
    createNodeField({
      node,
      name: 'textSize',
      value: text.length,
    });
  }
};

exports.createPages = async ({graphql, actions}) => {
  const {createPage} = actions;

  const {data} = await graphql(`
    query {
      allMarkdownRemark(sort: {fields: [fields___slug], order: DESC}) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  const posts = data.allMarkdownRemark.edges.map(({node}) => ({slug: node.fields.slug}));

  // Create post pages.
  for (const [i, {slug}] of posts.entries()) {
    const prevSlug = i === 0 ? null : posts[i - 1].slug;
    const nextSlug = i === posts.length - 1 ? null : posts[i + 1].slug;
    createPage({
      path: slug,
      component: path.join(__dirname, 'src/templates/post.js'),
      context: {
        slug,
        prevSlug,
        nextSlug,
      },
    });
  }

  // Create list pages.
  const listPages = Math.ceil(posts.length / POSTS_PER_LIST_PAGE);
  for (let i = 0; i < listPages; i++) {
    createPage({
      path: i === 0 ? '/' : `/list/${i + 1}/`,
      component: path.join(__dirname, 'src/templates/list.js'),
      context: {
        limit: POSTS_PER_LIST_PAGE,
        skip: i * POSTS_PER_LIST_PAGE,
        currentListPage: i + 1,
        listPages,
      },
    });
  }
};

exports.onCreateWebpackConfig = ({actions, plugins}) => {
  // Define environment variable for Algolia searching.
  actions.setWebpackConfig({
    plugins: [
      plugins.define({
        'process.env': {
          ALGOLIA_APP_ID: JSON.stringify(process.env.ALGOLIA_APP_ID),
          ALGOLIA_SEARCH_API_KEY: JSON.stringify(process.env.ALGOLIA_SEARCH_API_KEY),
        },
      }),
    ],
  });
};
