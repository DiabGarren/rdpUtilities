import {
    YOUTH,
    getLocalStorage,
    getParam,
    getUserData,
    renderNewYouthActivity,
    renderYouth,
    setIcon,
    setProfile,
    subpageHeader
} from "./utils.mjs";

const id = getLocalStorage('id');
if (!id) {
    location = '/rdpUtilities';
}

const userData = await getUserData(id);
document.querySelector('header').innerHTML = subpageHeader('Youth', userData.level);
document.querySelector('#subpage').addEventListener('click', setIcon);

setProfile(userData.firstName, userData.lastName);

const newActivity = getParam('new');
const update = getParam('update');
const date = getParam('date');

const wrapper = document.querySelector('.wrapper');
document.querySelector('.load').remove();

if (userData.level < YOUTH) {
    location = '/rdpUtilities/restricted';
}

if (!newActivity && !update && !date) {
    await renderYouth(userData, wrapper);
}

if (newActivity && !update && date) {
    location = '/rdpUtilities/youth';
}

if (newActivity && !update && !date) {
    await renderNewYouthActivity(wrapper);
}