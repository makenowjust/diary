import {Link} from 'gatsby';
import React from 'react';
import {Highlight, Snippet} from 'react-instantsearch-dom';
import PropTypes from 'prop-types';

const HitPost = ({hit}) => (
  <article>
    <h2>
      <Link to={hit.path}>
        <Highlight attribute="date" hit={hit} />: <Highlight attribute="title" hit={hit} />
      </Link>
    </h2>
    <p>
      <Snippet attribute="body" hit={hit} />
    </p>
  </article>
);

HitPost.propTypes = {
  hit: PropTypes.object.isRequired,
};

export default HitPost;
