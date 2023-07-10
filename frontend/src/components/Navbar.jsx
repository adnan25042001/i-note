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
            <nav
                className="sticky-top navbar navbar-expand-lg bg-dark navbar-dark"
                style={{ zIndex: 9 }}
            >
                <div
                    className="container-fluid"
                    style={{ padding: "5px 50px", gap: "10px" }}
                >
                    <Link className="navbar-brand" to="/">
                        iNote
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link
                                    className={`nav-link ${
                                        location.pathname === "/"
                                            ? "active"
                                            : ""
                                    }`}
                                    aria-current="page"
                                    to="/"
                                >
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className={`nav-link ${
                                        location.pathname === "/about"
                                            ? "active"
                                            : ""
                                    }`}
                                    to="/about"
                                >
                                    About
                                </Link>
                            </li>
                        </ul>
                        <div className="right-list" style={{ color: "white" }}>
                            <button
                                onClick={() => {
                                    localStorage.setItem("token", null);
                                    setToken(null);
                                }}
                            >
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
