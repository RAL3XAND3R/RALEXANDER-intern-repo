# What is Docker and Why Use It?

## How does Docker differ from a virtual machine?

Docker containers are generally lighter than virtual machines because they don't need a complete operating system for each application. Containers share the underlying system resources while keeping the applications and their dependencies isolated.

Virtual machines, on the other hand, run a complete operating system inside each virtual machine, which usually requires more resources.

## Why is containerization useful for a backend like Focus Bear's?

Containerization makes it easier to run the backend with the same configuration and dependencies across different environments. This is especially useful for Focus Bear because the backend depends on services such as PostgreSQL, Redis, and the NestJS API.

## How do containers help with dependency management?

Containers allow the application and its required environment to be defined together. This helps avoid problems caused by different versions or configurations on different computers and makes the development environment easier to reproduce.

## What are the potential downsides of using Docker?

Docker can use a significant amount of system resources and can add some complexity to development. Networking, volumes, permissions, and container configuration can sometimes be difficult to troubleshoot. For small projects, Docker can also be unnecessary overhead.

## Reflection

After working with Docker, I think its main advantage is making development environments more consistent and easier to reproduce. It is especially useful when a project depends on several services that need to work together.
