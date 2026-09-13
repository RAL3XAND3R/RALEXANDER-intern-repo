# CI/CD Reflection

## What is the purpose of CI/CD?

CI/CD is used to automate parts of the software development process. Continuous Integration helps developers detect problems early by automatically running checks and tests when changes are pushed or submitted through pull requests.

Continuous Delivery and Continuous Deployment extend this idea by automating the process of preparing or deploying software after the changes have passed the required checks.

In this issue, I mainly worked with the CI part by setting up automated Markdown linting and spell checking for pull requests.

## How does automating style checks improve project quality?

Automating style checks helps keep the project consistent without relying completely on developers to remember every rule.

For example, Markdownlint can detect formatting problems in documentation, while CSpell can detect possible spelling mistakes. Running these checks automatically means that problems can be detected before changes are merged.

I also experimented with Husky so that the same type of checks can run before creating a commit. This provides an additional layer of protection because problems can be detected locally before they reach the repository.

## What are some challenges with enforcing checks in CI/CD?

One challenge is that automated tools can sometimes report false positives. Technical terms, project-specific names, or abbreviations may not be recognized by a spell checker even though they are valid.

Another challenge is maintaining the configuration as the project grows. If checks become too strict, they can make development frustrating or create unnecessary failures. The checks need to be useful without becoming a burden for developers.

CI pipelines can also take time to run, especially when a project has many tests and other checks.

## How do CI/CD pipelines differ between small projects and large teams?

Small projects can usually use relatively simple pipelines. For example, a small project might only run linting, tests, Markdown checks, and spell checking when a pull request is created.

Large teams usually need more complex pipelines because they have more developers, more code, and more systems to manage. Their pipelines may include unit tests, integration tests, security checks, builds, deployments, and other quality checks.

The main idea is the same in both cases: automate repetitive checks so that problems can be detected earlier and changes can be integrated more safely.
