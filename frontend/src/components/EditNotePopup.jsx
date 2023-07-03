import React, { useContext } from "react";
import "../style/editNotePopup.css";
import { MdClose } from "react-icons/md";
import NoteContext from "../context/notes/NoteContext";

const EditNotePopup = () => {
    const context = useContext(NoteContext);
    const { setEditNote, title, desc } = context;
    return (
        <div className="edit-note-container">
            <div className="glass-effect"></div>
            <div className="edit-note">
                <MdClose onClick={() => setEditNote(false)} />
                <div className="note scrollbar">
                    <h4 contentEditable>{title || "Title"}</h4>
                    <div className="line"></div>
                    <p contentEditable>{desc || "Descrioption"}</p>
                </div>
                <div className="bottom-buttons">
                    <button className="update-button" onClick={() => {}}>
                        Update
                    </button>
                    <button className="delete-button" onClick={() => {}}>
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EditNotePopup;
