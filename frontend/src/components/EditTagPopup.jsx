import React, { useContext, useState } from "react";
import "../style/editTagPopup.css";
import { MdClose } from "react-icons/md";
import { tags } from "../utils/tags";
import NoteContext from "../context/notes/NoteContext";

const EditTagPopup = () => {
    const context = useContext(NoteContext);
    const { setEditTag, color } = context;
    const [bgClr, setBgClr] = useState("#eeeeee");
    return (
        <div className="edit-tag-container">
            <div className="glass-effect"></div>
            <div className="edit-tag" style={{ background: bgClr }}>
                <MdClose onClick={() => setEditTag(false)} />
                <div className="tags scrollbar">
                    {tags &&
                        tags.map((tag) => {
                            if (tag.color === color) {
                                setBgClr(tag.backgroundColor);
                            }
                            return (
                                <div
                                    className="tag"
                                    key={tag.name}
                                    style={{
                                        background: "white",
                                    }}
                                    onClick={() => console.log(tag)}
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
