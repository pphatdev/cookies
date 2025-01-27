This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Cookie Utility

This project provides a set of utility functions for interacting with browser cookies. The `Cookies` class offers methods to set, get, update, remove, and clear cookies, as well as retrieve all cookie keys.

### Installation

You can install the package via npm:

```bash
npm install @sophat/cookies
```

Or using yarn:

```bash
yarn add @sophat/cookies
```

### Usage

#### Importing the Library

To use the `Cookies` class and `useCookie` hook, import them as follows:

```typescript
import { Cookies, useCookie } from '@sophat/cookies';
```
example: [demo](https://github.com/pphatdev/cookies/blob/master/src/app/page.tsx)

#### Using the `Cookies` Class

##### Setting a Cookie

```typescript
Cookies.setItem('userToken', 'abc123', { expires: 7 });
```

##### Getting a Cookie

```typescript
const userToken = Cookies.getItem('userToken');
console.log(userToken); // 'abc123'
```

##### Removing a Cookie

```typescript
Cookies.removeItem('userToken');
```

##### Getting All Cookie Names

```typescript
const cookieNames = Cookies.getKeys();
console.log(cookieNames); // ['userToken']
```

#### Using the `useCookie` Hook

##### Setting a Cookie

```typescript
const { setCookie } = useCookie();
setCookie('user', 'john', { expires: 7 });
```

##### Getting a Cookie

```typescript
const { getCookie } = useCookie();
const value = getCookie('user');
console.log(value); // 'john'
```

##### Removing a Cookie

```typescript
const { removeCookie } = useCookie();
removeCookie('user');
```

##### Getting All Cookie Names

```typescript
const { getKeys } = useCookie();
const cookieNames = getKeys();
console.log(cookieNames); // ['user']
```