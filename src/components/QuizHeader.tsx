import React from 'react';
import { Trophy, Clock, Target } from 'lucide-react';

interface QuizHeaderProps {
  currentQuestion: number;
  totalQuestions: number;
  score: number;
  timeElapsed: number;
}

export const QuizHeader: React.FC<QuizHeaderProps> = ({
  currentQuestion,
  totalQuestions,
  score,
  timeElapsed
}) => {
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const progressPercentage = ((currentQuestion - 1) / totalQuestions) * 100;

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-gray-800">Quiz Challenge</h1>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-blue-600">
            <Trophy size={20} />
            <span className="font-semibold">{score}</span>
          </div>
          <div className="flex items-center gap-2 text-green-600">
            <Clock size={20} />
            <span className="font-medium">{formatTime(timeElapsed)}</span>
          </div>
          <div className="flex items-center gap-2 text-purple-600">
            <Target size={20} />
            <span className="font-medium">{currentQuestion}/{totalQuestions}</span>
          </div>
        </div>
      </div>
      
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div 
          className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-300 ease-out"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>
      
      <div className="mt-2 text-sm text-gray-600">
        Question {currentQuestion} of {totalQuestions}
      </div>
    </div>
  );
};