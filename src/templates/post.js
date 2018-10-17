import {graphql} from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';
import {Helmet} from 'react-helmet';

import Layout from '../components/layout';

import styles from './post.module.scss';

const PostTemplate = ({data}) => {
  const {title: siteTitle} = data.site.siteMetadata;
  const {
    html,
    fields: {date},
    frontmatter: {title: postTitle},
    excerpt,
  } = data.markdownRemark;

  const title = `${date}: ${postTitle} | ${siteTitle}`;

  return (
    <Layout>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={excerpt} />
      </Helmet>
      <article>
        <h1 className={styles.title}>
          {date}: {postTitle}
        </h1>
        {/* eslint-disable-next-line react/no-danger */}
        <div dangerouslySetInnerHTML={{__html: html}} />
      </article>
    </Layout>
  );
};

PostTemplate.propTypes = {
  data: PropTypes.object.isRequired,
};

export default PostTemplate;

export const query = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }

    markdownRemark(fields: {slug: {eq: $slug}}) {
      html
      fields {
        date
      }
      frontmatter {
        title
      }
      excerpt(truncate: true)
    }
  }
`;
