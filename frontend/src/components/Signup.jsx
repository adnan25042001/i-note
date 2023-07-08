import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
    return (
        <div className="signup-container">
            <div className="form">
                <h3>Create New Account</h3>
                <form>
                    <input id="name" type="text" placeholder="Username" />
                    <input id="email" type="email" placeholder="Email" />
                    <input
                        id="password"
                        type="password"
                        placeholder="Password"
                    />
                    <input id="submit" type="submit" value="Signup" />
                </form>
                <div>
                    <span>Already have an account? </span>{" "}
                    <Link to="/login">Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Signup;
