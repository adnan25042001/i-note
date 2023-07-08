import React, { useContext, useRef } from "react";
import "../../style/editNotePopup.css";
import { MdClose } from "react-icons/md";
import NoteContext from "../../context/notes/NoteContext";

const EditNotePopup = () => {
    const context = useContext(NoteContext);
    const {
        setShowEditNote,
        updateNote,
        setUpdateNote,
        handleUpdateNote,
        handleDeleteNote,
    } = context;
    const titleRef = useRef(updateNote.title);
    const descRef = useRef(updateNote.description);

    console.log(updateNote);

    const titleKeyup = (event) => {
        console.log(event.key);
        setUpdateNote({ ...updateNote, title: event.target.innerText.trim() });
    };

    const titleKeydown = (event) => {
        if (event.key === "Enter" && event.keyCode === 13) {
            event.preventDefault();
        }
    };

    const descKeyup = (event) => {
        setUpdateNote({
            ...updateNote,
            description: event.target.innerText.trim(),
        });
    };
    return (
        <div className="edit-note-container">
            <div className="glass-effect"></div>
            <div
                className="edit-note"
                style={{ background: `${updateNote?.color}80` }}
            >
                <MdClose onClick={() => setShowEditNote(false)} />
                <div className="note scrollbar">
                    <h4
                        contentEditable
                        onKeyUp={titleKeyup}
                        onKeyDown={titleKeydown}
                    >
                        {titleRef.current}
                    </h4>
                    <div className="line"></div>
                    <p contentEditable onKeyUp={descKeyup}>
                        {descRef.current}
                    </p>
                </div>
                <div className="bottom-buttons">
                    <button
                        className="update-button"
                        onClick={() => {
                            handleUpdateNote();
                        }}
                    >
                        Update
                    </button>
                    <button
                        className="delete-button"
                        onClick={() => {
                            handleDeleteNote();
                        }}
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EditNotePopup;
