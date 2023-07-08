import React from "react";
import AuthContext from "./AuthContext";

const AuthState = ({ children }) => {
    return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};

export default AuthState;
