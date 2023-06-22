import { getParam, getUserData, getLocalStorage } from './utils.mjs';

const id = getLocalStorage('id');

if (!id) {
    location = '/rdpUtilities';
} else {
    const userData = await getUserData(id);
    const name = `${userData.firstName} ${userData.lastName}`;
    
    document.title += ` ${name}`;
    document.querySelector('h1').textContent += ` ${name}`;
    document.querySelector('#profile').textContent = name;
}
