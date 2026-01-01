export const databaseFlashcards = [
  {
    id: "rds-card-1",
    front: "Amazon RDS (Relational Database Service)",
    back: "Managed relational database service supporting multiple database engines",
    details: "Supports MySQL, PostgreSQL, MariaDB, Oracle, and SQL Server. Automates patching, backups, and failover with multi-AZ deployments.",
    category: "database"
  },
  {
    id: "rds-multi-az",
    front: "RDS Multi-AZ",
    back: "Deployment option providing high availability with automatic failover",
    details: "Synchronously replicates data to a standby instance in a different AZ. Automatic failover occurs in case of outage.",
    category: "database"
  },
  {
    id: "rds-read-replica",
    front: "RDS Read Replica",
    back: "Asynchronously replicated read-only copy of a database",
    details: "Used for read scaling and reporting. Can be in the same region or different regions. Can be promoted to standalone database.",
    category: "database"
  },
  {
    id: "dynamodb-card-1",
    front: "Amazon DynamoDB",
    back: "Fully managed NoSQL database with fast and predictable performance",
    details: "Key-value and document database that scales automatically. Supports on-demand and provisioned capacity modes.",
    category: "database"
  },
  {
    id: "dynamodb-dax",
    front: "DynamoDB DAX",
    back: "In-memory cache for DynamoDB providing microsecond latency",
    details: "Fully managed caching layer that transparently caches DynamoDB data for applications without requiring code changes.",
    category: "database"
  },
  {
    id: "elasticache-card-1",
    front: "Amazon ElastiCache",
    back: "In-memory data store service supporting Redis and Memcached",
    details: "Improves application performance through caching. Automatically manages patching, failover, and cluster management.",
    category: "database"
  },
  {
    id: "aurora-card-1",
    front: "Amazon Aurora",
    back: "High-performance managed relational database compatible with MySQL and PostgreSQL",
    details: "Offers 5x MySQL and 3x PostgreSQL performance with automatic scaling, automatic backups, and multi-AZ deployments.",
    category: "database"
  },
  {
    id: "redshift-card-1",
    front: "Amazon Redshift",
    back: "Data warehouse service for analytical queries on large datasets",
    details: "Fully managed, petabyte-scale data warehouse with fast query performance. Supports complex analytical queries and OLAP workloads.",
    category: "database"
  },
  {
    id: "neptune-card-1",
    front: "Amazon Neptune",
    back: "Fully managed graph database service",
    details: "Optimized for graph queries and relationships. Used for recommendation engines, knowledge graphs, and social networks.",
    category: "database"
  },
  {
    id: "dynamodb-streams",
    front: "DynamoDB Streams",
    back: "Ordered stream of item modifications in a DynamoDB table",
    details: "Captures changes (inserts, updates, deletes) and makes them available to applications in chronological order.",
    category: "database"
  }
];
