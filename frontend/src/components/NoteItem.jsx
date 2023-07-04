import React, { useContext } from "react";
import "../style/noteItem.css";
import NoteContext from "../context/notes/NoteContext";

const NoteItem = (props) => {
    const { note } = props;
    const context = useContext(NoteContext);
    const { setEditNote, setEditTag, setTitle, setDesc } = context;
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
                    setTitle(note.title);
                    setDesc(note.description);
                    setEditNote(true);
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
                        setEditTag(true);
                    }}
                ></span>
            </div>
        </div>
    );
};

export default NoteItem;
