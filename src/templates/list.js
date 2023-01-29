import {graphql, Link} from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';

import Paginator from '../components/paginator';
import Layout from '../containers/layout';
import LayoutHead from '../containers/layout-head';

import * as styles from './list.module.scss';

function ListTemplate({data, pageContext}) {
  const posts = data.allMarkdownRemark.edges.map(({node}) => (
    <li key={node.id} className={styles.post}>
      <article>
        <h2>
          <Link to={node.fields.slug}>
            <time>{node.fields.date}</time>: {node.frontmatter.title}
          </Link>
        </h2>
        <p>{node.excerpt}</p>
      </article>
    </li>
  ));

  const {currentListPage: current, listPages} = pageContext;
  const prev = current === 1 ? null : current === 2 ? `/` : `/list/${current - 1}/`;
  const next = current === listPages ? null : `/list/${current + 1}/`;

  return (
    <Layout>
      <div>
        <h1>{`Post List [${current}/${listPages}]:`}</h1>
        <Paginator prev={prev} next={next} />
        <ul className={styles.posts}>{posts}</ul>
        <Paginator prev={prev} next={next} />
      </div>
    </Layout>
  );
}

ListTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.shape({
    currentListPage: PropTypes.number,
    listPages: PropTypes.number,
    previous: PropTypes.string,
    next: PropTypes.string,
  }).isRequired,
};

export function Head({data, pageContext}) {
  const {currentListPage: current, listPages} = pageContext;
  const prev = current === 1 ? null : current === 2 ? `/` : `/list/${current - 1}/`;
  const next = current === listPages ? null : `/list/${current + 1}/`;

  const {title: siteTitle, description} = data.site.siteMetadata;
  const title = current === 1 ? siteTitle : `List ${current} | ${siteTitle}`;

  return (
    <>
      <LayoutHead />
      <title>{title}</title>
      <meta name="description" content={description} />
      {prev && <link rel="prev" href={prev} />}
      {next && <link rel="next" href={next} />}
    </>
  );
}

export const query = graphql`
  query ($limit: Int!, $skip: Int!) {
    site {
      siteMetadata {
        title
        description
      }
    }

    allMarkdownRemark(sort: {fields: {slug: DESC}}, limit: $limit, skip: $skip) {
      edges {
        node {
          id
          frontmatter {
            title
          }
          fields {
            slug
            date
          }
          excerpt(truncate: true)
        }
      }
    }
  }
`;

export default ListTemplate;
