import React, { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import { useNavigate } from "react-router-dom";

const AuthState = ({ children }) => {
    const [token, setToken] = useState(
        JSON.parse(localStorage.getItem("token")) || null
    );

    const [currentUser, setCurrentUser] = useState("User");

    const navigate = useNavigate();

    const getUser = async (authToken) => {
        const res = await fetch(
            `${process.env.REACT_APP_URL}/api/auth/getuser`,
            {
                method: "GET",
                headers: {
                    "auth-token": authToken,
                },
            }
        );
        const data = await res.json();
        if (data.success) {
            setCurrentUser(data.user);
            navigate("/");
        }
    };

    useEffect(() => {
        if (!token) {
            navigate("/login");
        } else {
            getUser(token);
        }
    }, [token]);

    return (
        <AuthContext.Provider
            value={{ token, setToken, currentUser, setCurrentUser }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthState;
