# Role-Based Authorization (RBAC) in NestJS

### How does Auth0 store and manage user roles?

Auth0 allows roles to be created and assigned to users. Permissions can then be assigned to those roles, so users get access depending on the role they have. The authorization information can also be included in the access token so the API can use it when checking access.

### What is the purpose of a guard in NestJS?

A guard decides whether a request is allowed to continue to an endpoint. It can check information about the user and their permissions before the controller is executed. In this case, the guard was used to check if the user had the required role.

### How would you restrict access to an API endpoint based on user roles?

I would protect the endpoint with a guard that checks the authenticated user's role. For example, an admin endpoint could check that the user has the admin role and reject the request if they have a different role.

### What are the security risks of improper authorization, and how can they be mitigated?

If authorization is not implemented correctly, users could gain access to features or data they should not have access to. One important risk is trusting role information directly from the client, since a user could modify it. To prevent this, the backend should validate the user's authentication token and use trusted authorization information when making access decisions.
