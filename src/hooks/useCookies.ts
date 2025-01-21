import { Cookies } from '../cookie/index';
import type { CookieOptions } from '@interfaces/cookie-options';

export function useCookies() {

    const getCookie = (name: string): string | null => {
        return Cookies.getItem(name);
    };

    const getKeys = () => {
        return Cookies.getKeys();
    }

    const updateCookie = (name: string, value: string, options?: CookieOptions) => {
        Cookies.setItem(name, value, options);
    };

    const removeCookie = (name: string) => {
        Cookies.removeItem(name);
    };

    return {
        getCookie,
        getKeys,
        updateCookie,
        removeCookie,
        clearCookies: Cookies.clear
    };
}

export default useCookies;