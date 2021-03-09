import React from 'react';
import PropTypes from 'prop-types';

import * as styles from './footer.module.scss';

const Footer = ({author, github, year}) => {
  const [firstName, ...restNames] = author.split(' ');

  return (
    <footer>
      <p className={styles.copyright}>
        © {year} {firstName} "<a href={`https://github.com/${github}`}>{github}</a>"{' '}
        {restNames.join(' ')}
      </p>
    </footer>
  );
};

Footer.propTypes = {
  /** A diary author. */
  author: PropTypes.string.isRequired,
  /** A diary author's GitHub user name. */
  github: PropTypes.string.isRequired,
  /** A copyright year. */
  year: PropTypes.string.isRequired,
};

export default Footer;
