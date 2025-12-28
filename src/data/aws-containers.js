// AWS Containers Services Content
export const containerServices = [
  {
    id: 'eks',
    name: 'Amazon EKS',
    details: `Managed Kubernetes service to run Kubernetes clusters on AWS. Handles control plane management, scaling, patching, and availability. Fully managed Kubernetes control plane (highly available, auto-patched). Supports native Kubernetes tools (kubectl, Helm). Integrates with AWS services (IAM, VPC, ALB, CloudWatch). Supports Fargate (serverless compute for pods) and EC2 worker nodes. Multi-AZ deployment for high availability. EKS Add-ons for easier management of core components.`,
    useCases: ['Running containerized microservices with Kubernetes', 'Hybrid or multi-cloud Kubernetes workloads', 'Migrating on-premises Kubernetes to AWS', 'Workloads requiring Kubernetes ecosystem tools'],
    bestPractices: ['Use IAM roles for service accounts (IRSA) for least-privilege pod access', 'Deploy worker nodes in private subnets', 'Enable logging and monitoring with CloudWatch', 'Use managed node groups for easier updates and scaling', 'Regularly update Kubernetes versions for security and features'],
    examTips: ['EKS is for teams needing Kubernetes compatibility and portability', 'Control plane is managed by AWS; you manage worker nodes', 'Supports both EC2 and Fargate for compute', 'Integrates with AWS networking and security (VPC, SG, IAM)', 'Use EKS for Kubernetes-native workloads, not for simple container orchestration']
  },
  {
    id: 'ecs',
    name: 'Amazon ECS',
    details: `Fully managed container orchestration service by AWS. Supports Docker containers; no Kubernetes knowledge required. Two launch types: EC2 (user-managed instances) and Fargate (serverless). Deep AWS integration (IAM, VPC, CloudWatch, ALB/NLB). Service Auto Scaling and Task Placement Strategies. Supports blue/green deployments with CodeDeploy. Cluster management, service discovery, and secrets integration.`,
    useCases: ['Running microservices or batch jobs in containers', 'Applications needing tight AWS integration', 'Teams preferring AWS-native orchestration over Kubernetes', 'Event-driven workloads (integrates with EventBridge, Lambda)'],
    bestPractices: ['Use Fargate for serverless, simplified operations', 'Use ECS Service Auto Scaling for cost efficiency', 'Store secrets in AWS Secrets Manager or SSM Parameter Store', 'Use ALB for dynamic port mapping and service discovery', 'Monitor with CloudWatch and enable container insights'],
    examTips: ['ECS is AWS-native, simpler than EKS for most use cases', 'Fargate removes need to manage EC2 instances', 'Use ECS for AWS-centric, non-Kubernetes workloads', 'Task definitions specify container settings', 'ECS integrates with ECR for image storage']
  },
  {
    id: 'ecr',
    name: 'Amazon ECR',
    details: `Fully managed Docker container registry. Stores, manages, and deploys container images. Private and public repositories. Integrated with ECS, EKS, Lambda, and CodeBuild. Image scanning for vulnerabilities. Lifecycle policies for image cleanup. Supports cross-region replication.`,
    useCases: ['Storing container images for ECS/EKS deployments', 'Sharing images across AWS accounts or regions', 'Automating CI/CD pipelines with image versioning'],
    bestPractices: ['Enable image scanning for security', 'Use lifecycle policies to manage storage costs', 'Use repository policies for fine-grained access control', 'Replicate images to other regions for DR and latency'],
    examTips: ['ECR is the default image registry for AWS container services', 'Integrates natively with ECS, EKS, and Fargate', 'Supports authentication via IAM', 'Use ECR for secure, scalable image storage and distribution']
  }
];
