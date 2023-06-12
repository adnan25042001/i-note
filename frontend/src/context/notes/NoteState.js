import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = ({ children }) => {
    const [theme, setTheme] = useState("dark");
    return (
        <NoteContext.Provider value={{ theme, setTheme }}>
            {children}
        </NoteContext.Provider>
    );
};

export default NoteState;
