import React from 'react';
import { Header } from '../../components/Header/Header';
import styles from './LoginPage.module.css';

export const LoginPage = () => {
  return (
    <div className={styles.page}>
      <Header variant="blue" />

      <main className={styles.main}>
        <div className={styles.card}>
          <h1 className={styles.title}>Вхід</h1>
          <p className={styles.subtitle}>Увійдіть до свого облікового запису IdeaGrow</p>

          <form className={styles.form}>
            <div className={styles.field}>
              <label>Електронна пошта</label>
              <input type="email" placeholder="Введіть електронну пошту" />
            </div>

            <div className={styles.field}>
              <label>Пароль</label>
              <input type="password" placeholder="Введіть пароль" />
            </div>

            <div className={styles.row}>
              <label className={styles.checkboxLabel}>
                <input type="checkbox" /> Запам'ятати мене
              </label>
              <a href="#" className={styles.forgotLink}>Забули пароль?</a>
            </div>

            <button type="button" className={styles.submitBtn}>Увійти</button>
          </form>

          <div className={styles.divider}><span>або</span></div>

          <button className={styles.googleBtn}>Продовжити через Google</button>

          <p className={styles.bottomText}>
            Ще не маєте акаунта? <a href="#">Зареєструватися</a>
          </p>
        </div>
      </main>
    </div>
  );
};