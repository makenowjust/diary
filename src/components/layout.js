import {StaticQuery, graphql} from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';

const Layout = ({children}) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <header>
          <h1>{data.site.siteMetadata.title}</h1>
        </header>
        {children}
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
