import { newUser } from './utils.mjs';

const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const message = document.querySelector('#message');

const register = async () => {
    if (firstName.value == '' || lastName.value == '' || username.value == '' || email.value == '' || password.value == '') {
        message.textContent = 'Please complete all the fields';
        return;
    }
    let load = document.createElement('img');
    load.className = 'load';
    load.src = '/rdpUtilities/images/load.svg';
    load.alt = 'loading symbol';
    document.querySelector('.login-wrapper').appendChild(load);
    const res = await newUser(firstName.value, lastName.value, username.value, email.value, password.value);

    if (res.error) {
        message.textContent = res.error;
        document.querySelector('.login-wrapper').removeChild(load);
        return;
    }

    location = '/rdpUtilities';
};

document.querySelector('#reg').addEventListener('click', register);
document.addEventListener('keypress', async (event) => {
    if (event.key == 'Enter') {
        await register();
    }
});