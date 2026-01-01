// AWS Services Data - Classification-based imports
import { computeServices } from './services/aws-compute';
import { containerServices } from './services/aws-containers';
import { storageServices } from './services/aws-storage';
import { databaseServices } from './services/aws-database';
import { securityServices } from './services/aws-security';
import { cryptographyServices } from './services/aws-cryptography';
import { managementServices } from './services/aws-management';
import { networkingServices } from './services/aws-networking';
import { applicationIntegrationServices } from './services/aws-application-integration';
import { developerToolsServices } from './services/aws-developer-tools';
import { migrationTransferServices } from './services/aws-migration-transfer';
import { frontEndWebMobileServices } from './services/aws-front-end-web-mobile';
import { billingCostManagementServices } from './services/aws-billing-cost-management';
import { monitoringServices } from './services/aws-monitoring';
import { managementConsoleServices } from './services/aws-management-console';

// Import aggregated study materials from index files
import { flashcards as allFlashcards, flashcardsByCategory } from './flashcards';
import { quizQuestions as allQuizQuestions, quizzesByCategory } from './quizzes';
import { matchingPairs as allMatchingPairs, matchingGamesByCategory } from './games';

export const servicesByCategory = {
  compute: computeServices,
  containers: containerServices,
  storage: storageServices,
  database: databaseServices,
  security: securityServices,
  cryptography: cryptographyServices,
  management: managementServices,
  managementConsoleServices: managementConsoleServices,
  networking: networkingServices,
  applicationIntegration: applicationIntegrationServices,
  developerTools: developerToolsServices,
  migrationTransfer: migrationTransferServices,
  frontEndWebMobile: frontEndWebMobileServices,
  billingCostManagement: billingCostManagementServices,
  monitoring: monitoringServices,
};

// Generate categories from servicesByCategory keys with friendly display names
const categoryDisplayNames = {
  compute: 'Compute',
  containers: 'Containers',
  storage: 'Storage',
  database: 'Database',
  networking: 'Networking',
  security: 'Security',
  cryptography: 'Cryptography & PKI',
  management: 'Management & Governance',
  applicationIntegration: 'Application Integration',
  developerTools: 'Developer Tools',
  migrationTransfer: 'Migration & Transfer',
  frontEndWebMobile: 'Front-end & Mobile',
  billingCostManagement: 'Billing & Cost Management',
  monitoring: 'Monitoring & Observability',
  managementConsoleServices: 'Management Console',
};

export const categories = Object.keys(servicesByCategory).map(key => ({
  id: key,
  name: categoryDisplayNames[key] || key.replace(/([A-Z])/g, ' $1').trim(),
}));

// Flatten services for legacy imports and derived data
const categoryKeyToCategoryId = {
  compute: 'compute',
  containers: 'containers',
  storage: 'storage',
  database: 'database',
  networking: 'networking',
  security: 'security',
  cryptography: 'cryptography',
  management: 'management',
  applicationIntegration: 'applicationIntegration',
  developerTools: 'developerTools',
  migrationTransfer: 'migrationTransfer',
  frontEndWebMobile: 'frontEndWebMobile',
  billingCostManagement: 'billingCostManagement',
  monitoring: 'monitoring',
  managementConsoleServices: 'managementConsoleServices',
};

export const services = Object.entries(servicesByCategory).flatMap(([key, arr]) =>
  (arr || []).map(s => ({
    // keep existing fields but ensure a `category` is present and normalized
    ...s,
    category: s.category || categoryKeyToCategoryId[key] || 'management',
    // Add default difficulty if not present (derived from examNotes/bestPractices length as heuristic)
    difficulty: s.difficulty || (s.examNotes && s.examNotes.length > 3 ? 'essential' : 'important'),
    // Add relatedServices as empty array if not present
    relatedServices: s.relatedServices || [],
  }))
);

// Export flashcards from index file
export const flashcards = allFlashcards;
export { flashcardsByCategory };

// Export quiz questions from index file
export const quizQuestions = allQuizQuestions;
export { quizzesByCategory };

// Export matching pairs from index file
export const matchingPairs = allMatchingPairs;
export { matchingGamesByCategory };

export default services;
