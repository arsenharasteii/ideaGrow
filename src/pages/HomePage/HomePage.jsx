import React from 'react';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import styles from './HomePage.module.css';

export const HomePage = () => {
  return (
    <div className={styles.page}>
      <Header variant="white" />
      
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.heroLeft}>
            <h1 className={styles.heroTitle}>
              Розвивай свої <span className={styles.highlight}>ідеї</span> разом
            </h1>
            <p className={styles.heroText}>
              IdeaGrow — це платформа для створення, розвитку та обговорення власних ідей і проєктів.
            </p>
            <button className={styles.primaryBtn}>Переглянути проєкти</button>
          </div>
          
          <div className={styles.widget}>
            <h3 className={styles.widgetTitle}>Популярні ідеї</h3>
            <ul className={styles.list}>
              <li>💡 Онлайн-магазин</li>
              <li>💻 Конфігуратор ПК</li>
              <li>🚀 Стартап для студентів</li>
              <li>🎨 Дизайн-платформа</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Можливості IdeaGrow</h2>
        <div className={styles.grid3}>
          <div className={styles.featureCard}>
            <h3>Створення ідей</h3>
            <p>Створюйте власні ідеї та додавайте детальний опис майбутнього проєкту.</p>
          </div>
          <div className={styles.featureCard}>
            <h3>Обговорення</h3>
            <p>Обговорюйте проєкти з іншими користувачами, отримуйте пропозиції.</p>
          </div>
          <div className={styles.featureCard}>
            <h3>Розвиток проєктів</h3>
            <p>Перетворюйте початкову ідею на готовий проєкт за допомогою спільної роботи.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <h2>Приєднуйся до IdeaGrow</h2>
        <p>Створюй власні ідеї, знаходь однодумців та розвивай проєкти.</p>
        <button className={styles.primaryBtn}>Створити ідею</button>
      </section>

      <Footer />
    </div>
  );
};