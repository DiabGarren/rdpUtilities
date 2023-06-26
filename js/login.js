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
    document.querySelector('#username').classList.add('login');
    document.querySelector('#password').classList.add('login');
    document.querySelector('#login').classList.add('login');
    if (uname.value.includes('@')) {
        email = uname.value.toLowerCase();
    } else {
        username = uname.value.toLowerCase();
    }
    password = pword.value;

    const res = await userLogin(username, email, password);
    if (res.error) {
        message.textContent = res.error;
        document.querySelector('#username').classList.remove('login');
        document.querySelector('#password').classList.remove('login');
        document.querySelector('#login').classList.remove('login');
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