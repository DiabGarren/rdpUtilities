import {
    getLocalStorage,
    getUserData,
    setProfile
} from './utils.mjs';

const id = getLocalStorage('id');
const userData = await getUserData(id);

setProfile(userData.firstName, userData.lastName);