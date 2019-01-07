import {Link} from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';

import Lawn from './lawn';
import styles from './header.module.scss';

const Header = ({title, quote, posts, today}) => (
  <header className={styles.container}>
    <div className={styles.navBar}>
      <h1 className={styles.navBarTitle}>
        <Link to="/">{title}</Link>
      </h1>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link to="/search/" title="検索">
              <FontAwesomeIcon icon={faSearch} />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
    <h1 className={styles.title}>
      <Link to="/">{title}</Link>
    </h1>
    <p className={styles.quote}>{quote}</p>
    <Lawn posts={posts} today={today} />
  </header>
);

Header.propTypes = {
  /** A diary title. */
  title: PropTypes.string.isRequired,
  /** A quote show under title. */
  quote: PropTypes.string.isRequired,
  /** Post summaries. It passes to `Lawn`. */
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
      textSize: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  /** A today `Date` object. It passes to `Lawn`. */
  today: PropTypes.instanceOf(Date).isRequired,
};

export default Header;
