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
    console.log(firstName.value, lastName.value, username.value, email.value, password.value);
    const res = await newUser(firstName.value, lastName.value, username.value, email.value, password.value);
    if (res.error) {
        message.textContent = res.error;
        return;
    }

    location = '/rdpUtilities/login';
};

document.querySelector('#reg').addEventListener('click', register);
document.addEventListener('keypress', async (event) => {
    if (event.key == 'Enter') {
        await register();
    }
});