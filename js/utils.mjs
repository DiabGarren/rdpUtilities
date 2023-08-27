// const baseUrl = 'https://rdputilities-api.onrender.com';
const baseUrl = 'http://156.155.158.70:1830';
// const baseUrl = 'http://172.20.10.9:1830';

export const BASIC = 1, WARD_COUNCIL = 2, YOUTH = 3, BISHOPRIC = 4, BISHOP = 5;

export function getParam(param) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const product = urlParams.get(param);
    return product;
}

export async function getAllUsers() {
    const res = await fetch(`${baseUrl}/users`);
    const data = await res.json();
    return data;
}

export async function getUserData(userId) {
    const res = await fetch(`${baseUrl}/users/${userId}`);
    const data = await res.json();
    return data;
}

export function setLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

export function getLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}

export function setProfile(firstName, lastName) {
    document.querySelector('#profile').textContent = `${firstName[0]}${lastName[0]}`;
}

export async function userLogin(username, email, password) {
    const res = await fetch(`${baseUrl}/users/login`, {
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

    const data = await res.json();
    return data;
}

export async function newUser(firstName, lastName, username, email, password) {
    const res = await fetch(`${baseUrl}/users`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'firstName': firstName,
            'lastName': lastName,
            'username': username,
            'email': email,
            'password': password,
            'level': BASIC
        })
    });

    const data = await res.json();
    return data;
}

export async function updateUserData(userId, firstName, lastName, username, email, password, level) {
    const res = await fetch(`${baseUrl}/users/${userId}`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'firstName': firstName,
            'lastName': lastName,
            'username': username,
            'email': email,
            'password': password,
            'level': level
        })
    });

    const data = await res;
    return data;
}

export async function updateUser(userId, firstName, lastName, username, email, level) {
    const res = await fetch(`${baseUrl}/users/${userId}`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'firstName': firstName,
            'lastName': lastName,
            'username': username,
            'email': email,
            'level': level
        })
    });

    const data = await res;
    return data;
}

export async function resetPassword(email) {
    const userRes = await fetch(`${baseUrl}/users/email/${email}`);
    const user = await userRes.json();

    const res = await fetch(`${baseUrl}/reset/`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'id': user._id,
            'user': `${user.firstName} ${user.lastName}`,
            'email': email,
        })
    });

    const data = await res.json();
    return data;
}

export async function getAllWardCouncilDocs() {
    const res = await fetch(`${baseUrl}/wardCouncil`);
    const data = await res.json();
    return data;
}

export async function getWardCouncilDoc(date) {
    const res = await fetch(`${baseUrl}/wardCouncil/${date}`);
    const data = await res.json();
    return data;
}

export async function createWardCouncilDoc(date, opening, st, train, agenda, closing, notes, createdBy) {
    const res = await fetch(`${baseUrl}/wardCouncil`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'date': date,
            'openingPrayer': opening,
            'spiritualThought': st,
            'training': train,
            'agenda': agenda,
            'closingPrayer': closing,
            'notes': notes,
            'createdBy': createdBy,
            'updatedBy': [createdBy]
        })
    });

    const data = await res.json();
    return data;
}

export async function updateWardCouncilDoc(date, opening, st, train, agenda, closing, notes, updatedBy) {
    const res = await fetch(`${baseUrl}/wardCouncil/${date}`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'openingPrayer': opening,
            'spiritualThought': st,
            'training': train,
            'agenda': agenda,
            'closingPrayer': closing,
            'notes': notes,
            'updatedBy': updatedBy
        })
    });

    const data = await res.json();
    return data;
}

export async function deleteWardCouncilDoc(date) {
    const res = await fetch(`${baseUrl}/wardCouncil/${date}`, {
        method: 'DELETE'
    });

    const data = res;
    return data;
}

export async function getAllBishopricDocs() {
    const res = await fetch(`${baseUrl}/bishopric`);
    const data = await res.json();
    return data;
}

export async function getBishopricDoc(date) {
    const res = await fetch(`${baseUrl}/bishopric/${date}`);
    const data = await res.json();
    return data;
}

export async function createBishopricDoc(date, opening, st, train, agenda, closing, notes, createdBy) {
    const res = await fetch(`${baseUrl}/bishopric`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'date': date,
            'openingPrayer': opening,
            'spiritualThought': st,
            'training': train,
            'agenda': agenda,
            'closingPrayer': closing,
            'notes': notes,
            'createdBy': createdBy,
            'updatedBy': [createdBy]
        })
    });

    const data = await res.json();
    return data;
}

export async function updateBishopricDoc(date, opening, st, train, agenda, closing, notes, updatedBy) {
    const res = await fetch(`${baseUrl}/bishopric/${date}`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'openingPrayer': opening,
            'spiritualThought': st,
            'training': train,
            'agenda': agenda,
            'closingPrayer': closing,
            'notes': notes,
            'updatedBy': updatedBy
        })
    });

    const data = await res.json();
    return data;
}

export async function deleteBishopricDoc(date) {
    const res = await fetch(`${baseUrl}/bishopric/${date}`, {
        method: 'DELETE'
    });

    const data = res;
    return data;
}


export async function getAllSacramentDocs() {
    const res = await fetch(`${baseUrl}/sacrament`);
    const data = await res.json();
    return data;
}

export async function getSacramentDoc(date) {
    const res = await fetch(`${baseUrl}/sacrament/${date}`);
    const data = await res.json();
    return data;
}

export async function createSacramentDoc(date, conducting, announcements, openingPrayer, openingHymn, sacramentHymn, closingHymn, releases, sustainings, other, program, closingPrayer, createdBy) {
    const res = await fetch(`${baseUrl}/sacrament`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'date': date,
            'conducting': conducting,
            'announcements': announcements,
            'openingPrayer': openingPrayer,
            'openingHymn': openingHymn,
            'sacramentHymn': sacramentHymn,
            'closingHymn': closingHymn,
            'releases': releases,
            'sustainings': sustainings,
            'other': other,
            'program': program,
            'closingPrayer': closingPrayer,
            'createdBy': createdBy,
            'updatedBy': [createdBy]
        })
    });

    const data = await res.json();
    return data;
}

export async function updateSacramentDoc(date, conducting, announcements, openingPrayer, openingHymn, sacramentHymn, closingHymn, releases, sustainings, other, program, closingPrayer, updatedBy) {
    const res = await fetch(`${baseUrl}/sacrament/${date}`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'date': date,
            'conducting': conducting,
            'announcements': announcements,
            'openingPrayer': openingPrayer,
            'openingHymn': openingHymn,
            'sacramentHymn': sacramentHymn,
            'closingHymn': closingHymn,
            'releases': releases,
            'sustainings': sustainings,
            'other': other,
            'program': program,
            'closingPrayer': closingPrayer,
            'updatedBy': updatedBy
        })
    });

    const data = await res.json();
    return data;
}

export async function deleteSacramentDoc(date) {
    const res = await fetch(`${baseUrl}/sacrament/${date}`, {
        method: 'DELETE'
    });

    const data = res;
    return data;
}

