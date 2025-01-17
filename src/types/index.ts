// src/types/index.ts

export type Cookie = {
    name: string;
    value: string;
    expires?: Date;
    path?: string;
    domain?: string;
    secure?: boolean;
};

export type CookieMap = {
    [key: string]: Cookie;
};