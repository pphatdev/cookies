import { useState, useEffect } from 'react';
import { Cookies } from '../index';
import type { CookieOptions } from '@interfaces/cookie-options';

export function useCookies(key: string) {
    const [cookie, setCookie] = useState<string | null>(null);

    useEffect(() => {
        // Get initial cookie value
        setCookie(Cookies.getItem(key));
    }, [key]);

    const updateCookie = (value: string, options?: CookieOptions) => {
        Cookies.setItem(key, value, options);
        setCookie(value);
    };

    const removeCookie = () => {
        Cookies.removeItem(key);
        setCookie(null);
    };

    return {
        cookie,
        updateCookie,
        removeCookie
    };
}