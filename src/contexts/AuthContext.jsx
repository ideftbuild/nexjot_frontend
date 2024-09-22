import React, { createContext, useContext, useState, useEffect } from 'react';
import { checkAuthStatus, login, logout } from "../services/auth-service.js";
import { useLocation } from "react-router-dom";
import { initializeApp } from "../services/app-initializer.js";
import { useDispatch } from "react-redux";


const AuthContext = createContext(null);


/**
 * Ensures that only authenticated users can access the protected routes. If the user is not authenticated,
 * they are redirected to the login page. The authentication status is checked, and the `isAuthenticated` state
 * is updated accordingly. This state is then used to determine whether the user can access a route.
 *
 * @param {React.ReactNode} children - The components that will be rendered if the user is authenticated.
 * @returns {JSX.Element} The children components or a redirect to the login page.
 */
export const AuthProvider = ( { children } ) => {
    const [ isAuthenticated, setIsAuthenticated ] = useState(false);
    const [ isLoading, setIsLoading ] = useState(true);
    const location = useLocation();
    const dispatch = useDispatch();
    let appInitializer = null;

    useEffect( () => {
        // check authentication status and load initial data
        const setUp = async () => {
            const NODE_ENV = import.meta.env.VITE_NODE_ENV;
            if (await checkAuthStatus()) {
                setIsAuthenticated(true);
                // By default, it uses the static data. To switch to dynamic set `VITE_NODE_ENV` to `production`
                await initializeApp(dispatch, NODE_ENV === 'development');
            }
        }
        // load user data if user is authenticated otherwise redirect to login page
        if (location.pathname !== '/login') {
            setUp().then(r => setIsLoading(false));
        } else {
            setIsLoading(false);
        }
    }, []);
    // AuthProvider is still checking if user is authenticated
    if (isLoading) {
        console.log('loading...')
        return <div>Loading...</div>
    }

    // render children routes and make this context available to them
    return (
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, login, logout: () => logout(setIsAuthenticated) }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);