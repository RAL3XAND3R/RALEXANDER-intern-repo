# PostgreSQL in Docker

## What are the benefits of running PostgreSQL in a Docker container?

Running PostgreSQL in Docker makes development easier because I don't need to install PostgreSQL directly on my computer. Docker keeps the database in its own container, which makes the environment more organized and easier to recreate.

It is also useful when working in a team because everyone can use the same Docker configuration and avoid having different PostgreSQL versions or configurations on their computers.

I also found the Docker logs useful because they make it easier to see what is happening inside the container and identify problems when something doesn't work.

## How do Docker volumes help persist PostgreSQL data?

Docker volumes allow the database data to exist separately from the container. This means that even if the PostgreSQL container is removed and created again, the data can still be there.

I tested this by creating some data, removing the container, and starting it again. The data was still available because it was stored in the Docker volume.

## How can you connect to a running PostgreSQL container?

A PostgreSQL container can be accessed using a database client such as `psql`, pgAdmin, or DBeaver.

The connection uses the host and port exposed by Docker, along with the PostgreSQL database name, username, and password.

In my case, I connected to the PostgreSQL database running inside the Docker container and was able to execute SQL commands normally.

## Conclusion

This task helped me understand the basic concepts of Docker, especially images, containers, volumes, ports, and logs. I found it useful because PostgreSQL can be started and managed without installing it directly on the computer, while the volume keeps the database data persistent.
