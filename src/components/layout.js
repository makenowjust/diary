import {StaticQuery, graphql} from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';

import Header from './header';
import Footer from './footer';

const Layout = ({children}) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
            quote
            copyright {
              author
              github
              year
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Header title={data.site.siteMetadata.title} quote={data.site.siteMetadata.quote}/>
        {children}
        <Footer
          author={data.site.siteMetadata.copyright.author}
          github={data.site.siteMetadata.copyright.github}
          year={data.site.siteMetadata.copyright.year}
        />
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
