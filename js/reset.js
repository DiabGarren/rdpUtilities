import { 
    getParam, resetPassword
} from "./utils.mjs"

const id = getParam("id");
const wrapper = document.querySelector('.wrapper');

if (id) {

} else {
    let output = `
    <h2>Enter your email address</h2>
    <input id="email" type="email">
    <button id="reset" class="btn btn-green">Reset Password</button>
    <a href="/rdpUtilities" class="btn btn-blue">Back</a>
    `;

    wrapper.innerHTML = output;

    document.querySelector('#reset').addEventListener('click', async () => {
        const email = document.querySelector('#email');

        if (email.value) {
            const res = await resetPassword(email.value);

            if (!res.error) {
                location = '/rdpUtilities/';
            }
        }
    });
}