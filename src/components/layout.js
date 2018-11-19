import {StaticQuery, graphql} from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';
import {Helmet} from 'react-helmet';

import Header from './header';
import Footer from './footer';

import 'modern-normalize';
import 'typeface-nova-mono';
import 'typeface-nova-square';
import 'typeface-raleway';
import 'katex/dist/katex.min.css';

import '../styles/global.scss';

const Layout = ({children}) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
            quote
            language
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
        <Helmet>
          <html lang={data.site.siteMetadata.language} />
        </Helmet>
        <Header title={data.site.siteMetadata.title} quote={data.site.siteMetadata.quote} />
        <main>{children}</main>
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
