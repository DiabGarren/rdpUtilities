import { getLocalStorage, setLocalStorage, userLogin } from './utils.mjs';

const uname = document.querySelector('#username');
const pword = document.querySelector('#password');
const message = document.querySelector('#message');

let username = '';
let email = '';
let password = '';

const id = getLocalStorage('id');

if (id) {
    location = '/rdpUtilities/dashboard/';
}

const login = async () => {
    if (uname.value.includes('@')) {
        email = uname.value.toLowerCase();
    } else {
        username = uname.value.toLowerCase();
    }
    password = pword.value;

    const res = await userLogin(username, email, password);
    if (res.error) {
        message.textContent = res.error;
        return;
    }

    setLocalStorage('id', res.id);
    
    location = `/rdpUtilities/dashboard`;
};

document.querySelector('#login').addEventListener('click', login);
document.addEventListener('keypress', async (event) => {
    if (event.key == 'Enter') {
        await login();
    }
});