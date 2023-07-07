import React, { useEffect, useState } from "react";
import NoteContext from "./NoteContext";
import {
    addNote,
    getAllNotes,
    updateUserNote,
} from "../../utils/api";

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

    const handleAddNote = async (note) => {
        await addNote(note);
    };

    const handleUpdateNote = () => {
        console.log(updateNote);
        // updateUserNote(updateNote)
        updateUserNote(updateNote).then((data) => {
            console.log(data);
            setUpdateNote(null);
        });
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
                handleUpdateNote,
            }}
        >
            {children}
        </NoteContext.Provider>
    );
};

export default NoteState;
