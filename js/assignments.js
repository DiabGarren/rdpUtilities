import {
    getAllAssignments,
    getAssignments,
    getLocalStorage,
    getParam,
    getUserData,
    renderAssignPage,
    renderNewAssign,
    setIcon,
    setProfile,
    subpageHeader
} from './utils.mjs';

const id = getLocalStorage('id');
if (!id) {
    location = '/rdpUtilities/';
}

const userData = await getUserData(id);

document.querySelector('header').innerHTML = subpageHeader('Assignments', 5);
document.querySelector('#subpage').addEventListener('click', setIcon);

setProfile(userData.firstName, userData.lastName);

const newAssignment = getParam('new');

const wrapper = document.querySelector('.wrapper');
document.querySelector('.load').remove();

if (userData.level <= 1) {
    location = '/rdpUtilities/restricted/';
}

if (newAssignment) {
    if (userData.level < 4) {
        location = '/rdpUtilities/restricted/';
    }
    renderNewAssign(wrapper);
} else {
    renderAssignPage(userData, wrapper);
}
