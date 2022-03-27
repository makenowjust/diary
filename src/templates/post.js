import {Link, graphql} from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';
import {Helmet} from 'react-helmet';

import Layout from '../containers/layout';

import * as styles from './post.module.scss';

function PostTemplate({data}) {
  const {title: siteTitle} = data.site.siteMetadata;
  const {
    html,
    fields: {date},
    frontmatter: {title: postTitle},
    excerpt,
  } = data.markdownRemark;

  const title = `${date}: ${postTitle} | ${siteTitle}`;

  const {fields: {date: prevDate, slug: prevSlug} = {}, frontmatter: {title: prevTitle} = {}} =
    data.prev || {};
  const {fields: {date: nextDate, slug: nextSlug} = {}, frontmatter: {title: nextTitle} = {}} =
    data.next || {};

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
      <hr />
      <section className={styles.aroundLinks}>
        {data.prev && (
          <p className={styles.prevLink}>
            <Link to={prevSlug}>
              {prevDate}: {prevTitle}
            </Link>
          </p>
        )}
        <p className={styles.currentTitle}>
          {date}: {postTitle}
        </p>
        {data.next && (
          <p className={styles.nextLink}>
            <Link to={nextSlug}>
              {nextDate}: {nextTitle}
            </Link>
          </p>
        )}
      </section>
    </Layout>
  );
}

PostTemplate.propTypes = {
  data: PropTypes.object.isRequired,
};

export default PostTemplate;

export const query = graphql`
  query ($slug: String!, $prevSlug: String, $nextSlug: String) {
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

    prev: markdownRemark(fields: {slug: {eq: $prevSlug}}) {
      fields {
        date
        slug
      }
      frontmatter {
        title
      }
    }

    next: markdownRemark(fields: {slug: {eq: $nextSlug}}) {
      fields {
        date
        slug
      }
      frontmatter {
        title
      }
    }
  }
`;
