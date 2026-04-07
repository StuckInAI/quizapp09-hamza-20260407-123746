'use client';

import { useParams, useRouter } from 'next/navigation';
import { useState, useEffect, useCallback } from 'react';
import { getQuestionsByCategory, categories } from '../../../data/quizData';
import type { Question } from '../../../data/quizData';
import QuizQuestion from '../../../components/QuizQuestion';
import QuizProgress from '../../../components/QuizProgress';
import QuizResults from '../../../components/QuizResults';
import styles from './category.module.css';

type AnswerRecord = {
  question: Question;
  selectedAnswer: number;
  isCorrect: boolean;
  timeSpent: number;
};

export default function CategoryQuizPage() {
  const params = useParams();
  const router = useRouter();
  const categoryId = params.categoryId as string;

  const questions = getQuestionsByCategory(categoryId);
  const category = categories.find((c) => c.id === categoryId);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [answers, setAnswers] = useState<AnswerRecord[]>([]);
  const [quizFinished, setQuizFinished] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [timerActive, setTimerActive] = useState(true);
  const [startTime, setStartTime] = useState(Date.now());

  const handleTimeUp = useCallback(() => {
    if (!answered) {
      setAnswered(true);
      setTimerActive(false);
      const currentQuestion = questions[currentIndex];
      const timeSpent = 30;
      setAnswers((prev) => [
        ...prev,
        {
          question: currentQuestion,
          selectedAnswer: -1,
          isCorrect: false,
          timeSpent
        }
      ]);
    }
  }, [answered, questions, currentIndex]);

  useEffect(() => {
    if (!timerActive || answered) return;
    if (timeLeft <= 0) {
      handleTimeUp();
      return;
    }
    const timer = setTimeout(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft, timerActive, answered, handleTimeUp]);

  useEffect(() => {
    setTimeLeft(30);
    setTimerActive(true);
    setStartTime(Date.now());
  }, [currentIndex]);

  if (!category || questions.length === 0) {
    return (
      <div className={styles.error}>
        <h2>Category not found</h2>
        <button onClick={() => router.push('/quiz')} className={styles.backBtn}>
          Back to Categories
        </button>
      </div>
    );
  }

  const currentQuestion = questions[currentIndex];
  const totalQuestions = questions.length;

  function handleSelectAnswer(index: number) {
    if (answered) return;
    setSelectedAnswer(index);
    setAnswered(true);
    setTimerActive(false);
    const timeSpent = Math.round((Date.now() - startTime) / 1000);
    const isCorrect = index === currentQuestion.correctAnswer;
    setAnswers((prev) => [
      ...prev,
      {
        question: currentQuestion,
        selectedAnswer: index,
        isCorrect,
        timeSpent
      }
    ]);
  }

  function handleNext() {
    if (currentIndex + 1 >= totalQuestions) {
      setQuizFinished(true);
    } else {
      setCurrentIndex((i) => i + 1);
      setSelectedAnswer(null);
      setAnswered(false);
    }
  }

  function handleRestart() {
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setAnswered(false);
    setAnswers([]);
    setQuizFinished(false);
    setTimeLeft(30);
    setTimerActive(true);
  }

  if (quizFinished) {
    return (
      <QuizResults
        answers={answers}
        category={category}
        onRestart={handleRestart}
        onBack={() => router.push('/quiz')}
      />
    );
  }

  return (
    <div className={styles.page}>
      <div className={styles.topBar}>
        <button onClick={() => router.push('/quiz')} className={styles.exitBtn}>
          ✕ Exit
        </button>
        <div className={styles.categoryLabel}>
          {category.icon} {category.name}
        </div>
        <div className={styles.timer} data-urgent={timeLeft <= 5}>
          ⏱ {timeLeft}s
        </div>
      </div>
      <div className={styles.content}>
        <QuizProgress current={currentIndex + 1} total={totalQuestions} answers={answers} />
        <QuizQuestion
          question={currentQuestion}
          selectedAnswer={selectedAnswer}
          answered={answered}
          onSelect={handleSelectAnswer}
        />
        {answered && (
          <div className={styles.nextWrapper}>
            <button onClick={handleNext} className={styles.nextBtn}>
              {currentIndex + 1 >= totalQuestions ? 'See Results' : 'Next Question'} →
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
