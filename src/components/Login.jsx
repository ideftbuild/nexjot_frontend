import React from "react";
import '../styles/login.css'
import {useLocation} from "react-router-dom";
import {useAuth} from "../contexts/AuthContext.jsx";

const OAuth2Login = () => {
    // get the url requested before redirection to login page otherwise use `/dashboard` if not available
    const from = useLocation().state?.from?.pathname || '/dashboard';
    const { login } = useAuth();

    return (
        <div className={'login-wrapper'}>
            <div className={'login-card'}>
                <div className={'login-header'}>
                    <h1>Sign In</h1>
                    <p>Access your account or join us today</p>
                </div>

                <button className={'sign-in-btn'} onClick={() => login(from)}>Continue with google</button>
            </div>
        </div>
    );
}

export default OAuth2Login;