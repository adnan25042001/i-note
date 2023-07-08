import React from "react";
import "../style/login.css";

const Login = () => {
    return (
        <div className="login-container">
            <div className="login-form">
                <h3>Login to Your Account</h3>
                <form>
                    <input id="email" type="email" placeholder="Email" />
                    <input id="password" type="password" placeholder="Password" />
                    <input id="submit" type="submit" value="Login" />
                </form>
            </div>
        </div>
    );
};

export default Login;
