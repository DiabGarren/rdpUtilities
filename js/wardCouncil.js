import {
    getLocalStorage,
    getUserData,
    getParam,
    setTitle,
    getAllWardCouncilDocs,
    getWardCouncilDoc,
    createWardCouncilDoc,
    deleteWardCouncilDoc,
    updateWardCouncilDoc,
    renderBasepage,
    renderDocPage,
    renderNewDocPage,
    renderUpdateDocPage,
    deleteDoc
} from './utils.mjs';

const id = getLocalStorage('id');
const userData = await getUserData(id);

setTitle(userData.firstName, userData.lastName);

let date = getParam('date');
const newDoc = getParam('new');
const update = getParam('update');

const meeting = 'wardCouncil';
const wrapper = document.querySelector('.wrapper');

if (!id) {
    location = '/rdpUtilities/';
}
if (userData.level < '2') {
    location = '/rdpUtilities/restricted/';
}

if (!date && !update && !newDoc) {
    await renderBasepage(meeting, userData, getAllWardCouncilDocs, wrapper);
}

if (date && !update && !newDoc) {
    await renderDocPage(meeting, userData, getWardCouncilDoc, date, wrapper);
}

if (newDoc && !update) {
    if (userData.level < '3') {
        location = '/rdpUtilities/restricted/';
    }
    await renderNewDocPage(meeting, createWardCouncilDoc, wrapper, 'New');
}
if (!newDoc && update) {
    if (userData.level < '3') {
        location = '/rdpUtilities/restricted/';
    }
    await renderUpdateDocPage(meeting, getWardCouncilDoc, updateWardCouncilDoc, date, wrapper, 'Update');
}

if (newDoc && update) {
    location = '/rdpUtilities/dashboard/'
}

if (document.querySelector('#delete')) {
    await deleteDoc(meeting, deleteWardCouncilDoc, date, wrapper);
}