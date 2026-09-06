# Creating REST APIs with NestJS

## Reflection

### What is the role of a controller in NestJS?

The controller is responsible for receiving requests from the client and sending back the appropriate response. It defines the routes and decides which method should handle each request. I see it as the entry point between the API and the application's internal logic.

### How should business logic be separated from the controller?

The controller should mainly deal with the request and response, while the actual business logic should be handled by a service. This keeps the controller simpler and makes the code easier to understand and maintain.

### Why is it important to use services instead of handling logic inside controllers?

Using services prevents controllers from becoming too large and complicated. Services can also be reused by different parts of the application and are easier to test independently. This separation makes the project more organized as it grows.

### How does NestJS automatically map request methods (`GET`, `POST`, etc.) to handlers?

NestJS uses decorators such as `@Get()`, `@Post()`, `@Put()`, and `@Delete()` to connect HTTP methods and routes to specific controller methods. Because of this, NestJS knows which method to execute when a request reaches a particular endpoint.
