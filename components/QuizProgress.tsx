'use client';

import styles from './QuizProgress.module.css';

interface AnswerRecord {
  isCorrect: boolean;
}

interface Props {
  current: number;
  total: number;
  answers: AnswerRecord[];
}

export default function QuizProgress({ current, total, answers }: Props) {
  const percentage = ((current - 1) / total) * 100;
  const correctCount = answers.filter((a) => a.isCorrect).length;

  return (
    <div className={styles.wrapper}>
      <div className={styles.info}>
        <span className={styles.questionNum}>
          Question <strong>{current}</strong> of <strong>{total}</strong>
        </span>
        <span className={styles.score}>
          ✓ {correctCount}/{answers.length} correct
        </span>
      </div>
      <div className={styles.progressBar}>
        <div
          className={styles.progressFill}
          style={{ width: `${percentage}%` }}
        />
      </div>
      <div className={styles.dots}>
        {Array.from({ length: total }).map((_, i) => {
          let dotClass = styles.dot;
          if (i < answers.length) {
            dotClass += answers[i].isCorrect ? ` ${styles.dotCorrect}` : ` ${styles.dotWrong}`;
          } else if (i === current - 1) {
            dotClass += ` ${styles.dotCurrent}`;
          }
          return <div key={i} className={dotClass} />;
        })}
      </div>
    </div>
  );
}
