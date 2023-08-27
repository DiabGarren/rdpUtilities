import {
    BISHOP,
    getLocalStorage,
    getParam,
    getUserData,
    renderAllUsers,
    setIcon,
    setProfile,
    subpageHeader,
    updateUserData
} from "./utils.mjs";

const id = getLocalStorage('id');
const userData = await getUserData(id);

document.querySelector('header').innerHTML = subpageHeader('Profile', userData.level);
document.querySelector('#subpage').addEventListener('click', setIcon);

setProfile(userData.firstName, userData.lastName);

const update = getParam('update');
const user = getParam('user');
const wrapper = document.querySelector('.wrapper');
document.querySelector('.load').remove();

let output = '';

if (!id) {
    location = '/rdpUtilities';
}
if (update) {
    output = `
    <h3 class="form-warning"></h3>
    <h3>First Name</h3>
    <input id="firstName" type="text" value=${userData.firstName} />
    <h3>Last Name</h3>
    <input id="lastName" type="text" value=${userData.lastName} />
    <h3>Username</h3>
    <input id="username" type="text" value=${userData.username} />
    <h3>Email</h3>
    <input id="email" type="email" value=${userData.email} />
    <h3>Password</h3>
    <h3>New password</h3>
    <input id="password" type="text" />
    <h3>Confirm password</h3>
    <input id="confirm" type="text" />
    <button id="update" class="btn btn-green">Update</button>
    <a href="/rdpUtilities/profile" class="btn btn-blue">Back</a>
    `;

    wrapper.innerHTML = output;

    document.querySelector('#update').addEventListener('click', async () => {
        const firstName = document.querySelector('#firstName');
        const lastName = document.querySelector('#lastName');
        const username = document.querySelector('#username');
        const email = document.querySelector('#email');
        const password = document.querySelector('#password');
        const confirm = document.querySelector('#confirm');
        const warn = document.querySelector('.form-warning');

        if (firstName.value == '' || lastName.value == '' || username.value == '' || email.value == '' || password.value == '' || confirm.value == '') {
            warn.textContent = 'Please complete every field';
        } else if (password.value !== confirm.value) {
            warn.textContent = 'Passwords must match';
        } else {
            const res = await updateUserData(id, firstName.value, lastName.value, username.value, email.value, password.value, userData.level);
            if (!res.error) {
                location = `/rdpUtilities/profile/`;
            }
        }
    });
} else if (user) {
    if (user === 'all') {
        await renderAllUsers(userData, wrapper);
        
    } else {

    }

} else {
    output = `
    <h3 class="form-warning"></h3>
    <h3>First Name</h3>
    <p>${userData.firstName}</p>
    <h3>Last Name</h3>
    <p>${userData.lastName}</p>
    <h3>Username</h3>
    <p>${userData.username}</p>
    <h3>Email</h3>
    <p>${userData.email}</p>
    <h3>Level</h3>
    <p>${userData.level}</p>
    <a href="/rdpUtilities/profile/?update=true" class="btn btn-green">Update</a>
    <a href="/rdpUtilities/logout" class="btn btn-red">Logout</a>`;

    if (userData.level >= BISHOP) {
        output += `<a href="/rdpUtilities/profile/?user=all" class="btn btn-blue">All Users</a>`;
    }
    output += `<a href="/rdpUtilities/dashboard" class="btn btn-blue">Back</a>`;

    wrapper.innerHTML = output;
}
