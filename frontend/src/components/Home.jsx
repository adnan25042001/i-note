import React from "react";

const Home = () => {
    return (
        <div className="container">
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
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Home;
