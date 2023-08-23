import { 
    getLocalStorage, 
    getParam, 
    getUserData, 
    setProfile, 
    updateUserData 
} from "./utils.mjs";

const id = getLocalStorage('id');
const userData = await getUserData(id);

setProfile(userData.firstName, userData.lastName);

const update = getParam('update');
const wrapper = document.querySelector('.wrapper');
document.querySelector('.load').remove();

if (!id) {
    location = '/rdpUtilities';
}

let back = document.createElement('a');
back.href = '/rdpUtilities/dashboard/';
back.textContent = 'Back';
back.className = 'btn btn-blue';

if (!update) {
    let firstName = document.createElement('div');
    firstName.className = 'doc-item';
    let fnLab = document.createElement('h2');
    fnLab.textContent = 'First Name';

    let fnTxt = document.createElement('p');
    fnTxt.textContent = userData.firstName;

    firstName.appendChild(fnLab);
    firstName.appendChild(fnTxt);

    let lastName = document.createElement('div');
    lastName.className = 'doc-item';
    let lnLab = document.createElement('h2');
    lnLab.textContent = 'Last Name';

    let lnTxt = document.createElement('p');
    lnTxt.textContent = userData.lastName;

    lastName.appendChild(lnLab);
    lastName.appendChild(lnTxt);

    let username = document.createElement('div');
    username.className = 'doc-item';
    let unLab = document.createElement('h2');
    unLab.textContent = 'Username';

    let unTxt = document.createElement('p');
    unTxt.textContent = userData.username;

    username.appendChild(unLab);
    username.appendChild(unTxt);

    let email = document.createElement('div');
    email.className = 'doc-item';
    let emailLab = document.createElement('h2');
    emailLab.textContent = 'Email';

    let emailTxt = document.createElement('p');
    emailTxt.textContent = userData.email;

    email.appendChild(emailLab);
    email.appendChild(emailTxt);

    let level = document.createElement('div');
    level.className = 'doc-item';
    let levelLab = document.createElement('h2');
    levelLab.textContent = 'Level';

    let levelTxt = document.createElement('p');
    levelTxt.textContent = userData.level;

    level.appendChild(levelLab);
    level.appendChild(levelTxt);

    wrapper.appendChild(firstName);
    wrapper.appendChild(lastName);
    wrapper.appendChild(username);
    wrapper.appendChild(email);
    wrapper.appendChild(level);

    let updateBtn = document.createElement('a');
    updateBtn.href = '/rdpUtilities/profile/?update=true';
    updateBtn.className = 'btn btn-green';
    updateBtn.textContent = 'Update';

    let logout = document.createElement('a');
    logout.href = '/rdpUtilities/logout/';
    logout.className = 'btn btn-red';
    logout.textContent = 'Logout';

    wrapper.appendChild(updateBtn);

    wrapper.appendChild(logout);
} else {
    let warn = document.createElement('h3');
    warn.className = 'form-warning';
    warn.id = 'message';
    wrapper.appendChild(warn);

    let firstName = document.createElement('div');
    firstName.className = 'doc-item';
    let fnLab = document.createElement('h2');
    fnLab.textContent = 'First Name';

    let fnTxt = document.createElement('input');
    fnTxt.value = userData.firstName;
    fnTxt.id = 'firstName';

    firstName.appendChild(fnLab);
    firstName.appendChild(fnTxt);

    let lastName = document.createElement('div');
    lastName.className = 'doc-item';
    let lnLab = document.createElement('h2');
    lnLab.textContent = 'Last Name';

    let lnTxt = document.createElement('input');
    lnTxt.value = userData.lastName;
    lnTxt.id = 'lastName';

    lastName.appendChild(lnLab);
    lastName.appendChild(lnTxt);

    let username = document.createElement('div');
    username.className = 'doc-item';
    let unLab = document.createElement('h2');
    unLab.textContent = 'Username';

    let unTxt = document.createElement('input');
    unTxt.value = userData.username;
    unTxt.id = 'username';

    username.appendChild(unLab);
    username.appendChild(unTxt);

    let email = document.createElement('div');
    email.className = 'doc-item';
    let emailLab = document.createElement('h2');
    emailLab.textContent = 'Email';

    let emailTxt = document.createElement('input');
    emailTxt.type = 'email';
    emailTxt.value = userData.email;
    emailTxt.id = 'email';

    email.appendChild(emailLab);
    email.appendChild(emailTxt);

    let password = document.createElement('div');
    password.className = 'doc-item';
    let passLab = document.createElement('h2');
    passLab.textContent = 'Password';

    let passNew = document.createElement('h3');
    passNew.textContent = 'New password';

    let passTxt = document.createElement('input');
    passTxt.type = 'password';
    passTxt.id = 'passTxt';

    let passConfirm = document.createElement('h3');
    passConfirm.textContent = 'Confrim new password';

    let passTxt2 = document.createElement('input');
    passTxt2.type = 'password';
    passTxt2.id = 'passTxt2';


    password.appendChild(passLab);
    password.appendChild(passNew);
    password.appendChild(passTxt);
    password.appendChild(passConfirm);
    password.appendChild(passTxt2);

    let levelTxt = userData.level;

    wrapper.appendChild(firstName);
    wrapper.appendChild(lastName);
    wrapper.appendChild(username);
    wrapper.appendChild(email);
    wrapper.appendChild(password);

    let updateBtn = document.createElement('button');
    updateBtn.textContent = 'Update';
    updateBtn.id = 'update';
    updateBtn.className = 'btn btn-green';

    back.href = '/rdpUtilities/profile/';

    wrapper.appendChild(updateBtn);

    document.querySelector('#update').addEventListener('click', async () => {
        if (fnTxt.value == '' || lnTxt.value == '' || unTxt.value == '' || emailTxt.value == '' || passTxt.value == '' || passTxt2.value == '') {
            warn.textContent = 'Please complete every field';
        } else if (passTxt.value != passTxt2.value) {
            warn.textContent = 'Passwords must match';
        } else {
            const res = await updateUserData(id, fnTxt.value, lnTxt.value, unTxt.value, emailTxt.value, passTxt.value, userData.level);
            if (!res.error) {
                location = `/rdpUtilities/profile/`;
            }

        }
    });
}


wrapper.appendChild(back);
