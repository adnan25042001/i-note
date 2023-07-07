import React, { useContext } from "react";
import "../style/noteItem.css";
import NoteContext from "../context/notes/NoteContext";

const NoteItem = (props) => {
    const { note } = props;
    const context = useContext(NoteContext);
    const { setShowEditNote, setShowEditTag, updateNote, setUpdateNote } =
        context;
    return (
        <div
            className="note-card"
            style={{
                backgroundColor: `${
                    note.color ? note.color + "80" : "#7e7e7e80"
                }`,
            }}
        >
            <div
                onClick={() => {
                    console.log(note);
                    setUpdateNote(note);
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
