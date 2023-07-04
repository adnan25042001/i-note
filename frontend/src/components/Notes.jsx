import React, { useContext } from "react";
import NoteContext from "../context/notes/NoteContext";
import NoteItem from "./NoteItem";
import "../style/notes.css";

const Notes = () => {
    const context = useContext(NoteContext);
    const { notes, setShowAddNote } = context;
    return (
        <div className="container">
            <h2 className="text-center my-4">Your Notes</h2>
            <div className="notes-container">
                <div className="note-card" style={{ background: "#6d6d6d21" }}>
                    <div
                        onClick={() => {
                            setShowAddNote(true);
                        }}
                    >
                        <h5 className="text-center">Add New Note</h5>
                    </div>
                </div>
                {notes &&
                    notes.map((note) => (
                        <NoteItem key={note._id} note={note} />
                    ))}
            </div>
        </div>
    );
};

export default Notes;
