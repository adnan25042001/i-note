import React, { useContext, useState } from "react";
import "../style/editTagPopup.css";
import { MdClose } from "react-icons/md";
import { tags } from "../utils/tags";
import NoteContext from "../context/notes/NoteContext";

const EditTagPopup = () => {
    const context = useContext(NoteContext);
    const { setShowEditTag, selectedTag } = context;
    const [bgClr, setBgClr] = useState("#7e7e7e40");
    return (
        <div className="edit-tag-container">
            <div className="glass-effect"></div>
            <div className="edit-tag" style={{ background: bgClr }}>
                <MdClose onClick={() => setShowEditTag(false)} />
                <div className="tags scrollbar">
                    {tags &&
                        tags.map((tag) => {
                            if (tag.color === selectedTag.color) {
                                setBgClr(tag.color + "40");
                            }
                            return (
                                <div
                                    className="tag"
                                    key={tag.name}
                                    style={{
                                        background: "white",
                                    }}
                                    onClick={() => {
                                        setBgClr(tag.color + "40");
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
                    <button className="update-button" onClick={() => {}}>
                        Update
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EditTagPopup;
