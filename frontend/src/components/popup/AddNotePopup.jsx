import React, { useContext, useState } from "react";
import NoteContext from "../../context/notes/NoteContext";
import { MdClose } from "react-icons/md";
import { tags } from "../../utils/tags";
import "../../style/addNotePopup.css";

const AddNotePopup = () => {
    const context = useContext(NoteContext);
    const { setShowAddNote, handleAddNote, setShowAlert } = context;
    const [note, setNote] = useState({
        title: "",
        description: "",
        tag: "General",
        color: "#7e7e7e",
    });
    const [bgClr, setBgClr] = useState("#7e7e7e40");

    const onTitleKeyup = (event) => {
        setNote({ ...note, title: event.target.innerText.trim() });
    };

    const onTitleKeydown = (event) => {
        if (event.key === "Enter" && event.keyCode === 13) {
            event.preventDefault();
        }
    };

    const onDescKeyup = (event) => {
        setNote({ ...note, description: event.target.innerText.trim() });
    };

    const handleChangeTag = (tag, color) => {
        setNote({ ...note, tag, color });
    };

    return (
        <div className="add-note-container scrollbar">
            <div className="glass-effect"></div>
            <div className="add-note" style={{ background: bgClr }}>
                <MdClose onClick={() => setShowAddNote(false)} />
                <div className="note scrollbar">
                    <h4
                        contentEditable
                        onKeyUp={(e) => onTitleKeyup(e)}
                        onKeyDown={(e) => onTitleKeydown(e)}
                    >
                        Title
                    </h4>
                    <div className="line"></div>
                    <p contentEditable onKeyUp={(e) => onDescKeyup(e)}>
                        Description
                    </p>
                </div>
                <div className="bottom-buttons">
                    <div className="tags scrollbar">
                        {tags &&
                            tags.map((tag) => {
                                return (
                                    <div
                                        className="tag"
                                        key={tag.name}
                                        style={{
                                            background: tag.color,
                                            color: tag.textColor,
                                        }}
                                        onClick={() => {
                                            setBgClr(tag.color + "40");
                                            handleChangeTag(
                                                tag.name,
                                                tag.color
                                            );
                                        }}
                                    >
                                        {tag.name}
                                    </div>
                                );
                            })}
                    </div>
                    <button
                        className="add-button"
                        onClick={() => {
                            if (note.title.trim() === "") {
                                setShowAlert(true);
                            } else {
                                handleAddNote(note);
                            }
                        }}
                    >
                        Add
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddNotePopup;
