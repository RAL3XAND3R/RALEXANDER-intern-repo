# API Debugging with Bruno

## What I learned

In this issue, I learned how to use Bruno to test and debug API requests in a NestJS application.

Before this, I was already familiar with tools like Postman and cURL, but Bruno feels simpler and more focused on keeping API requests organized. I liked that the collections are stored as files, which makes them easier to manage and keep together with a project.

## Bruno vs Postman and cURL

Bruno and Postman are both API testing tools, and they can be used for similar things such as sending GET, POST, PUT, and DELETE requests, adding headers, and testing authentication.

The main difference I noticed is that Bruno is more focused on a file-based workflow. Instead of keeping everything inside a cloud-based workspace, requests and collections can be stored locally. This also makes it easier to use them with Git.

cURL is different because it is mainly a command-line tool. It is very useful for quickly testing an endpoint, but Bruno is more convenient when I have many requests that I want to save and organize.

## Sending authenticated requests

I learned that authenticated requests can be sent in Bruno by adding the required authentication information to the request.

For example, if an API uses a Bearer token, the request can include an `Authorization` header:

```text
Authorization: Bearer <token>
```

This allows Bruno to test endpoints that require authentication in the same way a real client would access them.

## Collections

One of the things I found useful about Bruno is the ability to organize requests into collections.

Instead of having a large number of random requests, I can group them according to the API functionality.

For example:

```text
NestJS Backend
├── Auth
│   ├── Login
│   └── Register
├── Users
│   ├── Get Users
│   ├── Get User
│   └── Update User
└── Tasks
    ├── Get Tasks
    ├── Create Task
    └── Delete Task
```

This makes it easier to find requests and test different parts of the backend.

## How I would structure a NestJS collection

For a real NestJS project, I would organize the Bruno collection based on the modules or main features of the application.

For example, I could have separate folders for authentication, users, tasks, and any other modules in the backend. Inside each folder, I would keep the requests related to that feature.

I could also keep common environment variables, such as the API URL or authentication token, so that I don't have to manually change them in every request.

## Final thoughts

This practice helped me understand why having an API testing tool is useful during backend development. Bruno makes it easy to send requests, inspect responses, test headers and authentication, and keep everything organized.

I also liked the fact that Bruno uses a file-based approach because it fits well with Git and development workflows. Compared with cURL, it is much easier to keep a collection of requests that I can reuse later, while still being lightweight compared to some of the more complex API tools.

Overall, I think Bruno is a useful tool for testing a NestJS API, especially when a project has many endpoints that need to be tested repeatedly.
