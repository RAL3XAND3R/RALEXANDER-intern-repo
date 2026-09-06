# Handling Environment Variables and Configuration in NestJS

## What I learned

In this issue, I learned how NestJS can manage environment variables and application configuration using `@nestjs/config`.

Environment variables are useful because applications usually need values that can change depending on where the application is running. For example, the database URL, API keys, ports, and other configuration values may be different between a local development environment and production.

Instead of putting these values directly into the source code, they can be stored as environment variables.

## Using `@nestjs/config`

The `@nestjs/config` package provides a simple way for a NestJS application to load and access environment variables.

For example, a `.env` file could contain:

```env
PORT=3000
DATABASE_URL=example_database_url
API_KEY=example_api_key
```

The application can then access these values through NestJS configuration instead of having them hardcoded in the source code.

This makes the application easier to configure without having to change the actual code every time an environment changes.

## Why secrets should not be stored in source code

Secrets such as API keys, database passwords, tokens, and other credentials should not be written directly into the source code.

If they are committed to Git, they could become accessible to other people or remain visible in the repository history even after the value is removed from the current version.

Using environment variables helps keep these values separate from the application code.

A common approach is to keep the real `.env` file out of version control and provide an `.env.example` file containing only the required variable names.

For example:

```env
PORT=
DATABASE_URL=
API_KEY=
```

This shows developers what configuration is required without exposing the actual secrets.

## Validating environment variables

I also learned that it is useful to validate environment variables when the application starts.

For example, if the application requires a database URL or API key and that variable is missing, it is better to detect the problem immediately during startup instead of allowing the application to start and fail later.

Validation can also make sure that values have the correct format or type, such as making sure that a port is a valid number.

This makes configuration errors easier to find and prevents some problems from reaching production.

## Different environments

Configuration can also be separated between different environments.

For example, development and production might use different database connections, API keys, or other settings.

The application can use environment-specific configuration while keeping the application code the same.

This is useful because the same NestJS application can run locally, in staging, or in production without having to modify the source code for each environment.

## Final thoughts

This issue helped me understand that environment variables are not just a convenient way to store configuration. They are also an important part of keeping secrets out of the source code and making applications easier to deploy in different environments.

Using `@nestjs/config`, validating required variables, and keeping `.env` files containing real secrets out of Git are good practices for maintaining a secure and flexible NestJS backend.
