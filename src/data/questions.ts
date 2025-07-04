import { Question } from '../types/quiz';

export const questions: Question[] = [
  {
    id: 1,
    question: "What is the capital of France?",
    options: ["London", "Berlin", "Paris", "Madrid"],
    correctAnswer: 2,
    category: "Geography",
    difficulty: "easy",
    explanation: "Paris is the capital and largest city of France."
  },
  {
    id: 2,
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    correctAnswer: 1,
    category: "Science",
    difficulty: "easy",
    explanation: "Mars is called the Red Planet due to its reddish appearance from iron oxide on its surface."
  },
  {
    id: 3,
    question: "What is 15 × 8?",
    options: ["110", "120", "130", "140"],
    correctAnswer: 1,
    category: "Mathematics",
    difficulty: "medium",
    explanation: "15 × 8 = 120"
  },
  {
    id: 4,
    question: "Who painted the Mona Lisa?",
    options: ["Pablo Picasso", "Vincent van Gogh", "Leonardo da Vinci", "Claude Monet"],
    correctAnswer: 2,
    category: "Art",
    difficulty: "medium",
    explanation: "The Mona Lisa was painted by Leonardo da Vinci between 1503 and 1519."
  },
  {
    id: 5,
    question: "What is the largest ocean on Earth?",
    options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
    correctAnswer: 3,
    category: "Geography",
    difficulty: "easy",
    explanation: "The Pacific Ocean is the largest ocean, covering about 46% of Earth's water surface."
  },
  {
    id: 6,
    question: "Which programming language was created by Brendan Eich?",
    options: ["Python", "JavaScript", "Java", "C++"],
    correctAnswer: 1,
    category: "Technology",
    difficulty: "medium",
    explanation: "JavaScript was created by Brendan Eich in 1995 while he was working at Netscape."
  },
  {
    id: 7,
    question: "What is the chemical symbol for gold?",
    options: ["Go", "Gd", "Au", "Ag"],
    correctAnswer: 2,
    category: "Science",
    difficulty: "hard",
    explanation: "Au is the chemical symbol for gold, derived from the Latin word 'aurum'."
  },
  {
    id: 8,
    question: "In which year did World War II end?",
    options: ["1944", "1945", "1946", "1947"],
    correctAnswer: 1,
    category: "History",
    difficulty: "medium",
    explanation: "World War II ended in 1945 with the surrender of Japan in September."
  },
  {
    id: 9,
    question: "What is the square root of 144?",
    options: ["10", "11", "12", "13"],
    correctAnswer: 2,
    category: "Mathematics",
    difficulty: "easy",
    explanation: "The square root of 144 is 12, because 12 × 12 = 144."
  },
  {
    id: 10,
    question: "Which composer wrote 'The Four Seasons'?",
    options: ["Johann Sebastian Bach", "Wolfgang Amadeus Mozart", "Antonio Vivaldi", "Ludwig van Beethoven"],
    correctAnswer: 2,
    category: "Music",
    difficulty: "hard",
    explanation: "Antonio Vivaldi composed 'The Four Seasons' in 1723, a set of four violin concertos."
  }
];