// AWS Management & Governance Services Content
export const managementServices = [
  {
    id: 'autoscaling',
    name: 'AWS Auto Scaling',
    details: `Monitors applications and automatically adjusts capacity to maintain steady, predictable performance at the lowest possible cost. Can be used for EC2 instances, ECS tasks, DynamoDB tables, Aurora Replicas, and more.`,
    useCases: ['Web applications with variable traffic', 'Batch processing jobs', 'Cost optimization by scaling down during off-peak hours', 'Ensuring high availability and fault tolerance'],
    bestPractices: ['Use target tracking for most workloads (e.g., keep average CPU at 50%)', 'Set appropriate minimum and maximum capacity', 'Use health checks (EC2 and ELB) for instance replacement', 'Combine with Elastic Load Balancing for distributing traffic', 'Monitor scaling activity and adjust policies as needed'],
    examNotes: ['Know the difference between Auto Scaling Group (ASG) and AWS Auto Scaling (service that manages scaling for multiple resources)', 'Understand scaling policies and when to use each', 'Remember that scaling can be triggered by CloudWatch alarms', 'Auto Scaling can span multiple AZs for high availability']
  },
  {
    id: 'cloudformation',
    name: 'AWS CloudFormation',
    details: `Infrastructure as Code (IaC) service for modeling and provisioning AWS resources. Uses templates (YAML or JSON) to define resources and their relationships.`,
    useCases: ['Automated, repeatable infrastructure deployment', 'Multi-account, multi-region resource provisioning', 'Version control for infrastructure', 'Disaster recovery and environment replication'],
    bestPractices: ['Modularize templates using nested stacks', 'Use parameters for customization and reusability', 'Store templates in version control (e.g., Git)', 'Use Change Sets to review updates before applying', 'Enable drift detection to ensure stack integrity', 'Use Outputs to export values for cross-stack references'],
    examNotes: ['Know the difference between stacks, StackSets, and nested stacks', 'Understand how parameters, mappings, and outputs work', 'CloudFormation is free; you pay only for the resources created', 'Be aware of rollback behavior on stack failure', 'CloudFormation can provision almost all AWS resources']
  }
];
