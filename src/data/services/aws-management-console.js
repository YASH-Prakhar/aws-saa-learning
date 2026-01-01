// AWS Management Console Content
export const managementConsoleServices = [
  {
    id: 'console',
    name: 'AWS Management Console',
    details: `Web-based UI for managing AWS resources. Access over 200 AWS services globally. No CLI or SDK knowledge required; ideal for beginners and visual management.`,
    useCases: ['Initial setup and configuration of AWS services', 'Visual monitoring and troubleshooting', 'Managing IAM users, roles, and permissions', 'Tagging and grouping resources for automation and reporting', 'Billing and cost management'],
    bestPractices: ['Use IAM users/roles (not root) for daily tasks; apply least privilege principle', 'Enable MFA for all accounts', 'Regularly review and update resource tags for cost tracking', 'Use Resource Groups for bulk actions and automation', 'Monitor usage and billing via the console dashboard'],
    examNotes: ['The console is region-specific; always check the selected region', 'Some services are global (e.g., IAM, Route 53), most are regional', 'Tagging is crucial for cost allocation and automation', 'Resource Groups can be created based on tags or CloudFormation stacks', 'The console supports multi-factor authentication and integrates with AWS Organizations for multi-account management', 'CloudShell is available in the console for running AWS CLI commands without local setup', 'Not ideal for automation or large-scale changes (use CLI/SDK/CloudFormation for that)', 'Some advanced features may only be available via CLI or API'],
    relatedServices: ['iam', 'cloudformation', 'organizations', 'costexplorer', 'cloudwatch']
  }
];
