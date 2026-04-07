'use client';

import type { Question } from '../data/quizData';
import styles from './QuizQuestion.module.css';

interface Props {
  question: Question;
  selectedAnswer: number | null;
  answered: boolean;
  onSelect: (index: number) => void;
}

export default function QuizQuestion({ question, selectedAnswer, answered, onSelect }: Props) {
  function getOptionClass(index: number): string {
    const classes = [styles.option];
    if (!answered) {
      if (selectedAnswer === index) classes.push(styles.selected);
    } else {
      if (index === question.correctAnswer) {
        classes.push(styles.correct);
      } else if (selectedAnswer === index && index !== question.correctAnswer) {
        classes.push(styles.wrong);
      } else {
        classes.push(styles.dimmed);
      }
    }
    return classes.join(' ');
  }

  return (
    <div className={styles.card}>
      {question.category && (
        <div className={styles.qCategory}>{question.category}</div>
      )}
      <h2 className={styles.questionText}>{question.question}</h2>
      <div className={styles.options}>
        {question.options.map((option, index) => (
          <button
            key={index}
            className={getOptionClass(index)}
            onClick={() => onSelect(index)}
            disabled={answered}
          >
            <span className={styles.optionLetter}>
              {String.fromCharCode(65 + index)}
            </span>
            <span className={styles.optionText}>{option}</span>
            {answered && index === question.correctAnswer && (
              <span className={styles.indicator}>✓</span>
            )}
            {answered && selectedAnswer === index && index !== question.correctAnswer && (
              <span className={styles.indicator}>✗</span>
            )}
          </button>
        ))}
      </div>
      {answered && question.explanation && (
        <div className={styles.explanation}>
          <strong>💡 Explanation:</strong> {question.explanation}
        </div>
      )}
    </div>
  );
}
