# Unit Testing with Jest

## Why is automated testing important in software development?

Automated testing is important because it helps detect bugs and regressions when code is changed. Tests can be run repeatedly without having to manually check every part of an application. This makes development more reliable and helps developers verify that existing functionality continues to work after making changes.

Unit tests are especially useful because they test small parts of the application independently, making it easier to identify where a problem occurs.

## What did you find challenging when writing your first Jest test?

The most challenging part was understanding the structure of a Jest test and how the `describe`, `test`, and `expect` functions work together.

After understanding the basic structure, writing a simple test was straightforward. I created a small `add` utility function and tested that it correctly returned the sum of two numbers. Running Jest also made it easy to verify that the test passed.

## Mocking API Calls in Jest

### Why is it important to mock API calls in tests?

Mocking API calls is important because it allows tests to run without making real network requests. This makes tests faster and more reliable because they do not depend on an external API, an internet connection, or the availability of a server.

Mocks also allow developers to control exactly what data the API returns, making it easier to test different scenarios such as successful responses or errors.

### What are some common pitfalls when testing asynchronous code?

A common pitfall is not waiting for asynchronous operations to finish before making assertions. This can cause tests to check the result too early.

Another common problem is not handling promises correctly or forgetting to test loading and error states. It is also important to make sure that mocks behave similarly to the real API responses so that the test remains useful.