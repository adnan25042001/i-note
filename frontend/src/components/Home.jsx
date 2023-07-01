import React, { useContext } from "react";
import { tags } from "../utils/tags";
import NoteContext from "../context/notes/NoteContext";

const Home = () => {
    const context = useContext(NoteContext);
    const {notes, setNotes} = context;  
    return (
        <div className="container">
            <div>
                <h2 className="text-center my-3">Add a Note</h2>
                <form
                    className="d-flex gap-4 flex-column my-4"
                    style={{
                        maxWidth: "500px",
                        margin: "auto",
                    }}
                >
                    <input
                        type="text"
                        placeholder="Title"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                    />
                    <input
                        type="text"
                        placeholder="Description"
                        className="form-control"
                        id="exampleInputPassword1"
                    />
                    <select
                        name="tags"
                        id="tags"
                        style={{
                            border: "1px solid lightgray",
                            borderRadius: "6px",
                            padding: "6px",
                            color: "gray",
                        }}
                    >
                        {tags &&
                            tags.map((tag) => {
                                return (
                                    <option key={tag} value={tag}>
                                        {tag}
                                    </option>
                                );
                            })}
                    </select>
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>
            <div>
                <h2 className="text-center my-3 mt-5">Your Notes</h2>
            </div>
        </div>
    );
};

export default Home;
