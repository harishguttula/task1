import React from 'react';
import { Trophy, Target, Clock, RotateCcw, CheckCircle, XCircle } from 'lucide-react';
import { QuizStats } from '../types/quiz';

interface QuizResultsProps {
  stats: QuizStats;
  onRestart: () => void;
}

export const QuizResults: React.FC<QuizResultsProps> = ({ stats, onRestart }) => {
  const getPerformanceMessage = (percentage: number) => {
    if (percentage >= 90) return { message: "Outstanding! 🎉", color: "text-green-600" };
    if (percentage >= 80) return { message: "Excellent work! 👏", color: "text-blue-600" };
    if (percentage >= 70) return { message: "Good job! 👍", color: "text-purple-600" };
    if (percentage >= 60) return { message: "Nice try! 💪", color: "text-yellow-600" };
    return { message: "Keep practicing! 📚", color: "text-orange-600" };
  };

  const performance = getPerformanceMessage(stats.percentage);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}m ${remainingSeconds}s`;
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 text-center">
      <div className="mb-6">
        <Trophy className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Quiz Complete!</h2>
        <p className={`text-xl font-semibold ${performance.color}`}>
          {performance.message}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6">
          <div className="flex items-center justify-center mb-3">
            <Target className="text-blue-600 mr-2" size={24} />
            <h3 className="text-lg font-semibold text-gray-800">Score</h3>
          </div>
          <p className="text-3xl font-bold text-blue-600">{stats.score}</p>
          <p className="text-sm text-gray-600 mt-1">
            {stats.percentage.toFixed(1)}% correct
          </p>
        </div>

        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6">
          <div className="flex items-center justify-center mb-3">
            <Clock className="text-green-600 mr-2" size={24} />
            <h3 className="text-lg font-semibold text-gray-800">Time</h3>
          </div>
          <p className="text-3xl font-bold text-green-600">{formatTime(stats.timeTaken)}</p>
          <p className="text-sm text-gray-600 mt-1">
            {(stats.timeTaken / stats.totalQuestions).toFixed(1)}s per question
          </p>
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-6 mb-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Detailed Results</h3>
        <div className="flex justify-center items-center gap-8">
          <div className="flex items-center gap-2">
            <CheckCircle className="text-green-500" size={20} />
            <span className="text-gray-700">
              <span className="font-semibold text-green-600">{stats.correctAnswers}</span> Correct
            </span>
          </div>
          <div className="flex items-center gap-2">
            <XCircle className="text-red-500" size={20} />
            <span className="text-gray-700">
              <span className="font-semibold text-red-600">{stats.wrongAnswers}</span> Wrong
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Target className="text-blue-500" size={20} />
            <span className="text-gray-700">
              <span className="font-semibold text-blue-600">{stats.totalQuestions}</span> Total
            </span>
          </div>
        </div>
      </div>

      <button
        onClick={onRestart}
        className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center gap-2 mx-auto"
      >
        <RotateCcw size={20} />
        Take Quiz Again
      </button>
    </div>
  );
};