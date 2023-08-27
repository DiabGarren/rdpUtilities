import {
    getLocalStorage,
    getUserData,
    header,
    setProfile
} from './utils.mjs';

const id = getLocalStorage('id');
const userData = await getUserData(id);

document.querySelector('header').innerHTML = header('Restricted');

setProfile(userData.firstName, userData.lastName);