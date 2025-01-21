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

## Usage

### Using React Hook

```tsx
import { useCookies } from '@sophat/cookies/hooks';

function MyComponent() {
    const { getCookie, getKeys, updateCookie, removeCookie, clearCookies } = useCookies();

    const handleGetCookie = () => {
        const cookieValue = getCookie('my-cookie');
        console.log('Cookie Value:', cookieValue);
    };

    const handleUpdateCookie = () => {
        updateCookie('my-cookie', 'new value', {
            expires: new Date('2024-12-31'),
            path: '/',
            secure: true,
            sameSite: 'Strict'
        });
    };

    const handleRemoveCookie = () => {
        removeCookie('my-cookie');
    };

    return (
        <div>
            <button onClick={handleGetCookie}>Get Cookie</button>
            <button onClick={handleUpdateCookie}>Update Cookie</button>
            <button onClick={handleRemoveCookie}>Remove Cookie</button>
            <button onClick={clearCookies}>Clear All Cookies</button>
        </div>
    );
}
```

### Using Direct Cookie Methods

### Setting a Cookie

```typescript
import { Cookies } from '@sophat/cookies';
import type { CookieOptions } from '@interfaces/cookie-options';

Cookies.setItem('key', 'value', {
    expires: new Date('2024-12-31'),
    path: '/',
    domain: 'example.com',
    secure: true,
    sameSite: 'Strict'
});

const value = Cookies.getItem('key');
Cookies.removeItem('key');
Cookies.clear();
```

### Getting a Cookie

```typescript
const value = Cookies.get('key');
```

### Removing a Cookie

```typescript
Cookies.remove('key');
```

### Clearing All Cookies

```typescript
Cookies.clear();
```

### Getting All Cookie Keys

```typescript
const keys = Cookies.keys();
```

### Cookie Options

```ts
interface CookieOptions {
    expires?: Date | string | number;
    path?: string;
    domain?: string;
    secure?: boolean;
    sameSite?: 'strict' | 'lax' | 'none';
}
```

## License

This project is licensed under the MIT License.