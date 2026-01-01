export const securityQuiz = [
  {
    id: 1,
    question: "What is the primary purpose of AWS IAM?",
    options: [
      "A) To encrypt data at rest",
      "B) To manage identity and access control to AWS services",
      "C) To monitor network traffic",
      "D) To provide DDoS protection"
    ],
    correct: 1,
    explanation: "IAM (Identity and Access Management) is AWS's service for securely controlling access to AWS services and resources through users, roles, and policies.",
    category: "security",
    difficulty: "hard"
  },
  {
    id: 2,
    question: "What is the difference between an IAM User and an IAM Role?",
    options: [
      "A) Users are for people; Roles are for services and cross-account access",
      "B) They are identical",
      "C) Roles have permanent credentials",
      "D) Users provide temporary access only"
    ],
    correct: 0,
    explanation: "IAM Users represent individual people with long-term credentials, while Roles provide temporary credentials and are used by AWS services or for cross-account access.",
    category: "security",
    difficulty: "hard"
  },
  {
    id: 3,
    question: "What is AWS KMS (Key Management Service) used for?",
    options: [
      "A) Managing user permissions",
      "B) Creating and managing encryption keys",
      "C) Monitoring API calls",
      "D) Managing SSL/TLS certificates"
    ],
    correct: 1,
    explanation: "AWS KMS is a managed service for creating, controlling, and managing cryptographic keys used for encryption and decryption of data.",
    category: "security",
    difficulty: "hard"
  },
  {
    id: 4,
    question: "What is the principle of least privilege in IAM?",
    options: [
      "A) Granting all permissions to reduce management overhead",
      "B) Granting users only the minimum permissions needed to perform their tasks",
      "C) Allowing public access to S3 buckets",
      "D) Removing all security controls"
    ],
    correct: 1,
    explanation: "The principle of least privilege means users should have only the minimum permissions required to perform their job functions, reducing security risks.",
    category: "security",
    difficulty: "hard"
  },
  {
    id: 5,
    question: "Which AWS service provides temporary security credentials for accessing AWS services?",
    options: [
      "A) IAM Users",
      "B) IAM Roles with AWS STS (Security Token Service)",
      "C) Access Keys only",
      "D) Console passwords"
    ],
    correct: 1,
    explanation: "AWS STS (Security Token Service) provides temporary, limited-privilege credentials for accessing AWS services through assumed roles.",
    category: "security",
    difficulty: "hard"
  },
  {
    id: 6,
    question: "What does MFA (Multi-Factor Authentication) in AWS require?",
    options: [
      "A) Just a password",
      "B) Password and a second authentication method (device, app, or hardware token)",
      "C) Multiple passwords",
      "D) Only a security question"
    ],
    correct: 1,
    explanation: "MFA requires a second form of authentication in addition to a password, such as a TOTP code, SMS code, or hardware security key.",
    category: "security",
    difficulty: "hard"
  },
  {
    id: 7,
    question: "How does AWS CloudTrail help with security compliance?",
    options: [
      "A) Encrypts all data automatically",
      "B) Records and logs all API calls made in AWS accounts",
      "C) Blocks unauthorized access attempts",
      "D) Manages security patches"
    ],
    correct: 1,
    explanation: "CloudTrail logs all API calls and account activities, providing an audit trail for security monitoring, compliance, and troubleshooting.",
    category: "security",
    difficulty: "medium"
  },
  {
    id: 8,
    question: "What is AWS Cognito primarily used for?",
    options: [
      "A) Managing database access",
      "B) Authentication and authorization for user applications",
      "C) Encrypting data",
      "D) Monitoring resources"
    ],
    correct: 1,
    explanation: "AWS Cognito provides authentication and authorization for web and mobile applications, with user pools for identity management and federation.",
    category: "security",
    difficulty: "medium"
  },
  {
    id: 9,
    question: "What type of encryption does S3 provide with SSE-S3?",
    options: [
      "A) No encryption",
      "B) Server-side encryption with S3-managed keys",
      "C) Client-side encryption only",
      "D) Encryption managed by AWS KMS only"
    ],
    correct: 1,
    explanation: "SSE-S3 (Server-Side Encryption with S3-Managed Keys) automatically encrypts objects in S3 with keys managed by AWS.",
    category: "security",
    difficulty: "medium"
  },
  {
    id: 10,
    question: "What is the purpose of Security Groups in AWS?",
    options: [
      "A) Manage user access to AWS console",
      "B) Act as virtual firewalls controlling inbound and outbound traffic",
      "C) Encrypt data in transit",
      "D) Monitor CloudWatch metrics"
    ],
    correct: 1,
    explanation: "Security Groups function as virtual firewalls that control inbound and outbound traffic to EC2 instances and other resources.",
    category: "security",
    difficulty: "medium"
  },
  {
    id: 11,
    question: "What is Network ACLs (NACLs) used for?",
    options: [
      "A) Managing user permissions",
      "B) Stateless, subnet-level filtering of network traffic",
      "C) Encrypting network traffic",
      "D) Managing DNS records"
    ],
    correct: 1,
    explanation: "Network ACLs are stateless, subnet-level traffic filters that allow or deny traffic based on rules (unlike Security Groups which are stateful).",
    category: "security",
    difficulty: "medium"
  },
  {
    id: 12,
    question: "What is the difference between encryption at rest and encryption in transit?",
    options: [
      "A) They are the same",
      "B) At rest = stored data; In transit = data being transmitted",
      "C) In transit is more important",
      "D) At rest uses KMS only"
    ],
    correct: 1,
    explanation: "Encryption at rest protects stored data, while encryption in transit protects data being transmitted over networks (using HTTPS, TLS, etc.).",
    category: "security",
    difficulty: "medium"
  },
  {
    id: 13,
    question: "What does AWS Secrets Manager help you manage?",
    options: [
      "A) User permissions",
      "B) Passwords, API keys, and database credentials",
      "C) Security group rules",
      "D) IAM policies"
    ],
    correct: 1,
    explanation: "AWS Secrets Manager securely stores, rotates, and manages sensitive information like database passwords, API keys, and other credentials.",
    category: "security",
    difficulty: "easy"
  },
  {
    id: 14,
    question: "What is the root account in AWS?",
    options: [
      "A) The most basic user account",
      "B) The account with complete access to all AWS services (use with caution)",
      "C) An account for server access only",
      "D) A temporary account for testing"
    ],
    correct: 1,
    explanation: "The root account has unrestricted access to all AWS services and resources. AWS recommends using IAM users instead for daily operations.",
    category: "security",
    difficulty: "easy"
  },
  {
    id: 15,
    question: "What is the purpose of AWS Config?",
    options: [
      "A) Manage user configurations",
      "B) Track AWS resource configuration changes for compliance",
      "C) Configure load balancers",
      "D) Set up VPC networks"
    ],
    correct: 1,
    explanation: "AWS Config continuously monitors and records configurations of AWS resources, helping ensure compliance and detect unauthorized changes.",
    category: "security",
    difficulty: "easy"
  },
  {
    id: 16,
    question: "What does VPC (Virtual Private Cloud) provide?",
    options: [
      "A) A public cloud environment",
      "B) An isolated network environment within AWS",
      "C) A private company network",
      "D) Internet access only"
    ],
    correct: 1,
    explanation: "VPC provides an isolated, customizable network environment within AWS where you can launch resources with full control over networking.",
    category: "security",
    difficulty: "easy"
  },
  {
    id: 17,
    question: "How should you store AWS credentials?",
    options: [
      "A) Hardcoded in application code",
      "B) In environment variables or AWS Systems Manager Parameter Store/Secrets Manager",
      "C) In plain text files",
      "D) Shared among team members"
    ],
    correct: 1,
    explanation: "AWS credentials should never be hardcoded. Use environment variables, IAM roles, Secrets Manager, or Parameter Store for secure credential management.",
    category: "security",
    difficulty: "easy"
  },
  {
    id: 18,
    question: "What is AWS WAF (Web Application Firewall) used for?",
    options: [
      "A) Protecting databases",
      "B) Protecting web applications from common web exploits",
      "C) Managing user access",
      "D) Encrypting data"
    ],
    correct: 1,
    explanation: "AWS WAF protects web applications from common attacks like SQL injection, XSS, and DDoS by filtering HTTP/HTTPS requests.",
    category: "security",
    difficulty: "easy"
  },
  {
    id: 19,
    question: "What is the purpose of AWS Shield?",
    options: [
      "A) Encrypts data",
      "B) Provides DDoS protection",
      "C) Manages user permissions",
      "D) Monitors database performance"
    ],
    correct: 1,
    explanation: "AWS Shield provides automatic DDoS protection for all AWS customers, with Shield Standard included at no cost and Shield Advanced available for purchase.",
    category: "security",
    difficulty: "easy"
  },
  {
    id: 20,
    question: "What is an access key in AWS?",
    options: [
      "A) A physical security card",
      "B) An Access Key ID and Secret Access Key pair for programmatic access",
      "C) A console login credential",
      "D) An encryption key"
    ],
    correct: 1,
    explanation: "Access Keys consist of an Access Key ID and Secret Access Key pair used for programmatic access to AWS APIs and services.",
    category: "security",
    difficulty: "easy"
  }
];
