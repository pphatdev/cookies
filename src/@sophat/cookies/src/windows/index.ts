import Cookies from "src/cookie";
export type { CookieOptions } from "@interfaces/cookie-options";

declare global {
    interface Window {
        Cookies: typeof Cookies;
    }
}
window.Cookies = Cookies;
export default Cookies