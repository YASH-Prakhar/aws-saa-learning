// AWS Billing & Cost Management Services Content
export const billingCostManagementServices = [
  {
    id: 'costexplorer',
    name: 'AWS Cost Explorer',
    details: `Visualizes, analyzes, and manages AWS costs and usage over time. Provides default and custom reports (e.g., daily, monthly, by service, by linked account). Offers forecasting and cost prediction based on historical data. Supports cost allocation tags and cost categories for granular analysis. Includes rightsizing recommendations for EC2 and other services.`,
    useCases: ['Identifying cost trends and usage patterns', 'Analyzing spend by service, account, or tag', 'Forecasting future AWS spending', 'Detecting cost anomalies and optimizing resource usage'],
    bestPractices: ['Regularly review cost and usage reports', 'Use cost allocation tags for detailed tracking', 'Set up custom reports for business units or projects', 'Leverage rightsizing recommendations to optimize resources'],
    examNotes: ['Know how to use Cost Explorer for cost analysis and forecasting', 'Understand the role of tags and cost categories in reporting', 'Recognize Cost Explorer’s integration with other cost management tools']
  },
  {
    id: 'budgets',
    name: 'AWS Budgets',
    details: `Allows setting custom cost and usage budgets. Supports alerts via email or SNS when thresholds are exceeded. Can track actual and forecasted costs, usage, RI, and Savings Plans coverage/utilization. Budget Actions can automate responses (e.g., restrict IAM permissions).`,
    useCases: ['Enforcing cost controls for projects or teams', 'Alerting stakeholders when spending approaches limits', 'Automating cost-saving actions when budgets are breached'],
    bestPractices: ['Set budgets for all major projects/accounts', 'Use forecasted and actual spend tracking', 'Automate actions for critical budget thresholds'],
    examNotes: ['Know the difference between AWS Budgets and Cost Explorer', 'Understand alerting and automation capabilities', 'Recognize use cases for cost, usage, RI, and Savings Plans budgets']
  },
  {
    id: 'cur',
    name: 'AWS Cost & Usage Reports (CUR)',
    details: `Delivers the most detailed AWS cost and usage data (hourly/daily granularity). Exports CSV or Parquet files to S3 for analysis. Integrates with Amazon Athena, Redshift, and QuickSight for advanced analytics. Supports cost allocation tags and cost categories.`,
    useCases: ['Deep-dive analysis of AWS spending', 'Integrating cost data with BI tools', 'Building custom dashboards and reports'],
    bestPractices: ['Enable CUR for all production accounts', 'Use Athena/QuickSight for querying and visualization', 'Store reports in a secure, versioned S3 bucket'],
    examNotes: ['CUR provides the most granular cost data', 'Know how CUR integrates with analytics tools', 'Understand the role of S3 in storing CUR data']
  },
  {
    id: 'ri-reporting',
    name: 'Reserved Instance (RI) Reporting',
    details: `Tracks RI utilization and coverage. Reports on savings achieved through RIs. Identifies unused or underutilized RIs.`,
    useCases: ['Monitoring RI purchase effectiveness', 'Optimizing RI purchases and usage', 'Ensuring maximum savings from RIs'],
    bestPractices: ['Regularly review RI utilization and coverage', 'Adjust RI purchases based on usage patterns', 'Use RI reports to inform future purchasing decisions'],
    examNotes: ['Know how to check RI utilization and coverage', 'Understand the impact of unused RIs on cost', 'Recognize the importance of RI reporting for cost optimization']
  },
  {
    id: 'reporting',
    name: 'Reporting (General)',
    details: `AWS provides multiple reporting tools: Cost Explorer, Budgets, CUR, RI Reporting. Reports can be customized by time, service, account, tag, or cost category. Supports exporting data for external analysis.`,
    useCases: ['Financial planning and chargeback', 'Compliance and audit reporting', 'Executive dashboards and cost transparency'],
    bestPractices: ['Use a combination of tools for comprehensive reporting', 'Automate report generation and distribution', 'Align reporting with business and compliance needs'],
    examNotes: ['Understand which tool to use for which reporting need', 'Know how to export and analyze AWS cost data', 'Recognize the importance of reporting for governance and optimization']
  }
];
