import {
    BISHOPRIC,
    createWardCouncilDoc,
    deleteDoc,
    deleteWardCouncilDoc,
    getAllWardCouncilDocs,
    getLocalStorage,
    getParam,
    setProfile,
    getUserData,
    getWardCouncilDoc,
    renderBasepage,
    renderDocPage,
    renderNewDocPage,
    renderUpdateDocPage,
    setIcon,
    subpageHeader,
    updateWardCouncilDoc,
    WARD_COUNCIL
} from './utils.mjs';

const id = getLocalStorage('id');
if (!id) {
    location = '/rdpUtilities/';
}

const userData = await getUserData(id);
document.querySelector('header').innerHTML = subpageHeader('Ward Council', userData.level);
document.querySelector('#subpage').addEventListener('click', setIcon);

setProfile(userData.firstName, userData.lastName);

let date = getParam('date');
const newDoc = getParam('new');
const update = getParam('update');

const meeting = 'wardCouncil';
const wrapper = document.querySelector('.wrapper');
document.querySelector('.load').remove();

if (userData.level < WARD_COUNCIL) {
    location = '/rdpUtilities/restricted/';
}

if (!date && !update && !newDoc) {
    await renderBasepage(meeting, userData, getAllWardCouncilDocs, wrapper);
}

if (date && !update && !newDoc) {
    await renderDocPage(meeting, userData, getWardCouncilDoc, date, wrapper);
}

if (newDoc && !update) {
    if (userData.level < BISHOPRIC) {
        location = '/rdpUtilities/restricted/';
    }
    await renderNewDocPage(meeting, userData, createWardCouncilDoc, wrapper, 'New');
}
if (!newDoc && update) {
    if (userData.level < BISHOPRIC) {
        location = '/rdpUtilities/restricted/';
    }
    await renderUpdateDocPage(meeting, userData, getWardCouncilDoc, updateWardCouncilDoc, date, wrapper, 'Update');
}

if (newDoc && update) {
    location = '/rdpUtilities/dashboard/'
}

if (document.querySelector('#delete')) {
    await deleteDoc(meeting, deleteWardCouncilDoc, date, wrapper);
}