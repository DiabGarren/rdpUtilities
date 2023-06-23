import { getLocalStorage, getUserData } from "./utils.mjs";

const id = getLocalStorage('id');

if (!id) {
    location = '/rdpUtilities';
} else {
    const userData = await getUserData(id);
    
    document.title += ` ${userData.firstName} ${userData.lastName}`;
    document.querySelector('#profile').textContent = `${userData.firstName[0]}${userData.lastName[0]}`;
    document.querySelector('#firstName').textContent = userData.firstName;
    document.querySelector('#lastName').textContent = userData.lastName;
    document.querySelector('#username').textContent = userData.username;
    document.querySelector('#email').textContent = userData.email;
    document.querySelector('#level').textContent = userData.level;
}

