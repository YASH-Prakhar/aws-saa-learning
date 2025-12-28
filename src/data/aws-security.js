// AWS Security, Identity, & Compliance Services Content
export const securityServices = [
  {
    id: 'iam',
    name: 'AWS IAM',
    details: `Central service for managing access to AWS resources. Supports users, groups, roles, and policies (JSON-based). Fine-grained permissions (least privilege). Supports MFA, password policies, and access keys. Enables cross-account access via roles.`,
    useCases: ['Securely control access to AWS services/resources', 'Delegate access with roles (e.g., EC2 instance roles)', 'Temporary credentials for federated users (SSO, SAML, OIDC)'],
    bestPractices: ['Enforce least privilege', 'Use roles instead of root account', 'Enable MFA for all users', 'Rotate credentials regularly', 'Use IAM Access Analyzer for policy validation'],
    examNotes: ['Know difference between users, groups, roles', 'Understand policy evaluation logic (explicit deny > allow)', 'Root account should be protected and rarely used']
  },
  {
    id: 'cognito',
    name: 'Amazon Cognito',
    details: `User authentication, authorization, and user management for web/mobile apps. Supports user pools (user directory) and identity pools (federation). Integrates with SAML, OIDC, social identity providers (Google, Facebook). Provides tokens (JWT) for app authentication.`,
    useCases: ['Add sign-up/sign-in to apps', 'Federate users from external IdPs', 'Secure APIs with user authentication'],
    bestPractices: ['Use hosted UI for secure authentication flows', 'Enable MFA and password policies', 'Use triggers (Lambda) for custom workflows'],
    examNotes: ['User Pool = directory, Identity Pool = AWS credentials', 'Federation and token-based authentication']
  },
  {
    id: 'directoryservice',
    name: 'AWS Directory Service',
    details: `Managed Microsoft AD, Simple AD, AD Connector, Cloud Directory. Integrates with on-premises AD. Enables Windows workloads, SSO, and group policy management.`,
    useCases: ['Migrate Windows workloads to AWS', 'Enable SSO for AWS apps', 'Integrate with Amazon WorkSpaces, RDS for SQL Server'],
    bestPractices: ['Use AWS Managed Microsoft AD for full compatibility', 'Secure directory with VPC, subnets, and security groups', 'Monitor with CloudWatch and AWS CloudTrail'],
    examNotes: ['Know difference between directory types', 'Use AD Connector for on-premises integration']
  },
  {
    id: 'ram',
    name: 'Amazon RAM',
    details: `Securely share AWS resources across accounts, OUs, or organizations. Supports sharing VPC subnets, Transit Gateways, Route 53 Resolver rules, etc. Uses managed permissions and resource shares.`,
    useCases: ['Centralize resources (e.g., networking) for multiple accounts', 'Reduce duplication and operational overhead'],
    bestPractices: ['Use AWS Organizations for easier sharing', 'Apply least privilege to resource shares', 'Monitor sharing with CloudWatch and CloudTrail'],
    examNotes: ['RAM is for cross-account resource sharing', 'Not all resources are shareable; check documentation']
  },
  {
    id: 'secretsmanager',
    name: 'AWS Secrets Manager',
    details: `Securely stores, rotates, and manages secrets (API keys, passwords). Automatic rotation with Lambda integration. Fine-grained access control via IAM.`,
    useCases: ['Store DB credentials, API keys, tokens', 'Automate secret rotation for compliance'],
    bestPractices: ['Enable automatic rotation', 'Use resource policies for cross-account access', 'Audit access with CloudTrail'],
    examNotes: ['Secrets Manager vs. Parameter Store (Secrets Manager for sensitive data, rotation)', 'Supports automatic rotation']
  },
  {
    id: 'securityhub',
    name: 'AWS Security Hub',
    details: `Centralized security and compliance dashboard. Aggregates findings from AWS services (GuardDuty, Inspector, Macie) and partners. Supports automated response via EventBridge.`,
    useCases: ['Monitor security posture across accounts/regions', 'Centralize and prioritize security findings'],
    bestPractices: ['Integrate with AWS Organizations for multi-account visibility', 'Use custom actions for automated remediation', 'Regularly review and act on findings'],
    examNotes: ['Security Hub is for aggregation, not direct remediation', 'Integrates with multiple AWS security services']
  }
];
