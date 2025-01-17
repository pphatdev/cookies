export interface CookieOptions {
    expires?: Date | string | number; // Expiration date of the cookie
    path?: string;                     // Path where the cookie is accessible
    domain?: string;                   // Domain where the cookie is accessible
    secure?: boolean;                  // Indicates if the cookie should only be transmitted over secure protocols
    sameSite?: 'strict' | 'lax' | 'none'; // SameSite attribute for the cookie
}