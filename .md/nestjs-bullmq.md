# Background Jobs with BullMQ & Redis in NestJS

## Why is BullMQ used instead of handling tasks directly in API requests?

BullMQ is useful for handling tasks that may take a long time without making the API request wait for the entire process.

For example, sending notifications, processing analytics, or synchronizing data could take some time. If the API handles these tasks directly, the user may have to wait for the operation to finish.

With BullMQ, the API can add the task to a queue and respond while the job is processed in the background.

The basic idea is:

```text
API request
    |
    v
Add job to queue
    |
    v
Respond to client
    |
    v
Background worker processes the job
```

This keeps the API more responsive and allows background work to be handled separately.

## How does Redis help manage job queues in BullMQ?

BullMQ uses Redis to store and manage information about jobs and queues.

Redis keeps track of things such as jobs that are waiting to be processed, jobs that are currently being processed, completed jobs, and failed jobs.

This allows BullMQ workers to know which jobs need to be processed and keeps the queue state available even when the API and workers are separate processes.

A simplified example is:

```text
Redis
 |
 +-- Waiting jobs
 |
 +-- Active jobs
 |
 +-- Completed jobs
 |
 +-- Failed jobs
```

Redis acts as the storage and coordination layer that BullMQ uses to manage the queue.

## What happens if a job fails? How can failed jobs be retried?

If a worker encounters an error while processing a job, BullMQ can mark the job as failed.

BullMQ supports retrying failed jobs by configuring a number of attempts. If the job fails, it can be processed again instead of being permanently lost.

It is also possible to configure a delay between retry attempts. This can be useful when a temporary problem occurs, such as an external service being unavailable.

For example, a job could be configured to have multiple attempts:

```ts
{
  attempts: 3,
}
```

This means the job can be attempted multiple times before being considered permanently failed.

## How does Focus Bear use BullMQ for background tasks?

Focus Bear uses background processing for tasks that should not block the main API request.

BullMQ and Redis can be used to put these tasks into queues and process them asynchronously using workers. This allows the backend to handle time-consuming operations without making the user wait for them to finish.

Examples of tasks that could benefit from this approach include notifications, data processing, synchronization, or other operations that do not need to be completed before an API response is returned.

## What I Learned

I learned that background jobs are useful when an operation does not need to happen during the API request itself.

BullMQ provides the queue and worker system, while Redis stores and manages the state of the jobs.

I also learned that failed jobs do not necessarily have to be lost. BullMQ can retry jobs when they are configured with multiple attempts, which is useful for handling temporary failures.

I still need to complete the practical setup with BullMQ and Redis so I can see the complete process working in practice. I plan to do that by creating a simple queue, adding a job from a NestJS endpoint, and processing it with a worker.
