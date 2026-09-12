# Clean Code Principles

## Simplicity

Simplicity means keeping code as simple as possible without making it harder to understand or maintain.

## Messy Code Example

```typescript
function x(a: number, b: number, c: boolean) {
  if (c) {
    if (a > 0) {
      if (b > 0) {
        return a * b;
      }
    }
  }
}
```

## Why is this code difficult to read?

The function name `x` and parameters `a`, `b`, and `c` do not explain what they represent.

The nested `if` statements also make the logic harder to follow.

## Cleaner Version

```typescript
function calculateTotal(price: number, quantity: number): number {
  if (price <= 0 || quantity <= 0) {
    return 0;
  }

  return price * quantity;
}
```

## Why is this version better?

The function name `calculateTotal` immediately explains what the function does.

The parameters `price` and `quantity` are also much clearer.

# What I Learned

The main thing I learned from this exercise is that clean code is not simply about making code shorter.

The messy example could technically work, but it requires more effort to understand. The cleaner version makes the intention of the code much more obvious.




## Code Formatting & Style Guides

### Why is code formatting important?

Code formatting is important because it makes code easier to read and understand. When everyone follows the same formatting rules, it is easier to work on the same codebase without having to deal with different styles. It also helps make problems easier to spot and keeps the code more consistent.

For this issue, I used Prettier to automatically format the JavaScript code and keep things like indentation, quotes, line breaks, and spacing consistent.

### Airbnb JavaScript Style Guide

I also reviewed the Airbnb JavaScript Style Guide. It provides conventions for writing clean and consistent JavaScript code. Some of the main ideas include using meaningful names, keeping code readable, avoiding unnecessary complexity, and following consistent syntax and formatting rules.

The guide is useful because it gives developers a common set of rules to follow when working on JavaScript projects.

### What issues did the linter detect?

ESLint did not detect any linting errors after it was configured. I ran `npm run lint` and it completed without showing any errors or warnings.

Even though it did not find problems, configuring ESLint is still useful because it can automatically check the code in the future and help prevent style and code quality issues from being introduced.

### Did formatting the code make it easier to read?

Yes. After running Prettier, the code became easier to read because long lines were broken into smaller sections and the spacing, indentation, quotes, and other formatting were made consistent.

The functionality of the code did not change. Prettier only changed how the code is formatted, which makes it easier for another developer to understand and maintain.


  


## Naming Variables & Functions

### Why are good variable and function names important?

Good names make code easier to understand without having to read every line of the implementation. A variable name should clearly describe the value it contains, while a function name should describe the action it performs.

For example, a name like `price` is much easier to understand than `x`, and `calculateTotal` explains the purpose of a function better than `calc`.

Good names should be:

- Clear and descriptive.
- Easy to understand.
- Consistent with the naming style of the project.
- Specific enough to explain what the variable represents or what the function does.
- Not unnecessarily long or complicated.

### Example of unclear names

The following example uses ambiguous names that make the code harder to understand:

```javascript
function x(a, b) {
  const z = a * b;
  return z;
}
```

It is not immediately clear what `x`, `a`, `b`, or `z` represent. Someone reading the code would have to look at how the function is used or understand the surrounding code to figure it out.

### Refactored version

I refactored the code by giving the function, parameters, and variable more descriptive names:

```javascript
function calculateTotal(price, quantity) {
  const total = price * quantity;
  return total;
}
```

The logic is exactly the same, but the purpose of each part is much clearer:

- `x` was changed to `calculateTotal` because the function calculates a total.
- `a` was changed to `price` because it represents the price.
- `b` was changed to `quantity` because it represents the quantity.
- `z` was changed to `total` because it contains the calculated total.

### What issues can arise from poorly named variables?

Poorly named variables and functions can make code difficult to understand and maintain. Names such as `x`, `data`, `temp`, or `foo` may not provide enough information about what the value represents.

This can lead to misunderstandings, make debugging harder, and force developers to spend more time reading the surrounding code just to understand what a variable or function is supposed to do.

Poor names can also make larger projects harder to maintain because different developers may interpret the same code in different ways.

### How did refactoring improve code readability?

Refactoring the names made the code easier to understand without changing its functionality. With names such as `calculateTotal`, `price`, `quantity`, and `total`, the purpose of the code is much more obvious.

The main improvement was that the reader no longer needs to guess what each variable means. The names provide context directly in the code, which makes it easier to read, understand, and maintain.

### What I Learned

I learned that naming is an important part of writing clean code. Even when the code works correctly, unclear names can make it difficult for other developers, or even myself later, to understand what the code is doing.

Using descriptive names makes the intention of the code clearer and reduces the need for additional comments or explanations.



## Writing Small, Focused Functions

### Why is breaking down functions beneficial?

