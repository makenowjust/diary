import algoliasearch from 'algoliasearch/lite';
import {graphql} from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';
import {InstantSearch, SearchBox, InfiniteHits, PoweredBy} from 'react-instantsearch-dom';

import HitPost from '../components/hit-post';
import Layout from '../containers/layout';
import LayoutHead from '../containers/layout-head';

import * as styles from './search.module.scss';

import '../styles/algolia.scss';

const searchClient = algoliasearch(process.env.ALGOLIA_APP_ID, process.env.ALGOLIA_SEARCH_API_KEY);

function SearchPage() {
  return (
    <Layout>
      <div className={styles.container}>
        <InstantSearch indexName="posts" searchClient={searchClient}>
          <SearchBox />
          <PoweredBy />
          <InfiniteHits hitComponent={HitPost} translations={{loadMore: 'さらに読み込む'}} />
        </InstantSearch>
      </div>
    </Layout>
  );
}

export const Head = ({data}) => {
  return (
    <>
      <LayoutHead />
      <title>Search | {data.site.siteMetadata.title}</title>
    </>
  );
};

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default SearchPage;
