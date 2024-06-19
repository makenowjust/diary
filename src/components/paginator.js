import {Link} from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';

import * as styles from './paginator.module.scss';

function Paginator({prev = null, next = null}) {
  return (
    <div className={styles.paginator}>
      {prev && (
        <Link to={prev} className={styles.prevLink}>
          prev
        </Link>
      )}
      {prev && next && '|'}
      {next && (
        <Link to={next} className={styles.nextLink}>
          next
        </Link>
      )}
    </div>
  );
}

Paginator.propTypes = {
  /** Previous URL. */
  prev: PropTypes.string,
  /** Next URL. */
  next: PropTypes.string,
};

export default Paginator;
