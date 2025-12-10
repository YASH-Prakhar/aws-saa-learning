// AWS Services Data - Add more services as needed
// Each service follows this structure for consistency

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

export const services = [
  // COMPUTE
  {
    id: 'ec2',
    name: 'Amazon EC2',
    shortName: 'EC2',
    category: 'compute',
    description: 'Virtual servers in the cloud',
    fullDescription: 'Amazon Elastic Compute Cloud (EC2) provides scalable computing capacity. It eliminates the need to invest in hardware upfront, so you can develop and deploy applications faster.',
    keyPoints: [
      'Multiple instance types optimized for different use cases',
      'Pay only for the capacity you use',
      'Integrates with most AWS services',
      'Supports Windows and Linux'
    ],
    useCases: ['Web hosting', 'Application servers', 'Batch processing', 'Gaming servers'],
    examTips: 'Know instance types (T, M, C, R, etc.), pricing models (On-Demand, Reserved, Spot), and placement groups.',
    difficulty: 'essential',
    relatedServices: ['ebs', 'elb', 'asg'],
  },
  {
    id: 'lambda',
    name: 'AWS Lambda',
    shortName: 'Lambda',
    category: 'compute',
    description: 'Run code without thinking about servers',
    fullDescription: 'AWS Lambda lets you run code without provisioning or managing servers. You pay only for the compute time you consume.',
    keyPoints: [
      'Serverless - no infrastructure management',
      'Automatic scaling',
      'Pay per invocation and duration',
      'Supports multiple languages'
    ],
    useCases: ['Event-driven processing', 'API backends', 'Data transformation', 'Scheduled tasks'],
    examTips: 'Know Lambda limits (15 min timeout, 10GB memory), triggers, and integration with API Gateway, S3, DynamoDB.',
    difficulty: 'essential',
    relatedServices: ['apigateway', 'dynamodb', 's3'],
  },
  {
    id: 'ecs',
    name: 'Amazon ECS',
    shortName: 'ECS',
    category: 'compute',
    description: 'Run containerized applications',
    fullDescription: 'Amazon Elastic Container Service is a fully managed container orchestration service that helps you deploy, manage, and scale containerized applications.',
    keyPoints: [
      'Supports Docker containers',
      'Integrates with Fargate for serverless containers',
      'Works with EC2 or Fargate launch types',
      'Deep AWS integration'
    ],
    useCases: ['Microservices', 'Batch processing', 'CI/CD pipelines', 'Hybrid deployments'],
    examTips: 'Understand difference between EC2 and Fargate launch types. Know task definitions and service configurations.',
    difficulty: 'important',
    relatedServices: ['ecr', 'fargate', 'elb'],
  },
  // STORAGE
  {
    id: 's3',
    name: 'Amazon S3',
    shortName: 'S3',
    category: 'storage',
    description: 'Scalable object storage in the cloud',
    fullDescription: 'Amazon Simple Storage Service (S3) is an object storage service offering industry-leading scalability, data availability, security, and performance.',
    keyPoints: [
      '99.999999999% (11 9s) durability',
      'Multiple storage classes for cost optimization',
      'Versioning and lifecycle policies',
      'Server-side and client-side encryption'
    ],
    useCases: ['Backup and restore', 'Data lakes', 'Static website hosting', 'Archive'],
    examTips: 'Know all storage classes, lifecycle policies, encryption options, bucket policies vs ACLs, and S3 Select.',
    difficulty: 'essential',
    relatedServices: ['glacier', 'cloudfront', 'lambda'],
  },
  {
    id: 'ebs',
    name: 'Amazon EBS',
    shortName: 'EBS',
    category: 'storage',
    description: 'Block storage for EC2 instances',
    fullDescription: 'Amazon Elastic Block Store provides persistent block storage volumes for use with Amazon EC2 instances.',
    keyPoints: [
      'Persistent storage that survives instance stops',
      'Multiple volume types (gp3, io2, st1, sc1)',
      'Snapshots for backup to S3',
      'Encryption at rest and in transit'
    ],
    useCases: ['Boot volumes', 'Databases', 'Enterprise applications', 'Throughput-intensive workloads'],
    examTips: 'Know volume types and their IOPS/throughput limits. Understand snapshots are incremental and stored in S3.',
    difficulty: 'essential',
    relatedServices: ['ec2', 's3'],
  },
  {
    id: 'efs',
    name: 'Amazon EFS',
    shortName: 'EFS',
    category: 'storage',
    description: 'Managed file storage for EC2',
    fullDescription: 'Amazon Elastic File System provides a simple, scalable, fully managed elastic NFS file system for use with AWS Cloud services.',
    keyPoints: [
      'Shared file storage across multiple EC2 instances',
      'Automatically scales up and down',
      'Multiple storage classes',
      'Works across Availability Zones'
    ],
    useCases: ['Content management', 'Web serving', 'Home directories', 'Container storage'],
    examTips: 'Compare EFS vs EBS vs S3. Know EFS works with Linux only (NFS). Understand performance and storage classes.',
    difficulty: 'important',
    relatedServices: ['ec2', 'ecs'],
  },
  // DATABASE
  {
    id: 'rds',
    name: 'Amazon RDS',
    shortName: 'RDS',
    category: 'database',
    description: 'Managed relational database service',
    fullDescription: 'Amazon Relational Database Service makes it easy to set up, operate, and scale a relational database in the cloud.',
    keyPoints: [
      'Supports MySQL, PostgreSQL, MariaDB, Oracle, SQL Server',
      'Automated backups and patching',
      'Multi-AZ for high availability',
      'Read replicas for performance'
    ],
    useCases: ['Web applications', 'E-commerce', 'Mobile apps', 'Enterprise applications'],
    examTips: 'Know Multi-AZ (HA) vs Read Replicas (performance). Understand backup retention, encryption, and IAM authentication.',
    difficulty: 'essential',
    relatedServices: ['aurora', 'ec2'],
  },
  {
    id: 'dynamodb',
    name: 'Amazon DynamoDB',
    shortName: 'DynamoDB',
    category: 'database',
    description: 'Fast and flexible NoSQL database',
    fullDescription: 'Amazon DynamoDB is a key-value and document database that delivers single-digit millisecond performance at any scale.',
    keyPoints: [
      'Fully managed NoSQL database',
      'Single-digit millisecond latency',
      'Auto-scaling capacity',
      'Global tables for multi-region'
    ],
    useCases: ['Gaming leaderboards', 'IoT data', 'Session management', 'Real-time analytics'],
    examTips: 'Know partition key design, DAX for caching, Global Tables, Streams, and capacity modes (on-demand vs provisioned).',
    difficulty: 'essential',
    relatedServices: ['lambda', 'apigateway'],
  },
  {
    id: 'aurora',
    name: 'Amazon Aurora',
    shortName: 'Aurora',
    category: 'database',
    description: 'High performance managed relational database',
    fullDescription: 'Amazon Aurora is a MySQL and PostgreSQL-compatible relational database built for the cloud with performance and availability of commercial databases at 1/10th the cost.',
    keyPoints: [
      '5x faster than MySQL, 3x faster than PostgreSQL',
      'Up to 15 read replicas with minimal lag',
      'Auto-scaling storage up to 128TB',
      'Global Database for low latency reads'
    ],
    useCases: ['Enterprise applications', 'SaaS applications', 'Gaming', 'Financial services'],
    examTips: 'Know Aurora Serverless for variable workloads, Global Database for DR, and difference from standard RDS.',
    difficulty: 'essential',
    relatedServices: ['rds'],
  },
  // NETWORKING
  {
    id: 'vpc',
    name: 'Amazon VPC',
    shortName: 'VPC',
    category: 'networking',
    description: 'Isolated cloud resources',
    fullDescription: 'Amazon Virtual Private Cloud lets you provision a logically isolated section of the AWS Cloud where you can launch resources in a virtual network you define.',
    keyPoints: [
      'Complete control over network configuration',
      'Public and private subnets',
      'Security groups and NACLs',
      'VPN and Direct Connect support'
    ],
    useCases: ['Multi-tier applications', 'Hybrid cloud', 'Secure environments', 'Microservices'],
    examTips: 'Master CIDR blocks, subnets, route tables, NAT Gateways, Security Groups vs NACLs, VPC Peering, and endpoints.',
    difficulty: 'essential',
    relatedServices: ['ec2', 'elb'],
  },
  {
    id: 'route53',
    name: 'Amazon Route 53',
    shortName: 'Route 53',
    category: 'networking',
    description: 'Scalable DNS and domain registration',
    fullDescription: 'Amazon Route 53 is a highly available and scalable Domain Name System (DNS) web service.',
    keyPoints: [
      'Domain registration and DNS routing',
      'Health checks and failover',
      'Multiple routing policies',
      '100% availability SLA'
    ],
    useCases: ['Domain management', 'Traffic routing', 'Disaster recovery', 'Load balancing'],
    examTips: 'Know all routing policies: Simple, Weighted, Latency, Failover, Geolocation, Geoproximity, Multivalue.',
    difficulty: 'essential',
    relatedServices: ['elb', 'cloudfront', 's3'],
  },
  {
    id: 'cloudfront',
    name: 'Amazon CloudFront',
    shortName: 'CloudFront',
    category: 'networking',
    description: 'Global content delivery network',
    fullDescription: 'Amazon CloudFront is a fast content delivery network (CDN) service that securely delivers data, videos, applications with low latency and high transfer speeds.',
    keyPoints: [
      'Global edge locations',
      'Origin access control for S3',
      'Lambda@Edge for customization',
      'DDoS protection with Shield'
    ],
    useCases: ['Static content caching', 'Video streaming', 'API acceleration', 'Software distribution'],
    examTips: 'Know origins (S3, ALB, EC2), cache behaviors, invalidations, signed URLs/cookies, and OAC.',
    difficulty: 'essential',
    relatedServices: ['s3', 'route53', 'waf'],
  },
  {
    id: 'elb',
    name: 'Elastic Load Balancing',
    shortName: 'ELB',
    category: 'networking',
    description: 'Distribute incoming traffic',
    fullDescription: 'Elastic Load Balancing automatically distributes incoming application traffic across multiple targets.',
    keyPoints: [
      'ALB for HTTP/HTTPS (Layer 7)',
      'NLB for TCP/UDP (Layer 4)',
      'GWLB for third-party appliances',
      'Health checks and auto scaling integration'
    ],
    useCases: ['High availability', 'Microservices routing', 'SSL termination', 'Blue/green deployments'],
    examTips: 'Know when to use ALB vs NLB. ALB supports path/host routing, sticky sessions. NLB for extreme performance.',
    difficulty: 'essential',
    relatedServices: ['ec2', 'ecs', 'asg'],
  },
  // SECURITY
  {
    id: 'iam',
    name: 'AWS IAM',
    shortName: 'IAM',
    category: 'security',
    description: 'Manage access to AWS services',
    fullDescription: 'AWS Identity and Access Management enables you to manage access to AWS services and resources securely.',
    keyPoints: [
      'Users, groups, roles, and policies',
      'Fine-grained permissions',
      'MFA support',
      'Federation with external identity providers'
    ],
    useCases: ['Access control', 'Cross-account access', 'Service-to-service auth', 'Temporary credentials'],
    examTips: 'Master policy structure, least privilege, roles vs users, trust policies, and permission boundaries.',
    difficulty: 'essential',
    relatedServices: ['organizations', 'sts'],
  },
  {
    id: 'kms',
    name: 'AWS KMS',
    shortName: 'KMS',
    category: 'security',
    description: 'Create and manage encryption keys',
    fullDescription: 'AWS Key Management Service makes it easy to create and manage cryptographic keys and control their use across AWS services.',
    keyPoints: [
      'Centralized key management',
      'Integrated with most AWS services',
      'Customer managed and AWS managed keys',
      'Automatic key rotation'
    ],
    useCases: ['Data encryption', 'Digital signing', 'Compliance', 'Secrets encryption'],
    examTips: 'Know CMK types, key policies, grants, envelope encryption, and cross-region key replication.',
    difficulty: 'important',
    relatedServices: ['s3', 'ebs', 'rds'],
  },
  // MANAGEMENT
  {
    id: 'cloudwatch',
    name: 'Amazon CloudWatch',
    shortName: 'CloudWatch',
    category: 'management',
    description: 'Monitor resources and applications',
    fullDescription: 'Amazon CloudWatch monitors your AWS resources and applications in real time.',
    keyPoints: [
      'Metrics, logs, and alarms',
      'Dashboards for visualization',
      'Custom metrics support',
      'Events and automation'
    ],
    useCases: ['Performance monitoring', 'Log analysis', 'Alerting', 'Auto scaling triggers'],
    examTips: 'Know default vs custom metrics, log groups, metric filters, alarms, and CloudWatch Agent for OS metrics.',
    difficulty: 'essential',
    relatedServices: ['ec2', 'lambda', 'sns'],
  },
  {
    id: 'cloudformation',
    name: 'AWS CloudFormation',
    shortName: 'CloudFormation',
    category: 'management',
    description: 'Infrastructure as code',
    fullDescription: 'AWS CloudFormation gives you an easy way to model and provision AWS resources using templates.',
    keyPoints: [
      'Template-based provisioning',
      'Stack management',
      'Drift detection',
      'Nested stacks and StackSets'
    ],
    useCases: ['Infrastructure automation', 'Consistent environments', 'Disaster recovery', 'Multi-region deployment'],
    examTips: 'Know template sections, intrinsic functions, rollback behavior, and when to use vs Elastic Beanstalk.',
    difficulty: 'important',
    relatedServices: ['ec2', 's3'],
  },
  // INTEGRATION
  {
    id: 'sqs',
    name: 'Amazon SQS',
    shortName: 'SQS',
    category: 'integration',
    description: 'Managed message queuing service',
    fullDescription: 'Amazon Simple Queue Service is a fully managed message queuing service that enables you to decouple and scale microservices.',
    keyPoints: [
      'Standard and FIFO queues',
      'At-least-once delivery (Standard)',
      'Exactly-once processing (FIFO)',
      'Dead letter queues for failures'
    ],
    useCases: ['Decoupling applications', 'Batch processing', 'Request buffering', 'Fan-out patterns'],
    examTips: 'Know Standard vs FIFO, visibility timeout, long polling, dead letter queues, and integration with Lambda.',
    difficulty: 'essential',
    relatedServices: ['sns', 'lambda'],
  },
  {
    id: 'sns',
    name: 'Amazon SNS',
    shortName: 'SNS',
    category: 'integration',
    description: 'Pub/sub messaging and notifications',
    fullDescription: 'Amazon Simple Notification Service is a fully managed messaging service for pub/sub and mobile notifications.',
    keyPoints: [
      'Push-based messaging',
      'Multiple subscriber types',
      'Message filtering',
      'Fan-out to multiple SQS queues'
    ],
    useCases: ['Application alerts', 'Push notifications', 'Email/SMS notifications', 'Event fan-out'],
    examTips: 'Know pub/sub pattern, fan-out with SQS, message filtering, and difference from SQS.',
    difficulty: 'essential',
    relatedServices: ['sqs', 'lambda', 'cloudwatch'],
  },
  // ANALYTICS
  {
    id: 'kinesis',
    name: 'Amazon Kinesis',
    shortName: 'Kinesis',
    category: 'analytics',
    description: 'Real-time streaming data',
    fullDescription: 'Amazon Kinesis makes it easy to collect, process, and analyze real-time streaming data.',
    keyPoints: [
      'Data Streams for real-time processing',
      'Data Firehose for data delivery',
      'Data Analytics for SQL queries',
      'Shard-based scaling'
    ],
    useCases: ['Log analytics', 'IoT data', 'Clickstream analytics', 'Real-time dashboards'],
    examTips: 'Know Kinesis Data Streams vs Firehose. Streams = real-time custom processing. Firehose = near real-time delivery.',
    difficulty: 'important',
    relatedServices: ['lambda', 's3', 'redshift'],
  },
  {
    id: 'athena',
    name: 'Amazon Athena',
    shortName: 'Athena',
    category: 'analytics',
    description: 'Query data in S3 with SQL',
    fullDescription: 'Amazon Athena is an interactive query service that makes it easy to analyze data in S3 using standard SQL.',
    keyPoints: [
      'Serverless - no infrastructure',
      'Pay per query',
      'Supports multiple data formats',
      'Integrates with QuickSight'
    ],
    useCases: ['Log analysis', 'Ad-hoc queries', 'Data lake analytics', 'Cost analysis'],
    examTips: 'Know Athena is serverless SQL for S3. Use partitioning and columnar formats (Parquet) for cost optimization.',
    difficulty: 'important',
    relatedServices: ['s3', 'glue', 'quicksight'],
  },
];

