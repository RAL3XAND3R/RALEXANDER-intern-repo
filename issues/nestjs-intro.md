# What is NestJS? Framework Overview

## Reflection

### What are the key differences between NestJS and Express.js?

Express.js is a lightweight and flexible framework that gives developers more freedom to decide how to structure an application. NestJS provides a more organized structure by using concepts such as modules, controllers, providers, and dependency injection. I think this makes NestJS especially useful for larger applications where having consistent patterns becomes more important.

### Why does NestJS use decorators extensively?

Decorators allow NestJS to define how different parts of the application should behave. For example, `@Controller()` tells NestJS that a class handles HTTP requests, while `@Injectable()` allows a class to be managed by the dependency injection system. They make the framework's structure more explicit without requiring a lot of additional configuration.

### How does NestJS handle dependency injection?

NestJS uses a dependency injection container to manage providers and their dependencies. When a class needs a service, it can declare it in its constructor, and NestJS automatically provides the required instance. This means the class does not need to create the dependency itself.

### What benefits does modular architecture provide in a large-scale app?

Modular architecture allows the application to be divided into separate areas based on their functionality. Each module can have its own controllers, services, and other components. This makes a large codebase easier to navigate and maintain, and it also makes it easier to add new features without mixing everything together.
