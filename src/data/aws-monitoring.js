// AWS Monitoring Services Content
export const monitoringServices = [
  {
    id: 'phd',
    name: 'AWS Personal Health Dashboard (PHD)',
    details: `A personalized dashboard that provides alerts and remediation guidance when AWS is experiencing events that may impact your account. Shows both ongoing and upcoming events that are relevant to your AWS resources.`,
    useCases: ['Proactive guidance', 'Planned lifecycle events', 'Incident troubleshooting', 'Monitoring at scale'],
    bestPractices: ['Regularly monitor the dashboard for new events', 'Set up EventBridge rules to automate notifications and remediation', 'Use the AWS Health API for integration with monitoring/incident management systems', 'Review AWS guidance and follow recommended actions for each event'],
    examNotes: ['PHD is different from the AWS Service Health Dashboard (which shows global/regional AWS status, not account-specific)', 'PHD is available to all AWS customers, but API access requires Business or Enterprise Support', 'Useful for operational excellence and reliability in the AWS Well-Architected Framework', 'Helps minimize downtime by providing timely, actionable information']
  }
];
