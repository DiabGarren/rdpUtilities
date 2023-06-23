const baseUrl = 'https://rdputilities-api.onrender.com/';
// const baseUrl = 'http://156.155.158.70:1830/';

export function getParam(param) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const product = urlParams.get(param);
    return product;
};

export async function getUserData(userId) {
    const res = await fetch(`${baseUrl}users/${userId}`);
    const data = await res.json();
    return data;
};

export function setLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
};

export function getLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
};

export async function userLogin(username, email, password) {
    const res = await fetch(`${baseUrl}users/login`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'username': username,
            'email': email,
            'password': password
        })
    });

    const data = await res.json();
    return data;
}

export async function newUser(firstName, lastName, username, email, password) {
    const res = await fetch(`${baseUrl}users`, {
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
    const res = await fetch(`${baseUrl}wardCouncil`);
    const data = await res.json();
    return data;
};

export async function getWardCouncilDoc(date) {
    const res = await fetch(`${baseUrl}wardCouncil/${date}`);
    const data = await res.json();
    return data;
};

export async function createWardCouncilDoc(date, opening, st, train, agenda, closing, notes) {
    const res = await fetch(`${baseUrl}wardCouncil`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'date': date,
            'openingPrayer': opening,
            'spiritualThought': st,
            'training': train,
            'agenda': agenda,
            'closingPrayer': closing,
            'notes': notes
        })
    });

    const data = await res.json();
    return data;
};

export async function updateWardCouncilDoc(date, opening, st, train, agenda, closing, notes) {
    const res = await fetch(`${baseUrl}wardCouncil/${date}`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'openingPrayer': opening,
            'spiritualThought': st,
            'training': train,
            'agenda': agenda,
            'closingPrayer': closing,
            'notes': notes
        })
    });

    const data = await res.json();
    return data;
}

export async function deleteWardCouncilDoc(date) {
    const res = await fetch(`${baseUrl}wardCouncil/${date}`, {
        method: 'DELETE'
    });

    const data = res;
    return data;
}