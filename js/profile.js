import { getLocalStorage, getUserData, uploadImage } from "./utils.mjs";

const id = getLocalStorage('id');
const user = await getUserData(id);

document.querySelector('#firstName').textContent = user.firstName;
document.querySelector('#lastName').textContent = user.lastName;
document.querySelector('#username').textContent = user.username;
document.querySelector('#email').textContent = user.email;
