import { getUserData, getLocalStorage, header, BASIC, WARD_COUNCIL, BISHOPRIC, YOUTH } from './utils.mjs';

document.querySelector('header').innerHTML = header('Dashboard');
const id = getLocalStorage('id');

if (!id) {
    location = '/rdpUtilities';
} else {
    const userData = await getUserData(id);

    document.title += ` ${userData.firstName} ${userData.lastName}`;
    document.querySelector('#profile').textContent = `${userData.firstName[0]}${userData.lastName[0]}`;
    const wrapper = document.querySelector('.wrapper');
    document.querySelector('.load').remove();

    let output = '<h2>Resources</h2>';

    if (userData.level == BASIC) {
        output += "<p>There aren't any meetings you need to attend.<br>If you need access to certain resources, please contact Garren Diab.</p>";
    }
    if (userData.level >= WARD_COUNCIL) {
        if (userData.level >= BISHOPRIC) {
            output += `<a class="btn btn-blue" href="/rdpUtilities/bishopric/">Bishopric</a>
            <a class="btn btn-blue" href="/rdpUtilities/sacrament/">Sacrament</a>`;
        }
        output += '<a class="btn btn-blue" href="/rdpUtilities/wardCouncil/">Ward Council</a>';

        if (userData.level >= YOUTH) {
            output += '<a class="btn btn-blue" href="/rdpUtilities/youth/">Youth</a>';
        }

        // output += `<a class="btn btn-blue" href="/rdpUtilities/assignments/">Assignments</a>`
    }
    wrapper.innerHTML = output;
}
