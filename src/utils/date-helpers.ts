/**
 * Utility functions for handling date-related operations for cookies.
 */

/**
 * Formats a date to a string suitable for cookie expiration.
 * @param date - The date to format.
 * @returns A string representing the formatted date.
 */
export const formatDate = (date: Date): string => {
    return date.toUTCString();
};

/**
 * Calculates the expiration date for a cookie based on the given number of days.
 * @param days - The number of days until the cookie expires.
 * @returns A Date object representing the expiration date.
 */
export const calculateExpirationDate = (days: number): Date => {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    return date;
};