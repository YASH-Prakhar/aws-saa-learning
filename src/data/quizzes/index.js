// Quiz files index - consolidates all quiz questions
import { storageQuiz } from './storage-quiz';
import { computeQuiz } from './compute-quiz';
import { securityQuiz } from './security-quiz';

export const allQuizzes = {
  storage: storageQuiz,
  compute: computeQuiz,
  security: securityQuiz,
};

export const quizzesByCategory = {
  storage: storageQuiz,
  compute: computeQuiz,
  security: securityQuiz,
};

// Flatten all quiz questions for the Quiz component
export const quizQuestions = [
  ...storageQuiz,
  ...computeQuiz,
  ...securityQuiz,
];

export default quizQuestions;