Breaking down large functions is beneficial because each smaller function can focus on one specific responsibility. This makes the code easier to understand, test, debug, and maintain.

Large functions can become difficult to follow when they handle several different tasks at the same time. Splitting them into smaller functions makes the purpose of each part much clearer.

### Refactoring Example

The `copyIssues()` function was responsible for several different tasks, including filtering issues, creating issue payloads, updating existing issues, creating new issues, and handling the overall process.

I refactored it into smaller functions with clear responsibilities:

- `shouldSkipIssue()` determines whether an issue should be skipped.
- `buildIssuePayload()` creates the data needed for a new issue.
- `addMilestoneToPayload()` adds the appropriate milestone to the issue payload.
- `updateExistingIssue()` updates an existing issue when its milestone needs to be changed.
- `createIssue()` creates a new issue in the destination repository.
- `copyIssues()` coordinates the overall process.

### How did refactoring improve the structure of the code?

Before the refactoring, `copyIssues()` contained several different responsibilities in one function, which made it harder to understand and maintain.

After the refactoring, each operation has its own function with a clear responsibility. The main `copyIssues()` function is now easier to follow because it mainly coordinates the different operations instead of containing all of the implementation details.

The functionality of the code was kept the same, but the structure is now cleaner, easier to read, and easier to maintain.


## Avoiding Code Duplication

### What were the issues with duplicated code?

The `fetchAll()` and `fetchAllIssues()` functions contained very similar pagination logic. Both functions used a loop to request multiple pages from the GitHub API, combined the results, checked if there was another page, and then increased the page number.

This duplication made the code harder to maintain because the same logic existed in more than one place. If the pagination logic needed to be changed, I would have to update it in multiple places, which could also lead to inconsistencies.

### How did refactoring improve maintainability?

I refactored `fetchAllIssues()` so that it uses the existing `fetchAll()` function instead of repeating the pagination logic.

Now, the pagination logic is handled in one place and can be reused by different parts of the application. This makes the code easier to maintain because future changes to the pagination process only need to be made in `fetchAll()`.


## Refactoring Code for Simplicity

### What made the original code complex?

The original `updateExistingIssue()` function had a long conditional that checked several things at the same time. It checked if the issue had a milestone, if the milestone existed in the map, and if the existing issue had a different milestone.

The same `milestoneMap[issue.milestone.number]` expression was also used multiple times, which made the condition harder to read.

### How did refactoring improve it?

I simplified the function by storing the milestone number in a variable and using early returns for the cases where no update was needed.

This made the function easier to follow because it now handles the simple cases first and only reaches the update logic when an update is actually necessary. The code is more readable and easier to maintain while keeping the same functionality.


## Commenting & Documentation

### When should you add comments?

Comments should be added when they provide information that is not obvious from the code. They are useful for explaining why something is done, documenting important decisions, or describing behavior that may not be immediately clear.

For this issue, I improved a comment in the `fetchAll()` function so that it explains that the function continues fetching pages from the GitHub API while a next page exists. This is more useful than simply saying that it is a helper function for paginated results.

### When should you avoid comments and improve the code instead?

Comments should be avoided when they only describe what the code is already clearly doing. For example, a comment like `// Increment page` above `page++` would not provide much value because the code already makes this obvious.

When code is difficult to understand, it is usually better to improve the code itself by using clearer names, simplifying conditions, or breaking large functions into smaller ones instead of adding more comments.


## Handling Errors & Edge Cases

### What was the issue with the original code?

The original `fetchAll()` function did not validate the `url` parameter before using it. If an invalid or empty URL was provided, the function would continue and eventually try to make an invalid API request.

I added a guard clause to check that a URL is provided before continuing. If the URL is missing, the function now throws an error with a clear message.

### How does handling errors improve reliability?

Handling errors and invalid inputs makes the application more reliable because it prevents unexpected values from continuing through the program and causing confusing failures later.

The guard clause makes the problem easier to identify because the function immediately reports that the URL is missing. This makes the code safer and easier to debug while keeping the normal behavior unchanged.



## Writing Unit Tests for Clean Code

### How do unit tests help keep code clean?

Unit tests help keep code clean by making it easier to verify that individual functions behave as expected. They also make refactoring safer because the tests can quickly show if a change breaks existing behavior.

For this issue, I added unit tests for the `shouldSkipIssue()` function. The tests verify that normal issues are not skipped, pull requests are skipped, and issues with normal milestones are not skipped.

### What issues did you find while testing?

While testing, I found that importing `duplicate-repo.js` caused the `duplicateRepo()` function to run automatically. This made Jest start the repository duplication process instead of only testing the function.

I fixed this by using `require.main === module`, so `duplicateRepo()` only runs when the file is executed directly. This allows Jest to import and test individual functions without starting the full repository duplication process.

After the change, all three unit tests passed successfully.