import React from 'react';
import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <span className={styles.logo}>IdeaGrow</span>
        <span className={styles.copy}>Платформа для спільного розвитку ідей © 2026</span>
      </div>
    </footer>
  );
};