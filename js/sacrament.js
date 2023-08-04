import {
    createSacramentDoc,
    getAllSacramentDocs,
    getLocalStorage,
    getParam,
    getSacramentDoc,
    getUserData,
    renderBasepage,
    renderNewSacrament,
    renderSacrament,
    renderUpdateSacrament,
    setTitle,
    updateSacramentDoc
} from './utils.mjs';

const id = getLocalStorage('id');
const userData = await getUserData(id);

setTitle(userData.firstName, userData.lastName);

let date = getParam('date');
const newDoc = getParam('new');
const update = getParam('update');

const meeting = 'sacrament';
const wrapper = document.querySelector('.wrapper');
document.querySelector('.load').remove();

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
    await renderSacrament(userData, getSacramentDoc, date, wrapper);
}

if (newDoc && !update) {
    await renderNewSacrament(createSacramentDoc, wrapper, 'New');
}

if (!newDoc && update) {
    await renderUpdateSacrament(getSacramentDoc, updateSacramentDoc, date, wrapper, 'Update');
}

if (newDoc && update) {
    location = '/rdpUtilities/dashboard/';
}