import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import AuthContext from "../context/auth/AuthContext";
import "../style/navbar.css";

const Navbar = () => {
    const authContext = useContext(AuthContext);
    const { setToken } = authContext;

    const location = useLocation();
    return (
        <>
            <div className="navbar-container">
                <div className="navbar">
                    <div className="logo">iNote</div>
                    <button
                        className="logout"
                        onClick={() => {
                            localStorage.setItem("token", null);
                            setToken(null);
                        }}
                    >
                        Logout
                    </button>
                </div>
            </div>
        </>
    );
};

export default Navbar;
