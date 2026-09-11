# Clean Code Principles

## Simplicity

Simplicity means keeping code as simple as possible without making it harder to understand or maintain.

## Messy Code Example

```typescript
function x(a: number, b: number, c: boolean) {
  if (c) {
    if (a > 0) {
      if (b > 0) {
        return a * b;
      }
    }
  }
}
```

## Why is this code difficult to read?

The function name `x` and parameters `a`, `b`, and `c` do not explain what they represent.

The nested `if` statements also make the logic harder to follow.

## Cleaner Version

```typescript
function calculateTotal(price: number, quantity: number): number {
  if (price <= 0 || quantity <= 0) {
    return 0;
  }

  return price * quantity;
}
```

## Why is this version better?

The function name `calculateTotal` immediately explains what the function does.

The parameters `price` and `quantity` are also much clearer.

# What I Learned

The main thing I learned from this exercise is that clean code is not simply about making code shorter.

The messy example could technically work, but it requires more effort to understand. The cleaner version makes the intention of the code much more obvious.