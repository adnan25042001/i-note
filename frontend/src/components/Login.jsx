import React, { useContext, useState } from "react";
import "../style/login&signup.css";
import { Link } from "react-router-dom";
import NoteContext from "../context/notes/NoteContext";
import AuthContext from "../context/auth/AuthContext";
import Alert from "./Alert";
const url = process.env.REACT_APP_URL;

const Login = () => {
    const noteContext = useContext(NoteContext);
    const { showAlert, setShowAlert } = noteContext;

    const authContext = useContext(AuthContext);
    const { setToken } = authContext;

    const [user, setUser] = useState({ email: "", password: "" });

    const submit = async (e) => {
        e.preventDefault();
        const res = await fetch(`${url}/api/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        });

        const data = await res.json();
        console.log(data);
        if (data.success) {
            setShowAlert({
                show: true,
                type: "success",
                message: "Signup Successfull:)",
            });
            localStorage.setItem("token", JSON.stringify(data.authtoken));
            setToken(data.authtoken);
        } else {
            setShowAlert({
                show: true,
                type: "error",
                message: "Wrong Email or Password",
            });
        }
    };

    const change = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };
    return (
        <>
            {showAlert?.show && <Alert />}
            <div className="login-container">
                <div className="form">
                    <h3>Login to Your Account</h3>
                    <form onSubmit={submit}>
                        <input
                            name="email"
                            type="email"
                            placeholder="Email"
                            onChange={change}
                        />
                        <input
                            name="password"
                            type="password"
                            placeholder="Password"
                            onChange={change}
                        />
                        <input id="submit" type="submit" value="Login" />
                    </form>
                    <div>
                        <span>Don't have an account? </span>{" "}
                        <Link to="/signup">Signup</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
