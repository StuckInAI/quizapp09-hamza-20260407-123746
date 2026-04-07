import Link from 'next/link';
import styles from './page.module.css';

export default function HomePage() {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <div className={styles.badge}>🎯 Quiz Challenge</div>
        <h1 className={styles.title}>Test Your Knowledge</h1>
        <p className={styles.subtitle}>
          Challenge yourself with our carefully crafted quizzes across multiple topics.
          Earn points, track your progress, and become a quiz master!
        </p>
        <div className={styles.stats}>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>5</span>
            <span className={styles.statLabel}>Categories</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.statItem}>
            <span className={styles.statNumber}>50+</span>
            <span className={styles.statLabel}>Questions</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.statItem}>
            <span className={styles.statNumber}>3</span>
            <span className={styles.statLabel}>Difficulty Levels</span>
          </div>
        </div>
        <Link href="/quiz" className={styles.startButton}>
          Start Quiz
          <span className={styles.arrow}>→</span>
        </Link>
      </div>

      <div className={styles.features}>
        <div className={styles.featureCard}>
          <div className={styles.featureIcon}>⚡</div>
          <h3>Fast &amp; Responsive</h3>
          <p>Instant feedback on every answer with smooth animations</p>
        </div>
        <div className={styles.featureCard}>
          <div className={styles.featureIcon}>📊</div>
          <h3>Detailed Results</h3>
          <p>Get comprehensive score analysis after each quiz</p>
        </div>
        <div className={styles.featureCard}>
          <div className={styles.featureIcon}>🏆</div>
          <h3>Multiple Topics</h3>
          <p>Science, History, Geography, Tech &amp; General Knowledge</p>
        </div>
      </div>
    </main>
  );
}
