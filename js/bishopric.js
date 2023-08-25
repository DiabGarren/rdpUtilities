import {
    getLocalStorage,
    getUserData,
    getParam,
    setProfile,
    getAllBishopricDocs,
    getBishopricDoc,
    createBishopricDoc,
    updateBishopricDoc,
    deleteBishopricDoc,
    renderBasepage,
    renderDocPage,
    renderNewDocPage,
    renderUpdateDocPage,
    deleteDoc,
    subpageHeader,
    setIcon
} from './utils.mjs';

const id = getLocalStorage('id');
if (!id) {
    location = '/rdpUtilities/';
}

const userData = await getUserData(id);
document.querySelector('header').innerHTML = subpageHeader('Bishopric', userData.level);
document.querySelector('#subpage').addEventListener('click', setIcon);

setProfile(userData.firstName, userData.lastName);

let date = getParam('date');
const newDoc = getParam('new');
const update = getParam('update');

const meeting = 'bishopric'
const wrapper = document.querySelector('.wrapper');
document.querySelector('.load').remove();

if (userData.level < '3') {
    location = '/rdpUtilities/restricted';
}

if (!date && !update && !newDoc) {
    await renderBasepage(meeting, userData, getAllBishopricDocs, wrapper);
}

if (date && !update && !newDoc) {
    await renderDocPage(meeting, userData, getBishopricDoc, date, wrapper);
}

if (newDoc && !update) {
    if (userData.level < '3') {
        location = '/rdpUtilities/restricted/';
    }
    await renderNewDocPage(meeting, userData, createBishopricDoc, wrapper, 'New');
}

if (!newDoc && update) {
    if (userData.level < '3') {
        location = '/rdpUtilities/restricted/';
    }
    await renderUpdateDocPage(meeting, userData, getBishopricDoc, updateBishopricDoc, date, wrapper, 'Update');
}

if (newDoc && update) {
    location = '/rdpUtilities/dashboard/'
}

if (document.querySelector('#delete')) {
    await deleteDoc(meeting, deleteBishopricDoc, date, wrapper);
}