'use client';

import styles from './QuizResults.module.css';
import type { Category, Question } from '../data/quizData';

interface AnswerRecord {
  question: Question;
  selectedAnswer: number;
  isCorrect: boolean;
  timeSpent: number;
}

interface Props {
  answers: AnswerRecord[];
  category: Category;
  onRestart: () => void;
  onBack: () => void;
}

export default function QuizResults({ answers, category, onRestart, onBack }: Props) {
  const total = answers.length;
  const correct = answers.filter((a) => a.isCorrect).length;
  const percentage = total > 0 ? Math.round((correct / total) * 100) : 0;
  const avgTime = total > 0 ? Math.round(answers.reduce((sum, a) => sum + a.timeSpent, 0) / total) : 0;

  function getRating(): { label: string; emoji: string; color: string } {
    if (percentage >= 90) return { label: 'Outstanding!', emoji: '🏆', color: '#f59e0b' };
    if (percentage >= 70) return { label: 'Great Job!', emoji: '🎉', color: '#22c55e' };
    if (percentage >= 50) return { label: 'Good Effort!', emoji: '👍', color: '#06b6d4' };
    return { label: 'Keep Practicing!', emoji: '💪', color: '#8b5cf6' };
  }

  const rating = getRating();

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.scoreCard}>
          <div className={styles.emoji}>{rating.emoji}</div>
          <h1 className={styles.ratingLabel} style={{ color: rating.color }}>
            {rating.label}
          </h1>
          <p className={styles.categoryName}>{category.icon} {category.name}</p>
          <div className={styles.scoreCircle}>
            <svg viewBox="0 0 120 120" className={styles.circleSvg}>
              <circle cx="60" cy="60" r="52" fill="none" stroke="#e2e8f0" strokeWidth="10" />
              <circle
                cx="60"
                cy="60"
                r="52"
                fill="none"
                stroke={rating.color}
                strokeWidth="10"
                strokeDasharray={`${2 * Math.PI * 52}`}
                strokeDashoffset={`${2 * Math.PI * 52 * (1 - percentage / 100)}`}
                strokeLinecap="round"
                transform="rotate(-90 60 60)"
                style={{ transition: 'stroke-dashoffset 1s ease' }}
              />
            </svg>
            <div className={styles.scoreText}>
              <span className={styles.scorePercent}>{percentage}%</span>
              <span className={styles.scoreRatio}>{correct}/{total}</span>
            </div>
          </div>
          <div className={styles.statsRow}>
            <div className={styles.statItem}>
              <span className={styles.statVal} style={{ color: '#22c55e' }}>{correct}</span>
              <span className={styles.statLbl}>Correct</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statVal} style={{ color: '#ef4444' }}>{total - correct}</span>
              <span className={styles.statLbl}>Wrong</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statVal} style={{ color: '#06b6d4' }}>{avgTime}s</span>
              <span className={styles.statLbl}>Avg Time</span>
            </div>
          </div>
          <div className={styles.actions}>
            <button onClick={onRestart} className={styles.restartBtn}>🔄 Try Again</button>
            <button onClick={onBack} className={styles.backBtn}>← All Categories</button>
          </div>
        </div>

        <div className={styles.reviewSection}>
          <h2 className={styles.reviewTitle}>Answer Review</h2>
          <div className={styles.reviewList}>
            {answers.map((answer, i) => (
              <div
                key={i}
                className={`${styles.reviewItem} ${answer.isCorrect ? styles.reviewCorrect : styles.reviewWrong}`}
              >
                <div className={styles.reviewHeader}>
                  <span className={styles.reviewNum}>Q{i + 1}</span>
                  <span className={styles.reviewQuestion}>{answer.question.question}</span>
                  <span className={styles.reviewIcon}>{answer.isCorrect ? '✓' : '✗'}</span>
                </div>
                <div className={styles.reviewAnswers}>
                  {answer.selectedAnswer !== -1 && (
                    <div className={styles.reviewYour}>
                      <strong>Your answer:</strong> {answer.question.options[answer.selectedAnswer]}
                    </div>
                  )}
                  {!answer.isCorrect && (
                    <div className={styles.reviewCorrectAns}>
                      <strong>Correct answer:</strong> {answer.question.options[answer.question.correctAnswer]}
                    </div>
                  )}
                  {answer.selectedAnswer === -1 && (
                    <div className={styles.reviewYour}>⏱ Time ran out</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
