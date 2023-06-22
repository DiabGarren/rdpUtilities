export function getParam(param) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const product = urlParams.get(param);
    return product;
};

export async function getUserData(userId) {
    const res = await fetch(`http://156.155.158.70:1830/users/${userId}`);
    const data = await res.json();
    return data;
};

export function setLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
};

export function getLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
};

export async function newUser(firstName, lastName, username, email, password) {
    const res = await fetch('http://156.155.158.70:1830/users', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'firstName': firstName,
            'lastName': lastName,
            'username': username,
            'email': email,
            'password': password,
            'level': '1'
        })
    });

    const data = await res.json();
    return data;
};

export async function getAllWardCouncilDocs() {
    const res = await fetch(`http://156.155.158.70:1830/wardCouncil`);
    const data = await res.json();
    return data;
};

export async function getWardCouncilDoc(date) {
    const res = await fetch(`http://156.155.158.70:1830/wardCouncil/${date}`);
    const data = await res.json();
    return data;
};

export async function createWardCouncilDoc(date, agenda, notes) {
    const res = await fetch('http://156.155.158.70:1830/wardCouncil', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'date': date,
            'agenda': agenda,
            'notes': notes
        })
    });

    const data = await res.json();
    return data;
}