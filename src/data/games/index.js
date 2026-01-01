// Matching game files index - consolidates all matching games
import { storageMatching } from './storage-matching';
import { databaseMatching } from './database-matching';
import { securityMatching } from './security-matching';

export const matchingGamesByCategory = {
  storage: storageMatching,
  database: databaseMatching,
  security: securityMatching,
};

// Flatten all matching pairs for the MatchingGame component
export const matchingPairs = [
  ...storageMatching,
  ...databaseMatching,
  ...securityMatching,
];

export default matchingPairs;
