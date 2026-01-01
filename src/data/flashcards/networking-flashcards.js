export const networkingFlashcards = [
  {
    id: "vpc-card-1",
    front: "Amazon VPC (Virtual Private Cloud)",
    back: "Isolated network environment in AWS with full control over networking",
    details: "Allows you to define IP address ranges, subnets, route tables, and gateways for a logically isolated section of the AWS cloud.",
    category: "networking"
  },
  {
    id: "subnet-card-1",
    front: "Subnet",
    back: "A range of IP addresses within a VPC",
    details: "Subnets are associated with a single Availability Zone. Public subnets have internet access; private subnets do not.",
    category: "networking"
  },
  {
    id: "igw-card-1",
    front: "Internet Gateway (IGW)",
    back: "Enables communication between resources in a VPC and the Internet",
    details: "Allows inbound and outbound traffic from/to the internet. Required for public subnets to access the internet.",
    category: "networking"
  },
  {
    id: "nat-gateway",
    front: "NAT Gateway",
    back: "Allows private subnet resources to initiate outbound internet connections",
    details: "Translates private IP addresses to public IP addresses. Enables resources in private subnets to access the internet.",
    category: "networking"
  },
  {
    id: "route-table",
    front: "Route Table",
    back: "Set of rules (routes) determining where traffic is directed",
    details: "Each subnet must be associated with a route table. Routes specify destinations and targets for traffic.",
    category: "networking"
  },
  {
    id: "security-group",
    front: "Security Group",
    back: "Virtual firewall controlling inbound and outbound traffic to resources",
    details: "Stateful firewall at the instance level. Allows you to specify which traffic is allowed to reach your instances.",
    category: "networking"
  },
  {
    id: "nacl-card-1",
    front: "Network ACL (Access Control List)",
    back: "Stateless, subnet-level firewall controlling traffic",
    details: "Applied at the subnet level with numbered rules. Stateless means return traffic must be explicitly allowed.",
    category: "networking"
  },
  {
    id: "elb-card-1",
    front: "Elastic Load Balancer (ELB)",
    back: "Service that distributes incoming traffic across multiple targets",
    details: "Types: Classic (Layer 4), Application (Layer 7 for HTTP/HTTPS), and Network (ultra-high performance Layer 4).",
    category: "networking"
  },
  {
    id: "cloudfront-card-1",
    front: "Amazon CloudFront",
    back: "Content delivery network (CDN) that caches content at edge locations",
    details: "Distributes content through a global network of edge locations for low latency and high transfer speeds.",
    category: "networking"
  },
  {
    id: "route53-card-1",
    front: "Amazon Route 53",
    back: "DNS service and traffic management for domains",
    details: "Registers domains, routes traffic, and performs health checks. Integrates with AWS resources for failover and load balancing.",
    category: "networking"
  }
];
