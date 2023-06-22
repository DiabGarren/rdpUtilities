import { getLocalStorage } from './utils.mjs';

const id = getLocalStorage('id');
if (id) {
    location = '/rdpUtilities/dashboard';
}