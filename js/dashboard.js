import { getParam, getUserData, getLocalStorage } from './utils.mjs';

const id = getLocalStorage('id');

if (!id) {
    location = '/rdpUtilities';
} else {
    const userData = await getUserData(id);

    document.title += ` ${userData.firstName} ${userData.lastName}`;
    document.querySelector('#profile').textContent = `${userData.firstName[0]}${userData.lastName[0]}`;
    const wrapper = document.querySelector('.wrapper');

    if (userData.level == 1) {
        let blank = document.createElement('p');
        blank.textContent = 'There aren\'t any meetings you need to attend.';

        wrapper.appendChild(blank);
    }
    if (userData.level >= 2) {
        let wc = document.createElement('a');
        wc.href = '/rdpUtilities/wardCouncil';
        wc.textContent = 'Ward Council';
        wc.className = 'btn';

        wrapper.appendChild(wc);

        if (userData.level >= 3) {

            let bishopric = document.createElement('a');
            bishopric.href = '/rdpUtilities/bishopric';
            bishopric.textContent = 'Bishopric';
            bishopric.className = 'btn';

            wrapper.appendChild(bishopric);
        }
    }
}
