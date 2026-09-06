# Understanding the Focus Bear Coverage Bar & Writing Meaningful Tests

## What the Coverage Bar Tracks

The coverage bar shows how much of the code is actually being executed by the tests.

There are different types of coverage, such as statements, branches, functions, and lines. A high percentage means that the tests are reaching a large part of the code, but that does not automatically mean that the code is being tested properly.

For example, a test could execute a function without actually checking whether the function returned the correct result. The code would technically be covered, but the test would not provide much confidence that the application is working correctly.

## Why Focus Bear Has a Minimum Coverage Requirement

Focus Bear requires at least 80% test coverage before deployment because tests can help catch bugs before changes reach users.

A good level of coverage also makes it safer to modify existing code. If something breaks after a change, a good test suite can detect the problem instead of allowing it to reach production.

I think the 80% requirement is useful as a minimum standard, but it should not be treated as the only measurement of test quality.

## Why High Coverage Can Still Be Misleading

High coverage does not necessarily mean that all important behaviour has been tested.

For example, imagine a function that has several possible outcomes. A test might execute the function and cover all of its lines without checking whether each outcome is actually correct.

Another example would be testing that a function runs without checking its returned value.

This is why a project can have a very high coverage percentage while still containing bugs that the tests would not detect.

Coverage tells us where the tests are going, but the assertions tell us whether the tests are actually checking something useful.

## Weak vs Strong Test Assertions

A weak test might only check that a function does not throw an error or that a value exists.

For example, checking that a result is not `undefined` does not tell me much about whether the result is actually correct.

A stronger assertion would check the expected behaviour directly.

For example, if a function should return a task with a specific title, a meaningful test could check that the returned task actually contains that expected title.

The difference is that the stronger assertion verifies the behaviour that the application is supposed to provide rather than simply verifying that the code executed.

## Balancing Coverage and Test Quality

I would not try to increase coverage just for the sake of making the percentage higher.

If a part of the code is important, I would rather write a test that verifies its actual behaviour than add a test that simply executes the code.

At the same time, coverage is still useful because it can show areas that have been completely ignored by the existing tests.

The best approach seems to be using coverage as a guide while focusing on meaningful assertions and important application behaviour.

## What I Still Need to Practice

I understand the general purpose of test coverage and why high coverage does not automatically mean high-quality tests.

I still need to complete the practical part of this exercise in a NestJS project, including:

* Running the Jest test suite with coverage enabled.
* Looking at the generated coverage report.
* Identifying code that is not being tested.
* Adding tests for uncovered behaviour.
* Finding a weak test and improving its assertions.
* Comparing the coverage percentage before and after the changes.

I want to focus on the quality of the tests rather than simply trying to increase the coverage number.
