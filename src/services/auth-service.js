import {APP_URL, GOOGLE_AUTH_URL} from "../config/constants.js";


/**
 * Checks if the user is authenticated by making a GET request to the server
 * @returns {Promise<boolean>}
 */
export const checkAuthStatus = async () => {

    if (import.meta.env.VITE_NODE_ENV === 'development') {
        return true;
    }
    try {
        // api call checks if user is authenticated by the backend
        const response = await fetch('http://localhost:8080/auth/status',
            { credentials: 'include'}
        );
        if (response.ok) {
            console.log(await response.text())
            return  response.status === 200;  // user is logged in
        } else {
            console.log(await response.text())
            // setIsAuthenticated(false);  // user is not logged in
            return false;
        }
    } catch (err) {
        console.log('Error checking auth status:', err);
        // setIsAuthenticated(false);
        return false;
    }
}


/**
 * Redirects the user to the Google OAuth2 login page
 */
export const login = (from) => {
    const encodedRedirectUri = encodeURIComponent(`${APP_URL}${from}`);
    window.location.href= `${GOOGLE_AUTH_URL}?redirect-uri=${encodedRedirectUri}`;
}


/**
 * Logs the user out by making a POST request to the server
 * @param {Function} setIsAuthenticated - Function to update the authentication state
 * @returns {Promise<void>}
 */
export const logout = async (setIsAuthenticated) => {
    try {
        await fetch('http://localhost:8080/logout', {
            method: 'POST',
            credentials: 'include'
        })
        setIsAuthenticated(false);
    } catch (err) {
        console.log('Error logging out:', err);
    }
}
