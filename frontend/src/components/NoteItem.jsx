import React, { useContext } from "react";
import "../style/noteItem.css";
import { BiEdit } from "react-icons/bi";
import { MdOutlineDeleteForever } from "react-icons/md";
import NoteContext from "../context/notes/NoteContext";

const NoteItem = (props) => {
    const { note } = props;
    const context = useContext(NoteContext);
    const { setEditNote, setEditTag, setTitle, setDesc, setColor } = context;
    return (
        <div
            className="note-card"
            style={{
                backgroundColor: `${
                    note.backgroundColor ? note.backgroundColor : "#eeeeee"
                }`,
            }}
            onClick={() => {
                setTitle(note.title);
                setDesc(note.description);
                setEditNote(true);
            }}
        >
            <div>
                <h5>{note.title}</h5>
                <span>
                    <BiEdit />
                    <MdOutlineDeleteForever />
                </span>
            </div>
            <p>{note.description}</p>
            <span
                className="color"
                style={{
                    backgroundColor: `${note.color ? note.color : "#7e7e7e"}`,
                }}
                onClick={() => {
                    setColor(note.color);
                    setEditTag(true);
                }}
            ></span>
        </div>
    );
};

export default NoteItem;
