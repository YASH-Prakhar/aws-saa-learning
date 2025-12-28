// AWS Services Data - Classification-based imports
import { computeServices } from './aws-compute';
import { containerServices } from './aws-containers';
import { storageServices } from './aws-storage';
import { databaseServices } from './aws-database';
import { securityServices } from './aws-security';
import { cryptographyServices } from './aws-cryptography';
import { managementServices } from './aws-management';
import { networkingServices } from './aws-networking';
import { applicationIntegrationServices } from './aws-application-integration';
import { managementExtendedServices } from './aws-management-extended';
import { developerToolsServices } from './aws-developer-tools';
import { migrationTransferServices } from './aws-migration-transfer';
import { frontEndWebMobileServices } from './aws-front-end-web-mobile';
import { billingCostManagementServices } from './aws-billing-cost-management';
import { monitoringServices } from './aws-monitoring';
import { managementConsoleServices } from './aws-management-console';

// Generate a categories list from the keys in `servicesByCategory`.
// Provide friendly display names for UI.
const categoryDisplayNames = {
  compute: 'Compute',
  containers: 'Containers',
  storage: 'Storage',
  database: 'Database',
  networking: 'Networking',
  security: 'Security',
  cryptography: 'Cryptography & PKI',
  management: 'Management & Governance',
  managementExtended: 'Management (Extended)',
  applicationIntegration: 'Application Integration',
  developerTools: 'Developer Tools',
  migrationTransfer: 'Migration & Transfer',
  frontEndWebMobile: 'Front-end & Mobile',
  billingCostManagement: 'Billing & Cost Management',
  monitoring: 'Monitoring & Observability',
  managementConsole: 'Management Console',
  analytics: 'Analytics',
};

export const categories = [
  { id: 'compute', name: 'Compute', icon: 'Server', color: 'orange' },
  { id: 'storage', name: 'Storage', icon: 'HardDrive', color: 'blue' },
  { id: 'database', name: 'Database', icon: 'Database', color: 'purple' },
  { id: 'networking', name: 'Networking', icon: 'Network', color: 'green' },
  { id: 'security', name: 'Security', icon: 'Shield', color: 'red' },
  { id: 'management', name: 'Management', icon: 'Settings', color: 'slate' },
  { id: 'integration', name: 'Integration', icon: 'Link', color: 'cyan' },
  { id: 'analytics', name: 'Analytics', icon: 'BarChart', color: 'indigo' },
];

export const servicesByCategory = {
  compute: computeServices,
  containers: containerServices,
  storage: storageServices,
  database: databaseServices,
  security: securityServices,
  cryptography: cryptographyServices,
  management: managementServices,
  networking: networkingServices,
  applicationIntegration: applicationIntegrationServices,
  managementExtended: managementExtendedServices,
  developerTools: developerToolsServices,
  migrationTransfer: migrationTransferServices,
  frontEndWebMobile: frontEndWebMobileServices,
  billingCostManagement: billingCostManagementServices,
  monitoring: monitoringServices,
  managementConsole: managementConsoleServices,
};

// Flatten services for legacy imports and derived data
// Map serviceByCategory keys to the main category ids used in the UI
const categoryKeyToCategoryId = {
  compute: 'compute',
  containers: 'compute',
  storage: 'storage',
  database: 'database',
  networking: 'networking',
  security: 'security',
  cryptography: 'security',
  management: 'management',
  managementExtended: 'management',
  applicationIntegration: 'integration',
  developerTools: 'management',
  migrationTransfer: 'management',
  frontEndWebMobile: 'compute',
  billingCostManagement: 'management',
  monitoring: 'management',
  managementConsole: 'management',
};

export const services = Object.entries(servicesByCategory).flatMap(([key, arr]) =>
  (arr || []).map(s => ({
    // keep existing fields but ensure a `category` is present and normalized
    ...s,
    category: s.category || categoryKeyToCategoryId[key] || 'management',
  }))
);

// Flashcards derived from services
export const flashcards = services.map(s => ({
  id: s.id,
  front: s.name,
  back: s.description,
  details: s.examTips || '',
  category: s.category || 'uncategorized',
}));

// Matching pairs (term/definition) - use up to first 12 services
export const matchingPairs = services.slice(0, 12).map(s => ({
  id: s.id,
  term: s.shortName || s.name,
  definition: s.description,
  pairId: s.id,
}));

// Basic quizQuestions placeholder if none exist — keep a few simple questions
export const quizQuestions = [
  {
    id: 1,
    question: 'Which AWS service provides object storage?',
    options: ['EBS', 'S3', 'EFS', 'RDS'],
    correct: 1,
    explanation: 'Amazon S3 is the object storage service.',
    category: 'storage',
    difficulty: 'easy',
  },
  {
    id: 2,
    question: 'Which service is used for DNS routing?',
    options: ['VPC', 'CloudFront', 'Route 53', 'ELB'],
    correct: 2,
    explanation: 'Amazon Route 53 provides DNS and domain registration services.',
    category: 'networking',
    difficulty: 'easy',
  },
];

export default services;
