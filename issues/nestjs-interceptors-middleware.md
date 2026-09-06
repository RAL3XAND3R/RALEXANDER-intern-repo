# NestJS Interceptors & Middleware

## What is the difference between an interceptor and middleware in NestJS?

Middleware runs before the request reaches the route handler and is useful for things like preprocessing requests, adding information to the request, or performing actions before the controller handles it.

Interceptors can work before and after the route handler. They can modify the request or response and can also perform additional logic around the execution of the handler.

The main difference I noticed is that middleware is more focused on processing the request before it reaches the controller, while interceptors can wrap around the entire request-response process.

## When would you use an interceptor instead of middleware?

I would use middleware when I need to process or modify a request before it reaches the controller. For example, I could use it to add information to the request or perform some general preprocessing.

I would use an interceptor when I need more control over what happens before and after a controller method runs. Interceptors are useful for things like logging, transforming responses, measuring execution time, or handling other logic that needs access to the response.

## How does `LoggerErrorInterceptor` help?

`LoggerErrorInterceptor` can help by catching and logging errors that happen while processing a request. This makes it easier to identify problems and understand what went wrong when an endpoint fails.

Having this kind of interceptor is useful for debugging because errors can be logged consistently without having to add error logging manually to every controller or service.
