# Inspecting API Requests & Responses

## How Logging Request Payloads Helps With Debugging

Logging request data can be very useful when trying to figure out what is going wrong in an API.

Sometimes the problem is not actually in the backend logic. The client might be sending something different from what the backend expects. For example, a field could have the wrong name, a value could have the wrong type, or some required information might be missing.

Being able to see what actually reached the controller makes it much easier to find these problems instead of guessing.

For example, if the frontend is supposed to send a request containing a `title` field but the backend receives `tittle`, a request log would make that problem obvious.

I also think logging is especially useful when debugging authentication problems. Looking at the request headers can help determine whether the expected authentication information was actually sent.

However, logs should be used carefully because request data can contain sensitive information.

## Tools for Inspecting API Requests and Responses

The main tool I used for this was Postman.

Postman makes it easy to send different types of HTTP requests and inspect the response. I can change the HTTP method, URL, headers, query parameters, and request body without having to build another application just to test the API.

I am already familiar with Postman, so I mainly used it to test the NestJS API I created for this exercise.

Other tools that can be used for the same general purpose include Bruno and `curl`.

`curl` is especially useful from the command line, while Postman and Bruno provide a more visual interface for creating and inspecting requests.

The important thing is not really which tool is used. The important part is being able to see what is being sent to the API and what the API sends back.

## Inspecting Responses and Status Codes

When debugging an API, I would not only look at the response body. I would also check the HTTP status code.

For example, a successful request might return `200 OK`, while creating a new resource might return `201 Created`.

Other status codes can give useful information about what went wrong:

* `400 Bad Request` can mean that the request data is invalid.
* `401 Unauthorized` can indicate an authentication problem.
* `403 Forbidden` can mean that the user does not have permission.
* `404 Not Found` can mean that the requested route or resource does not exist.
* `500 Internal Server Error` usually means something went wrong on the server.

I experienced the `404` case while working on this exercise. When I first tried to access `/tasks`, Nest returned `Cannot GET /tasks`.

Instead of assuming that Postman was the problem, I checked the NestJS terminal output and noticed that only the `/` route had been registered. After changing the controller and restarting the application, Nest showed that `/tasks` had been mapped as a GET route and the request worked.

That was a good reminder that the status code itself can be a useful clue when debugging.

## Middleware and Interceptors

NestJS provides middleware and interceptors that can be used to process requests and responses.

Middleware can be useful when something needs to happen before the request reaches the controller. For example, it could be used for logging or checking information about an incoming request.

Interceptors can work around the execution of a route handler and can be useful for analyzing or modifying responses.

This is useful because not every piece of request or response logic needs to be repeated inside every controller. Something that applies to many endpoints can sometimes be handled in middleware or an interceptor instead.

## Security Concerns When Logging Request Data

One of the biggest things to be careful about is accidentally logging sensitive information.

Requests can contain things like:

* Passwords
* Authentication tokens
* API keys
* Personal information
* Session information
* Other private user data

For example, logging an entire request body without checking what it contains could accidentally put a user's password into a log file.

This is especially dangerous in production because logs are often stored and can be accessed by other people or systems.

Because of this, I think logging should be intentional. Instead of logging everything, it is better to log only the information that is actually useful for debugging and remove or hide sensitive values.

## What I Learned

The main thing I took from this exercise is that debugging an API is not just about looking at the code and guessing what is wrong.

The request, the response, the status code, and the server logs can all provide useful information.

Using Postman makes it easy to reproduce a problem and change one part of a request at a time. Then the NestJS logs can help confirm what the backend actually received.

I also got a better understanding of why status codes are useful during debugging. A `404`, for example, immediately tells me that I should investigate whether the requested route or resource actually exists instead of blindly looking through unrelated code.

Even though I already had experience making API requests with Postman, this exercise was useful because it focused more on the debugging side of the process and on being careful about what information is exposed through logs.
