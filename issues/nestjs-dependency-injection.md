# Dependency Injection in NestJS

## Reflection

### How does dependency injection improve maintainability?

Dependency injection helps keep the application organized because classes do not have to create their own dependencies. Instead, NestJS provides the dependencies they need. This makes the different parts of the application more separated and easier to modify, test, and maintain.

### What is the purpose of the `@Injectable()` decorator?

The `@Injectable()` decorator allows a class to be managed by NestJS's dependency injection system. It is commonly used with services so they can be registered as providers and injected into other classes, such as controllers.

### What are the different types of provider scopes, and when would you use each?

NestJS has three main provider scopes. `SINGLETON` is the default and uses the same instance throughout the application, which is useful for most regular services. `REQUEST` creates an instance for each request, which can be useful when the provider needs to work with data specific to a particular request. `TRANSIENT` creates a separate instance for each consumer, which is useful when different consumers need their own independent instance.

### How does NestJS automatically resolve dependencies?

NestJS uses its dependency injection container to keep track of registered providers and their dependencies. When a controller or another provider requires a dependency through its constructor, NestJS looks for the corresponding provider and provides an instance automatically. This means developers do not need to manually create every service with `new`.
