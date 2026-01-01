export const storageFlashcards = [
  {
    id: "s3-card-1",
    front: "Amazon S3",
    back: "Object storage service for storing and retrieving any amount of data",
    details: "Scalable, durable, and highly available object storage with automatic replication across multiple AZs. Supports versioning, lifecycle policies, and encryption.",
    category: "storage"
  },
  {
    id: "s3-card-2",
    front: "S3 Bucket",
    back: "A container for storing objects with a globally unique name",
    details: "Buckets are the top-level containers in S3. Each bucket can contain unlimited objects and is region-specific for data residency.",
    category: "storage"
  },
  {
    id: "ebs-card-1",
    front: "Amazon EBS (Elastic Block Store)",
    back: "Block storage volumes for EC2 instances providing persistent storage",
    details: "Provides low-latency, persistent block storage that can be attached to EC2 instances. Supports snapshots for backup and recovery.",
    category: "storage"
  },
  {
    id: "ebs-card-2",
    front: "EBS Snapshot",
    back: "A point-in-time copy of an EBS volume stored in S3",
    details: "Snapshots capture the complete state of a volume and can be used to create new volumes, enabling data protection and disaster recovery.",
    category: "storage"
  },
  {
    id: "efs-card-1",
    front: "Amazon EFS (Elastic File System)",
    back: "Scalable file storage for use with multiple EC2 instances",
    details: "NFS-compatible shared file system accessible from multiple EC2 instances simultaneously. Automatically scales and provides high availability.",
    category: "storage"
  },
  {
    id: "glacier-card-1",
    front: "Amazon Glacier",
    back: "Long-term archival storage service with low cost and 90-day minimum retention",
    details: "Designed for infrequently accessed data with retrieval times from 1 minute to 12 hours. Offers significant cost savings for archival.",
    category: "storage"
  },
  {
    id: "s3-storage-classes",
    front: "S3 Storage Classes",
    back: "Different storage options based on access patterns and retention requirements",
    details: "Standard (frequent access), Standard-IA (infrequent), One Zone-IA (single AZ), Glacier (archival), Intelligent-Tiering (automatic)",
    category: "storage"
  },
  {
    id: "storage-gateway-1",
    front: "AWS Storage Gateway",
    back: "Hybrid storage service connecting on-premises environments to AWS storage",
    details: "Provides file, volume, and tape gateway interfaces for seamless integration between on-premises and cloud storage.",
    category: "storage"
  },
  {
    id: "aws-backup-1",
    front: "AWS Backup",
    back: "Centralized, policy-based service for backing up AWS resources",
    details: "Automates and manages backups for EC2, RDS, EBS, EFS, and other services across regions with compliance reporting.",
    category: "storage"
  },
  {
    id: "s3-versioning-1",
    front: "S3 Versioning",
    back: "Feature that maintains all versions of an object with unique version IDs",
    details: "Allows recovery from accidental deletion or overwriting. Each version is a complete copy consuming storage space.",
    category: "storage"
  }
];
