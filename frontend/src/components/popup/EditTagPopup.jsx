import React, { useContext, useState } from "react";
import "../../style/editTagPopup.css";
import { MdClose } from "react-icons/md";
import { tags } from "../../utils/tags";
import NoteContext from "../../context/notes/NoteContext";

const EditTagPopup = () => {
    const context = useContext(NoteContext);
    const { setShowEditTag, updateNote, setUpdateNote } = context;
    let color = updateNote.color + "80";
    const [bgClr, setBgClr] = useState(color || "#7e7e7e80");
    return (
        <div className="edit-tag-container">
            <div className="glass-effect"></div>
            <div className="edit-tag" style={{ background: bgClr }}>
                <MdClose onClick={() => setShowEditTag(false)} />
                <div className="tags scrollbar">
                    {tags &&
                        tags.map((tag) => {
                            return (
                                <div
                                    className="tag"
                                    key={tag.name}
                                    style={{
                                        background: "white",
                                    }}
                                    onClick={() => {
                                        setBgClr(tag.color + "80");
                                        setUpdateNote({
                                            ...updateNote,
                                            tag: tag.name,
                                            color: tag.color + "80",
                                        });
                                    }}
                                    onMouseOver={(e) => {
                                        e.target.style.background = tag.color;
                                        e.target.style.color = tag.textColor;
                                    }}
                                >
                                    {tag.name}
                                </div>
                            );
                        })}
                </div>
                <div className="bottom-buttons">
                    <button
                        className="update-button"
                        onClick={() => {
                            console.log(updateNote);
                        }}
                    >
                        Update
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EditTagPopup;
