import {
    getBishopricDoc,
    getLocalStorage,
    getParam,
    getUserData,
    getWardCouncilDoc,
    renderPrint,
    setTitle
} from "./utils.mjs";

const id = getLocalStorage('id');
const userData = await getUserData(id);

setTitle(userData.firstName, userData.lastName);
const meeting = getParam('type');

const date = getParam('date');

const wrapper = document.querySelector('.wrapper');

if (!id) {
    location = '/rdpUtilities';
} else {
    if (meeting == 'wardCouncil') {
        await renderPrint(meeting, getWardCouncilDoc, date, wrapper);
    } else if (meeting == 'bishopric') {
        await renderPrint(meeting, getBishopricDoc, date, wrapper);
    }
}