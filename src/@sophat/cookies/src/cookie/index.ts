import { CookieOptions } from "@interfaces/cookie-options";

export class Cookies {
    /**
     * Sets a cookie with the specified name, value, and options.
     *
     * @param name - The name of the cookie to set
     * @param value - The value to store in the cookie
     * @param options - Optional configuration object for the cookie
     * @param options.expires - Expiration date of the cookie (as Date object or number of days)
     * @param options.path - Path on the server where the cookie will be accessible
     * @param options.domain - Domain where the cookie will be accessible
     * @param options.secure - If true, cookie will only be transmitted over secure HTTPS
     * @param options.sameSite - Controls how the cookie is sent with cross-site requests
     *
     * @example
     * ```typescript
     * // Set a cookie that expires in 7 days
     * Cookie.setItem('userToken', 'abc123', { expires: 7 });
     *
     * // Set a secure cookie with specific domain
     * Cookie.setItem('sessionId', '12345', {
     *   secure: true,
     *   domain: 'example.com',
     *   sameSite: 'strict'
     * });
     * ```
     */
    static setItem(name: string, value: string, options: CookieOptions = {}) {
        if (typeof window === 'undefined') return;

        let cookieString = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;

        if (options.expires) {
            if (typeof options.expires === 'number') {
                const date = new Date();
                date.setTime(date.getTime() + options.expires * 24 * 60 * 60 * 1000);
                options.expires = date;
            }
            cookieString += `;expires=${options.expires.toUTCString()}`;
        }

        if (options.path) cookieString += `;path=${options.path}`;
        if (options.domain) cookieString += `;domain=${options.domain}`;
        if (options.secure) cookieString += ';secure';
        if (options.sameSite) cookieString += `;samesite=${options.sameSite}`;

        document.cookie = cookieString;
    }

    /**
     * Returns the value of the cookie with the specified name.
     *
     * @param name - The name of the cookie to retrieve
     *
     * @example
     * ```typescript
     * const userToken = Cookie.getItem('userToken');
     * console.log(userToken); // 'abc123'
     * ```
     */
    static getItem(name: string): string | null {
        if (typeof window === 'undefined') return null;

        const matches = document.cookie.match(
            new RegExp(`(?:^|; )${name.replace(/([.$?*|{}()[\]\\/+^])/g, '\\$1')}=([^;]*)`)
        );
        return matches ? decodeURIComponent(matches[1]) : null;
    }

    /**
     * Removes the cookie with the specified name.
     *
     * @param name - The name of the cookie to remove
     * @param options - Optional configuration object for the cookie
     * @param options.path - Path on the server where the cookie is accessible
     * @param options.domain - Domain where the cookie is accessible
     *
     * @example
     * ```typescript
     * Cookie.removeItem('userToken');
     * ```
     */
    static removeItem(name: string, options: CookieOptions = {}) {
        this.setItem(name, '', { ...options, expires: -1 });
    }

    /**
     * Returns an array of all cookie names.
     *
     * @example
     * ```typescript
     * const cookieNames = Cookie.getKeys();
     * console.log(cookieNames); // ['userToken', 'sessionId']
     * ```
     */
    static getKeys(): string[] {
        if (typeof window === 'undefined') return [];
        return document.cookie
            .split(';')
            .map(cookie => cookie.split('=')[0].trim())
            .filter(name => name.length > 0);
    }
};


export type { CookieOptions };
export default Cookies;