import React from "react";
import "../style/login&signup.css";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="login-container">
            <div className="form">
                <h3>Login to Your Account</h3>
                <form>
                    <input id="email" type="email" placeholder="Email" />
                    <input
                        id="password"
                        type="password"
                        placeholder="Password"
                    />
                    <input id="submit" type="submit" value="Login" />
                </form>
                <div>
                    <span>Don't have an account? </span>{" "}
                    <Link to="/signup">Signup</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
