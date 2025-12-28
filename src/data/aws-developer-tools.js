// AWS Developer Tools Content
export const developerToolsServices = [
  {
    id: 'codebuild',
    name: 'AWS CodeBuild',
    details: `Fully managed continuous integration (CI) build service. Compiles source code, runs tests, and produces deployable artifacts. Scales automatically and processes multiple builds concurrently. Supports custom build environments via Docker images. Integrates with CodePipeline, CodeCommit, S3, and third-party repos. Pay-as-you-go pricing.`,
    useCases: ['Automating build and test phases in CI/CD pipelines', 'Building Docker images for containerized deployments', 'Running security or compliance checks as part of the build'],
    bestPractices: ['Use buildspec.yml for build instructions', 'Encrypt artifacts and logs', 'Use IAM roles for least-privilege access'],
    examNotes: ['No servers to manage', 'Supports VPC integration for private resources', 'Can cache dependencies to speed up builds']
  },
  {
    id: 'codecommit',
    name: 'AWS CodeCommit',
    details: `Fully managed, secure, scalable Git-based repository service. Encrypted at rest and in transit. Supports triggers (e.g., Lambda, SNS) on repo events. Integrates with CodePipeline and other AWS tools. No size limits on repos or files.`,
    useCases: ['Source control for code, scripts, and configuration', 'Storing infrastructure-as-code (CloudFormation, Terraform)', 'Enabling team collaboration with access control'],
    bestPractices: ['Use IAM for fine-grained access', 'Enable notifications for repo changes', 'Use pull requests for code reviews'],
    examNotes: ['Alternative to GitHub/Bitbucket for AWS-native workflows', 'Can be used for hybrid or regulated environments']
  },
  {
    id: 'codedeploy',
    name: 'AWS CodeDeploy',
    details: `Automates code deployments to EC2, Lambda, and on-premises servers. Supports blue/green, canary, and rolling deployments. Integrates with CodePipeline, CloudWatch, and SNS. Handles rollback and deployment health checks. Supports hooks for custom scripts at lifecycle events.`,
    useCases: ['Zero-downtime deployments for web apps', 'Automated Lambda function version updates', 'Hybrid cloud/on-premises deployments'],
    bestPractices: ['Use deployment groups and tags for targeting', 'Monitor deployments with CloudWatch', 'Automate rollback on failure'],
    examNotes: ['Blue/green deployment minimizes downtime and risk', 'Can deploy to EC2, Lambda, and on-premises']
  },
  {
    id: 'xray',
    name: 'AWS X-Ray',
    details: `Distributed tracing system for analyzing and debugging applications. Visualizes service maps and traces requests end-to-end. Identifies bottlenecks, errors, and performance issues. Integrates with Lambda, ECS, EC2, API Gateway, and more. Supports custom annotations and metadata.`,
    useCases: ['Debugging microservices and serverless architectures', 'Tracing user requests across distributed systems', 'Performance optimization and root cause analysis'],
    bestPractices: ['Instrument all application components', 'Use sampling to control trace volume', 'Secure trace data with IAM and encryption'],
    examNotes: ['Useful for troubleshooting latency and errors', 'Works with both AWS and on-premises workloads']
  }
];
