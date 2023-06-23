import {
    getLocalStorage,
    getUserData,
    setTitle
} from './utils.mjs';

const id = getLocalStorage('id');
const userData = await getUserData(id);

setTitle(userData.firstName, userData.lastName);