import React, { useContext, useState } from "react";
import Notes from "./Notes";
import Alert from "./Alert";
import EditNotePopup from "./EditNotePopup";
import EditTagPopup from "./EditTagPopup";
import NoteContext from "../context/notes/NoteContext";

const Home = () => {
    const context = useContext(NoteContext);
    const { editTag, editNote } = context;
    return (
        <div className="container">
            <Alert />
            {editNote && <EditNotePopup />}
            {editTag && <EditTagPopup />}
            <Notes />
        </div>
    );
};

export default Home;
