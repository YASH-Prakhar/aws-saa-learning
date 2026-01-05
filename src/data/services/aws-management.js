// AWS Management & Governance Services Content
export const managementServices = [
  {
    id: 'autoscaling',
    name: 'AWS Auto Scaling',
    details: `Monitors applications and automatically adjusts capacity to maintain steady, predictable performance at the lowest possible cost. Can be used for EC2 instances, ECS tasks, DynamoDB tables, Aurora Replicas, and more.`,
    useCases: ['Web applications with variable traffic', 'Batch processing jobs', 'Cost optimization by scaling down during off-peak hours', 'Ensuring high availability and fault tolerance'],
    bestPractices: ['Use target tracking for most workloads (e.g., keep average CPU at 50%)', 'Set appropriate minimum and maximum capacity', 'Use health checks (EC2 and ELB) for instance replacement', 'Combine with Elastic Load Balancing for distributing traffic', 'Monitor scaling activity and adjust policies as needed'],
    examNotes: ['Know the difference between Auto Scaling Group (ASG) and AWS Auto Scaling (service that manages scaling for multiple resources)', 'Understand scaling policies and when to use each', 'Remember that scaling can be triggered by CloudWatch alarms', 'Auto Scaling can span multiple AZs for high availability'],
    relatedServices: ['ec2', 'elb', 'cloudwatch', 'dynamodb', 'ecs']
  },
  {
    id: 'cloudformation',
    name: 'AWS CloudFormation',
    details: `Infrastructure as Code (IaC) service for modeling and provisioning AWS resources. Uses templates (YAML or JSON) to define resources and their relationships.`,
    useCases: ['Automated, repeatable infrastructure deployment', 'Multi-account, multi-region resource provisioning', 'Version control for infrastructure', 'Disaster recovery and environment replication'],
    bestPractices: ['Modularize templates using nested stacks', 'Use parameters for customization and reusability', 'Store templates in version control (e.g., Git)', 'Use Change Sets to review updates before applying', 'Enable drift detection to ensure stack integrity', 'Use Outputs to export values for cross-stack references'],
    examNotes: ['Know the difference between stacks, StackSets, and nested stacks', 'Understand how parameters, mappings, and outputs work', 'CloudFormation is free; you pay only for the resources created', 'Be aware of rollback behavior on stack failure', 'CloudFormation can provision almost all AWS resources'],
    relatedServices: ['s3', 'ec2', 'iam', 'cloudtrail', 'sns']
  },
  {
    id: 'cloudtrail',
    name: 'AWS CloudTrail',
    details: `Tracks API calls and user activity across AWS accounts for governance, compliance, and operational auditing. Records management events (control plane), data events (S3, Lambda), and insights events (unusual activity). Delivers logs to S3, integrates with CloudWatch Logs. Supports multi-region and organization trails.`,
    useCases: ['Security auditing', 'Troubleshooting', 'Compliance reporting', 'Detecting unauthorized activity'],
    bestPractices: ['Enable CloudTrail in all regions', 'Protect log files with encryption and access controls', 'Integrate with CloudWatch for real-time alerts'],
    examNotes: ['Know what CloudTrail logs', 'How to enable organization-wide trails', 'How to use for compliance'],
    relatedServices: ['cloudwatch', 's3', 'config', 'securityhub', 'organizations']
  },
  {
    id: 'cloudwatch',
    name: 'Amazon CloudWatch',
    details: `Monitoring and observability for AWS resources and applications. Collects metrics, logs, and events. Alarms, dashboards, custom metrics, and CloudWatch Agent for OS-level metrics. CloudWatch Events (now EventBridge) for automation.`,
    useCases: ['Performance monitoring', 'Log analysis', 'Alerting', 'Auto scaling triggers'],
    bestPractices: ['Set up alarms for critical metrics', 'Use dashboards for visibility', 'Centralize logs for analysis'],
    examNotes: ['Know default vs custom metrics', 'Log groups', 'Metric filters', 'Alarms', 'Agent usage'],
    relatedServices: ['autoscaling', 'lambda', 'ec2', 'rds', 'eventbridge']
  },
  {
    id: 'config',
    name: 'AWS Config',
    details: `Assesses, audits, and evaluates AWS resource configurations. Tracks configuration changes and relationships. Supports compliance rules and remediation. Snapshots and timeline of resource states.`,
    useCases: ['Compliance auditing', 'Security analysis', 'Change management', 'Troubleshooting'],
    bestPractices: ['Enable across all accounts and regions', 'Use managed rules for compliance', 'Integrate with Lambda for auto-remediation'],
    examNotes: ['How Config rules work', 'Resource timeline', 'Compliance reporting'],
    relatedServices: ['cloudtrail', 'iam', 'sns', 'lambda', 'securityhub']
  },
  {
    id: 'licensemanager',
    name: 'AWS License Manager',
    details: `Manage software licenses (Microsoft, SAP, Oracle, IBM) across AWS and on-premises. Centralized license tracking and enforcement. Automated discovery of license usage. Integration with AWS services (EC2, Systems Manager).`,
    useCases: ['License compliance', 'Cost optimization', 'Software audits'],
    bestPractices: ['Define license rules to prevent overuse', 'Regularly review license usage reports'],
    examNotes: ['License Manager\'s role in compliance', 'Integration with EC2/SSM'],
    relatedServices: ['ec2', 'ssm', 'iam', 'organizations']
  },
  {
    id: 'organizations',
    name: 'AWS Organizations',
    details: `Centrally manage and govern multiple AWS accounts. Consolidated billing, Service Control Policies (SCPs), account automation. Organizational Units (OUs) for grouping. Integration with CloudTrail, Config, and SSO.`,
    useCases: ['Multi-account management', 'Security boundaries', 'Cost control', 'Delegated administration'],
    bestPractices: ['Use OUs for environment separation (prod, dev)', 'Apply SCPs for least privilege', 'Enable all features for full control'],
    examNotes: ['SCPs', 'Consolidated billing', 'Account structure'],
    relatedServices: ['iam', 'cloudtrail', 'config', 'costexplorer']
  },
  {
    id: 'ssm',
    name: 'AWS Systems Manager',
    details: `Unified interface for managing AWS resources at scale. Automation, patching, inventory, parameter store, Session Manager (remote access). Run Command, State Manager, OpsCenter.`,
    useCases: ['Patch management', 'Automation', 'Secure remote administration', 'Inventory collection'],
    bestPractices: ['Use SSM Agent for managed instances', 'Store secrets in Parameter Store (with encryption)', 'Automate common tasks with Run Command and Automation documents'],
    examNotes: ['SSM capabilities', 'Secure access (Session Manager)', 'Automation features'],
    relatedServices: ['ec2', 'iam', 'cloudwatch', 'secretsmanager', 'eventbridge']
  }
];
