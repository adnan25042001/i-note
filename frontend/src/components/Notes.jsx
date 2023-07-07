import React, { useContext } from "react";
import NoteContext from "../context/notes/NoteContext";
import NoteItem from "./NoteItem";
import "../style/notes.css";
import { AiOutlinePlus } from "react-icons/ai";

const Notes = () => {
    const context = useContext(NoteContext);
    const { notes, setShowAddNote } = context;
    console.log(notes);
    if (notes) {
        notes.sort((a, b) => {
            let d1 = a.updatedDate || a.createdDate;
            let d2 = b.updatedDate || b.createdDate;

            return new Date(d2) - new Date(d1);
        });
    }
    return (
        <div className="container mt-5">
            <div className="notes-container">
                <div
                    className="add-new-note"
                    style={{ background: "#6d6d6d40" }}
                    onClick={() => {
                        setShowAddNote(true);
                    }}
                >
                    <div>
                        <AiOutlinePlus />
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
