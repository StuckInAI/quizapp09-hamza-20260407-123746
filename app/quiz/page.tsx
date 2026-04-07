import Link from 'next/link';
import styles from './quiz.module.css';
import { categories } from '../../data/quizData';

export default function QuizCategoryPage() {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <Link href="/" className={styles.backBtn}>← Back</Link>
        <h1 className={styles.title}>Choose a Category</h1>
        <p className={styles.subtitle}>Select a topic to start your quiz challenge</p>
      </div>
      <div className={styles.grid}>
        {categories.map((cat) => (
          <Link key={cat.id} href={`/quiz/${cat.id}`} className={styles.card}>
            <div className={styles.cardIcon}>{cat.icon}</div>
            <div className={styles.cardContent}>
              <h2 className={styles.cardTitle}>{cat.name}</h2>
              <p className={styles.cardDesc}>{cat.description}</p>
              <div className={styles.cardMeta}>
                <span className={styles.badge}>{cat.questionCount} Questions</span>
                <span className={`${styles.badge} ${styles[cat.difficulty as keyof typeof styles]}`}>
                  {cat.difficulty}
                </span>
              </div>
            </div>
            <span className={styles.arrow}>→</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
