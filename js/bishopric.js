import { getLocalStorage, getUserData, getParam } from "./utils.mjs";

const id = getLocalStorage('id');
const userData = await getUserData(id);

document.title += ` ${userData.firstName} ${userData.lastName}`;
document.querySelector('#profile').textContent = `${userData.firstName[0]}${userData.lastName[0]}`;


let date = getParam('date');
const newDoc = getParam('new');

const wrapper = document.querySelector('.wrapper');

if (!id) {
    location = '/rdpUtilities';
} else {
    const userData = await getUserData(id);
    if (userData.level < '3') {
        location = '/rdpUtilities/restricted';
    }
}