import React, { useContext, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import "../style/alert.css";
import NoteContext from "../context/notes/NoteContext";

const Alert = () => {
    const context = useContext(NoteContext);
    const { showAlert, setShowAlert } = context;
    useEffect(() => {
        setTimeout(() => {
            setShowAlert({
                show: false,
                type: "",
                message: "",
            });
        }, 5000);
    }, [showAlert]);
    return (
        <div
            className={`alert ${showAlert.type ? showAlert.type : "success"} ${
                showAlert?.show ? "" : "hide"
            }`}
        >
            <IoClose
                className="closebtn"
                onClick={() =>
                    setShowAlert({
                        show: false,
                        type: "",
                        message: "",
                    })
                }
            />
            {showAlert?.message || "Success"}
        </div>
    );
};

export default Alert;
