import { getUserData, getLocalStorage } from './utils.mjs';

const id = getLocalStorage('id');

if (!id) {
    location = '/rdpUtilities';
} else {
    const userData = await getUserData(id);

    document.title += ` ${userData.firstName} ${userData.lastName}`;
    document.querySelector('#profile').textContent = `${userData.firstName[0]}${userData.lastName[0]}`;
    const wrapper = document.querySelector('.wrapper');
    document.querySelector('.load').remove();
    
    if (userData.level == 1) {
        let blank = document.createElement('p');
        blank.textContent = 'There aren\'t any meetings you need to attend.';

        wrapper.appendChild(blank);
    }
    if (userData.level >= 2) {
        let wc = document.createElement('a');
        wc.href = '/rdpUtilities/wardCouncil';
        wc.textContent = 'Ward Council';
        wc.className = 'btn btn-blue';

        wrapper.appendChild(wc);

        if (userData.level >= 3) {

            let bishopric = document.createElement('a');
            bishopric.href = '/rdpUtilities/bishopric';
            bishopric.textContent = 'Bishopric';
            bishopric.className = 'btn btn-blue';

            let sacrament = document.createElement('a');
            sacrament.href = '/rdpUtilities/sacrament';
            sacrament.textContent = 'Sacrament';
            sacrament.className = 'btn btn-blue';

            wrapper.appendChild(bishopric);
            wrapper.appendChild(sacrament);
        }
    }
}