// Quiz questions
export const quizQuestions = [
  {
    id: 1,
    question: 'Which EC2 pricing model offers the highest discount for long-term, predictable workloads?',
    options: ['On-Demand', 'Reserved Instances', 'Spot Instances', 'Dedicated Hosts'],
    correct: 1,
    explanation: 'Reserved Instances offer up to 72% discount for 1-3 year commitments with predictable usage.',
    category: 'compute',
    difficulty: 'easy',
  },
  {
    id: 2,
    question: 'What is the maximum execution time for an AWS Lambda function?',
    options: ['5 minutes', '10 minutes', '15 minutes', '30 minutes'],
    correct: 2,
    explanation: 'AWS Lambda functions can run for a maximum of 15 minutes (900 seconds).',
    category: 'compute',
    difficulty: 'medium',
  },
  {
    id: 3,
    question: 'Which S3 storage class offers the lowest cost for long-term archival with 12+ hour retrieval?',
    options: ['S3 Standard', 'S3 Glacier', 'S3 Glacier Deep Archive', 'S3 One Zone-IA'],
    correct: 2,
    explanation: 'S3 Glacier Deep Archive is the lowest-cost storage class designed for long-term retention with 12-48 hour retrieval.',
    category: 'storage',
    difficulty: 'easy',
  },
  {
    id: 4,
    question: 'Which database feature provides automatic failover for high availability in RDS?',
    options: ['Read Replicas', 'Multi-AZ deployment', 'Aurora Global Database', 'DynamoDB Global Tables'],
    correct: 1,
    explanation: 'Multi-AZ deployment provides automatic failover to a standby instance in a different Availability Zone.',
    category: 'database',
    difficulty: 'easy',
  },
  {
    id: 5,
    question: 'Which Route 53 routing policy routes traffic based on the location of your users?',
    options: ['Simple', 'Weighted', 'Latency', 'Geolocation'],
    correct: 3,
    explanation: 'Geolocation routing policy routes traffic based on the geographic location of users.',
    category: 'networking',
    difficulty: 'medium',
  },
  {
    id: 6,
    question: 'What is the key difference between Security Groups and NACLs?',
    options: [
      'Security Groups are stateful, NACLs are stateless',
      'Security Groups are stateless, NACLs are stateful',
      'Both are stateful',
      'Both are stateless'
    ],
    correct: 0,
    explanation: 'Security Groups are stateful (return traffic allowed automatically), while NACLs are stateless (rules needed for both directions).',
    category: 'security',
    difficulty: 'medium',
  },
  {
    id: 7,
    question: 'Which service is best for decoupling application components with a message queue?',
    options: ['Amazon SNS', 'Amazon SQS', 'Amazon EventBridge', 'AWS Step Functions'],
    correct: 1,
    explanation: 'Amazon SQS is a message queuing service designed to decouple and scale microservices and distributed systems.',
    category: 'integration',
    difficulty: 'easy',
  },
  {
    id: 8,
    question: 'Which EBS volume type is optimized for large, sequential workloads like big data?',
    options: ['gp3', 'io2', 'st1', 'sc1'],
    correct: 2,
    explanation: 'st1 (Throughput Optimized HDD) is designed for frequently accessed, throughput-intensive workloads like big data.',
    category: 'storage',
    difficulty: 'medium',
  },
  {
    id: 9,
    question: 'Which service provides a serverless way to query data stored in S3 using SQL?',
    options: ['Amazon RDS', 'Amazon Redshift', 'Amazon Athena', 'Amazon EMR'],
    correct: 2,
    explanation: 'Amazon Athena is a serverless interactive query service to analyze data in S3 using standard SQL.',
    category: 'analytics',
    difficulty: 'easy',
  },
  {
    id: 10,
    question: 'What is the purpose of AWS CloudTrail?',
    options: [
      'Monitor application performance',
      'Log API calls and user activity',
      'Manage encryption keys',
      'Deploy infrastructure as code'
    ],
    correct: 1,
    explanation: 'AWS CloudTrail records API calls and user activity for governance, compliance, and operational auditing.',
    category: 'management',
    difficulty: 'easy',
  },
];

// Flashcard data
export const flashcards = services.map(service => ({
  id: service.id,
  front: service.name,
  back: service.description,
  details: service.examTips,
  category: service.category,
}));

// Matching game pairs
export const matchingPairs = services.slice(0, 12).map(service => ({
  id: service.id,
  term: service.shortName,
  definition: service.description,
}));

export default services;
