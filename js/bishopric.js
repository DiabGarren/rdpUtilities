import {
    getLocalStorage,
    getUserData,
    getParam,
    setTitle,
    getAllBishopricDocs,
    getBishopricDoc,
    createBishopricDoc,
    updateBishopricDoc,
    deleteBishopricDoc,
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

const meeting = 'bishopric'
const wrapper = document.querySelector('.wrapper');

if (!id) {
    location = '/rdpUtilities';
}

if (userData.level < '3') {
    location = '/rdpUtilities/restricted';
}

if (date && !update && !newDoc) {
    await renderDocPage(meeting, userData, getBishopricDoc, date, wrapper);
}

if (!date && !update && !newDoc) {
    await renderBasepage(meeting, userData, getAllBishopricDocs, wrapper);
}

if (newDoc && !update) {
    if (userData.level < '3') {
        location = '/rdpUtilities/restricted/';
    }
    await renderNewDocPage(meeting, createBishopricDoc, wrapper, 'New');
}

if (!newDoc && update) {
    if (userData.level < '3') {
        location = '/rdpUtilities/restricted/';
    }
    await renderUpdateDocPage(meeting, getBishopricDoc, updateBishopricDoc, date, wrapper, 'Update');
}

if (newDoc && update) {
    location = '/rdpUtilities/dashboard/'
}

if (document.querySelector('#delete')) {
    await deleteDoc(meeting, deleteBishopricDoc, date, wrapper);
}