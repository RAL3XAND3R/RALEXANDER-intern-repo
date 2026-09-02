¿# NestJS API Tests

## Reflexión

### ¿Cómo ayuda Supertest a probar los endpoints de una API?

Supertest permite probar los endpoints de una API simulando peticiones HTTP reales. En mi caso lo utilicé para probar el endpoint `GET /tasks` y comprobar que devolviera un código de estado `200` y la información esperada.

También permite probar diferentes métodos como `GET` y `POST` y comprobar qué sucede cuando se envían datos correctos o incorrectos. Esto ayuda a detectar errores sin tener que probar manualmente cada endpoint desde Postman.

### ¿Cuál es la diferencia entre los unit tests y los API tests?

Los unit tests prueban una parte específica del código de forma aislada. Por ejemplo, puedo probar directamente un método de un Controller o Service y utilizar mocks para evitar depender de otros componentes.

Los API tests prueban el comportamiento de la aplicación desde el punto de vista de una petición HTTP. En este caso utilicé Supertest para hacer una petición a `GET /tasks` y a `POST /tasks`, pasando por la aplicación de NestJS.

En resumen, un unit test prueba una pieza concreta, mientras que un API test comprueba que varias partes funcionen correctamente juntas.

### ¿Por qué se debería simular la autenticación en los integration tests?

Simular la autenticación permite probar los endpoints sin depender de un sistema de autenticación real, una base de datos de usuarios o servicios externos.

Por ejemplo, se puede proporcionar un JWT de prueba para comprobar cómo responde la API cuando un usuario está autenticado. Esto hace que las pruebas sean más rápidas, predecibles y fáciles de ejecutar.

También permite probar diferentes situaciones, como un usuario autenticado, un token inválido o una petición sin autenticación.

### ¿Cómo se pueden estructurar los API tests para cubrir casos exitosos y casos de error?

Los tests pueden organizarse según los diferentes comportamientos que esperamos del endpoint.# NestJS API Tests

## Reflection

### How does Supertest help test API endpoints?

Supertest allows me to test API endpoints by simulating real HTTP requests. I used it to test the `GET /tasks` endpoint and check that it returned the expected status code (`200`) and the correct response body.

It can also be used with different HTTP methods such as `GET` and `POST`, and it makes it possible to test how the API behaves when receiving valid or invalid data. This helps find problems automatically instead of having to test every endpoint manually with Postman.

### What is the difference between unit tests and API tests?

Unit tests focus on testing a specific part of the application in isolation. For example, I can test a Controller or Service directly and use mocks so that the test does not depend on other components.

API tests test the application through HTTP requests. In this case, I used Supertest to send requests to `GET /tasks` and `POST /tasks` and check how the NestJS application responds.

In simple terms, a unit test focuses on one specific piece of code, while an API test checks that multiple parts of the application work correctly together.

### Why should authentication be mocked in integration tests?

Mocking authentication allows us to test protected endpoints without depending on a real authentication system, database, or external service.

For example, a test JWT can be provided to simulate an authenticated user. This makes the tests faster, more predictable, and easier to run.

It also allows us to test different authentication scenarios, such as a valid token, an invalid token, or a request without authentication.

### How can you structure API tests to cover both success and failure cases?

API tests can be organized around the different behaviors that we expect from an endpoint.

For example, for `POST /tasks`, we could test:

 A request with a valid `title` → the request should be accepted.
A request with an empty `title` → it should return `400 Bad Request`.
A request with the wrong data type → it should return `400 Bad Request`.
A request without authentication, if authentication is required → it should return the appropriate error status.

This makes sure that the API is tested not only when everything works correctly, but also when users send invalid data or something goes wrong.

## Conclusion

API tests allow us to check the behavior of an application in a way that is closer to how a real client would use it. Supertest makes it easy to send HTTP requests automatically and verify both the response and the HTTP status code.

I also learned that tests are not only useful for checking that something works. They can also detect when a change accidentally breaks functionality that was already working.


Por ejemplo, para `POST /tasks` se puede probar:

Una petición con un `title` válido → debe ser aceptada.
Una petición con un `title` vacío → debe devolver `400 Bad Request`.
Una petición con un tipo de dato incorrecto → debe devolver `400 Bad Request`.
Una petición sin autenticación, si el endpoint la requiere → debe devolver el código correspondiente.

De esta manera no solamente se comprueba que la API funciona cuando todo está correcto, sino también que maneja correctamente los errores.

## Conclusión

Los API tests permiten comprobar el comportamiento de la aplicación de una manera más cercana a cómo la utilizaría un usuario o cliente real. Supertest facilita hacer estas peticiones automáticamente y comprobar tanto las respuestas como los códigos de estado.

También aprendí que los tests no solamente sirven para comprobar que algo funciona, sino para detectar cambios que puedan romper funcionalidades que ya funcionaban anteriormente.
