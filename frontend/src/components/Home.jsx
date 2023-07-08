import React, { useContext, useState } from "react";
import Notes from "./Notes";
import Alert from "./Alert";
import NoteContext from "../context/notes/NoteContext";
import AddNotePopup from "./popup/AddNotePopup";
import EditNotePopup from "./popup/EditNotePopup";
import EditTagPopup from "./popup/EditTagPopup";

const Home = () => {
    const context = useContext(NoteContext);
    const { showAddNote, showEditTag, showEditNote, showAlert } = context;
    return (
        <div className="container mb-3 scrollbar">
            {showAlert?.show && <Alert />}
            {showAddNote && <AddNotePopup />}
            {showEditNote && <EditNotePopup />}
            {showEditTag && <EditTagPopup />}
            <Notes />
        </div>
    );
};

export default Home;
