// AWS Networking & Content Delivery Services Content
export const networkingServices = [
  {
    id: 'apigateway',
    name: 'Amazon API Gateway',
    details: `Fully managed service for creating, publishing, maintaining, monitoring, and securing APIs at any scale.`,
    useCases: ['RESTful APIs', 'WebSocket APIs', 'API management', 'Backend for mobile/web apps'],
    bestPractices: ['Enable caching for performance', 'Use usage plans and API keys for access control', 'Integrate with Lambda for serverless backends', 'Monitor with CloudWatch'],
    examNotes: ['Know difference between REST and WebSocket APIs', 'Understand throttling, caching, and authorization options']
  },
  {
    id: 'cloudmap',
    name: 'AWS Cloud Map',
    details: `Service discovery for cloud resources. Allows you to define custom names for application resources and maintains updated location information.`,
    useCases: ['Service discovery for microservices', 'Dynamic endpoint management'],
    bestPractices: ['Use health checks for service registration', 'Integrate with ECS/EKS for container workloads'],
    examNotes: ['Cloud Map is for service discovery, not DNS management']
  },
  {
    id: 'cloudfront',
    name: 'Amazon CloudFront',
    details: `Content delivery network (CDN) that securely delivers data, videos, applications, and APIs to customers globally with low latency.`,
    useCases: ['Static and dynamic content delivery', 'Video streaming', 'API acceleration', 'DDoS protection'],
    bestPractices: ['Use Origin Access Control for S3', 'Enable WAF for security', 'Configure cache behaviors for optimization'],
    examNotes: ['Know how CloudFront integrates with S3, EC2, and Lambda@Edge', 'Understand caching, invalidation, and geo-restriction']
  },
  {
    id: 'privatelink',
    name: 'AWS PrivateLink',
    details: `Provides private connectivity between VPCs, AWS services, and on-premises applications, securely on the Amazon network.`,
    useCases: ['Secure access to AWS services', 'Private SaaS integrations'],
    bestPractices: ['Use endpoint policies for access control', 'Monitor traffic with VPC Flow Logs'],
    examNotes: ['PrivateLink is for private connectivity, not VPN']
  },
  {
    id: 'transitgateway',
    name: 'AWS Transit Gateway',
    details: `Enables customers to connect their VPCs and on-premises networks to a single gateway.`,
    useCases: ['Centralized network management', 'Hybrid cloud connectivity'],
    bestPractices: ['Segment traffic with route tables', 'Monitor with CloudWatch'],
    examNotes: ['Transit Gateway simplifies VPC peering and hybrid connectivity']
  },
  {
    id: 'directconnect',
    name: 'AWS Direct Connect',
    details: `Dedicated network connection from your premises to AWS.`,
    useCases: ['Low-latency, high-bandwidth workloads', 'Hybrid cloud', 'Data migration'],
    bestPractices: ['Use redundant connections for HA', 'Monitor link health'],
    examNotes: ['Direct Connect is for dedicated, private connectivity']
  },
  {
    id: 'elb',
    name: 'AWS ELB (Elastic Load Balancing)',
    details: `Automatically distributes incoming application traffic across multiple targets, such as EC2 instances, containers, and IP addresses.`,
    useCases: ['Web applications', 'Microservices', 'High availability'],
    bestPractices: ['Use health checks for target monitoring', 'Choose correct ELB type (ALB, NLB, CLB) for workload'],
    examNotes: ['Know differences between ALB, NLB, and CLB']
  },
  {
    id: 'route53',
    name: 'Amazon Route 53',
    details: `Highly available and scalable cloud Domain Name System (DNS) web service.`,
    useCases: ['Domain registration', 'DNS management', 'Health checks', 'Traffic routing'],
    bestPractices: ['Use routing policies for traffic management', 'Enable DNSSEC for security'],
    examNotes: ['Know routing policies (Simple, Weighted, Latency, Failover, Geolocation, Multivalue)']
  },
  {
    id: 'vpc',
    name: 'Amazon VPC',
    details: `Provision a logically isolated section of the AWS Cloud where you can launch AWS resources in a virtual network.`,
    useCases: ['Network isolation', 'Custom IP addressing', 'Security groups and NACLs', 'Hybrid cloud'],
    bestPractices: ['Segment subnets by function', 'Use security groups and NACLs for layered security', 'Monitor with VPC Flow Logs'],
    examNotes: ['Know VPC components (subnets, route tables, IGW, NAT, endpoints)', 'Understand security group vs NACL differences']
  }
];
