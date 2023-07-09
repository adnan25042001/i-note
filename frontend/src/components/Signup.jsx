import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import NoteContext from "../context/notes/NoteContext";
import Alert from "./Alert";
import AuthContext from "../context/auth/AuthContext";
const url = process.env.REACT_APP_URL;

const Signup = () => {
    const noteContext = useContext(NoteContext);
    const { showAlert, setShowAlert } = noteContext;

    const authContext = useContext(AuthContext);
    const { setToken } = authContext;

    const [user, setUser] = useState({ name: "", email: "", password: "" });

    const submit = async (e) => {
        e.preventDefault();
        const res = await fetch(`${url}/api/auth/signup`, {
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
                message: "Signup Failed!",
            });
        }
    };

    const change = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    return (
        <>
            {showAlert?.show && <Alert />}
            <div className="signup-container">
                <div className="form">
                    <h3>Create New Account</h3>
                    <form onSubmit={submit}>
                        <input
                            name="name"
                            type="text"
                            placeholder="Username"
                            onChange={change}
                        />
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
                        <input id="submit" type="submit" value="Signup" />
                    </form>
                    <div>
                        <span>Already have an account? </span>{" "}
                        <Link to="/login">Login</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Signup;
