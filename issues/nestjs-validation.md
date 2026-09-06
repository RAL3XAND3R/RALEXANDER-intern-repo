# NestJS Validation with Pipes

## Reflection

### What is the purpose of pipes in NestJS?

Pipes are used to process data before it reaches the controller. They can validate incoming data or transform it into the format the application expects. This is useful because the controller does not have to handle all the validation logic itself.

### How does `ValidationPipe` improve API security and data integrity?

`ValidationPipe` makes sure that incoming requests follow the rules defined in the DTO. This helps prevent invalid or unexpected data from reaching the application logic. It also makes the API more consistent because requests are checked before they are processed.

### What is the difference between built-in and custom pipes?

Built-in pipes are already provided by NestJS for common situations, such as `ValidationPipe` for validation and `ParseIntPipe` for converting values to integers. Custom pipes are created when the application needs specific validation or transformation that the built-in pipes do not provide.

### How do decorators like `@IsString()` and `@IsNumber()` work with DTOs?

These decorators define the validation rules for the properties inside a DTO. For example, `@IsString()` requires a value to be a string, while `@IsNumber()` checks that the value is a number. When combined with `ValidationPipe`, NestJS uses these rules to validate incoming requests automatically.
