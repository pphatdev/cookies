# Cookie Utility

This project provides a set of utility functions for interacting with browser cookies. The `Cookies` class offers methods to set, get, update, remove, and clear cookies, as well as retrieve all cookie keys.

## Installation

To install the project, clone the repository and run:

```
npm install
```

## Usage

### Setting a Cookie

```typescript
import { Cookies } from './src/cookies';

Cookies.setItem('key', 'value', { expires: 7 });
```

### Getting a Cookie

```typescript
const value = Cookies.getItem('key');
```

### Updating a Cookie

```typescript
Cookies.updateItem('key', 'newValue');
```

### Removing a Cookie

```typescript
Cookies.removeItem('key');
```

### Clearing All Cookies

```typescript
Cookies.clear();
```

### Getting All Cookie Keys

```typescript
const keys = Cookies.getKeys();
```

## License

This project is licensed under the MIT License.