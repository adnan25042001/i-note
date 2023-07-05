const url = process.env.REACT_APP_URL;

export const getAllNotes = () => {
    fetch(`${url}/api/notes/getall`, {
        method: "GET",
        headers: {
            // "Content-Type": "application/json",
            "auth-token": process.env.REACT_APP_AUTH_TOKEN,
        },
    }).then((data) => {
        return data.json();
    });
};

export const addNote = (note) => {
    fetch(`${url}/api/notes/add`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "auth-token": process.env.REACT_APP_AUTH_TOKEN,
        },
        body: JSON.stringify(note),
    }).then((data) => {
        return data.json();
    });
};

export const updataNote = (note) => {
    fetch(`${url}/api/notes/add`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "auth-token": process.env.REACT_APP_AUTH_TOKEN,
        },
        body: JSON.stringify(note),
    }).then((data) => {
        return data.json();
    });
};

export const deleteNote = (id) => {
    fetch(`${url}/api/notes/delete/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "auth-token": process.env.REACT_APP_AUTH_TOKEN,
        },
    }).then((data) => {
        return data.json();
    });
};
