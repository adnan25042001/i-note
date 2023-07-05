import React, { useEffect, useState } from "react";
import NoteContext from "./NoteContext";
import { getAllNotes } from "../../utils/api";

const NoteState = ({ children }) => {
    const [theme, setTheme] = useState("dark");
    const [showAlert, setShowAlert] = useState(true);
    const [showAddNote, setShowAddNote] = useState(false);
    const [showEditNote, setShowEditNote] = useState(false);
    const [showEditTag, setShowEditTag] = useState(false);
    const [updateNote, setUpdateNote] = useState(null);
    const [notes, setNotes] = useState(null);

    const handleGetAllNotes = async () => {
        const data = await getAllNotes();
        setNotes(data);
    };

    useEffect(() => {
        handleGetAllNotes();
    }, []);

    const handleAddNote = (note) => {
        console.log(note, "Hello");
    };

    return (
        <NoteContext.Provider
            value={{
                theme,
                setTheme,
                notes,
                setNotes,
                showAlert,
                setShowAlert,
                showAddNote,
                setShowAddNote,
                showEditNote,
                setShowEditNote,
                showEditTag,
                setShowEditTag,
                updateNote,
                setUpdateNote,
                handleAddNote,
            }}
        >
            {children}
        </NoteContext.Provider>
    );
};

export default NoteState;
