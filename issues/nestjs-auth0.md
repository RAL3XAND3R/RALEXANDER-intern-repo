# Authentication in NestJS with Auth0 & JWT

### How does Auth0 handle authentication compared to traditional username/password auth?

With a traditional authentication system, the application usually has to manage the user's passwords, login process, and authentication logic itself. Auth0 handles most of this process for the application. The user authenticates through Auth0, and after a successful login, Auth0 provides the application with tokens that can be used to authenticate requests.

This makes authentication easier to manage because the application does not have to directly handle user passwords.

### What is the role of JWT in API authentication?

JWT is used to securely carry information about an authenticated user. After the user logs in, Auth0 can issue an access token that the client sends when making requests to the API.

The NestJS backend can then verify the token before allowing access to protected endpoints. This allows the API to know that the request comes from an authenticated user without having to keep a traditional session on the server.

### How do jwks-rsa and public/private key verification work in Auth0?

Auth0 signs its tokens using a private key. The API does not need the private key to verify the token. Instead, it can obtain the corresponding public key from Auth0's JWKS endpoint.

`jwks-rsa` helps the application retrieve the correct public key from Auth0 so that the JWT signature can be verified. This allows the API to check that the token was actually issued by Auth0 and has not been modified.

### How would you protect an API route so that only authenticated users can access it?

I would use a NestJS guard that checks the access token included in the request. The guard would validate the JWT and only allow the request to continue if the token is valid and belongs to the expected Auth0 API.

If the user does not provide a valid token, the request should be rejected with an unauthorized response. This way, authentication is checked on the backend before the protected endpoint is executed.
