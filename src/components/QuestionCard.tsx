import React from 'react';
import { Check, X, Lightbulb } from 'lucide-react';
import { Question } from '../types/quiz';

interface QuestionCardProps {
  question: Question;
  selectedAnswer: number | null;
  showFeedback: boolean;
  onAnswerSelect: (answer: number) => void;
  onNext: () => void;
  isLastQuestion: boolean;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  selectedAnswer,
  showFeedback,
  onAnswerSelect,
  onNext,
  isLastQuestion
}) => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-100 text-green-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'hard': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getOptionStyle = (index: number) => {
    if (!showFeedback) {
      return selectedAnswer === index
        ? 'border-blue-500 bg-blue-50'
        : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50';
    }

    if (index === question.correctAnswer) {
      return 'border-green-500 bg-green-50';
    }

    if (selectedAnswer === index && index !== question.correctAnswer) {
      return 'border-red-500 bg-red-50';
    }

    return 'border-gray-200 bg-gray-50';
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(question.difficulty)}`}>
            {question.difficulty}
          </span>
          <span className="text-sm text-gray-600">{question.category}</span>
        </div>
      </div>

      <h2 className="text-xl font-semibold text-gray-800 mb-6 leading-relaxed">
        {question.question}
      </h2>

      <div className="space-y-3 mb-6">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => !showFeedback && onAnswerSelect(index)}
            disabled={showFeedback}
            className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-200 ${getOptionStyle(index)} ${
              showFeedback ? 'cursor-default' : 'cursor-pointer'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-gray-700">{option}</span>
              {showFeedback && (
                <>
                  {index === question.correctAnswer && (
                    <Check className="text-green-600" size={20} />
                  )}
                  {selectedAnswer === index && index !== question.correctAnswer && (
                    <X className="text-red-600" size={20} />
                  )}
                </>
              )}
            </div>
          </button>
        ))}
      </div>

      {showFeedback && question.explanation && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <div className="flex items-center gap-2 mb-2">
            <Lightbulb className="text-blue-600" size={20} />
            <span className="font-medium text-blue-800">Explanation</span>
          </div>
          <p className="text-blue-700">{question.explanation}</p>
        </div>
      )}

      {showFeedback && (
        <div className="flex justify-center">
          <button
            onClick={onNext}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
          >
            {isLastQuestion ? 'View Results' : 'Next Question'}
          </button>
        </div>
      )}
    </div>
  );
};