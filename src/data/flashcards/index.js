// Flashcard files index - consolidates all flashcards
import { storageFlashcards } from './storage-flashcards';
import { databaseFlashcards } from './database-flashcards';
import { networkingFlashcards } from './networking-flashcards';

export const flashcardsByCategory = {
  storage: storageFlashcards,
  database: databaseFlashcards,
  networking: networkingFlashcards,
};

// Flatten all flashcards for the Flashcards component
export const flashcards = [
  ...storageFlashcards,
  ...databaseFlashcards,
  ...networkingFlashcards,
];

export default flashcards;
