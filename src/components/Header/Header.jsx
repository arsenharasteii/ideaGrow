import React from 'react';
import styles from './Header.module.css';

export const Header = ({ variant = 'white' }) => {
  const isBlue = variant === 'blue';

  return (
    <header className={`${styles.header} ${isBlue ? styles.blueHeader : styles.whiteHeader}`}>
      <div className={styles.container}>
        <div className={styles.logo}>IdeaGrow</div>
        <nav className={styles.nav}>
          <a href="#" className={styles.link}>Головна</a>
          <a href="#" className={styles.link}>Проєкти</a>
          <a href="#" className={styles.link}>Створити ідею</a>
          <a href="#" className={styles.link}>Мій профіль</a>
        </nav>
        {!isBlue && <button className={styles.accountBtn}>Акаунт</button>}
      </div>
    </header>
  );
};