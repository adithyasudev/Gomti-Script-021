//import React from 'react'
import styles from './Footer.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles['navbar-logo']}>
        <img src="https://www.adobe.com/favicon.ico" alt="Behance Logo" />
      </div>
      <ul className={styles['navbar-links']}>
        <li><a href="#">Find Talent</a></li>
        <li><a href="#">Adobe</a></li>
        <li><a href="#">Social</a></li>
        <li><a href="#">Try Behance Pro</a></li>
        <li><a href="#">Find Inspiration</a></li>
        <li><a href="#">Get Hired</a></li>
        <li><a href="#">Sell Creative Assets</a></li>
        <li><a href="#">Sell Freelance Services</a></li>
        <li><a href="#">Post a Job</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;