import {
    getAllSacramentDocs,
    getLocalStorage,
    getParam,
    getUserData,
    renderBasepage,
    renderSacrament,
    setTitle
} from './utils.mjs';

const id = getLocalStorage('id');
const userData = await getUserData(id);

setTitle(userData.firstName, userData.lastName);

let date = getParam('date');
const newDoc = getParam('new');
const update = getParam('update');

const meeting = 'sacrament';
const wrapper = document.querySelector('.wrapper');

if (!id) {
    location = '/rdpUtilities/';
}

if (userData.level < 3) {
    location = '/rdpUtilities/restricted/';
}

if (!date && !update && !newDoc) {
    await renderBasepage(meeting, userData, getAllSacramentDocs, wrapper);
}

if (date && !update && !newDoc) {
    await renderSacrament(userData, getAllSacramentDocs, date, wrapper);
}

if (newDoc && !update) {

}

if (!newDoc && update) {

}

if (newDoc && update) {
    location = '/rdpUtilities/dashboard/';
}