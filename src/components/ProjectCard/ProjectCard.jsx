import React from 'react';
import styles from './ProjectCard.module.css';

export const ProjectCard = ({ title, description, tags = [], author = 'User' }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imagePlaceholder}>
        <span>Зображення проєкту</span>
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.tags}>
          {tags.map((tag, idx) => (
            <span key={idx} className={styles.tag}>{tag}</span>
          ))}
        </div>
        <div className={styles.footer}>
          <span className={styles.author}>Автор: {author}</span>
          <button className={styles.btn}>Переглянути</button>
        </div>
      </div>
    </div>
  );
};