export async function getAllAssignments() {
    const res = await fetch(`${baseUrl}/assignments`);
    const data = await res.json();
    return data;
}

export async function getAssignments(userId) {
    const res = await fetch(`${baseUrl}/assignments/${userId}`);
    const data = await res.json();
    return data;
}

export async function createAssignment(userId, assignment, completed, dueDate) {
    const res = await fetch(`${baseUrl}/assignments/`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'userId': userId,
            'assignment': assignment,
            'completed': completed,
            'dueDate': dueDate
        })
    });
    const data = await res.json();
    return data;
}

export async function updateAssignment(assignmentId, userId, assignment, completed, dueDate) {
    const res = await fetch(`${baseUrl}/assignments/${assignmentId}`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'userId': userId,
            'assignment': assignment,
            'completed': completed,
            'dueDate': dueDate
        })
    });
    const data = await res.json();
    return data;
}

export async function deleteAssignment(assignmentId) {
    const res = await fetch(`${baseUrl}/assignments/${assignmentId}`, {
        method: 'DELETE'
    });
    const data = res;
    return data;
}

export async function getAllYouthActivities() {
    const res = await fetch(`${baseUrl}/youth`);
    const data = await res.json();
    return data;
}
export async function getYouthActivity(date) {
    const res = await fetch(`${baseUrl}/youth/${date}`);
    const data = await res.json();
    return data;
}

async function getHymns() {
    const data = await fetch('/rdpUtilities/json/hymns.json');
    const hymns = data.json();
    return hymns;
}

export function header(page) {
    return `
    <a href="/rdpUtilities/dashboard/" id="home">
        <svg width="55" height="50" viewBox="0 0 50 45" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 16V43H25H40V16M2 15L25 2L48 15" stroke="white" stroke-width="3" stroke-linecap="round"/>
        </svg>
    </a>
    <h1>${page}</h1>
    <a href="/rdpUtilities/profile" id="profile"></a>`;
}

export function subpageHeader(currPage, level) {
    const pages = [
        ['dashboard', 'Dashboard'],
        ['bishopric', 'Bishopric'],
        ['sacrament', 'Sacrament'],
        ['wardCouncil', 'Ward Council'],
        ['youth', 'Youth']
    ];
    const dropdown = () => {
        let output = '';
        for (const page of pages) {

            if (page[1] === currPage) {
                output += `<a href="/rdpUtilities/${page[0]}" class="active">${page[1]}</a>`
            } else if (
                (page[0] === 'wardCouncil' && level < WARD_COUNCIL) ||
                (page[0] === 'youth' && level < YOUTH) ||
                ((page[0] === 'bishopric' || page[0] === 'sacrament') && level < BISHOPRIC)
            ) {
                output += '';
            } else {
                output += `<a href="/rdpUtilities/${page[0]}">${page[1]}</a>`
            }
        }
        return output;
    }
    return `
    <a id="subpage">
        <svg width="55" height="50" viewBox="0 0 65 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 5H60" stroke="white" stroke-width="9" stroke-linecap="round"/>
            <path d="M5 55H60" stroke="white" stroke-width="9" stroke-linecap="round"/>
            <path d="M5 30H60" stroke="white" stroke-width="9" stroke-linecap="round"/>
        </svg>
    </a>
    <div id="page-navi" style="display: none">
        ${dropdown()}
    </div>
    <h1>${currPage}</h1>
    <a href="/rdpUtilities/profile" id="profile"></a>`;
}

export function setIcon() {
    const icon = document.querySelector('#subpage');
    const drop = document.querySelector('#page-navi');
    if (drop.getAttribute('style') == 'display: none') {
        icon.innerHTML = `<svg width="55" height="50" viewBox="0 0 65 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 5L60 55M5 55L60 5" stroke="white" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`;
        drop.setAttribute('style', 'display: flex');
    } else {
        icon.innerHTML = `<svg width="55" height="50" viewBox="0 0 65 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 5H60" stroke="white" stroke-width="9" stroke-linecap="round"/>
        <path d="M5 55H60" stroke="white" stroke-width="9" stroke-linecap="round"/>
        <path d="M5 30H60" stroke="white" stroke-width="9" stroke-linecap="round"/>
    </svg>`;
        drop.setAttribute('style', 'display: none');
    }

}

export async function renderBasepage(meeting, userData, getAllFunc, wrapper) {
    const currDate = new Date();
    let heading = document.createElement('h2');
    heading.textContent = 'Meetings';
    wrapper.appendChild(heading);

    const docs = await getAllFunc();

    docs.forEach((doc) => {
        const docDate = new Date(doc.date)
        let wcDoc = document.createElement('a');
        wcDoc.href = `/rdpUtilities/${meeting}/?date=${doc.date}`;
        wcDoc.textContent = `${docDate.getDate()} ${docDate.toLocaleString('default', { month: 'long' })} ${docDate.getFullYear()}`;

        if (docDate.getFullYear() < currDate.getFullYear()) {
            wcDoc.className = 'btn btn-grey';
        } else if (docDate.getFullYear() > currDate.getFullYear()) {
            wcDoc.className = 'btn btn-blue';
        } else if (docDate.getMonth() < currDate.getMonth()) {
            wcDoc.className = 'btn btn-grey';
        } else if (docDate.getMonth() > currDate.getMonth()) {
            wcDoc.className = 'btn btn-blue';
        } else if (docDate.getDate() < currDate.getDate()) {
            wcDoc.className = 'btn btn-grey';
        } else if (docDate.getDate() > currDate.getDate()) {
            wcDoc.className = 'btn btn-blue';
        } else {
            wcDoc.className = 'btn btn-green';
        }

        wrapper.appendChild(wcDoc);
    });
    let createDoc = document.createElement('a');
    createDoc.href = `/rdpUtilities/${meeting}/?new=true`;
    createDoc.textContent = 'Create document';
    createDoc.className = 'btn btn-blue';

    let back = document.createElement('a');
    back.href = `/rdpUtilities/dashboard/`;
    back.textContent = 'Back';
    back.className = 'btn btn-blue';

    if (userData.level >= BISHOPRIC) {
        wrapper.appendChild(createDoc);
    }

    wrapper.appendChild(back);
}

