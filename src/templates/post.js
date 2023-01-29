import {Link, graphql} from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../containers/layout';
import LayoutHead from '../containers/layout-head';

import * as styles from './post.module.scss';

function PostTemplate({data}) {
  const {
    html,
    fields: {date},
    frontmatter: {title: postTitle},
  } = data.markdownRemark;

  const {fields: {date: prevDate, slug: prevSlug} = {}, frontmatter: {title: prevTitle} = {}} =
    data.prev || {};
  const {fields: {date: nextDate, slug: nextSlug} = {}, frontmatter: {title: nextTitle} = {}} =
    data.next || {};

  return (
    <Layout>
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

export function Head({data}) {
  const {title: siteTitle} = data.site.siteMetadata;
  const {
    fields: {date},
    frontmatter: {title: postTitle},
    excerpt,
  } = data.markdownRemark;

  const title = `${date}: ${postTitle} | ${siteTitle}`;

  return (
    <>
      <LayoutHead />
      <title>{title}</title>
      <meta name="description" content={excerpt} />
    </>
  );
}

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

export default PostTemplate;
