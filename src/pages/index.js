import {graphql} from 'gatsby';
import React from 'react';

export default ({data}) => <h1>{data.site.siteMetadata.title}</h1>;

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
