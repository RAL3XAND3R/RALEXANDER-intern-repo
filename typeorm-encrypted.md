# Using `typeorm-encrypted` for Data Encryption

## Why does Focus Bear double encrypt sensitive data instead of relying on database encryption alone?

Database encryption at rest is useful because it protects the database storage, but it does not mean that every piece of data inside the database is individually encrypted.

This is where `typeorm-encrypted` adds another layer of protection. Sensitive fields can be encrypted by the application before they are saved to the database.

For example, instead of the database storing:

```text
My secret information
```

it would store something like:

```text
a8f92kLm3x...
```

The application can still work with the original value because it is decrypted when the entity is loaded.

I think the main reason for using both approaches is that they protect against different situations. Database encryption protects the stored data, while field-level encryption gives extra protection to specific sensitive values.

## How does `typeorm-encrypted` integrate with TypeORM entities?

`typeorm-encrypted` works with TypeORM by using an encryption transformer on the entity field that needs to be protected.

For example:

```ts
@Column({
  type: 'text',
  transformer: encryptionTransformer,
})
sensitiveData: string;
```

The useful part is that I do not have to manually encrypt and decrypt the value every time I use it.

The application can work with the normal value:

```text
"My secret information"
```

and the transformer takes care of encrypting it before it is stored in the database and decrypting it when it is retrieved.

I tested this by saving a value and checking what was actually stored in the database. The database contained the encrypted version, but when I retrieved the entity through TypeORM, I got the original value back.

That made the difference between application-level data and database-level data much easier to understand.

## What are the best practices for securely managing encryption keys?

The encryption key is obviously very important because it is needed to decrypt the data. Because of this, it should not be written directly in the source code or committed to Git.

For development, I can keep the key in an environment variable, for example:

```text
ENCRYPTION_KEY=development-secret-key
```

The `.env` file should not be committed to the repository.

For a real production application, the key should be stored in a proper secrets management system instead of just keeping it somewhere in the source code.

Another important thing I learned is that losing the encryption key can be a serious problem. If encrypted data is stored but the key is lost, the application may no longer be able to decrypt that data.

## What are the trade-offs between encrypting at the database level vs. the application level?

Database-level encryption is simpler because the application does not have to handle the encryption itself. It protects the database storage, but the database can still work with the original data when the application is using it.

Application-level encryption gives more control because I can choose exactly which fields should be encrypted before they are stored.

The downside is that it adds more work. The application needs to manage the encryption keys and handle encryption and decryption. It can also make some database operations more difficult, especially searching or filtering encrypted fields.

For me, the main difference is:

```text
Database-level encryption
→ Protects the database storage
→ Easier to manage
→ Less application complexity

Application-level encryption
→ Protects specific fields
→ Gives more control
→ Requires key management
→ Can make some queries more complicated
```

## What I Learned

The main thing I learned from this exercise is that encryption can be added at different levels.

Before doing this exercise, I mainly thought of encryption as something handled by the database. Using `typeorm-encrypted` showed me that the application can also encrypt specific fields before sending them to the database.

I also learned how the TypeORM transformer makes this process easier because the application can continue working with the normal value while the encrypted value is stored in the database.

The part I found most important was understanding the encryption key. Encrypting the data is only part of the problem. The key also needs to be protected properly because without it, the encrypted data cannot be recovered.

Overall, this exercise helped me understand why Focus Bear uses an additional layer of encryption for sensitive data instead of relying only on database encryption at rest.
