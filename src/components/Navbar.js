import React, { useState } from 'react';
import { Link } from 'react-scroll';

import { ThemeToggleButton } from '.';
import styles from '../styles/navbar.module.css';
import { reactScrollOptions } from '../constant';

const navOptions = [
  {
    name: 'About Me',
  },
  {
    name: 'Work',
  },
  {
    name: 'Projects',
  },
  {
    name: 'Contact',
  },
];
function Navbar() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <div className={styles.logoShort}>K</div>
        <span className={styles.logoText}>
          Karanjot <span>Singh</span>
        </span>
      </div>

      <div className={styles.navLinksGroup}>
        {navOptions.map((option, index) => (
          <Link
            className={selectedIndex === index ? styles.active : ''}
            onClick={() => setSelectedIndex(index)}
            key={`nav-link-${index}`}
            {...reactScrollOptions}
            to={option.name.split(' ').join('').toLowerCase()}
          >
            {option.name}
          </Link>
        ))}
      </div>
      <ThemeToggleButton />
    </div>
  );
}

export default Navbar;
