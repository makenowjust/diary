import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import {InstantSearch, SearchBox, InfiniteHits, PoweredBy} from 'react-instantsearch-dom';

import HitPost from '../components/hit-post';
import Layout from '../containers/layout';

import styles from './search.module.css';

import '../styles/algolia.scss';

const searchClient = algoliasearch(process.env.ALGOLIA_APP_ID, process.env.ALGOLIA_SEARCH_API_KEY);

const SearchPage = () => (
  <Layout>
    <div className={styles.container}>
      <InstantSearch
        indexName="posts"
        searchClient={searchClient}
      >
        <SearchBox />
        <PoweredBy />
        <InfiniteHits hitComponent={HitPost} translations={{loadMore: 'さらに読み込む'}} />
      </InstantSearch>
    </div>
  </Layout>
);

export default SearchPage;
