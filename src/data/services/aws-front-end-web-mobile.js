// AWS Front End Web & Mobile Services Content
export const frontEndWebMobileServices = [
  {
    id: 'appsync',
    name: 'AWS AppSync',
    details: `Fully managed, serverless service for building GraphQL and Pub/Sub APIs. Enables real-time data queries, updates, and subscriptions for web/mobile apps. Unifies access to multiple data sources (DynamoDB, Lambda, RDS, HTTP APIs, etc.).`,
    useCases: ['Real-time collaboration apps (chat, dashboards)', 'Mobile/web backends needing unified data access', 'Federated APIs aggregating multiple microservices', 'AI/ML gateway for Amazon Bedrock', 'Event-driven architectures (subscriptions, notifications)'],
    bestPractices: ['Use fine-grained auth (IAM, Cognito) for production', 'Cache frequently accessed data to reduce backend load', 'Use pipeline resolvers for complex workflows', 'Monitor with CloudWatch and X-Ray for troubleshooting', 'Apply schema versioning for API evolution'],
    examNotes: ['Know the difference between GraphQL queries, mutations, and subscriptions', 'Understand resolver types and data source integrations', 'Be familiar with security/auth options and when to use each', 'Recognize use cases for real-time data and API aggregation', 'Remember monitoring and caching capabilities'],
    relatedServices: ['lambda', 'cognito', 'dynamodb', 'rds', 'cloudwatch']
  }
];
