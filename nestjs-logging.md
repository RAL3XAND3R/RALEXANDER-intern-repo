# NestJS Logging and Error Handling

## What I learned

This issue was about understanding how logging and error handling work in a NestJS application.

I learned that logging is important because it gives developers information about what is happening inside the application. When something goes wrong, having useful logs can make debugging much easier instead of having to guess what happened.

### NestJS Pino

I researched `nestjs-pino` and how it integrates Pino with NestJS. Pino is a structured logger, which means that logs can contain useful information such as the request method, URL, status code, response time, and other contextual information.

One thing I noticed while trying to configure it is that there are several parts involved, such as `nestjs-pino`, `pino-http`, and a pretty printer for development. Even though I had some trouble getting the HTTP request logs to appear correctly in my test project, I understood the main purpose of using Pino and why a structured logger is useful in a real backend.

Compared with just using `console.log()`, a proper logger provides a much more organized way to record application events and makes the logs easier to search and analyze.

## Exception Handling

I also learned how NestJS handles exceptions.

NestJS provides built-in exceptions such as `NotFoundException`, `BadRequestException`, and `UnauthorizedException`. These exceptions can be thrown when something goes wrong and NestJS converts them into appropriate HTTP responses.

For example, if a requested resource does not exist, the application can throw a `NotFoundException` and return a `404` response.

A custom exception filter can be used when we want more control over the format of these error responses.

Instead of returning different error formats depending on where the error happened, a global exception filter can make the API return errors in a consistent structure.

For example:

```json
{
  "statusCode": 404,
  "message": "User not found",
  "path": "/users/999",
  "timestamp": "2026-09-01T18:30:00.000Z"
}
```

This makes the API easier for frontend developers and other services to work with.

## Interceptors vs Exception Filters

One thing I found useful was understanding the difference between an interceptor and an exception filter.

An interceptor is useful for handling or modifying the execution around a request. It can be used for things such as logging, measuring response times, transforming responses, or performing actions before and after a method runs.

An exception filter has a more specific purpose: handling exceptions and controlling the response that is returned when an error occurs.

In simple terms:

**Interceptor:** useful for controlling or observing the request/response flow.
**Exception filter:** specifically handles errors and exceptions.

They can work together, but they solve different problems.

## How logs should be structured

Good logs should contain enough information to understand what happened without being unnecessarily noisy.

Useful information can include:

 HTTP method
Request URL
Status code
Response time
Error message
Timestamp
Relevant request or user information when appropriate

It is also important not to put sensitive information such as passwords, API keys, or other secrets into logs.

## Final thoughts

This issue helped me understand that logging and error handling are not just about printing messages to the terminal. They are important parts of building a backend that is easier to debug and maintain.

A structured logger such as Pino can provide useful information about application activity, while exception filters allow the API to handle errors in a consistent way.

I also learned that interceptors and exception filters are related to the request lifecycle, but they have different responsibilities. This is something I will keep in mind when working with NestJS applications in the future.
