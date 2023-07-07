const url = process.env.REACT_APP_URL;

export const getAllNotes = () => {
    return fetch(`${url}/api/notes/getall`, {
        method: "GET",
        headers: {
            "auth-token": process.env.REACT_APP_AUTH_TOKEN,
        },
    })
        .then((data) => {
            return data.json();
        })
        .catch((error) => console.log(error));
};

export const addNote = (note) => {
    return fetch(`${url}/api/notes/add`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "auth-token": process.env.REACT_APP_AUTH_TOKEN,
        },
        body: JSON.stringify(note),
    })
        .then((data) => {
            return data.json();
        })
        .catch((error) => console.log(error));
};

export const updateUserNote = (note) => {
    console.log(note._id);
    return fetch(`${url}/update/${note._id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "auth-token": process.env.REACT_APP_AUTH_TOKEN,
        },
        body: JSON.stringify(note),
    })
        .then((data) => {
            return data.json();
        })
        .catch((error) => console.log(error));
};

export const deleteUserNote = (id) => {
    return fetch(`${url}/api/notes/delete/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "auth-token": process.env.REACT_APP_AUTH_TOKEN,
        },
    })
        .then((data) => {
            return data.json();
        })
        .catch((error) => console.log(error));
};
