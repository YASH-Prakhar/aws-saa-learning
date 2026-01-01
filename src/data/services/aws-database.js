// AWS Database Services Content
export const databaseServices = [
  {
    id: 'aurora',
    name: 'Amazon Aurora',
    details: `MySQL- and PostgreSQL-compatible, fully managed, up to 5x faster than standard MySQL, 3x faster than PostgreSQL. High availability with up to 15 read replicas, automatic failover, continuous backup to S3, and replication across 3 AZs.`,
    useCases: ['Enterprise applications', 'SaaS', 'Web/mobile backends needing high performance, scalability, and availability'],
    bestPractices: ['Use Aurora Serverless for variable workloads', 'Enable Multi-AZ for HA', 'Use read replicas for scaling reads', 'Monitor with CloudWatch'],
    examNotes: ['Aurora is not a drop-in replacement for all MySQL/PostgreSQL features', 'Supports Global Databases for cross-region replication'],
    relatedServices: ['rds', 'vpc', 'kms', 'cloudwatch']
  },
  {
    id: 'documentdb',
    name: 'Amazon DocumentDB',
    details: `MongoDB-compatible, fully managed, supports JSON document storage, automatic scaling, backup, and patching.`,
    useCases: ['Content management', 'Catalogs', 'User profiles', 'Applications using MongoDB drivers'],
    bestPractices: ['Use for MongoDB workloads needing managed service', 'Enable encryption', 'Use parameter groups for tuning'],
    examNotes: ['Not all MongoDB features are supported; designed for compatibility, not full parity'],
    relatedServices: ['rds', 'kms', 'vpc']
  },
  {
    id: 'dynamodb',
    name: 'Amazon DynamoDB',
    details: `NoSQL, key-value/document, single-digit ms latency, fully managed, multi-region, multi-active, built-in security, backup, restore, DAX (in-memory cache), Streams, TTL, Global Tables.`,
    useCases: ['Serverless apps', 'IoT', 'Gaming', 'Mobile', 'Real-time analytics', 'High-traffic web apps'],
    bestPractices: ['Use partition keys wisely', 'Enable Auto Scaling', 'Use DAX for caching', 'Enable Streams for event-driven apps', 'Use On-Demand for unpredictable workloads'],
    examNotes: ['Understand consistency models (eventual/strong)', 'GSIs/LSIs', 'Capacity modes (provisioned/on-demand)', 'Backup/restore'],
    relatedServices: ['dax', 'lambda', 's3', 'cloudwatch']
  },
  {
    id: 'elasticache',
    name: 'Amazon ElastiCache',
    details: `Fully managed Redis/Memcached, in-memory caching, sub-millisecond latency, supports replication, backup, failover, and scaling.`,
    useCases: ['Caching', 'Session management', 'Real-time analytics', 'Leaderboards', 'Pub/sub'],
    bestPractices: ['Use Redis for persistence/replication', 'Memcached for simple cache', 'Enable Multi-AZ for HA', 'Monitor with CloudWatch'],
    examNotes: ['Know differences between Redis and Memcached', 'Use cases for each', 'Failover options'],
    relatedServices: ['dynamodb', 'rds', 'cloudwatch']
  },
  {
    id: 'keyspaces',
    name: 'Amazon Keyspaces',
    details: `Managed Apache Cassandra-compatible, serverless, scalable, highly available, supports CQL, automatic replication across AZs.`,
    useCases: ['IoT', 'Time-series data', 'Messaging', 'Applications using Cassandra drivers'],
    bestPractices: ['Use for Cassandra workloads needing managed service', 'Design tables for query patterns', 'Monitor with CloudWatch'],
    examNotes: ['No server management', 'Pay-per-request', 'Compatible with Cassandra drivers'],
    relatedServices: ['dynamodb', 'kms']
  },
  {
    id: 'neptune',
    name: 'Amazon Neptune',
    details: `Fully managed graph database, supports property graph (TinkerPop/Gremlin) and RDF (SPARQL), high performance, multi-AZ, automatic backup.`,
    useCases: ['Social networks', 'Fraud detection', 'Knowledge graphs', 'Recommendation engines'],
    bestPractices: ['Choose the right graph model', 'Use Multi-AZ for HA', 'Monitor queries for performance'],
    examNotes: ['Know supported graph models', 'Use cases', 'Integration with analytics tools'],
    relatedServices: ['rds', 'elasticsearch']
  },
  {
    id: 'rds',
    name: 'Amazon RDS',
    details: `Managed relational DB (MySQL, PostgreSQL, MariaDB, Oracle, SQL Server), automated backups, patching, Multi-AZ, read replicas, scaling.`,
    useCases: ['Web/mobile apps', 'ERP', 'CRM', 'Legacy app migration'],
    bestPractices: ['Enable Multi-AZ for HA', 'Use read replicas for scaling', 'Automate backups', 'Monitor with CloudWatch'],
    examNotes: ['Know engine options', 'Multi-AZ vs. read replica', 'Backup/restore', 'Failover'],
    relatedServices: ['aurora', 'elasticache', 'kms', 'vpc']
  },
  {
    id: 'redshift',
    name: 'Amazon Redshift',
    details: `Managed data warehouse, columnar storage, massively parallel processing (MPP), integrates with S3 (Redshift Spectrum), supports SQL, automatic scaling, concurrency scaling.`,
    useCases: ['Analytics', 'BI', 'Reporting', 'Data lake integration'],
    bestPractices: ['Use Spectrum for S3 queries', 'Enable concurrency scaling', 'Use distribution/sort keys wisely', 'Monitor with CloudWatch'],
    examNotes: ['Know use cases', 'Integration with S3', 'Scaling options', 'Pricing model'],
    relatedServices: ['s3', 'rds', 'cloudwatch']
  }
];