export async function renderDocPage(meeting, userData, getDocFunc, date, wrapper) {
    const docDate = new Date(date);
    document.title += ` - ${docDate.getDate()} ${docDate.toLocaleString('default', { month: 'short' })} ${docDate.getFullYear()}`;

    const doc = await getDocFunc(date);
    if (doc.length > 0) {

        const meetingType = () => {
            if (meeting.toLowerCase() === 'bishopric') {
                return `Roodepoort Ward<br>
                Bishopric Meeting Agenda<br>
                8:00am ${docDate.getDate()} ${docDate.toLocaleString('default', { month: 'long' })} ${docDate.getFullYear()}`;
            } else if (meeting.toLowerCase() === 'wardcouncil') {
                return `Roodepoort Ward<br>
                Ward Coucil Meeting Agenda<br>
                7:00pm ${docDate.getDate()} ${docDate.toLocaleString('default', { month: 'long' })} ${docDate.getFullYear()}<br>
                Attendees: Bishopric, Elders Quorum, Relief Society, Young Woman, Primary`;
            }
        }

        const agendaItems = () => {
            let out = '<ul>'
            doc[0].agenda.forEach((item) => {
                out += `<li>${item}</li>`;
            });
            out += '</ul>';
            return out;
        }

        let output = `
        <div class='print-font'>
        <h2 id="doc-heading">THE ROODEPOORT STAKE<br>OF<br>THE CHURCH OF JESUS CHRIST OF LATTER-DAY SAINTS</h2>
        <h3 id="doc-subheading">${meetingType()}</h3>
        <div class="doc-item">
            <h3>Opening Prayer:</h3>
            <p>${doc[0].openingPrayer}</p>
        </div>
        <div class="doc-item">
            <h3>Spiritual Thought:</h3>
            <p>${doc[0].spiritualThought}</p>
        </div>
        <div class="doc-item">
            <h3>Handbook Training:</h3>
            <p>${doc[0].training}</p>
        </div>
        <div class="doc-item">
            <h3>Agenda:</h3>
            ${agendaItems()}
        </div>
        <div class="doc-item">
            <h3>Closing Prayer:</h3>
            <p>${doc[0].closingPrayer}</p>
        </div>
        <div class="doc-item no-print">
            <h4>Created By:</h4>
            <p>${doc[0].createdBy.name}`
        if (doc[0].createdBy.date !== 'n/a') {
            const createdDate = new Date(doc[0].createdBy.date);
            output += ` - ${createdDate.getDate()} ${createdDate.toLocaleString('default', { month: 'long' })} ${createdDate.getFullYear()}`;
        }
        output += `</p>
        </div>
        <div class="doc-item no-print">
            <h4>Last updated By:</h4>
            <p>${doc[0].updatedBy[doc[0].updatedBy.length - 1].name}`;
        if (doc[0].updatedBy[doc[0].updatedBy.length - 1].date !== 'n/a') {
            const createdDate = new Date(doc[0].updatedBy[doc[0].updatedBy.length - 1].date);
            output += ` - ${createdDate.getDate()} ${createdDate.toLocaleString('default', { month: 'long' })} ${createdDate.getFullYear()}`;
        }
        output += `</p>
        </div>`;
        if (userData.level >= BISHOPRIC) {
            output += `<a class="btn btn-green no-print" href="/rdpUtilities/${meeting}/?date=${date}&update=true">Update Document</a>
            <button id="delete" class="btn btn-red no-print">Delete Document</button>`;
        }
        output += `<button class="btn btn-blue no-print" onclick="window.print()">Print</button>
        <a class="btn btn-blue no-print" href="/rdpUtilities/${meeting}/">Back</a>
        `;

        wrapper.innerHTML = output;
    }
}

export function renderEditDocPage(meeting, wrapper, method) {
    let today = new Date();

    if (meeting.toLowerCase() === 'bishopric') {
        if (today.getDay() != 7) {
            const sun = 7 - today.getDay();
            today = new Date(today.getFullYear(), today.getMonth(), today.getDate() + sun + 1).toISOString().slice(0, 10);
        }
    } else if (meeting.toLowerCase() === 'wardcouncil') {
        if (today.getDay() != 4) {
            const thurs = 4 - today.getDay();
            today = new Date(today.getFullYear(), today.getMonth(), today.getDate() + thurs + 1).toISOString().slice(0, 10);
        }
    }

    const addItem = () => {
        let li = document.createElement('li');
        li.className = 'update-list-item';
        let move = document.createElement('div');
        move.className = 'move-item';
        move.innerHTML = '<svg width="18" height="24" viewBox="0 0 18 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 7H17" stroke="black" stroke-width="2" stroke-linecap="round"/><path d="M1 17H17" stroke="black" stroke-width="2" stroke-linecap="round"/><path d="M1 12H17" stroke="black" stroke-width="2" stroke-linecap="round"/><path d="M9 0.72111L12.1551 4H5.84489L9 0.72111Z" fill="black" stroke="black"/><path d="M9 23.2789L5.84489 20H12.1551L9 23.2789Z" fill="black" stroke="black"/></svg>';
        let input = document.createElement('textarea');
        let button = document.createElement('button');
        button.setAttribute('onclick', 'this.parentNode.remove()');
        button.textContent = 'X';
        button.className = 'btn btn-red';

        li.appendChild(move)
        li.appendChild(input);
        li.appendChild(button);
        return li;
    }

    let output = `
    <h2>${method} Meeting<h2>
    <h3>Date</h3>
    <input id="date" type="date" value="${today}">
    <h3>Opening Prayer</h3>
    <input id="openingPrayer" value="By invitation">
    <h3>Spiritual Thought</h3>
    <input id="spiritualThought">
    <h3>Handbook Training</h3>
    <input id="training">
    <h3>Agenda</h3>
    <ul id="agenda-list"></ul>
    <button id="agenda-add" class="btn btn-blue">Add Item</button>
    <h3>Closing Prayer</h3>
    <input id="closingPrayer" value="By invitation">
    <button id="submit" class="btn btn-green">Submit</button>
    <a class="btn btn-blue" href="/rdpUtilities/${meeting}" id="back">Back</a>
    `;

    wrapper.innerHTML = output;

    document.querySelector('#agenda-add').addEventListener('click', () => {
        const li = addItem();
        document.querySelector('#agenda-list').appendChild(li);
    });
}

export async function renderNewDocPage(meeting, userData, createDocFunc, wrapper, method) {
    renderEditDocPage(meeting, wrapper, method);

    const addItem = (child, list) => {
        child.childNodes.forEach((child) => {
            if (child.nodeName == 'TEXTAREA') {
                list.push(child.value);
            }
        })
    }

    document.querySelector('#submit').addEventListener('click', async () => {
        const date = document.querySelector('#date').value;
        const openingPrayer = document.querySelector('#openingPrayer').value;
        let spiritualThought = document.querySelector('#spiritualThought').value;
        let training = document.querySelector('#training').value;
        const closingPrayer = document.querySelector('#closingPrayer').value;

        if (!spiritualThought) {
            spiritualThought = 'N/A';
        }
        if (!training) {
            training = 'N/A';
        }

        let agenda = [];
        document.querySelector('#agenda-list').childNodes.forEach((child) => {
            addItem(child, agenda)
        });

        const today = new Date();
        const created = {
            name: `${userData.firstName} ${userData.lastName}`,
            date: today.toISOString().split('T')[0],
        }

        const res = await createDocFunc(date, openingPrayer, spiritualThought, training, agenda, closingPrayer, '', created);
        if (!res.error && res) {
            location = `/rdpUtilities/${meeting}/?date=${date}`;
        }
    });
}

