import {
    BISHOPRIC,
    createSacramentDoc,
    deleteDoc,
    deleteSacramentDoc,
    getAllSacramentDocs,
    getLocalStorage,
    getParam,
    getSacramentDoc,
    getUserData,
    renderBasepage,
    renderNewSacrament,
    renderSacrament,
    renderUpdateSacrament,
    setIcon,
    setProfile,
    subpageHeader,
    updateSacramentDoc
} from './utils.mjs';

const id = getLocalStorage('id');
if (!id) {
    location = '/rdpUtilities/';
}

const userData = await getUserData(id);
document.querySelector('header').innerHTML = subpageHeader('Sacrament', userData.level);
document.querySelector('#subpage').addEventListener('click', setIcon);

setProfile(userData.firstName, userData.lastName);

let date = getParam('date');
const newDoc = getParam('new');
const update = getParam('update');

const meeting = 'sacrament';
const wrapper = document.querySelector('.wrapper');
document.querySelector('.load').remove();



if (userData.level < BISHOPRIC) {
    location = '/rdpUtilities/restricted/';
}

if (!date && !update && !newDoc) {
    await renderBasepage(meeting, userData, getAllSacramentDocs, wrapper);
}

if (date && !update && !newDoc) {
    await renderSacrament(getSacramentDoc, date, wrapper);
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

if (document.querySelector('#delete')) {
    await deleteDoc(meeting, deleteSacramentDoc, date, wrapper);
}