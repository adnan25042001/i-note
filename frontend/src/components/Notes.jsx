import React, { useContext } from "react";
import NoteContext from "../context/notes/NoteContext";
import NoteItem from "./NoteItem";
import "../style/notes.css";

const Notes = () => {
    const context = useContext(NoteContext);
    const { notes, setNotes } = context;
    return (
        <div className="container">
            <h2 className="text-center my-3 mt-5">Your Notes</h2>
            <div className="notes-container">
                {notes &&
                    notes.map((note) => (
                        <NoteItem key={note._id} note={note} />
                    ))}
            </div>
        </div>
    );
};

export default Notes;
