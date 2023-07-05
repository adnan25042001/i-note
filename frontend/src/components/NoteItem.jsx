import React, { useContext } from "react";
import "../style/noteItem.css";
import NoteContext from "../context/notes/NoteContext";

const NoteItem = (props) => {
    const { note } = props;
    const context = useContext(NoteContext);
    const { setShowEditNote, setShowEditTag, setUpdateNote, updateNote } =
        context;
    return (
        <div
            className="note-card"
            style={{
                backgroundColor: `${
                    note.color ? note.color + "40" : "#7e7e7e40"
                }`,
            }}
        >
            <div
                onClick={() => {
                    setUpdateNote(note);
                    console.log(updateNote);
                    setShowEditNote(true);
                }}
            >
                <h5>{note.title}</h5>
                <p>{note.description}</p>
            </div>
            <div>
                <span
                    className="color"
                    style={{
                        backgroundColor: `${
                            note.color ? note.color : "#7e7e7e"
                        }`,
                    }}
                    onClick={() => {
                        setUpdateNote(note);
                        setShowEditTag(true);
                    }}
                ></span>
            </div>
        </div>
    );
};

export default NoteItem;
