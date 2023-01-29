import {StaticQuery, graphql} from 'gatsby';
import React from 'react';

function LayoutHead() {
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              language
            }
          }
        }
      `}
      render={data => <html lang={data.site.siteMetadata.language} />}
    />
  );
}

export default LayoutHead;
