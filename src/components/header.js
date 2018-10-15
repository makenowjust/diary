import {Link} from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';

import styles from './header.module.css';

const Header = ({title, quote}) => (
  <header className={styles.container}>
    <h1 className={styles.title}>
      <Link to="/">{title}</Link>
    </h1>
    <p className={styles.quote}>{quote}</p>
  </header>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
};

export default Header;
