import {Link} from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';

import styles from './header.module.scss';

const Header = ({title, quote}) => (
  <header className={styles.container}>
    <div className={styles.navBar}>
      <h1 className={styles.navBarTitle}>
        <Link to="/">{title}</Link>
      </h1>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link to="/">Top</Link>
          </li>
          <li>
            <Link to="/search/">Search</Link>
          </li>
        </ul>
      </nav>
    </div>
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