export async function renderUpdateDocPage(meeting, userData, getDocFunc, updateDocFunc, date, wrapper, method) {
    renderEditDocPage(meeting, wrapper, method);
    const doc = await getDocFunc(date);

    const addItem = (element, list) => {
        list.forEach((item) => {
            let li = document.createElement('li');
            li.className = 'update-list-item';
            let move = document.createElement('div');
            move.className = 'move-item';
            move.innerHTML = '<svg width="18" height="24" viewBox="0 0 18 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 7H17" stroke="black" stroke-width="2" stroke-linecap="round"/><path d="M1 17H17" stroke="black" stroke-width="2" stroke-linecap="round"/><path d="M1 12H17" stroke="black" stroke-width="2" stroke-linecap="round"/><path d="M9 0.72111L12.1551 4H5.84489L9 0.72111Z" fill="black" stroke="black"/><path d="M9 23.2789L5.84489 20H12.1551L9 23.2789Z" fill="black" stroke="black"/></svg>';

            let input = document.createElement('textarea');
            input.value = item;

            let button = document.createElement('button');
            button.setAttribute('onclick', 'this.parentNode.remove()');
            button.textContent = 'X';
            button.className = 'btn btn-red'

            li.appendChild(move);
            li.appendChild(input);
            li.appendChild(button);

            element.appendChild(li);
        })
    }

    document.querySelector('#date').value = doc[0].date;
    document.querySelector('#openingPrayer').value = doc[0].openingPrayer;
    document.querySelector('#spiritualThought').value = doc[0].spiritualThought;
    document.querySelector('#training').value = doc[0].training;
    document.querySelector('#closingPrayer').value = doc[0].closingPrayer;
    document.querySelector('#back').href = `/rdpUtilities/${meeting}/?date=${doc[0].date}`;

    addItem(document.querySelector('#agenda-list'), doc[0].agenda);

    document.querySelector('#submit').addEventListener('click', async () => {

        const addItem = (child, list) => {
            child.childNodes.forEach((child) => {
                if (child.nodeName == 'TEXTAREA') {
                    list.push(child.value);
                }
            });
        }

        const date = document.querySelector('#date').value;
        const openingPrayer = document.querySelector('#openingPrayer').value;
        let spiritualThought = document.querySelector('#spiritualThought').value;
        let training = document.querySelector('#training').value;
        const closingPrayer = document.querySelector('#closingPrayer').value;

        let agenda = []
        document.querySelector('#agenda-list').childNodes.forEach((child) => {
            addItem(child, agenda);
        });

        const today = new Date();
        const updated = {
            name: `${userData.firstName} ${userData.lastName}`,
            date: today.toISOString().split('T')[0],
        }

        const update = doc[0].updatedBy;
        update.push(updated);


        const res = await updateDocFunc(date, openingPrayer, spiritualThought, training, agenda, closingPrayer, '', update);
        if (!res.error && res) {
            location = `/rdpUtilities/${meeting}/?date=${date}`;
        }
    });
}

export async function deleteDoc(meeting, deleteDocFunc, date, wrapper) {
    document.querySelector('#delete').addEventListener('click', async () => {
        let deleteDoc = document.createElement('div');
        deleteDoc.id = 'doc-delete';

        let deleteWrapper = document.createElement('div');
        deleteWrapper.id = 'doc-delete-wrapper';

        let confirm = document.createElement('p');
        confirm.textContent = 'Are you sure you want to delete this document?';
        confirm.id = 'delete-warning';

        let confirmBtn = document.createElement('button');
        confirmBtn.textContent = 'Confirm';
        confirmBtn.className = 'btn btn-red';

        let cancelBtn = document.createElement('button');
        cancelBtn.textContent = 'Cancel';
        cancelBtn.className = 'btn btn-blue';

        deleteWrapper.appendChild(confirm);
        deleteWrapper.appendChild(confirmBtn);
        deleteWrapper.appendChild(cancelBtn);

        deleteDoc.appendChild(deleteWrapper);

        wrapper.appendChild(deleteDoc);

        confirmBtn.onclick = async () => {
            const res = await deleteDocFunc(date);
            location = `/rdpUtilities/${meeting}/`;
        }

        cancelBtn.onclick = () => {
            wrapper.removeChild(deleteDoc);
        }
    });
}

export async function renderSacrament(getDocFunc, date, wrapper) {
    const docDate = new Date(date);
    document.title += ` - ${docDate.getDate()} ${docDate.toLocaleString('default', { month: 'short' })} ${docDate.getFullYear()}`;

    const doc = await getDocFunc(date);
    if (doc.length > 0) {

        const printItems = (items) => {
            let out = '<p>';
            items.forEach((item) => {
                out += `${item} <br>`;
            });
            out = `${out.substring(0, out.length - 4)}</p>`;
            return out;
        }

        const printList = (list) => {
            let out = '<ul>';
            list.forEach((item) => {
                out += `<li>${item}</li>`;
            });
            out += `</ul>`;
            return out;
        }

        const printSacList = (list) => {
            let out = '';
            list.forEach((item) => {
                if (item.name == '') {
                    out += ` <div><hi>${item.item}</hi>`;
                } else {
                    out += `<div><hi>${item.item}:</hi> <pi>${item.name}</pi></div>`;
                }
            });
            return out;
        }

        const deleteDoc = () => {
            return '<button id="delete" class="btn btn-red no-print">Delete Document</button>';
        }

        let output = '';

        output += `
        <div id='print'>
        <table class="print-font">
            <tr>
                <td colspan=2>
                    <h2>Roodepoort Ward Sacrament Meeting - Agenda</h2>
                </td>
            </tr>
            <tr>
                <td>
                    <hi>Conducting:</hi>
                    <pi>${doc[0].conducting}</pi>
                </td>
                <td>
                    <hi>Date:</hi>
                    <pi>${docDate.getDate()} ${docDate.toLocaleString('default', { month: 'long' })} ${docDate.getFullYear()}</pi>
                </td>
            </tr>
            <tr>
                <td colspan=2>
                    <h>Presiding:</h>
                </td>
            </tr>
            <tr>
                <td colspan=2>
                    <p>Greetings and Welcome (new members and visitors)</p>
                </td>
            </tr>
            <tr>
                <td colspan=2>
                    <h>Acknowledge Visiting Authorities:</h>
                </td>
            </tr>
            <tr>
                <td colspan=2>
                    <h3>Announcements:</h3>
                    ${printItems(doc[0].announcements)}
                </td>
            </tr>
            <tr>
                <td>
                    <hi>Opening Hymn:</hi>
                    <pi>${doc[0].hymns.openingHymn}</pi>
                </td>
                <td>
                    <hi>Invocation:</hi>
                    <pi>${doc[0].openingPrayer}</pi>
                </td>
            </tr>
            <tr>
                <td>
                    <h>Ward Business</h>
                </td>
                <td>
                    <h>Name</h>
                </td>
            </tr>
            <tr>
                <td>
                    <h>Releases</h>
                    <p>"We have released [name] as [position] and propse that he/she be given a vote of thanks for his/her service. All those who wish to wxpress their appreciation may do so by raising the right hand"<br>
                    Or<br>
                    "We have released the following individuals: [list names and positions]. We propose that they may be given a vote of thanks for their service. All those that wish to express their appreciation may do so by raising the right hand."</p>
                </td>
                <td>
                    ${printList(doc[0].wardBusiness.releases)}
                </td>
            </tr>
            <tr>
                <td>
                    <h>Sustaining's:</h>
                    <p>(Members should be asked to please stand and remain standing as their names and positions are presented to the congregation.)<br>
                    "We have called [name] as [position] and propose that he/she be sustained..."<br>
                    or<br>
                    "We have called the following individuals: [list names and positions]. We propose that they be sustained."</p>
                </td>
                <td>
                    ${printList(doc[0].wardBusiness.sustainings)}
                </td>
            </tr>
            <tr>
                <td>
                    <h>Other (baby blessings/confirmations):</h>
                </td>
                <td>
                    ${printList(doc[0].wardBusiness.other)}
                </td>
            </tr>
            <tr>
                <td colspan=2>
                    <hi>Sacrament Hymn:</hi>
                    <pi>${doc[0].hymns.sacramentHymn}</pi>
                </td>
            </tr>
            <tr>
                <td colspan=2>
                    <h>Sacrament Program</h>
                </td>
            </tr>
            <tr>
                <td colspan=2>
                    ${printSacList(doc[0].program)}
                </td>
            </tr>
            <tr>
                <td>
                    <hi>Closing Hymn:</hi>
                    <pi>${doc[0].hymns.closingHymn}</pi>
                </td>
                <td>
                    <hi>Benediction:</hi>
                    <pi>${doc[0].closingPrayer}</pi>
                </td>
            </tr>
        </table>
        </div>
        <a class="btn btn-green no-print" href="/rdpUtilities/sacrament/?date=${doc[0].date}&update=true">Update Document</a>
        ${deleteDoc()}
        <button class="btn btn-blue no-print" onclick="window.print()">Print Document</button>
        <a class="btn btn-blue no-print" href="/rdpUtilities/sacrament">Back<a>`;

        wrapper.innerHTML = output;
    }
}

