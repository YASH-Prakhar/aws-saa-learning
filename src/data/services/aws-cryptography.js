// AWS Cryptography & PKI Services Content
export const cryptographyServices = [
  {
    id: 'kms',
    name: 'AWS Key Management Service (KMS)',
    details: `Managed service for creating, controlling, and auditing encryption keys (Customer Master Keys, CMKs / KMS Keys). Supports symmetric and asymmetric keys. Integrated with 100+ AWS services for encryption at rest. Centralized key management, automatic key rotation (every 1 year, optional). FIPS 140-2 validated hardware security modules (HSMs) for key protection. Supports envelope encryption (data keys encrypted with KMS keys). Fine-grained IAM and key policies for access control. Audit key usage with AWS CloudTrail.`,
    useCases: ['Encrypting data at rest in S3, EBS, RDS, DynamoDB, etc.', 'Managing keys for application-level encryption', 'Digital signing and verification (asymmetric keys)', 'Securely sharing encrypted data between accounts (cross-account key access)'],
    bestPractices: ['Use KMS-integrated services for seamless encryption', 'Enable automatic key rotation for sensitive keys', 'Use key policies and IAM for least-privilege access', 'Monitor key usage and access with CloudTrail', 'Use separate keys for different applications or environments', 'Avoid sharing KMS keys across accounts unless necessary; use grants for temporary access'],
    examNotes: ['KMS does not store or manage your data, only keys', 'KMS keys are region-specific', 'Envelope encryption: KMS generates a data key, encrypts it with a KMS key, and returns both', 'KMS is not suitable for large data encryption directly (use data keys for bulk data)', 'Deleting a KMS key is irreversible after a waiting period (7–30 days)', 'KMS supports customer managed keys (CMKs) and AWS managed keys'],
    relatedServices: ['s3', 'rds', 'dynamodb', 'ebs', 'secretsmanager', 'iam']
  },
  {
    id: 'acm',
    name: 'AWS Certificate Manager (ACM)',
    details: `Provision, manage, and deploy SSL/TLS certificates for AWS services and internal resources. Supports public and private certificates. Automatic certificate renewal and deployment. Integrated with Elastic Load Balancer, CloudFront, API Gateway, etc. ACM Private CA for creating private certificate authorities.`,
    useCases: ['Securing web applications with HTTPS (SSL/TLS)', 'Managing certificates for internal services (private CA)', 'Automating certificate lifecycle (issuance, renewal, deployment)', 'Enabling mutual TLS authentication'],
    bestPractices: ['Use ACM for managing certificates for AWS-integrated resources', 'Prefer DNS validation for automated renewals', 'Use ACM Private CA for internal PKI needs', 'Regularly audit and remove unused certificates', 'Do not export ACM public certificates (private keys are not accessible)'],
    examNotes: ['ACM public certificates are free for use with supported AWS services', 'ACM cannot be used to secure resources outside AWS directly (except via exportable private CA certs)', 'ACM automates renewal and deployment for supported services', 'For custom domains, DNS or email validation is required', 'ACM Private CA is a paid service for internal PKI'],
    relatedServices: ['elb', 'cloudfront', 'apigateway', 'iam']
  }
];
