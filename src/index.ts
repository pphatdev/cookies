import { CookieOptions } from "@interfaces/cookie-options";

/**
 * Provides a set of utility functions for interacting with browser cookies.
 */
export class Cookies {
    /**
     * Sets a cookie with the specified key and value.
     * @param key - The key to store the cookie under.
     * @param value - The value to store.
     * @param options - Additional options for the cookie.
     */
    static setItem(key: string, value: string, options?: CookieOptions): void {
        let cookieString = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;

        if (options) {
            if (options.expires) {
                const expiresDate = new Date(options.expires);
                cookieString += `; expires=${expiresDate.toUTCString()}`;
            }
            if (options.path) {
                cookieString += `; path=${options.path}`;
            }
            if (options.domain) {
                cookieString += `; domain=${options.domain}`;
            }
            if (options.secure) {
                cookieString += `; secure`;
            }
        }

        document.cookie = cookieString;
    }

    /**
     * Retrieves the value of the cookie with the specified key.
     * @param key - The key to retrieve the cookie for.
     * @returns The value of the cookie, or `null` if the cookie does not exist.
     */
    static getItem(key: string): string | null {
        const cookies = document.cookie.split('; ');
        for (const cookie of cookies) {
            const [cookieKey, cookieValue] = cookie.split('=');
            if (decodeURIComponent(cookieKey) === key) {
                return decodeURIComponent(cookieValue);
            }
        }
        return null;
    }

    /**
     * Updates the value of the cookie with the specified key.
     * @param key - The key to update the cookie for.
     * @param value - The new value to store.
     * @param options - Additional options for the cookie.
     */
    static updateItem(key: string, value: string, options?: CookieOptions): void {
        Cookies.setItem(key, value, options);
    }

    /**
     * Removes the cookie with the specified key.
     * @param key - The key of the cookie to remove.
     */
    static removeItem(key: string): void {
        document.cookie = `${encodeURIComponent(key)}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    }

    /**
     * Clears all cookies.
     */
    static clear(): void {
        const cookies = document.cookie.split('; ');
        for (const cookie of cookies) {
            const cookieKey = cookie.split('=')[0];
            Cookies.removeItem(decodeURIComponent(cookieKey));
        }
    }

    /**
     * Gets an array of all the keys stored in the cookies.
     * @returns An array of all the keys stored in the cookies.
     */
    static getKeys(): string[] {
        return document.cookie.split('; ').map(cookie => decodeURIComponent(cookie.split('=')[0]));
    }
}

declare global {
    interface Window {
        Cookies: typeof Cookies;
    }
}

window.Cookies = Cookies;

export type { CookieOptions };
export default Cookies;