// AWS Application Integration Services Content
export const applicationIntegrationServices = [
  {
    id: 'eventbridge',
    name: 'Amazon EventBridge',
    details: `Serverless event bus for application integration using events. Ingests events from AWS services, custom apps, and SaaS partners. Supports event filtering, transformation, and routing to targets (Lambda, Step Functions, SQS, SNS, etc.). Schema registry for event structure discovery. Event replay and archiving.`,
    useCases: ['Decoupling microservices via event-driven architecture', 'Integrating SaaS applications with AWS', 'Real-time application monitoring and automation'],
    bestPractices: ['Use event patterns for precise filtering', 'Archive events for troubleshooting and replay', 'Use dead-letter queues for failed event deliveries'],
    examNotes: ['EventBridge is preferred for modern event-driven integrations', 'Supports cross-account event delivery', 'Different from SNS/SQS: EventBridge is for event routing, not just messaging'],
    relatedServices: ['lambda', 'sns', 'sqs', 'stepfunctions', 'cloudtrail']
  },
  {
    id: 'sns',
    name: 'Amazon SNS',
    details: `Fully managed pub/sub messaging service. Supports multiple protocols: SQS, Lambda, HTTP/S, email, SMS, mobile push. Message fan-out to multiple subscribers. Message filtering by attributes. FIFO topics for strict ordering and deduplication.`,
    useCases: ['Application decoupling via pub/sub', 'Fan-out notifications to multiple endpoints', 'Mobile push notifications and SMS alerts'],
    bestPractices: ['Use message filtering to reduce unnecessary processing', 'Use dead-letter queues for undeliverable messages', 'For guaranteed order, use FIFO topics'],
    examNotes: ['SNS is push-based, SQS is pull-based', 'SNS can trigger Lambda, SQS, HTTP endpoints', 'Use SNS for immediate, multi-protocol notifications'],
    relatedServices: ['sqs', 'lambda', 'eventbridge', 'cloudwatch']
  },
  {
    id: 'sqs',
    name: 'Amazon SQS',
    details: `Fully managed message queuing service. Standard queues: high throughput, at-least-once delivery, best-effort ordering. FIFO queues: exactly-once processing, strict order. Supports dead-letter queues, message delay, visibility timeout, long polling.`,
    useCases: ['Decoupling microservices and distributed systems', 'Buffering workloads for asynchronous processing', 'Handling burst traffic and smoothing workloads'],
    bestPractices: ['Use dead-letter queues to isolate and analyze failed messages', 'Tune visibility timeout to match processing time', 'Use long polling to reduce empty responses and costs'],
    examNotes: ['SQS is pull-based; consumers poll for messages', 'FIFO queues for order-sensitive workloads', 'SQS does not support direct message filtering (unlike SNS)'],
    relatedServices: ['sns', 'lambda', 'ec2', 'ecs', 'eventbridge']
  },
  {
    id: 'stepfunctions',
    name: 'AWS Step Functions',
    details: `Serverless orchestration for workflows using state machines. Supports sequential, parallel, branching, and error-handling logic. Integrates with Lambda, ECS, SQS, SNS, DynamoDB, and more. Visual workflow designer and execution history.`,
    useCases: ['Orchestrating microservices and serverless workflows', 'Long-running, multi-step business processes', 'Error handling and retry logic for distributed systems'],
    bestPractices: ['Use state machine versioning for safe updates', 'Leverage built-in error handling and retries', 'Use Express Workflows for high-volume, short-duration tasks'],
    examNotes: ['Step Functions is for workflow orchestration, not just messaging', 'Supports both Standard (long-running) and Express (short-lived) workflows', 'Can coordinate both AWS services and custom code'],
    relatedServices: ['lambda', 'sns', 'sqs', 'eventbridge', 'dynamodb']
  },
  {
    id: 'swf',
    name: 'Amazon SWF',
    details: `Managed workflow service for coordinating tasks across distributed systems. Supports both human and automated tasks. Decouples workflow logic from task implementation. Provides full control over task assignment, state, and timing.`,
    useCases: ['Complex workflows with human intervention', 'Legacy or on-premises system integration', 'Workflows requiring external control and visibility'],
    bestPractices: ['Use SWF for advanced workflows not supported by Step Functions', 'Separate decider and worker logic for flexibility', 'Monitor workflow execution for stuck or failed tasks'],
    examNotes: ['SWF is more complex and flexible than Step Functions', 'Suitable for legacy or hybrid environments', 'Step Functions is preferred for most new serverless workflows'],
    relatedServices: ['stepfunctions', 'lambda', 'sns', 'sqs']
  }
];
