export const securityMatching = [
  {
    id: "match-iam-1",
    term: "IAM",
    definition: "Service for managing identity and access control to AWS resources",
    pairId: "pair-iam-1"
  },
  {
    id: "match-iam-2",
    definition: "Temporary security credentials for accessing AWS services",
    term: "STS (Security Token Service)",
    pairId: "pair-iam-2"
  },
  {
    id: "match-kms-1",
    term: "KMS",
    definition: "Managed service for creating and managing encryption keys",
    pairId: "pair-kms-1"
  },
  {
    id: "match-vpc-1",
    definition: "Isolated network environment in AWS with full control",
    term: "VPC",
    pairId: "pair-vpc-1"
  },
  {
    id: "match-sg-1",
    term: "Security Group",
    definition: "Stateful virtual firewall controlling inbound/outbound traffic",
    pairId: "pair-sg-1"
  },
  {
    id: "match-nacl-1",
    definition: "Stateless, subnet-level firewall for controlling network traffic",
    term: "Network ACL",
    pairId: "pair-nacl-1"
  },
  {
    id: "match-cognito-1",
    term: "Cognito",
    definition: "Authentication and authorization service for user applications",
    pairId: "pair-cognito-1"
  },
  {
    id: "match-cloudtrail-1",
    definition: "Logs all API calls and account activities for audit trails",
    term: "CloudTrail",
    pairId: "pair-cloudtrail-1"
  },
  {
    id: "match-waf-1",
    term: "WAF",
    definition: "Web application firewall protecting against common attacks",
    pairId: "pair-waf-1"
  },
  {
    id: "match-shield-1",
    definition: "DDoS protection service included for all AWS customers",
    term: "Shield",
    pairId: "pair-shield-1"
  },
  {
    id: "match-secrets-1",
    term: "Secrets Manager",
    definition: "Manages sensitive information like passwords and API keys",
    pairId: "pair-secrets-1"
  },
  {
    id: "match-config-1",
    definition: "Tracks AWS resource configuration changes for compliance",
    term: "AWS Config",
    pairId: "pair-config-1"
  }
];
