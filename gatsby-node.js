const path = require('path');

const {createFilePath} = require(`gatsby-source-filesystem`);

const POSTS_PER_LIST_PAGE = 30;

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
    const date = slug.substr(1, 10);
    if (!/\d{4}-\d{2}-\d{2}/.test(date)) {
      throw new Error(`unexpected post filename: ${path.basename(node.fileAbsolutePath)}`);
    }
    createNodeField({
      node,
      name: 'date',
      value: date,
    });
  }
};

exports.createPages = async ({graphql, actions}) => {
  const {createPage} = actions;

  const {data} = await graphql(`
    query {
      allMarkdownRemark {
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
  for (const {slug} of posts) {
    createPage({
      path: slug,
      component: path.join(__dirname, 'src/templates/post.js'),
      context: {slug},
    });
  }

  // Create list pages.
  const listPages = Math.ceil(posts.length / POSTS_PER_LIST_PAGE);
  for (let i = 0; i < listPages; i++) {
    createPage({
      path: i === 0 ? '/' : `/list/${i}/`,
      component: path.join(__dirname, 'src/templates/list.js'),
      context: {
        limit: POSTS_PER_LIST_PAGE,
        skip: i * POSTS_PER_LIST_PAGE,
      },
    });
  }
};
