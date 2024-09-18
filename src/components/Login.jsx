import React from "react";
import { GOOGLE_AUTH_URL } from "../config/constants.js";
import '../styles/login.css'

const OAuth2Login = () => {
    function handleLogin() {
        window.location.href= GOOGLE_AUTH_URL;
    }
    return (
        <div className={'login-wrapper'}>
            <div className={'login-card'}>
                <div className={'login-header'}>
                    <h1>Sign In</h1>
                    <p>Access your account or join us today</p>
                </div>

                <button className={'sign-in-btn'} onClick={handleLogin}>Continue with google</button>
            </div>
        </div>
    );
}

export default OAuth2Login;