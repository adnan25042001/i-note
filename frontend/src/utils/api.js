const url = process.env.REACT_APP_URL;

export const getAllNotes = (token) => {
    return fetch(`${url}/api/notes/getall`, {
        method: "GET",
        headers: {
            "auth-token": token,
        },
    })
        .then((data) => {
            return data.json();
        })
        .catch((error) => console.log(error));
};

export const addNote = (note, token) => {
    return fetch(`${url}/api/notes/add`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "auth-token": token,
        },
        body: JSON.stringify(note),
    })
        .then((data) => {
            return data.json();
        })
        .catch((error) => console.log(error));
};

export const updateUserNote = (note, token) => {
    return fetch(`${url}/api/notes/update/${note._id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "auth-token": token,
        },
        body: JSON.stringify(note),
    })
        .then((data) => {
            return data.json();
        })
        .catch((error) => console.log(error));
};

export const deleteUserNote = (id, token) => {
    return fetch(`${url}/api/notes/delete/${id}`, {
        method: "DELETE",
        headers: {
            // "Content-Type": "application/json",
            "auth-token": token,
        },
    })
        .then((data) => {
            return data.json();
        })
        .catch((error) => console.log(error));
};
