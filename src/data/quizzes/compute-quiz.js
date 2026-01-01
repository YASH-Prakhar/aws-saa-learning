export const computeQuiz = [
  {
    id: 1,
    question: "What is the maximum number of vCPUs available for a single EC2 instance?",
    options: [
      "A) 32 vCPUs",
      "B) 64 vCPUs",
      "C) 128 vCPUs",
      "D) 192 vCPUs"
    ],
    correct: 3,
    explanation: "The largest EC2 instance types can have up to 192 vCPUs. The u3 instances support this maximum capacity for compute-intensive workloads.",
    category: "compute",
    difficulty: "hard"
  },
  {
    id: 2,
    question: "What does AWS Lambda's cold start refer to?",
    options: [
      "A) The time to initialize AWS Lambda environment",
      "B) The delay when a function is invoked after being inactive",
      "C) The cost of running Lambda functions",
      "D) The temperature monitoring of Lambda servers"
    ],
    correct: 1,
    explanation: "Cold start is the latency experienced when Lambda invokes a function after a period of inactivity, as the runtime environment must be initialized.",
    category: "compute",
    difficulty: "hard"
  },
  {
    id: 3,
    question: "What is the maximum memory allocation for a Lambda function?",
    options: [
      "A) 512 MB",
      "B) 1024 MB (1 GB)",
      "C) 3008 MB (3 GB)",
      "D) 10240 MB (10 GB)"
    ],
    correct: 3,
    explanation: "AWS Lambda now supports up to 10,240 MB (10 GB) of memory per function, allowing for more resource-intensive applications.",
    category: "compute",
    difficulty: "hard"
  },
  {
    id: 4,
    question: "How is Lambda pricing calculated?",
    options: [
      "A) By CPU time only",
      "B) By memory allocation only",
      "C) By the number of invocations only",
      "D) By duration and memory consumption (GB-seconds)"
    ],
    correct: 3,
    explanation: "Lambda pricing is based on the number of invocations and the computing time consumed, measured in GB-seconds (memory allocation × duration).",
    category: "compute",
    difficulty: "hard"
  },
  {
    id: 5,
    question: "What is AWS Fargate primarily used for?",
    options: [
      "A) Running containers without managing EC2 instances",
      "B) Orchestrating Kubernetes clusters",
      "C) Managing on-premises servers",
      "D) Distributing traffic across servers"
    ],
    correct: 0,
    explanation: "AWS Fargate is a serverless container runtime that allows you to run containers without provisioning or managing EC2 instances.",
    category: "compute",
    difficulty: "hard"
  },
  {
    id: 6,
    question: "Which EC2 purchasing option provides the greatest cost savings for long-term, steady-state workloads?",
    options: [
      "A) On-Demand instances",
      "B) Spot Instances",
      "C) Reserved Instances (1-3 year commitment)",
      "D) Dedicated Hosts"
    ],
    correct: 2,
    explanation: "Reserved Instances offer up to 72% discount compared to On-Demand pricing for 1-year or 3-year commitments, ideal for steady-state workloads.",
    category: "compute",
    difficulty: "hard"
  },
  {
    id: 7,
    question: "What is the purpose of AWS Elastic Beanstalk?",
    options: [
      "A) To manage EC2 instances manually",
      "B) To automatically deploy and scale web applications",
      "C) To store application code",
      "D) To monitor application performance"
    ],
    correct: 1,
    explanation: "Elastic Beanstalk is a Platform-as-a-Service that automatically handles capacity provisioning, load balancing, auto-scaling, and application monitoring.",
    category: "compute",
    difficulty: "medium"
  },
  {
    id: 8,
    question: "What languages/runtimes are supported by AWS Lambda?",
    options: [
      "A) Only Python and Node.js",
      "B) Python, Node.js, Java, Go, Ruby, and .NET",
      "C) Any programming language",
      "D) Only Java and C++"
    ],
    correct: 1,
    explanation: "Lambda supports Python, Node.js, Java, Go, Ruby, .NET Core, and custom runtimes, with the ability to use different versions.",
    category: "compute",
    difficulty: "medium"
  },
  {
    id: 9,
    question: "How does EC2 Auto Scaling differ from Load Balancing?",
    options: [
      "A) They are the same thing",
      "B) Auto Scaling adds/removes instances; Load Balancing distributes traffic",
      "C) Load Balancing adds instances; Auto Scaling distributes traffic",
      "D) Auto Scaling only works with RDS"
    ],
    correct: 1,
    explanation: "Auto Scaling automatically adjusts the number of EC2 instances based on demand, while Load Balancing distributes incoming traffic across instances.",
    category: "compute",
    difficulty: "medium"
  },
  {
    id: 10,
    question: "What is the default timeout for Lambda function execution?",
    options: [
      "A) 30 seconds",
      "B) 1 minute",
      "C) 3 minutes",
      "D) 5 minutes"
    ],
    correct: 2,
    explanation: "The default Lambda timeout is 3 minutes (180 seconds), with a maximum of 15 minutes. This must be configured in the function settings.",
    category: "compute",
    difficulty: "medium"
  },
  {
    id: 11,
    question: "What is a Placement Group in EC2?",
    options: [
      "A) A security feature for grouping instances",
      "B) A logical grouping of instances with specific network topology",
      "C) An auto-scaling configuration",
      "D) A billing organization method"
    ],
    correct: 1,
    explanation: "Placement Groups control the network topology and interconnect strategy of EC2 instances, including Cluster, Partition, and Spread strategies.",
    category: "compute",
    difficulty: "medium"
  },
  {
    id: 12,
    question: "Which EC2 instance type is best suited for HPC (High-Performance Computing)?",
    options: [
      "A) T-series (burstable)",
      "B) M-series (general purpose)",
      "C) C-series (compute optimized)",
      "D) R-series (memory optimized)"
    ],
    correct: 2,
    explanation: "C-series instances are compute-optimized and best suited for HPC, batch processing, and other compute-intensive applications.",
    category: "compute",
    difficulty: "medium"
  },
  {
    id: 13,
    question: "What is the purpose of EC2 Instance Store?",
    options: [
      "A) Provides persistent block storage",
      "B) Temporary block-level storage that is deleted when instance stops",
      "C) Object storage for files",
      "D) Archive storage for backups"
    ],
    correct: 1,
    explanation: "Instance Store provides temporary, high-speed block storage directly attached to the physical host, but data is lost when the instance stops or terminates.",
    category: "compute",
    difficulty: "easy"
  },
  {
    id: 14,
    question: "What happens to an EBS-backed EC2 instance when you stop it?",
    options: [
      "A) The instance is deleted permanently",
      "B) Data is lost",
      "C) The instance enters stopped state; EBS volumes retain data",
      "D) The instance moves to another region"
    ],
    correct: 2,
    explanation: "Stopping an EBS-backed instance preserves the instance configuration and data on EBS volumes. You can restart it later.",
    category: "compute",
    difficulty: "easy"
  },
  {
    id: 15,
    question: "What is the primary advantage of Spot Instances?",
    options: [
      "A) Higher performance than On-Demand",
      "B) Up to 90% discount compared to On-Demand pricing",
      "C) Guaranteed availability for 24 hours",
      "D) Automatic disaster recovery"
    ],
    correct: 1,
    explanation: "Spot Instances offer significant cost savings (up to 90% off On-Demand pricing) but can be interrupted when AWS needs capacity.",
    category: "compute",
    difficulty: "easy"
  },
  {
    id: 16,
    question: "How long can an EC2 instance run continuously?",
    options: [
      "A) Maximum 24 hours",
      "B) Maximum 30 days",
      "C) Indefinitely until stopped or terminated",
      "D) Maximum 1 year"
    ],
    correct: 2,
    explanation: "EC2 instances can run indefinitely as long as you pay for them and they remain running. There's no time limit.",
    category: "compute",
    difficulty: "easy"
  },
  {
    id: 17,
    question: "What does AMI stand for?",
    options: [
      "A) Amazon Machine Identity",
      "B) Amazon Machine Image",
      "C) Application Memory Instance",
      "D) Auto-scaling Machine Interface"
    ],
    correct: 1,
    explanation: "AMI (Amazon Machine Image) is a pre-configured template that contains the OS, application server, and applications needed to launch an EC2 instance.",
    category: "compute",
    difficulty: "easy"
  },
  {
    id: 18,
    question: "What triggers a Lambda function in serverless applications?",
    options: [
      "A) Manual invocation only",
      "B) Various event sources like S3, DynamoDB, API Gateway, etc.",
      "C) Only scheduled cron jobs",
      "D) Only HTTP requests"
    ],
    correct: 1,
    explanation: "Lambda functions can be triggered by various AWS services including S3 events, DynamoDB streams, API Gateway, CloudWatch, SNS, SQS, and many more.",
    category: "compute",
    difficulty: "easy"
  },
  {
    id: 19,
    question: "What is the maximum number of instances per Auto Scaling Group?",
    options: [
      "A) 10 instances",
      "B) 50 instances",
      "C) 500 instances",
      "D) No fixed limit"
    ],
    correct: 3,
    explanation: "There's no fixed maximum limit for instances in an Auto Scaling Group, though limits depend on account capacity and regional constraints.",
    category: "compute",
    difficulty: "easy"
  },
  {
    id: 20,
    question: "Which AWS service would you use to deploy containerized applications on ECS without managing servers?",
    options: [
      "A) EC2 Container Service only",
      "B) AWS Fargate",
      "C) AWS Lambda (only for containers)",
      "D) AWS Elastic Beanstalk only"
    ],
    correct: 1,
    explanation: "AWS Fargate provides serverless container deployment, allowing you to run containers without managing the underlying EC2 infrastructure.",
    category: "compute",
    difficulty: "easy"
  }
];
