# TypeORM Migrations & Seeding

## What is the purpose of database migrations in TypeORM?

Migrations are used to manage changes to the database structure in a controlled and versioned way. Instead of changing the database manually, TypeORM can generate migration files that describe changes such as creating tables or adding columns.

I tested this by creating a migration from a TypeORM entity and applying it to my PostgreSQL database.

## What is the difference between migrations and seeding?

Migrations are used for changes to the database structure, while seeding is used to insert initial or test data.

For example, a migration can create the `users` table, while a seed can insert sample users into that table.

## Why should database schema changes be version-controlled?

Keeping migrations in version control makes it easier for everyone working on a project to have the same database structure. It also provides a history of the changes made to the database and allows those changes to be reproduced in another environment.

## How can you roll back a migration?

A migration can be rolled back using the `migration:revert` command. This runs the `down()` method of the latest migration and reverses its changes.

I tested this by creating a table with a migration, reverting it, and then running the migration again.

## Reflection

This task helped me understand how TypeORM migrations and seeds work together. I learned that migrations manage the database structure, while seeds add data to it. I also practiced generating, running, and reverting migrations and using TypeORM repositories to insert sample data.

