// AWS Compute Services Content
export const computeServices = [
  {
    id: 'ec2',
    name: 'Amazon EC2',
    details: `Virtual servers in the cloud (“instances”). Wide variety of instance types (general, compute, memory, storage optimized). Supports On-Demand, Reserved, Spot, and Dedicated Hosts/Instances. Auto Scaling and Elastic Load Balancing integration. Custom AMIs, EBS volumes, and instance metadata. Security via Security Groups, Key Pairs, IAM roles.`,
    useCases: ['Hosting web servers', 'Application servers', 'Databases', 'Batch processing', 'High-performance computing', 'Lift-and-shift migrations'],
    bestPractices: ['Use Auto Scaling for elasticity', 'Use IAM roles for instance permissions', 'Store data on EBS, not instance store', 'Use Security Groups for least privilege', 'Use Placement Groups for low-latency/high-throughput'],
    examNotes: ['Know pricing models and when to use each', 'Understand EC2 networking (ENI, EIP, Security Groups)', 'Understand EC2 storage options (EBS, instance store)', 'Know how to use EC2 with Auto Scaling and ELB']
  },
  {
    id: 'batch',
    name: 'AWS Batch',
    details: `Fully managed batch processing at any scale. Dynamically provisions compute resources (EC2/Spot/Fargate). Job queues, job definitions, compute environments. Supports array jobs and job dependencies.`,
    useCases: ['Large-scale parallel and high-performance computing', 'Data analysis', 'Scientific simulations', 'Media processing'],
    bestPractices: ['Use Spot Instances for cost savings', 'Separate job queues for different priorities', 'Use managed compute environments for simplicity'],
    examNotes: ['Understand job queue, job definition, compute environment concepts', 'Know integration with EC2, Spot, and Fargate', 'Batch is for scheduled, parallel, or high-throughput jobs']
  },
  {
    id: 'beanstalk',
    name: 'AWS Elastic Beanstalk',
    details: `Platform-as-a-Service (PaaS) for web apps. Supports Java, .NET, PHP, Node.js, Python, Ruby, Go, Docker. Handles provisioning, load balancing, scaling, monitoring. Allows custom configuration via .ebextensions.`,
    useCases: ['Rapid deployment of web applications', 'Developers who want to focus on code, not infrastructure'],
    bestPractices: ['Use environment variables for configuration', 'Store persistent data outside Beanstalk (e.g., S3, RDS)', 'Use rolling updates for zero downtime'],
    examNotes: ['Know Beanstalk automates infrastructure management', 'You can still access underlying resources (EC2, ELB, etc.)', 'Good for simple, fast deployments']
  },
  {
    id: 'lambda',
    name: 'AWS Lambda',
    details: `Serverless compute—run code in response to events. Supports many languages (Node.js, Python, Java, Go, etc.). Automatic scaling, subsecond metering. Integrates with API Gateway, S3, DynamoDB, EventBridge, etc.`,
    useCases: ['Event-driven processing', 'Real-time data processing', 'Backend for web/mobile apps'],
    bestPractices: ['Keep functions small and single-purpose', 'Use environment variables for config', 'Monitor with CloudWatch', 'Package dependencies with your code'],
    examNotes: ['Know Lambda limits (timeout, memory, package size)', 'Understand event sources and triggers', 'Lambda is stateless; use external storage for state']
  },
  {
    id: 'sar',
    name: 'AWS SAR (Serverless Application Repository)',
    details: `Repository for serverless applications and components. Deploy pre-built Lambda-based apps with one click. Supports sharing within organizations or publicly.`,
    useCases: ['Reusing serverless components', 'Sharing best practices and solutions'],
    bestPractices: ['Use SAR to accelerate development', 'Review permissions and IAM roles of SAR apps'],
    examNotes: ['SAR is for deploying and sharing Lambda-based apps', 'Useful for rapid prototyping and standardization']
  },
  {
    id: 'fargate',
    name: 'AWS Fargate',
    details: `Serverless compute engine for containers (ECS/EKS). No need to manage EC2 instances. Scales and manages infrastructure automatically. Supports IAM, VPC, and EFS integration.`,
    useCases: ['Microservices', 'Batch jobs', 'Event-driven containers', 'Running containers without managing servers'],
    bestPractices: ['Use Fargate for unpredictable workloads', 'Use IAM roles for task-level security', 'Monitor with CloudWatch and Container Insights'],
    examNotes: ['Fargate is for running containers serverlessly', 'Know differences between Fargate and EC2 launch types', 'Fargate supports both ECS and EKS']
  }
];
