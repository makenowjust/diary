import React from 'react';
import {InstantSearch, SearchBox, InfiniteHits, PoweredBy} from 'react-instantsearch-dom';

import Layout from '../components/layout';
import HitPost from '../components/hit-post';

import styles from './search.module.css';

import '../styles/algolia.scss';

const SearchPage = () => (
  <Layout>
    <div className={styles.container}>
      <InstantSearch
        appId={process.env.ALGOLIA_APP_ID}
        apiKey={process.env.ALGOLIA_SEARCH_API_KEY}
        indexName="posts"
      >
        <SearchBox />
        <PoweredBy />
        <InfiniteHits hitComponent={HitPost} translations={{loadMore: 'さらに読み込む'}} />
      </InstantSearch>
    </div>
  </Layout>
);

export default SearchPage;
