export const storageQuiz = [
  {
    id: 1,
    question: "What is the maximum object size that can be stored in Amazon S3?",
    options: [
      "A) 100 GB",
      "B) 500 GB",
      "C) 5 TB",
      "D) No maximum limit"
    ],
    correct: 2,
    explanation: "Amazon S3 has a maximum object size of 5 TB. Files larger than this need to be split or use multipart upload for objects larger than 5 GB.",
    category: "storage",
    difficulty: "hard"
  },
  {
    id: 2,
    question: "Which S3 storage class provides the lowest cost for infrequently accessed data with retrieval requirements?",
    options: [
      "A) S3 Standard",
      "B) S3 Intelligent-Tiering",
      "C) S3 Glacier Deep Archive",
      "D) S3 Outposts"
    ],
    correct: 2,
    explanation: "S3 Glacier Deep Archive is the most cost-effective option for long-term archival with retrieval times of 12 hours or more.",
    category: "storage",
    difficulty: "hard"
  },
  {
    id: 3,
    question: "What does EBS stand for in AWS?",
    options: [
      "A) Elastic Byte Storage",
      "B) Elastic Block Store",
      "C) Expandable Backup Storage",
      "D) Enterprise Blob Storage"
    ],
    correct: 1,
    explanation: "EBS stands for Elastic Block Store, providing persistent block-level storage volumes for EC2 instances.",
    category: "storage",
    difficulty: "hard"
  },
  {
    id: 4,
    question: "Which feature allows you to create a point-in-time copy of an EBS volume?",
    options: [
      "A) EBS Volume Cloning",
      "B) EBS Snapshots",
      "C) EBS Backup",
      "D) EBS Replication"
    ],
    correct: 1,
    explanation: "EBS Snapshots capture the state of an EBS volume at a specific point in time and can be used to create new volumes or restore data.",
    category: "storage",
    difficulty: "hard"
  },
  {
    id: 5,
    question: "What is the primary use case for Amazon EFS?",
    options: [
      "A) Block storage for EC2 instances",
      "B) Shared file storage accessible by multiple EC2 instances",
      "C) Object storage for any type of data",
      "D) Archive storage for long-term retention"
    ],
    correct: 1,
    explanation: "Amazon EFS (Elastic File System) provides shared, scalable file storage that can be accessed by multiple EC2 instances simultaneously, ideal for NFS workloads.",
    category: "storage",
    difficulty: "hard"
  },
  {
    id: 6,
    question: "How does S3 Intelligent-Tiering work?",
    options: [
      "A) Manually moves objects between storage classes",
      "B) Automatically moves objects between access tiers based on access patterns",
      "C) Requires changing storage class monthly",
      "D) Uses only Standard and Glacier classes"
    ],
    correct: 1,
    explanation: "S3 Intelligent-Tiering automatically moves objects between different access tiers (Frequent, Infrequent, Archive, Deep Archive) based on actual access patterns, optimizing costs.",
    category: "storage",
    difficulty: "hard"
  },
  {
    id: 7,
    question: "What is the minimum retention period for objects in S3 Glacier?",
    options: [
      "A) 30 days",
      "B) 60 days",
      "C) 90 days",
      "D) 180 days"
    ],
    correct: 2,
    explanation: "S3 Glacier and S3 Glacier Deep Archive have a minimum retention period of 90 days. Objects deleted before 90 days incur early deletion fees.",
    category: "storage",
    difficulty: "medium"
  },
  {
    id: 8,
    question: "Which AWS service provides automated, centralized backup across AWS services?",
    options: [
      "A) AWS Backup",
      "B) AWS Snapshots",
      "C) AWS Disaster Recovery",
      "D) AWS Storage Gateway"
    ],
    correct: 0,
    explanation: "AWS Backup is a centralized, policy-based service that automates backup of data across AWS services including EC2, RDS, EBS, EFS, and more.",
    category: "storage",
    difficulty: "medium"
  },
  {
    id: 9,
    question: "What is the primary advantage of using S3 Transfer Acceleration?",
    options: [
      "A) Reduces object size automatically",
      "B) Accelerates uploads to S3 using CloudFront edge locations",
      "C) Increases S3 storage capacity",
      "D) Enables multi-region replication"
    ],
    correct: 1,
    explanation: "S3 Transfer Acceleration uses CloudFront's globally distributed edge locations to accelerate uploads to S3 buckets, improving transfer speeds.",
    category: "storage",
    difficulty: "medium"
  },
  {
    id: 10,
    question: "How many copies of data does Amazon S3 maintain by default?",
    options: [
      "A) 1 copy",
      "B) 2 copies across different facilities",
      "C) 3 copies across at least 2 Availability Zones",
      "D) 4 copies in different regions"
    ],
    correct: 2,
    explanation: "S3 automatically maintains at least 3 copies of every object across at least 2 Availability Zones in the same region, providing high durability.",
    category: "storage",
    difficulty: "medium"
  },
  {
    id: 11,
    question: "What does the 'Requester Pays' feature in S3 allow?",
    options: [
      "A) Bucket owner pays for all requests",
      "B) The requester (downloader) pays for data transfer costs",
      "C) Enables cross-account access with reduced costs",
      "D) Allows sharing buckets without billing impact"
    ],
    correct: 1,
    explanation: "'Requester Pays' shifts data transfer costs to the person downloading the data. The bucket owner still pays for storage but not transfer costs.",
    category: "storage",
    difficulty: "medium"
  },
  {
    id: 12,
    question: "Which EBS volume type is optimized for high-performance databases?",
    options: [
      "A) gp2/gp3",
      "B) io1/io2",
      "C) st1",
      "D) sc1"
    ],
    correct: 1,
    explanation: "io1 and io2 EBS volumes are provisioned IOPS volumes designed for high-performance, latency-sensitive databases requiring consistent high I/O performance.",
    category: "storage",
    difficulty: "medium"
  },
  {
    id: 13,
    question: "What is the maximum throughput supported by EFS?",
    options: [
      "A) 10 MB/s",
      "B) 100 MB/s",
      "C) 500 MB/s",
      "D) No maximum throughput limit"
    ],
    correct: 2,
    explanation: "EFS can achieve up to 500 MB/s throughput in Bursting performance mode. Provisioned Throughput mode allows custom throughput allocation.",
    category: "storage",
    difficulty: "medium"
  },
  {
    id: 14,
    question: "What happens when you delete an S3 bucket?",
    options: [
      "A) All objects are immediately deleted",
      "B) Objects with versioning enabled cannot be deleted",
      "C) Only empty buckets can be deleted",
      "D) You must wait 30 days before deletion"
    ],
    correct: 2,
    explanation: "S3 buckets must be empty before deletion. All objects, including all versions if versioning was enabled, must be removed first.",
    category: "storage",
    difficulty: "easy"
  },
  {
    id: 15,
    question: "Which S3 storage class offers the best price-to-performance ratio for general-purpose workloads?",
    options: [
      "A) S3 Standard",
      "B) S3 Standard-IA",
      "C) S3 One Zone-IA",
      "D) S3 Intelligent-Tiering"
    ],
    correct: 0,
    explanation: "S3 Standard offers the best balance of availability, performance, and cost for general-purpose workloads with frequent access requirements.",
    category: "storage",
    difficulty: "easy"
  },
  {
    id: 16,
    question: "What is AWS Storage Gateway used for?",
    options: [
      "A) To store data exclusively in the cloud",
      "B) To connect on-premises environments to AWS storage",
      "C) To manage S3 bucket access",
      "D) To replace EBS volumes"
    ],
    correct: 1,
    explanation: "AWS Storage Gateway bridges on-premises environments with AWS cloud storage, enabling hybrid cloud architectures with caching and data synchronization.",
    category: "storage",
    difficulty: "easy"
  },
  {
    id: 17,
    question: "How does S3 versioning work?",
    options: [
      "A) Keeps only the latest version of an object",
      "B) Maintains all versions of an object with unique version IDs",
      "C) Automatically deletes old versions after 30 days",
      "D) Requires manual version management"
    ],
    correct: 1,
    explanation: "S3 versioning maintains all previous versions of an object with unique version IDs, allowing recovery of deleted or overwritten objects.",
    category: "storage",
    difficulty: "easy"
  },
  {
    id: 18,
    question: "What is the durability guarantee for S3 Standard storage?",
    options: [
      "A) 99% durability",
      "B) 99.9% durability",
      "C) 99.99% durability",
      "D) 99.999999999% (11 nines) durability"
    ],
    correct: 3,
    explanation: "S3 Standard provides 99.999999999% (11 nines) durability, meaning only 1 object out of 100 billion would be lost every 10,000 years.",
    category: "storage",
    difficulty: "easy"
  },
  {
    id: 19,
    question: "Which backup method is most suitable for backing up a 500 GB database weekly?",
    options: [
      "A) Manual S3 uploads",
      "B) AWS Backup with scheduled backup plans",
      "C) AWS Snapshot copies",
      "D) Real-time replication to another region"
    ],
    correct: 1,
    explanation: "AWS Backup provides automated, scheduled backup plans that are cost-effective and manageable for regular backup tasks of various sizes.",
    category: "storage",
    difficulty: "easy"
  },
  {
    id: 20,
    question: "What is the main difference between S3 Standard-IA and S3 One Zone-IA?",
    options: [
      "A) Data availability",
      "B) Data durability",
      "C) One Zone-IA stores in a single Availability Zone",
      "D) Standard-IA is cheaper than One Zone-IA"
    ],
    correct: 2,
    explanation: "S3 One Zone-IA stores data in only one Availability Zone (lower durability) while Standard-IA stores across multiple AZs, making Standard-IA more resilient.",
    category: "storage",
    difficulty: "easy"
  }
];
