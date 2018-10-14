import React from 'react';
import PropTypes from 'prop-types';

import styles from './footer.module.css';

const Footer = ({author, github, year}) => {
  const [firstName, ...restNames] = author.split(' ');

  return (
    <footer>
      <p className={styles.copyright}>
        © {year} {firstName} "<a href={`https://github.com/${github}`}>{github}</a>" {restNames}
      </p>
    </footer>
  );
};

Footer.propTypes = {
  author: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
};

export default Footer;
