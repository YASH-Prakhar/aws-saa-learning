export const storageMatching = [
  {
    id: "match-s3-1",
    term: "S3",
    definition: "Object storage service for storing any type of data with high durability",
    pairId: "pair-s3-1"
  },
  {
    id: "match-s3-2",
    definition: "S3 Standard storage class for frequently accessed data",
    term: "S3 Standard",
    pairId: "pair-s3-2"
  },
  {
    id: "match-ebs-1",
    term: "EBS",
    definition: "Block storage volumes that attach to EC2 instances",
    pairId: "pair-ebs-1"
  },
  {
    id: "match-ebs-2",
    definition: "Point-in-time backup of an EBS volume stored in S3",
    term: "EBS Snapshot",
    pairId: "pair-ebs-2"
  },
  {
    id: "match-efs-1",
    term: "EFS",
    definition: "Shared file storage accessible by multiple EC2 instances",
    pairId: "pair-efs-1"
  },
  {
    id: "match-glacier-1",
    definition: "Long-term archival storage with low cost and 90-day minimum retention",
    term: "Glacier",
    pairId: "pair-glacier-1"
  }
];
