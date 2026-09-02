# NestJS Unit Tests

## Reflection

### Why is it important to test services separately from controllers?

Services and controllers have different responsibilities, so testing them separately makes it easier to find problems.

Controllers are mainly responsible for handling requests and calling the appropriate service, while services contain the application's business logic. If I test a service separately, I can verify its logic without involving the controller or other parts of the application.

This also makes the tests simpler because I can focus on one specific part of the application at a time.

### How does mocking dependencies improve unit testing?

Mocking allows me to replace real dependencies with controlled fake versions during a test.

For example, when testing a controller, I can mock the `AppService` using NestJS's testing utilities and `jest.fn()`. This means the controller does not need to use the real service.

This makes tests faster and more predictable because they do not depend on databases, external APIs, or other services.

### What are common pitfalls when writing unit tests in NestJS?

One common mistake is testing too much at once. If a unit test depends on many real services or external resources, it becomes harder to know what caused a failure.

Another common problem is writing tests that only check that a function runs without throwing an error. A good test should verify the actual result or behavior.

It is also easy to forget to update tests when the behavior of the application changes, which can leave tests that no longer accurately represent what the code should do.

### How can you ensure that unit tests cover all edge cases?

I can think about the different situations that the code might encounter instead of only testing the normal successful case.

For example, I can test valid data, empty values, invalid data types, missing values, and unexpected inputs.

The goal is not just to have a high percentage of code coverage, but to make sure the tests actually verify important behavior and possible failure cases.

## Conclusion

Unit tests are useful because they allow individual parts of a NestJS application to be tested in isolation. Controllers and services can be tested separately, and dependencies can be mocked when they are not part of what the test is trying to verify.

Using Jest and NestJS testing utilities makes it easier to create these isolated tests and detect problems early.
