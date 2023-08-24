import {
    getParam, getUserData, resetPassword, updateUserData
} from "./utils.mjs"

const id = getParam("id");
const wrapper = document.querySelector('.wrapper');

document.querySelector('.load').remove();

if (id) {
    let output = `
    <h3 class="form-warning"></h3>
    <label>Enter your new password</label>
    <input id="password" type="password" />
    <label>Confirm your new password</label>
    <input id="confirm" type="password" />
    <button id="reset" class="btn btn-green">Reset Password</button>
    <a href="/rdpUtilities" class="btn btn-blue">Back</a>
    `;

    wrapper.innerHTML = output;

    const resetPassword = async () => {
        const pass = document.querySelector('#password');
        const confirm = document.querySelector('#confirm');

        const warn = document.querySelector('.form-warning');

        let load = document.createElement('img');
        load.className = 'load';
        load.src = '/rdpUtilities/images/load.svg';
        load.alt = 'loading symbol';

        if (pass.value && confirm.value) {
            if (pass.value !== confirm.value) {
                warn.textContent = 'Passwords do not match.';
            } else {
                document.querySelector('.wrapper').appendChild(load);
                pass.classList.add('login');
                confirm.classList.add('login');
                document.querySelector('#reset').classList.add('login');

                warn.textContent = '';
                const user = await getUserData(id);
                console.log(id, user.firstName, user.lastName, user.username, user.email, pass.value, user.level);

                const res = await updateUserData(id, user.firstName, user.lastName, user.username, user.email, pass.value, user.level);

                console.log(res);
                if (res.error) {
                    warn.textContent = res.error;
                } else {
                    wrapper.innerHTML = `<h3>Password reset successful</h3><a class="btn btn-blue" href="/rdpUtilities">Back to Login</a>`;
                }
            }
        } else {
            warn.textContent = 'Please enter your new password.'
        }
    }

    document.querySelector('#reset').addEventListener('click', resetPassword);
    document.addEventListener('keypress', async (event) => {
        if (event.key == 'Enter') {
            await resetPassword();
        }
    });
} else {
    let output = `
    <h3 class="form-warning"></h3>
    <label>Enter your email address</label>
    <input id="email" type="email" />
    <button id="reset" class="btn btn-green">Reset Password</button>
    <a href="/rdpUtilities" class="btn btn-blue">Back</a>
    `;

    wrapper.innerHTML = output;

    const reset = async () => {
        let load = document.createElement('img');
        load.className = 'load';
        load.src = '/rdpUtilities/images/load.svg';
        load.alt = 'loading symbol';
        
        const email = document.querySelector('#email');
        const warn = document.querySelector('.form-warning');
        if (email.value) {
            document.querySelector('.wrapper').appendChild(load);
            email.classList.add('login');
            document.querySelector('#reset').classList.add('login');
            warn.textContent = '';

            const res = await resetPassword(email.value);

            if (!res.error) {
                wrapper.innerHTML = `<h3>An email has been sent to ${email.value}</h3><a class="btn btn-blue" href="/rdpUtilities">Back to Login</a>`;
            }
        } else {
            warn.textContent = 'Please enter your email';
        }
    }

    document.querySelector('#reset').addEventListener('click', reset);
    document.addEventListener('keypress', async (event) => {
        if (event.key == 'Enter') {
            await reset();
        }
    });
}