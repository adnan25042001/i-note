import React, { useContext, useEffect, useState } from "react";
import NoteContext from "./NoteContext";
import {
    addNote,
    deleteUserNote,
    getAllNotes,
    updateUserNote,
} from "../../utils/api";
import AuthContext from "../auth/AuthContext";

const NoteState = ({ children }) => {
    const authContext = useContext(AuthContext);
    const { token } = authContext;

    const [showAlert, setShowAlert] = useState({
        show: false,
        type: "success",
        message: "This is message",
    });
    const [showAddNote, setShowAddNote] = useState(false);
    const [showEditNote, setShowEditNote] = useState(false);
    const [showEditTag, setShowEditTag] = useState(false);
    const [updateNote, setUpdateNote] = useState(null);
    const [notes, setNotes] = useState(null);

    const handleGetAllNotes = async () => {
        const data = await getAllNotes(token);
        setNotes(data);
    };

    useEffect(() => {
        if (token) {
            handleGetAllNotes();
        }
        // eslint-disable-next-line
    }, [token, notes]);

    const handleAddNote = (note) => {
        addNote(note, token).then(() => {
            setShowAddNote(false);
            setShowAlert({
                show: true,
                type: "success",
                message: "Note Added Successfully",
            });
            handleGetAllNotes();
        });
    };

    const handleUpdateNote = () => {
        updateUserNote(updateNote, token).then((data) => {
            setShowEditNote(false);
            setShowEditTag(false);
            setUpdateNote(null);
            setShowAlert({
                show: true,
                type: "primary",
                message: "Note Updated Successfully",
            });
            handleGetAllNotes();
        });
    };

    const handleDeleteNote = () => {
        deleteUserNote(updateNote._id, token).then((data) => {
            setShowEditNote(false);
            setUpdateNote(null);
            setShowAlert({
                show: true,
                type: "error",
                message: "Note Deleted Successfully",
            });
            handleGetAllNotes();
        });
    };

    return (
        <NoteContext.Provider
            value={{
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
                handleDeleteNote,
            }}
        >
            {children}
        </NoteContext.Provider>
    );
};

export default NoteState;
