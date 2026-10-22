import React from 'react';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { ProjectCard } from '../../components/ProjectCard/ProjectCard';
import styles from './ProjectsPage.module.css';

export const ProjectsPage = () => {
  const projects = [
    { id: 1, title: 'Конфігуратор ПК', description: 'Онлайн-сервіс для створення власної конфігурації комп’ютера.', tags: ['IT', 'ПК'] },
    { id: 2, title: 'Student Hub', description: 'Платформа для студентів з навчальними матеріалами.', tags: ['Освіта', 'Студенти'] },
    { id: 3, title: 'Eco Project', description: 'Проєкт, спрямований на популяризацію екологічного способу життя.', tags: ['Екологія'] },
    { id: 4, title: 'Design Studio', description: 'Простір для створення та обговорення дизайнерських ідей.', tags: ['Дизайн', 'Творчість'] },
    { id: 5, title: 'Startup Idea', description: 'Концепція нового онлайн-сервісу для розвитку бізнес-ідей.', tags: ['Бізнес', 'Startup'] },
    { id: 6, title: 'Game Project', description: 'Ідея створення комп’ютерної гри з можливістю розробки.', tags: ['GameDev', 'IT'] },
  ];

  return (
    <div className={styles.page}>
      <Header variant="white" />

      <main className={styles.main}>
        <div className={styles.topBar}>
          <div>
            <h1 className={styles.title}>Перегляд проєктів</h1>
            <p className={styles.subtitle}>Переглядайте ідеї користувачів та знаходьте цікаві проєкти.</p>
          </div>
          <button className={styles.createBtn}>+ Створити проєкт</button>
        </div>

        {/* Filters */}
        <div className={styles.filterCard}>
          <input type="text" placeholder="Пошук проєктів..." className={styles.searchInput} />
          <select className={styles.select}>
            <option>Всі категорії</option>
          </select>
          <select className={styles.select}>
            <option>Сортування</option>
          </select>
        </div>

        {/* Grid */}
        <div className={styles.grid}>
          {projects.map((p) => (
            <ProjectCard key={p.id} title={p.title} description={p.description} tags={p.tags} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};