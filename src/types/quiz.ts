export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  category: string;
  difficulty: 'easy' | 'medium' | 'hard';
  explanation?: string;
}

export interface QuizState {
  currentQuestion: number;
  score: number;
  answers: (number | null)[];
  isCompleted: boolean;
  timeStarted: number;
  timeCompleted?: number;
}

export interface QuizStats {
  totalQuestions: number;
  correctAnswers: number;
  wrongAnswers: number;
  score: number;
  percentage: number;
  timeTaken: number;
  difficulty: string;
}