import React, { useState, useEffect } from 'react';
import { QuizHeader } from './QuizHeader';
import { QuestionCard } from './QuestionCard';
import { QuizResults } from './QuizResults';
import { questions } from '../data/questions';
import { QuizState, QuizStats } from '../types/quiz';

export const QuizApp: React.FC = () => {
  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestion: 1,
    score: 0,
    answers: Array(questions.length).fill(null),
    isCompleted: false,
    timeStarted: Date.now(),
  });

  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);

  useEffect(() => {
    if (!quizState.isCompleted) {
      const timer = setInterval(() => {
        setTimeElapsed(Math.floor((Date.now() - quizState.timeStarted) / 1000));
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [quizState.timeStarted, quizState.isCompleted]);

  const currentQuestionData = questions[quizState.currentQuestion - 1];

  const handleAnswerSelect = (answer: number) => {
    if (selectedAnswer !== null) return;
    
    setSelectedAnswer(answer);
    
    // Show feedback after a brief delay
    setTimeout(() => {
      setShowFeedback(true);
      
      // Update quiz state
      const newAnswers = [...quizState.answers];
      newAnswers[quizState.currentQuestion - 1] = answer;
      
      const isCorrect = answer === currentQuestionData.correctAnswer;
      const newScore = isCorrect ? quizState.score + 1 : quizState.score;
      
      setQuizState(prev => ({
        ...prev,
        answers: newAnswers,
        score: newScore,
      }));
    }, 500);
  };

  const handleNext = () => {
    if (quizState.currentQuestion < questions.length) {
      // Move to next question
      setQuizState(prev => ({
        ...prev,
        currentQuestion: prev.currentQuestion + 1,
      }));
      setSelectedAnswer(null);
      setShowFeedback(false);
    } else {
      // Complete quiz
      setQuizState(prev => ({
        ...prev,
        isCompleted: true,
        timeCompleted: Date.now(),
      }));
    }
  };

  const handleRestart = () => {
    setQuizState({
      currentQuestion: 1,
      score: 0,
      answers: Array(questions.length).fill(null),
      isCompleted: false,
      timeStarted: Date.now(),
    });
    setSelectedAnswer(null);
    setShowFeedback(false);
    setTimeElapsed(0);
  };

  const getQuizStats = (): QuizStats => {
    const totalQuestions = questions.length;
    const correctAnswers = quizState.score;
    const wrongAnswers = totalQuestions - correctAnswers;
    const percentage = (correctAnswers / totalQuestions) * 100;
    
    return {
      totalQuestions,
      correctAnswers,
      wrongAnswers,
      score: quizState.score,
      percentage,
      timeTaken: timeElapsed,
      difficulty: 'Mixed',
    };
  };

  if (quizState.isCompleted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-4">
        <div className="max-w-4xl mx-auto pt-8">
          <QuizResults stats={getQuizStats()} onRestart={handleRestart} />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-4">
      <div className="max-w-4xl mx-auto pt-8">
        <QuizHeader
          currentQuestion={quizState.currentQuestion}
          totalQuestions={questions.length}
          score={quizState.score}
          timeElapsed={timeElapsed}
        />
        
        <QuestionCard
          question={currentQuestionData}
          selectedAnswer={selectedAnswer}
          showFeedback={showFeedback}
          onAnswerSelect={handleAnswerSelect}
          onNext={handleNext}
          isLastQuestion={quizState.currentQuestion === questions.length}
        />
      </div>
    </div>
  );
};