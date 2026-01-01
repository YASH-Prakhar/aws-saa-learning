// AWS Migration & Transfer Services Content
export const migrationTransferServices = [
  {
    id: 'dms',
    name: 'AWS DMS (Database Migration Service)',
    details: `Fully managed service to migrate databases to AWS quickly and securely. Supports both homogeneous (e.g., Oracle to Oracle) and heterogeneous (e.g., Oracle to Aurora) migrations. Can migrate data to/from most commercial and open-source databases (e.g., Oracle, SQL Server, MySQL, PostgreSQL, MariaDB, MongoDB, Amazon Aurora, Amazon Redshift, Amazon S3, DynamoDB, DocumentDB).`,
    useCases: ['Migrate on-premises or cloud databases to AWS', 'Database consolidation (e.g., to Amazon Redshift)', 'Continuous data replication for disaster recovery', 'Modernize to open-source or managed AWS databases', 'Re-host databases on Amazon EC2'],
    bestPractices: ['Test migrations with a sample dataset before full migration', 'Use DMS Schema Conversion Tool (SCT) for heterogeneous migrations', 'Enable Multi-AZ for production workloads', 'Monitor tasks with CloudWatch and enable logging', 'Validate data post-migration', 'Use proper sizing for replication instances based on workload'],
    examNotes: ['At least one endpoint must be on AWS (cannot migrate from on-prem to on-prem)', 'DMS does not migrate stored procedures, triggers, or user accounts (use SCT for schema conversion)', 'DMS is not a backup solution', 'Data transfer within the same AZ is free; cross-AZ or out-of-AWS incurs charges', 'DMS is cost-effective: pay only for replication instance and storage', 'Six months free for migrations to Aurora, DynamoDB, DocumentDB, or Redshift', 'DMS is the go-to service for database migrations with minimal downtime', 'Supports both one-time and ongoing replication', 'Multi-AZ deployment increases fault tolerance', 'DMS can be used for continuous replication (e.g., for DR or hybrid cloud)', 'DMS does not require changes to source database', 'DMS supports data transformation and filtering during migration'],
    relatedServices: ['rds', 'dynamodb', 'redshift', 's3', 'ec2', 'cloudwatch']
  }
];