export async function renderEditSacrament(wrapper, method) {
    let today = new Date();

    if (today.getDay() != 7) {
        const sun = 7 - today.getDay();
        today = new Date(today.getFullYear(), today.getMonth(), today.getDate() + sun + 1).toISOString().slice(0, 10);
    }

    const hymns = await getHymns();
    const addItem = () => {
        let li = document.createElement('li');
        li.className = 'update-list-item';
        let move = document.createElement('div');
        move.className = 'move-item';
        move.innerHTML = '<svg width="18" height="24" viewBox="0 0 18 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 7H17" stroke="black" stroke-width="2" stroke-linecap="round"/><path d="M1 17H17" stroke="black" stroke-width="2" stroke-linecap="round"/><path d="M1 12H17" stroke="black" stroke-width="2" stroke-linecap="round"/><path d="M9 0.72111L12.1551 4H5.84489L9 0.72111Z" fill="black" stroke="black"/><path d="M9 23.2789L5.84489 20H12.1551L9 23.2789Z" fill="black" stroke="black"/></svg>';
        let input = document.createElement('textarea');
        let button = document.createElement('button');
        button.setAttribute('onclick', 'this.parentNode.remove()');
        button.textContent = 'X';
        button.className = 'btn btn-red';

        li.appendChild(move)
        li.appendChild(input);
        li.appendChild(button);
        return li;
    }

    const addSacItem = () => {
        let li = document.createElement('li');
        li.className = 'update-sac-item';
        let move = document.createElement('div');
        move.className = 'move-item';
        move.innerHTML = '<svg width="18" height="24" viewBox="0 0 18 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 7H17" stroke="black" stroke-width="2" stroke-linecap="round"/><path d="M1 17H17" stroke="black" stroke-width="2" stroke-linecap="round"/><path d="M1 12H17" stroke="black" stroke-width="2" stroke-linecap="round"/><path d="M9 0.72111L12.1551 4H5.84489L9 0.72111Z" fill="black" stroke="black"/><path d="M9 23.2789L5.84489 20H12.1551L9 23.2789Z" fill="black" stroke="black"/></svg>';

        let itemLab = document.createElement('h4');
        itemLab.textContent = 'Item';
        let item = document.createElement('input');
        item.id = "sac-prog-item";

        let nameLab = document.createElement('h4');
        nameLab.textContent = 'Name';
        let name = document.createElement('input');
        name.id = "sac-prog-name";

        let button = document.createElement('button');
        button.setAttribute('onclick', 'this.parentNode.remove()');
        button.textContent = 'X';
        button.className = 'btn btn-red'

        li.appendChild(move);

        li.appendChild(itemLab);
        li.appendChild(item);
        li.appendChild(nameLab);
        li.appendChild(name);
        li.appendChild(button);

        return li;
    }

    let output = `
    <h2>${method} Meeting</h2>
    <h3>Date</h3>
    <input id="date" type="date" value="${today}">
    <h3>Conducting</h3>
    <input id="conducting">
    <h3>Announcements:</h3>
    <ul id="announce-list"></ul>
    <button id="announce-add" class="btn btn-blue">Add Item</button>
    <h3>Opening Hymn:</h3>
    <input id="openingHymn">
    <div id="openingHymnHint" class="drp-list" style="display: none"></div>
    <h3>Invocation</h3>
    <input id="openingPrayer">
    <h3>Ward Business</h3>
    <h3>Releases:</h3>
    <ul id="release-list"></ul>
    <button id="release-add" class="btn btn-blue">Add Item</button>
    <h3>Sustainings:</h3>
    <ul id="sustain-list"></ul>
    <button id="sustain-add" class="btn btn-blue">Add Item</button>
    <h3>Other:</h3>
    <ul id="other-list"></ul>
    <button id="other-add" class="btn btn-blue">Add Item</button>
    <h3>Sacrament Hymn</h3>
    <input id="sacramentHymn">
    <div id="sacramentHymnHint" class="drp-list" style="display: none"></div>
    <h3>Sacrament Program</h3>
    <ul id="sac-list"></ul>
    <button id="sac-add" class="btn btn-blue">Add Item</button>
    <h3>Closing Hymn</h3>
    <input id="closingHymn">
    <div id="closingHymnHint" class="drp-list" style="display: none"></div>
    <h3>Benediction</h3>
    <input id="closingPrayer">
    <button class="btn btn-green" id="submit">Submit</button>
    <a class="btn btn-blue" href="/rdpUtilities/sacrament/" id="back">Back</a>
    `;

    wrapper.innerHTML = output;

    const setHymn = (event, hint) => {
        hint.innerHTML = '';
        hint.setAttribute('style', 'display: block');

        hymns.forEach((hymn) => {
            if (hymn.number.includes(event.target.value)) {
                let button = document.createElement('button');
                button.className = 'btn btn-blue';
                button.textContent = `${hymn.number} ${hymn.title}`;
                button.addEventListener('click', () => {
                    event.target.value = button.textContent;
                });

                hint.appendChild(button);
            }
        })
    }

    document.querySelector('#openingHymn').addEventListener('input', (event) => {
        const hint = document.querySelector('#openingHymnHint');
        setHymn(event, hint);
    });

    document.querySelector('#sacramentHymn').addEventListener('input', (event) => {
        const hint = document.querySelector('#sacramentHymnHint');
        setHymn(event, hint);
    });

    document.querySelector('#closingHymn').addEventListener('input', (event) => {
        const hint = document.querySelector('#closingHymnHint');
        setHymn(event, hint);
    });

    document.addEventListener('click', (event) => {
        if (event.target.id !== 'openingHymn' ||
            event.target.id !== 'openingHymnHint' ||
            event.target.id !== 'sacramentHymn' ||
            event.target.id !== 'sacramentHymnHint' ||
            event.target.id !== 'closingHymn' ||
            event.target.id !== 'closingHymnHint'
        ) {
            document.querySelectorAll('.drp-list').forEach(hint => {
                hint.innerHTML = '';
                hint.setAttribute('style', 'display: none');
            });
        }
    });

    document.querySelector('#announce-add').addEventListener('click', () => {
        const li = addItem();

        document.querySelector('#announce-list').appendChild(li);
    });
    document.querySelector('#release-add').addEventListener('click', () => {
        const li = addItem();
        document.querySelector('#release-list').appendChild(li);
    });
    document.querySelector('#sustain-add').addEventListener('click', () => {
        const li = addItem();
        document.querySelector('#sustain-list').appendChild(li);
    });
    document.querySelector('#other-add').addEventListener('click', () => {
        const li = addItem();
        document.querySelector('#other-list').appendChild(li);
    });
    document.querySelector('#sac-add').addEventListener('click', () => {
        const li = addSacItem();
        document.querySelector('#sac-list').appendChild(li);
    });
}

