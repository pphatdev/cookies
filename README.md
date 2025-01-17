# Cookie Utility

This project provides a set of utility functions for interacting with browser cookies. The `Cookies` class offers methods to set, get, update, remove, and clear cookies, as well as retrieve all cookie keys.

## Installation

You can install the package via npm:

```bash
npm install @sophat/cookies
```

Or using yarn:

```bash
yarn add @sophat/cookies
```

Or using local via github

```bash
cd project_dir/packages && git clone https://github.com/pphatdev/cookies.git && npm link @sophat/cookies
```

## Usage

### Setting a Cookie

```typescript
import { Cookies } from '@sophat/cookies';

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