import { setLocalStorage } from './utils.mjs';

const uname = document.querySelector('#username');
const pword = document.querySelector('#password');
const message = document.querySelector('#message');

let username = '';
let email = '';
let password = '';

const login = async () => {
    if (uname.value.includes('@')) {
        email = uname.value.toLowerCase();
    } else {
        username = uname.value.toLowerCase();
    }
    password = pword.value;

    const res = await fetch('http://156.155.158.70:1830/users/login', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'username': username,
            'email': email,
            'password': password
        })
    });

    const body = await res.json();
    if (body.error) {
        message.textContent = body.error;
        return;
    }

    setLocalStorage('id', body.id);
    
    location = `/rdpUtilities/dashboard`;
};

document.querySelector('#login').addEventListener('click', login);
document.addEventListener('keypress', async (event) => {
    if (event.key == 'Enter') {
        await login();
    }
});