export async function renderNewSacrament(createDocFunc, wrapper, method) {
    renderEditSacrament(wrapper, method);

    const addItem = (child, list) => {
        child.childNodes.forEach((child) => {
            if (child.nodeName == 'TEXTAREA') {
                list.push(child.value);
            }
        })
    }
    setTimeout(() => {
        document.querySelector('#submit').addEventListener('click', async () => {
            const date = document.querySelector('#date').value;
            const conducting = document.querySelector('#conducting').value;
            const openingHymn = document.querySelector('#openingHymn').value;
            const openingPrayer = document.querySelector('#openingPrayer').value;
            const sacramentHymn = document.querySelector('#sacramentHymn').value;
            const closingHymn = document.querySelector('#closingHymn').value;
            const closingPrayer = document.querySelector('#closingPrayer').value;

            const announcements = [];
            document.querySelector('#announce-list').childNodes.forEach((child) => {
                addItem(child, announcements);
            });
            const releases = [];
            document.querySelector('#release-list').childNodes.forEach((child) => {
                addItem(child, releases);
            });
            const sustainings = [];
            document.querySelector('#sustain-list').childNodes.forEach((child) => {
                addItem(child, sustainings);
            });
            const other = [];
            document.querySelector('#other-list').childNodes.forEach((child) => {
                addItem(child, other);
            });

            const program = [];
            document.querySelector('#sac-list').childNodes.forEach((child) => {
                let item = {
                    item: '',
                    name: ''
                };
                child.childNodes.forEach((child) => {
                    if (child.id == 'sac-prog-item') item.item = child.value;
                    if (child.id == 'sac-prog-name') item.name = child.value;
                });
                program.push(item);
            });

            const res = await createDocFunc(date, conducting, announcements, openingPrayer, openingHymn, sacramentHymn, closingHymn, releases, sustainings, other, program, closingPrayer);
            if (!res.error && res) {
                location = `/rdpUtilities/sacrament/?date=${date}`;
            }
        });
    }, 500);
}

export async function renderUpdateSacrament(getDocFunc, updateDocFunc, date, wrapper, method) {
    renderEditSacrament(wrapper, method);
    const doc = await getDocFunc(date);

    const addItem = (element, list) => {
        list.forEach((item) => {
            let li = document.createElement('li');
            li.className = 'update-list-item';
            let move = document.createElement('div');
            move.className = 'move-item';
            move.innerHTML = '<svg width="18" height="24" viewBox="0 0 18 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 7H17" stroke="black" stroke-width="2" stroke-linecap="round"/><path d="M1 17H17" stroke="black" stroke-width="2" stroke-linecap="round"/><path d="M1 12H17" stroke="black" stroke-width="2" stroke-linecap="round"/><path d="M9 0.72111L12.1551 4H5.84489L9 0.72111Z" fill="black" stroke="black"/><path d="M9 23.2789L5.84489 20H12.1551L9 23.2789Z" fill="black" stroke="black"/></svg>';

            let input = document.createElement('textarea');
            input.value = item;

            let button = document.createElement('button');
            button.setAttribute('onclick', 'this.parentNode.remove()');
            button.textContent = 'X';
            button.className = 'btn btn-red'

            li.appendChild(move);
            li.appendChild(input);
            li.appendChild(button);

            element.appendChild(li);
        });
    }

    const addSacItem = (element, list) => {
        list.forEach((sacItem) => {
            let li = document.createElement('li');
            li.className = 'update-sac-item';
            let move = document.createElement('div');
            move.className = 'move-item';
            move.innerHTML = '<svg width="18" height="24" viewBox="0 0 18 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 7H17" stroke="black" stroke-width="2" stroke-linecap="round"/><path d="M1 17H17" stroke="black" stroke-width="2" stroke-linecap="round"/><path d="M1 12H17" stroke="black" stroke-width="2" stroke-linecap="round"/><path d="M9 0.72111L12.1551 4H5.84489L9 0.72111Z" fill="black" stroke="black"/><path d="M9 23.2789L5.84489 20H12.1551L9 23.2789Z" fill="black" stroke="black"/></svg>';

            let itemLab = document.createElement('h4');
            itemLab.textContent = 'Item';
            let item = document.createElement('input');
            item.id = "sac-prog-item";
            item.value = sacItem.item;

            let nameLab = document.createElement('h4');
            nameLab.textContent = 'Name';
            let name = document.createElement('input');
            name.id = "sac-prog-name";
            name.value = sacItem.name;

            let button = document.createElement('button');
            button.setAttribute('onclick', 'this.parentNode.remove()');
            button.textContent = 'X';
            button.className = 'btn btn-red'

            li.appendChild(move);

            li.appendChild(itemLab);
            li.appendChild(item);
            li.appendChild(nameLab);
            li.appendChild(name);
            li.appendChild(button);

            element.appendChild(li);
        });
    }

    document.querySelector('#date').value = doc[0].date;
    document.querySelector('#conducting').value = doc[0].conducting;
    document.querySelector('#openingHymn').value = doc[0].hymns.openingHymn;
    document.querySelector('#openingPrayer').value = doc[0].openingPrayer;
    document.querySelector('#sacramentHymn').value = doc[0].hymns.sacramentHymn;
    document.querySelector('#closingHymn').value = doc[0].hymns.closingHymn;
    document.querySelector('#closingPrayer').value = doc[0].closingPrayer;

    addItem(document.querySelector('#announce-list'), doc[0].announcements);
    addItem(document.querySelector('#release-list'), doc[0].wardBusiness.releases);
    addItem(document.querySelector('#sustain-list'), doc[0].wardBusiness.sustainings);
    addItem(document.querySelector('#other-list'), doc[0].wardBusiness.other);

    addSacItem(document.querySelector('#sac-list'), doc[0].program);
    document.querySelector('#back').href = `/rdpUtilities/sacrament/?date=${doc[0].date}`;

    document.querySelector('#submit').addEventListener('click', async () => {

        const addItem = (child, list) => {
            child.childNodes.forEach((child) => {
                if (child.nodeName == 'TEXTAREA') {
                    list.push(child.value);
                }
            });
        }

        const date = document.querySelector('#date').value;
        const conducting = document.querySelector('#conducting').value;
        const openingHymn = document.querySelector('#openingHymn').value;
        const openingPrayer = document.querySelector('#openingPrayer').value;
        const sacramentHymn = document.querySelector('#sacramentHymn').value;
        const closingHymn = document.querySelector('#closingHymn').value;
        const closingPrayer = document.querySelector('#closingPrayer').value;

        const announcements = [];
        document.querySelector('#announce-list').childNodes.forEach((child) => {
            addItem(child, announcements);
        });
        const releases = [];
        document.querySelector('#release-list').childNodes.forEach((child) => {
            addItem(child, releases);
        });
        const sustainings = [];
        document.querySelector('#sustain-list').childNodes.forEach((child) => {
            addItem(child, sustainings);
        });
        const other = [];
        document.querySelector('#other-list').childNodes.forEach((child) => {
            addItem(child, other);
        });

        const program = [];
        document.querySelector('#sac-list').childNodes.forEach((child) => {
            let item = {
                item: '',
                name: ''
            };
            child.childNodes.forEach((child) => {
                if (child.id == 'sac-prog-item') item.item = child.value;
                if (child.id == 'sac-prog-name') item.name = child.value;
            });
            program.push(item);
        });

        // console.log(announcements);
        const res = await updateDocFunc(date, conducting, announcements, openingPrayer, openingHymn, sacramentHymn, closingHymn, releases, sustainings, other, program, closingPrayer);
        if (!res.error && res) {
            location = `/rdpUtilities/sacrament/?date=${date}`;
        }
    })
}

