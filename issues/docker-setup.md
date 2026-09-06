# Docker Setup

## What is the difference between `docker run` and `docker-compose up`?

`docker run` is mainly used to create and start a single container from an image. With it, you normally have to specify the configuration directly in the command.

`docker-compose up` uses a Compose file to define the configuration of one or more services and then starts them together. This makes it more convenient for projects that need multiple containers.

## How does Docker Compose help when working with multiple services?

Docker Compose makes it easier to manage multiple services that need to work together. Instead of starting and configuring each container separately, the services can be defined in one Compose file and started together.

For example, a backend could use a NestJS API, PostgreSQL, and Redis. Compose allows all of them to be managed as part of the same environment.

## What commands can you use to check logs from a running container?

The main command is `docker logs`, which shows the logs from a specific container. With Docker Compose, `docker compose logs` can be used to see the logs from the services.

The logs are useful for finding errors and understanding what is happening inside a container.

## What happens when you restart a container? Does data persist?

When a container is restarted, the container itself remains and starts running again, so its data is normally still available.

However, for data that needs to survive if the container is removed and recreated, it is better to use a Docker volume. This is especially important for databases such as PostgreSQL.

## Reflection

This task helped me refresh the basic Docker concepts and commands. I already had some experience using Docker, but going through the commands again helped me remember how containers, images, logs, ports, volumes, and Docker Compose work together.
