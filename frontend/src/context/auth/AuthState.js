import React, { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import { useNavigate } from "react-router-dom";

const AuthState = ({ children }) => {
    const [token, setToken] = useState(
        JSON.parse(localStorage.getItem("token")) || null
    );

    const navigate = useNavigate();

    useEffect(() => {
        if (!token) {
            navigate("/login");
        } else {
            navigate("/");
        }
    }, [token]);

    return (
        <AuthContext.Provider value={{ token, setToken }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthState;
