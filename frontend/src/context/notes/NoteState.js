import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = ({ children }) => {
    const [theme, setTheme] = useState("dark");
    const [showAlert, setShowAlert] = useState(true);
    const [showAddNote, setShowAddNote] = useState(false);
    const [showEditNote, setShowEditNote] = useState(false);
    const [showEditTag, setShowEditTag] = useState(false);
    const [title, setTitle] = useState(false);
    const [desc, setDesc] = useState(false);
    const [selectedTag, setSelectedTag] = useState("#7e7e7e");
    const initialNotes = [
        {
            _id: "64a061ef3b04ddc296398819",
            user: "646f8d427a3ed4fbfd7b751d",
            title: "title1",
            description: "description1",
            tag: "General",
            date: "2023-07-01T17:27:11.621Z",
            __v: 0,
        },
        {
            _id: "64a061f83b04ddc29639881b",
            user: "646f8d427a3ed4fbfd7b751d",
            title: "title2",
            description: "description2",
            tag: "General",
            date: "2023-07-01T17:27:20.722Z",
            __v: 0,
        },
        {
            _id: "64a062013b04ddc29639881d",
            user: "646f8d427a3ed4fbfd7b751d",
            title: "title3",
            description: "description3",
            tag: "General",
            date: "2023-07-01T17:27:29.067Z",
            __v: 0,
        },
    ];

    const [notes, setNotes] = useState(initialNotes);

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
                title,
                setTitle,
                desc,
                setDesc,
                selectedTag,
                setSelectedTag,
                handleAddNote,
            }}
        >
            {children}
        </NoteContext.Provider>
    );
};

export default NoteState;
