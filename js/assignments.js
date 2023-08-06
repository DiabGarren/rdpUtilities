import {
    getAllAssignments,
    getAssignments,
    getLocalStorage,
    getUserData,
    renderAssignPage,
    setProfile
} from './utils.mjs';

const id = getLocalStorage('id');
if (!id) {
    location = '/rdpUtilities/';
}

const userData = await getUserData(id);
setProfile(userData.firstName, userData.lastName);
document.title += ` ${userData.firstName} ${userData.lastName}`;

const wrapper = document.querySelector('.wrapper');
document.querySelector('.load').remove();

if (userData.level <= 1) {
    location = '/rdpUtilities/restricted/';
}

renderAssignPage(userData, wrapper);
