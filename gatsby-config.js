/* eslint-disable camelcase */

const onGitHubActions = process.env.GITHUB_ACTIONS === 'true';

const queries = [
  {
    query: `
      query {
        allMarkdownRemark(sort: {fields: [fields___slug], order: DESC}) {
          edges {
            node {
              objectID: id
              fields {
                date
                slug
                text
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `,
    transformer: ({data}) =>
      data.allMarkdownRemark.edges.map(({node}) => ({
        objectID: node.objectID,
        path: node.fields.slug,
        body: node.fields.text,
        date: node.fields.date,
        title: node.frontmatter.title,
      })),
    indexName: 'posts',
  },
];

module.exports = {
  siteMetadata: {
    title: '℘ make now just',
    copyright: {
      author: 'TSUYUSATO Kitsune',
      github: 'MakeNowJust',
      year: '2016-2019',
    },
    quote: 'if you wanna break free you better listen to me', // From "Scatman's World" by Scatman John
    siteUrl: 'https://diary.quine.codes/',
    description: "MakeNowJust's diary",
    language: 'ja',
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: 'src/posts',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-katex',
          'gatsby-remark-embedly',
          'gatsby-remark-highlight',
          'gatsby-remark-breaks',
        ],
      },
    },
    'gatsby-plugin-embedly',
    'gatsby-plugin-react-helmet',
    ...(onGitHubActions
      ? [
          {
            resolve: 'gatsby-plugin-algolia-search',
            options: {
              appId: process.env.ALGOLIA_APP_ID,
              apiKey: process.env.ALGOLIA_API_KEY,
              indexName: 'posts',
              queries,
              chunkSize: 10000,
              enablePartialUpdates: true,
              matchFields: ['path', 'body', 'date', 'title'],
            },
          },
        ]
      : []),
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: '℘ make now just',
        short_name: 'diary',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#434944',
        display: 'minimal-ui',
        icon: 'src/assets/icon.png',
      },
    },
    {
      resolve: 'gatsby-plugin-offline',
      options: {
        runtimeCaching: [
          {
            urlPattern: /(\.html|\/)$/,
            handler: 'networkFirst',
          },
          {
            urlPattern: /\.js$|\.css$|static\//,
            handler: `cacheFirst`,
          },
          {
            urlPattern: /^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/,
            handler: `staleWhileRevalidate`,
          },
        ],
      },
    },
    'gatsby-plugin-sitemap',
    'gatsby-plugin-cname',
  ],
};
