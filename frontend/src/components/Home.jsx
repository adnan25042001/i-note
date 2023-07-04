import React, { useContext, useState } from "react";
import Notes from "./Notes";
import Alert from "./Alert";
import EditNotePopup from "./EditNotePopup";
import EditTagPopup from "./EditTagPopup";
import NoteContext from "../context/notes/NoteContext";
import AddNotePopup from "./AddNotePopup";

const Home = () => {
    const context = useContext(NoteContext);
    const { showAddNote, showEditTag, showEditNote } = context;
    return (
        <div className="container">
            <Alert />
            {showAddNote && <AddNotePopup />}
            {showEditNote && <EditNotePopup />}
            {showEditTag && <EditTagPopup />}
            <Notes />
        </div>
    );
};

export default Home;
