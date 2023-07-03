import React, { useContext, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import "../style/alert.css";
import NoteContext from "../context/notes/NoteContext";

const Alert = (props) => {
    const { type, message } = props;
    const context = useContext(NoteContext);
    const { showAlert, setShowAlert } = context;
    useEffect(() => {
        setTimeout(() => {
            setShowAlert(false)
        }, 5000)
    },[showAlert])
    return (
        <div className={`alert ${type ? type : "success"} ${showAlert ? "" : "hide"}`}>
            <IoClose className="closebtn" onClick={() => setShowAlert(false)}/>
            {message || "Success"}
        </div>
    );
};

export default Alert;
