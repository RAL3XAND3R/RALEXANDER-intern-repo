# Mocking Dependencies & Database Interactions in NestJS

## Why Mocking Is Useful

Mocking is useful when I want to test one part of an application without depending on everything else around it.

For example, a controller might depend on a service, and that service might eventually depend on a database or an external API. If I test the controller using all of those real dependencies, the test becomes slower and can fail for reasons that have nothing to do with the controller itself.

A mock lets me replace the real dependency with something simpler that I control during the test.

This makes tests faster, more predictable, and easier to understand.

## Mocking a Service in a Controller Test

I practiced mocking a NestJS service inside a controller test.

Normally, the structure looks something like:

Controller → Service → Database

For the test, I can replace the real service with a mock:

Controller → Mock Service

In NestJS, this can be done using `@nestjs/testing` and the `providers` configuration.

The `provide` property identifies the dependency that I want to replace, while `useValue` tells Nest what object it should use instead.

For example, the mock can provide a fake `getTask()` function instead of using the real implementation from the service.

I used `jest.fn()` to create the fake function.

I then used `mockReturnValue()` to control what the fake function returns.

This means the test does not need to use the real service or any external data. I can decide exactly what the service should return and then check whether the controller handles that result correctly.

## Why Mock the Database?

The same idea can be applied to database interactions.

A real database is useful when testing the whole application, but it is usually not necessary for a small unit test.

Using a real database can make tests slower and can also introduce problems such as connection errors, existing data affecting the results, or tests depending on the database state.

By mocking the repository, the service can be tested using fake database results.

For example, instead of actually asking the database for tasks, the mock repository could simply return a list of tasks that was created specifically for the test.

This allows me to focus on whether the service behaves correctly.

## What Should Be Mocked?

I think the main thing to consider is whether a dependency is part of what I am actually trying to test.

If I am testing a controller, I usually do not need to test the real service at the same time. I can mock the service and focus on the controller.

If I am testing a service, I can mock things that the service depends on, such as a database repository or an external API.

The goal is not to mock everything. The goal is to isolate the part of the application that I actually want to test.

## `jest.fn()` vs `jest.spyOn()`

`jest.fn()` creates a new mock function.

I can use it when I want to create a completely fake function that did not exist before.

`jest.spyOn()` is different because it works with a function that already exists. It allows Jest to watch that function and, if necessary, change its behaviour during the test.

A simple way to think about it is:

`jest.fn()` → create a fake function.
`jest.spyOn()` → watch or temporarily replace an existing function.

## What I Learned

The main thing I learned from this exercise is that mocking is not about pretending that the application works. It is about controlling dependencies so that I can test a specific part of the application in isolation.

I also learned how NestJS uses dependency injection to provide services to controllers, and how a test can replace those services with mock objects.

I practiced mocking a service inside a controller test. I still need to practice mocking a real TypeORM repository inside a service test, since that part requires working with database-related dependencies.

I plan to continue that part when I have more time so I can understand how repository mocks work instead of just copying an example.