export async function renderAssignPage(userData, wrapper) {
    const allAssignments = await getAllAssignments();
    const allUsers = await getAllUsers();
    allUsers.sort((a, b) => {
        if (a.lastName > b.lastName) {
            return 1
        } else if (a.lastName == b.lastName && a.firstName > b.firstName) {
            return 1
        } else {
            return -1;
        }
    });

    const userAssignments = [];
    const otherAssignments = [];
    allAssignments.forEach((assignment) => {
        if (assignment.userId === userData._id) {
            userAssignments.push(assignment);
        } else {
            allUsers.forEach(user => {
                if (user._id === assignment.userId) {
                    otherAssignments.push({
                        user: `${user.firstName} ${user.lastName}`,
                        _id: assignment._id,
                        userId: assignment.userId,
                        assignment: assignment.assignment,
                        completed: assignment.completed,
                        dueDate: assignment.dueDate
                    });
                    return;
                }
            })
        }
    });

    let output = `<h2>${userData.firstName} ${userData.lastName} Assignments</h2>`
    userAssignments.forEach(assignment => {
        output += `<div class="assignment"><input class="assignment-check" type="checkbox" data-id="${assignment._id}" data-userId="${assignment.userId}" data-assignment="${assignment.assignment}" data-duedate="${assignment.dueDate}"`;
        if (assignment.completed) {
            output += 'checked';
        }
        output += `><p>${assignment.assignment}</p>`;
        if (userData.level >= BISHOP) {
            output += `<button class="btn btn-red assignment-delete" data-id="${assignment._id}">X</button>`;
        }
        output += `</div>`;
    });

    if (userData.level >= BISHOP) {
        if (otherAssignments.length > 0) {
            output += `<h2>Other Assignments</h2>`;
            otherAssignments.forEach(assignment => {
                output += `<div class="assignment"><input class="assignment-check" type="checkbox" data-id="${assignment._id}" data-userId="${assignment.userId}" data-assignment="${assignment.assignment}" data-duedate="${assignment.dueDate}"`;
                if (assignment.completed) {
                    output += 'checked';
                }
                output += `><p>${assignment.user}-${assignment.assignment}</p><button class="btn btn-red assignment-delete" data-id="${assignment._id}">X</button></div>`;
            })
        }

        output += `<a href="/rdpUtilities/assignments/?new=true" class="btn btn-green">Create Assignment</a>
        <a href="/rdpUtilities/dashboard" class="btn btn-blue">Back</a>`;
    }

    wrapper.innerHTML = output;

    document.querySelectorAll('.assignment-check').forEach(element => {

        element.addEventListener('click', async (event) => {
            const res = await updateAssignment(event.target.dataset.id, event.target.dataset.userid, event.target.dataset.assignment, event.target.checked, event.target.dataset.duedate);
        });
    });

    document.querySelectorAll('.assignment-delete').forEach(element => {
        element.addEventListener('click', async (event) => {
            const res = await deleteAssignment(event.target.dataset.id);
            location = '/rdpUtilities/assignments';
        });
    });
}

export async function renderNewAssign(wrapper) {
    const allUsers = await getAllUsers();
    allUsers.sort((a, b) => {
        if (a.lastName > b.lastName) {
            return 1
        } else if (a.lastName == b.lastName && a.firstName > b.firstName) {
            return 1
        } else {
            return -1;
        }
    });

    let today = new Date();
    today = new Date(today.getFullYear(), today.getMonth(), today.getDate()).toISOString().slice(0, 10);

    const selectUser = () => {
        let output = '';
        allUsers.forEach(user => {
            output += `<option value="${user._id}">${user.firstName} ${user.lastName}</option>`;
        });
        return output;
    }

    let output = `
    <h2>New Assignment</h2>
    <h3 class="form-warning"></h3>
    <h3>Name:</h3>
    <select id="user">
        ${selectUser()}
    </select>
    <h3>Description:</h3>
    <input type="text" id="description">
    <h3>Due Date:</h3>
    <input type="date" id="dueDate" value="${today}">

    <button id="create" class="btn btn-green">Create Assignment</button>
    <a href="/rdpUtilities/assignments" class="btn btn-blue">Back</a>
    `;

    wrapper.innerHTML = output;

    document.querySelector('#create').addEventListener('click', async () => {
        document.querySelector('.form-warning').textContent = '';
        const user = document.querySelector('#user').value;
        const assignment = document.querySelector('#description').value;
        const dueDate = document.querySelector('#dueDate').value;

        const res = await createAssignment(user, assignment, false, dueDate);

        if (res.error) {
            document.querySelector('.form-warning').textContent = res.error;
        } else {
            location = '/rdpUtilities/assignments';
        }
    });
}

