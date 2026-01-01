// AWS Storage Services Content
export const storageServices = [
  {
    id: 's3',
    name: 'Amazon S3',
    details: `Object storage, unlimited scalability. Versioning, lifecycle policies, cross-region replication, event notifications, S3 Select, strong consistency, encryption (SSE-S3, SSE-KMS, SSE-C), access control (IAM, bucket policies, ACLs), storage classes (Standard, IA, One Zone-IA, Intelligent-Tiering, Glacier, Glacier Deep Archive).`,
    useCases: ['Backup and restore', 'Data lakes', 'Static website hosting', 'Big data analytics', 'Disaster recovery', 'Application hosting'],
    bestPractices: ['Enable versioning', 'Use lifecycle policies for cost optimization', 'Enable server-side encryption', 'Use MFA delete for critical data', 'Restrict access with least privilege', 'Use S3 Transfer Acceleration for global uploads'],
    examNotes: ['Know storage classes, durability (11 9\'s), availability, consistency model, and security options'],
    relatedServices: ['cloudfront', 'glacier', 'backup', 'kms']
  },
  {
    id: 'backup',
    name: 'AWS Backup',
    details: `Centralized backup management. Policy-based backup, cross-region backup, backup vaults, backup plans, resource assignment, compliance reporting, supports EBS, RDS, DynamoDB, EFS, FSx, and on-premises.`,
    useCases: ['Centralized backup for compliance', 'Disaster recovery', 'Automated backup scheduling'],
    bestPractices: ['Use backup plans for automation', 'Tag resources for backup', 'Monitor backup jobs', 'Use cross-region backup for DR'],
    examNotes: ['Understand integration with other AWS services and cross-region backup'],
    relatedServices: ['s3', 'ebs', 'rds', 'efs']
  },
  {
    id: 'ebs',
    name: 'Amazon EBS',
    details: `Block storage for EC2. SSD (gp3, io1/io2) and HDD (st1, sc1) volume types, snapshots, encryption, resizing, multi-attach (io1/io2), fast snapshot restore.`,
    useCases: ['Boot volumes', 'Databases', 'File systems', 'Enterprise applications'],
    bestPractices: ['Take regular snapshots', 'Use appropriate volume type', 'Encrypt sensitive data', 'Monitor performance', 'Use multi-attach for HA'],
    examNotes: ['Know volume types, snapshot behavior, and encryption'],
    relatedServices: ['ec2', 'kms', 'cloudwatch']
  },
  {
    id: 'efs',
    name: 'Amazon EFS',
    details: `Managed NFS file system. Elastic scaling, pay-per-use, supports NFSv4, regional service, access points, encryption, lifecycle management (move to IA).`,
    useCases: ['Shared file storage for Linux workloads', 'Web serving', 'Content management', 'Home directories'],
    bestPractices: ['Use lifecycle management', 'Restrict access with security groups', 'Use access points for multi-tenant apps'],
    examNotes: ['Understand performance modes (General Purpose, Max I/O), throughput modes, and use cases'],
    relatedServices: ['ec2', 'efs', 'vpc']
  },
  {
    id: 'fsx',
    name: 'Amazon FSx',
    details: `Managed file systems. FSx for Windows: Native Windows file system, SMB protocol, AD integration, data deduplication, shadow copies. FSx for Lustre: High-performance, POSIX-compliant, integrates with S3, parallel file system.`,
    useCases: ['Windows-based applications', 'SQL Server', 'SAP', 'HPC', 'Machine learning', 'Media processing'],
    bestPractices: ['Choose correct FSx type for workload', 'Use AD integration for Windows', 'Use S3 integration for Lustre'],
    examNotes: ['Know differences between FSx types and integration options'],
    relatedServices: ['ec2', 's3', 'directoryservice']
  },
  {
    id: 'glacier',
    name: 'Amazon S3 Glacier',
    details: `Archival object storage. Low-cost, secure, three retrieval options (Expedited, Standard, Bulk), vaults, policies, data lock, compliance features.`,
    useCases: ['Long-term backup', 'Regulatory archives', 'Digital preservation'],
    bestPractices: ['Use lifecycle policies to transition data', 'Enable vault lock for compliance', 'Plan retrieval times'],
    examNotes: ['Know retrieval options, use cases, and integration with S3 lifecycle'],
    relatedServices: ['s3', 'backup']
  },
  {
    id: 'snowball',
    name: 'AWS Snowball',
    details: `Physical data transport device. Petabyte-scale, edge computing (Snowball Edge), tamper-resistant, encryption, tracking, supports import/export.`,
    useCases: ['Large-scale data migration', 'Disaster recovery', 'Edge processing', 'Offline transfer'],
    bestPractices: ['Plan for shipping time', 'Use for bandwidth-constrained environments', 'Encrypt data'],
    examNotes: ['Know device types (Snowball, Snowball Edge, Snowmobile), use cases, and security'],
    relatedServices: ['s3', 'backup', 'datapipeline']
  },
  {
    id: 'storagegateway',
    name: 'AWS Storage Gateway',
    details: `Hybrid cloud storage. File Gateway (NFS/SMB), Volume Gateway (iSCSI), Tape Gateway (VTL), local caching, seamless integration with S3, backup integration.`,
    useCases: ['On-premises to cloud backup', 'Hybrid cloud storage', 'Tape replacement', 'Disaster recovery'],
    bestPractices: ['Use for hybrid workloads', 'Monitor cache health', 'Secure connections', 'Automate backups'],
    examNotes: ['Know gateway types, integration with S3/Backup, and use cases'],
    relatedServices: ['s3', 'backup', 'vpc']
  }
];
