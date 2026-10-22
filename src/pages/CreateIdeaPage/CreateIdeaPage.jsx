import React from 'react';
import { Header } from '../../components/Header/Header';
import styles from './CreateIdeaPage.module.css';

export const CreateIdeaPage = () => {
  return (
    <div className={styles.page}>
      <Header variant="blue" />

      <main className={styles.main}>
        <div className={styles.headerTitle}>
          <h1>Створення нової ідеї</h1>
          <p>Поділіться своєю ідеєю та знайдіть людей, які допоможуть її розвинути.</p>
        </div>

        <div className={styles.formCard}>
          <div className={styles.field}>
            <label>Назва ідеї</label>
            <input type="text" placeholder="Введіть назву вашої ідеї..." />
          </div>

          <div className={styles.row}>
            <div className={styles.field}>
              <label>Категорія</label>
              <select><option>Оберіть категорію</option></select>
            </div>
            <div className={styles.field}>
              <label>Статус ідеї</label>
              <select><option>Чернетка</option></select>
            </div>
          </div>

          <div className={styles.field}>
            <label>Опис ідеї</label>
            <textarea placeholder="Опишіть свою ідею, її мету та основні особливості..." rows={4} />
          </div>

          <div className={styles.field}>
            <label>Зображення або макет</label>
            <div className={styles.uploadArea}>
              <span>Перетягніть зображення сюди або натисніть для вибору файлу</span>
            </div>
          </div>

          <div className={styles.field}>
            <label>Теги</label>
            <input type="text" placeholder="Наприклад: вебсайт, IT, стартап..." />
          </div>

          <div className={styles.actions}>
            <button className={styles.cancelBtn}>Скасувати</button>
            <button className={styles.submitBtn}>Створити ідею</button>
          </div>
        </div>

        {/* Tips box */}
        <div className={styles.tipsCard}>
          <h3>Поради для хорошої ідеї</h3>
          <ul>
            <li>Використовуйте коротку та зрозумілу назву.</li>
            <li>Чітко опишіть проблему, яку вирішує ваша ідея.</li>
            <li>Додайте основні переваги майбутнього проєкту.</li>
            <li>Додайте зображення або макет, якщо він є.</li>
          </ul>
        </div>
      </main>
    </div>
  );
};