export async function renderAllUsers(userData, wrapper) {
    if (userData.level < BISHOP) {
        location = '/rdpUtilities/restricted';
    } else {
        const allUsers = await getAllUsers();

        const setUserData = (user) => {
            let firstName = document.querySelector('#firstName');
            let lastName = document.querySelector('#lastName');
            let username = document.querySelector('#username');
            let email = document.querySelector('#email');
            let level = document.querySelector('#level');
            let update = document.querySelector('#update');

            if (!user) {
                firstName.value = '';
                firstName.dataset.id = '';
                lastName.value = '';
                username.value = '';
                email.value = '';
                level.value = '';
                update.setAttribute('style', 'display: none');
            } else {
                firstName.value = user.firstName;
                firstName.dataset.id = user._id;
                lastName.value = user.lastName;
                username.value = user.username;
                email.value = user.email;
                level.value = user.level;

                update.setAttribute('style', 'display: block');
            }
        }

        const showList = (input, list, btn, event) => {
            list.innerHTML = '';

            const show = () => {
                const addUser = (user) => {
                    let button = document.createElement('button');
                    button.className = 'btn btn-blue';
                    button.textContent = `${user.firstName} ${user.lastName}`;
                    button.addEventListener('click', () => {
                        input.value = button.textContent;
                        setUserData(user);
                    });

                    list.appendChild(button);
                }

                allUsers.forEach(user => {
                    if (input.value != '') {
                        if (user.firstName.toLowerCase().includes(input.value.toLowerCase()) || user.lastName.toLowerCase().includes(input.value.toLowerCase())) {
                            addUser(user);
                        }
                    } else {
                        addUser(user);
                    }
                });
            }

            if (event == 'type') {
                list.setAttribute('style', 'display: block');
                btn.innerHTML = '&#x245';
                show();
            } else {
                if (list.getAttribute('style') === 'display: none') {
                    list.setAttribute('style', 'display: block');
                    btn.innerHTML = '&#x245';
                    show();
                } else {
                    list.setAttribute('style', 'display: none');
                    btn.innerHTML = 'V';
                }
            }
        }


        let output = `<h2>Name</h2>
            <div style="margin-bottom: 30px">
                <input id="user" class="">
                <button id="show-list">V</button>
                <div class="drp-list"></div>
            </div>
            
            <h3>First Name</h3>
            <input id="firstName">
            <h3>Last Name</h3>
            <input id="lastName">
            <h3>Username</h3>
            <input id="username">
            <h3>Email</h3>
            <input id="email">
            <h3>Level</h3>
            <input id="level">
            <button class="btn btn-green" id="update" style="display: none">Update</button>
            <a href="/rdpUtilities/profile" class="btn btn-blue">Back</a>`;

        wrapper.innerHTML = output;

        const name = document.querySelector('#user');
        const showBtn = document.querySelector('#show-list');
        const show = document.querySelector('.drp-list');


        showBtn.addEventListener('click', () => {
            showList(name, show, showBtn, 'button');
        });

        name.addEventListener('input', () => {
            showList(name, show, showBtn, 'type');
            setUserData();
        });

        document.addEventListener('click', (event) => {
            if (event.target !== name && event.target.id !== 'show-list' && event.target !== show && event.target.id !== 'update') {
                show.innerHTML = '';
                show.setAttribute('style', 'display: none');
                showBtn.textContent = 'V';
            }
        });

        document.querySelector('#update').addEventListener('click', async () => {
            const firstName = document.querySelector('#firstName');
            const lastName = document.querySelector('#lastName');
            const username = document.querySelector('#username');
            const email = document.querySelector('#email');
            const level = document.querySelector('#level');
            const id = firstName.dataset.id;

            console.log(id, firstName.value, lastName.value, username.value, email.value, level.value);
            const res = await updateUser(id, firstName.value, lastName.value, username.value, email.value, level.value);

            if (!res.error) {
                location = `/rdpUtilities/profile/`;
            }
        });
    }
}

export async function renderYouth(userData, wrapper) {
    let output = `<table class="youth-table">
    <thead>

        <tr>
            <th colspan="7">
                <h2>Youth Mutual Activities - Jul - Dec 2023</h2>
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan="2" class="date">
                <h3>Date</h3>
            </td>
            <td colspan="3">
                <h3>Young Women</h3>
            </td>
            <td colspan="3">
                <h3>Young Men</h3>
            </td>
        </tr>
        <tr>
            <td class="who">
                <h3>Who</h3>
            </td>
            <td class="what">
                <h3>What</h3>
            </td>
            <td class="res">
                <h3>Res</h3>
            </td>
            <td class="who">
                <h3>Who</h3>
            </td>
            <td class="what">
                <h3>What</h3>
            </td>
            <td class="res">
                <h3>Res</h3>
            </td>
        </tr>
    `;

    const activities = await getAllYouthActivities();
    activities.forEach((activity) => {
        output += `
        <tr onclick="window.location='/rdpUtilities/youth/?date=${activity.date}';">
            <td class="date">
                <p>${activity.date}</p>
            </td>`;
        if (activity.combined) {
            output += `<td>
                <p>${activity.activity.who}</p>
            </td>
            <td colspan="4">
                <p>${activity.activity.what}</p>
            </td>
            <td>
                <p>${activity.activity.res}</p>
            </td>`;
        } else {
            output += `
            <td class="who">
                <p>${activity.activity.yw.who}</p>
            </td>
            <td class="what">
                <p>${activity.activity.yw.what}</p>
            </td>
            <td class="res">
                <p>${activity.activity.yw.res}</p>
            </td>
            <td class="who">
                <p>${activity.activity.ym.who}</p>
            </td>
            <td class="what">
                <p>${activity.activity.ym.what}</p>
            </td>
            <td class="res">
                <p>${activity.activity.ym.res}</p>
            </td>`;
        }

        // if (userData.level >= BISHOPRIC) {
        //     output += `
        //     <td>
        //         <a href="/rdpUtilities/youth/?date=${activity.date}&update=true" class="btn btn-green">&#10227;</a>
        //         <a href="/rdpUtilities/youth/?date=${activity.date}&update=true" class="btn btn-red">&#128465;</a>
        //     </td>`;
        // }
        output += `</tr>`;
    })

    output += `</tbody></table>`;
    if (userData.level >= BISHOPRIC) {
        output += `<a href="/rdpUtilities/youth/?new=true" class="btn btn-green">New</a>`;
    }
    output += `<a href="/rdpUtilities/dashboard" class="btn btn-blue">Back</a>`;
    wrapper.innerHTML = output;
}

export async function renderNewYouthActivity(wrapper) {
    let today = new Date();

    if (today.getDay() != 2) {
        const tues = 2 - today.getDay();
        today = new Date(today.getFullYear(), today.getMonth(), today.getDate() + tues + 1).toISOString().slice(0, 10);
    }

    let output = `
    <h3>Date:</h3>
    <input type="date" value="${today}">`;

    wrapper.innerHTML = output;
}