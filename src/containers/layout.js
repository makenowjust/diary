import {StaticQuery, graphql} from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';
import {Helmet} from 'react-helmet';

import Header from '../components/header';
import Footer from '../components/footer';

import 'modern-normalize';
import 'typeface-nova-mono';
import 'typeface-nova-square';
import 'typeface-raleway';
import 'katex/dist/katex.min.css';

import '../styles/global.scss';

function Layout({children}) {
  return (
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

          allMarkdownRemark(sort: {fields: {slug: DESC}}) {
            edges {
              node {
                fields {
                  date
                  slug
                  textSize
                }
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
          <Header
            title={data.site.siteMetadata.title}
            quote={data.site.siteMetadata.quote}
            posts={data.allMarkdownRemark.edges.map(({node}) => ({
              date: node.fields.date,
              slug: node.fields.slug,
              textSize: node.fields.textSize,
            }))}
            today={new Date()}
          />
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
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
