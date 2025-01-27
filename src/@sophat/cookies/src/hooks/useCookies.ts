import Cookies from "../cookie";
import { CookieOptions } from '../interfaces/cookie-options';

/**
 * Custom hook for managing cookies in a React application.
 * @returns An object containing methods to manipulate cookies:
 *  - `setCookie`: Sets a cookie with the specified name, value, and options
 *  - `getCookie`: Retrieves a cookie value by name
 *  - `removeCookie`: Removes a cookie by name
 *  - `getKeys`: Gets an array of all cookie names
 *
 * @example
 * ```typescript
 * const { setCookie, getCookie, removeCookie, getKeys } = useCookie();
 *
 * // Set a cookie
 * setCookie('user', 'john', { expires: 7 });
 *
 * // Get a cookie
 * const value = getCookie('user');
 *
 * // Remove a cookie
 * removeCookie('user');
 *
 * // Get all cookie names
 * const cookieNames = getKeys();
 * ```
 */
export const useCookie = () => {

    const setCookie = (name: string, value: string, options?: CookieOptions) => {
        Cookies.setItem(name, value, options);
    };

    const getCookie = (name: string): string | null => {
        return Cookies.getItem(name);
    };

    const removeCookie = (name: string, options?: CookieOptions) => {
        Cookies.removeItem(name, options);
    };

    const getKeys = (): string[] => {
        return Cookies.getKeys();
    };

    return {
        getCookie,
        setCookie,
        removeCookie,
        getKeys
    };
};