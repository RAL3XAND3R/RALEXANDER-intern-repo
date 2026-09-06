# NestJS TypeORM

## How does `@nestjs/typeorm` simplify database interactions?

`@nestjs/typeorm` makes it easier to use TypeORM inside a NestJS application by integrating TypeORM with NestJS modules and dependency injection. Instead of managing the database connection completely on my own, NestJS can handle the connection and make repositories available to the parts of the application that need them.

This makes the code more organized because the database logic can be separated into entities, repositories, and services.

## What is the difference between an entity and a repository in TypeORM?

An entity represents the structure of a table in the database. It defines the fields and relationships that the data will have.

A repository is used to interact with that entity in the database. It provides methods that can be used to find, create, update, and delete records without having to write every SQL query manually.

In simple terms, the entity describes the data, while the repository is what I use to work with that data.

## How does TypeORM handle migrations in a NestJS project?

TypeORM migrations are used to manage changes to the database structure over time. Instead of manually changing the database every time an entity changes, migrations allow those changes to be recorded and applied in a controlled way.

This is useful when working on a project with other developers because everyone can apply the same database changes and keep their database structure consistent.

## What are the advantages of using PostgreSQL over other databases in a NestJS app?

PostgreSQL is a powerful relational database that works well for applications that have structured data and relationships between different entities.

It provides strong data integrity, supports complex queries and relationships, and has features that make it suitable for larger applications. It also works well with TypeORM, making it a good choice for a NestJS backend where the application needs to manage relational data.
