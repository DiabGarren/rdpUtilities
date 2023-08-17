const baseUrl = 'https://rdputilities-api.onrender.com/';
// const baseUrl = 'http://156.155.158.70:1830/';

export function getParam(param) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const product = urlParams.get(param);
    return product;
}

export async function getAllUsers() {
    const res = await fetch(`${baseUrl}users`);
    const data = await res.json();
    return data;
}

export async function getUserData(userId) {
    const res = await fetch(`${baseUrl}users/${userId}`);
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
    const res = await fetch(`${baseUrl}users/login`, {
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
    const res = await fetch(`${baseUrl}users`, {
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
            'level': '1'
        })
    });

    const data = await res.json();
    return data;
}

export async function updateUserData(userId, firstName, lastName, username, email, password, level) {
    const res = await fetch(`${baseUrl}users/${userId}`, {
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

    const data = await res.json();
    return data;
}

export async function getAllWardCouncilDocs() {
    const res = await fetch(`${baseUrl}wardCouncil`);
    const data = await res.json();
    return data;
}

export async function getWardCouncilDoc(date) {
    const res = await fetch(`${baseUrl}wardCouncil/${date}`);
    const data = await res.json();
    return data;
}

export async function createWardCouncilDoc(date, opening, st, train, agenda, closing, notes) {
    const res = await fetch(`${baseUrl}wardCouncil`, {
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
            'notes': notes
        })
    });

    const data = await res.json();
    return data;
}

export async function updateWardCouncilDoc(date, opening, st, train, agenda, closing, notes) {
    const res = await fetch(`${baseUrl}wardCouncil/${date}`, {
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
            'notes': notes
        })
    });

    const data = await res.json();
    return data;
}

export async function deleteWardCouncilDoc(date) {
    const res = await fetch(`${baseUrl}wardCouncil/${date}`, {
        method: 'DELETE'
    });

    const data = await res.json();
    return data;
}

export async function getAllBishopricDocs() {
    const res = await fetch(`${baseUrl}bishopric`);
    const data = await res.json();
    return data;
}

export async function getBishopricDoc(date) {
    const res = await fetch(`${baseUrl}bishopric/${date}`);
    const data = await res.json();
    return data;
}

export async function createBishopricDoc(date, opening, st, train, agenda, closing, notes) {
    const res = await fetch(`${baseUrl}bishopric`, {
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
            'notes': notes
        })
    });

    const data = await res.json();
    return data;
}

export async function updateBishopricDoc(date, opening, st, train, agenda, closing, notes) {
    const res = await fetch(`${baseUrl}bishopric/${date}`, {
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
            'notes': notes
        })
    });

    const data = await res.json();
    return data;
}

export async function deleteBishopricDoc(date) {
    const res = await fetch(`${baseUrl}bishopric/${date}`, {
        method: 'DELETE'
    });

    const data = await res.json();
    return data;
}


export async function getAllSacramentDocs() {
    const res = await fetch(`${baseUrl}sacrament`);
    const data = await res.json();
    return data;
}

export async function getSacramentDoc(date) {
    const res = await fetch(`${baseUrl}sacrament/${date}`);
    const data = await res.json();
    return data;
}

export async function createSacramentDoc(date, conducting, announcements, openingPrayer, openingHymn, sacramentHymn, closingHymn, releases, sustainings, other, program, closingPrayer) {
    const res = await fetch(`${baseUrl}sacrament`, {
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
            'closingPrayer': closingPrayer
        })
    });

    const data = await res.json();
    return data;
}

export async function updateSacramentDoc(date, conducting, announcements, openingPrayer, openingHymn, sacramentHymn, closingHymn, releases, sustainings, other, program, closingPrayer) {
    const res = await fetch(`${baseUrl}sacrament/${date}`, {
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
            'closingPrayer': closingPrayer
        })
    });

    const data = await res.json();
    return data;
}

export async function deleteSacramentDoc(date) {
    const res = await fetch(`${baseUrl}sacrament/${date}`, {
        method: 'DELETE'
    });

    const data = await res.json();
    return data;
}

export async function getAllAssignments() {
    const res = await fetch(`${baseUrl}assignments`);
    const data = await res.json();
    return data;
}

export async function getAssignments(userId) {
    const res = await fetch(`${baseUrl}assignments/${userId}`);
    const data = await res.json();
    return data;
}

export async function createAssignment(userId, assignment, completed) {
    const res = await fetch(`${baseUrl}assignments/`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'userId': userId,
            'assignment': assignment,
            'completed': completed
        })
    });
    const data = await res.json();
    return data;
}

export async function updateAssignment(assignmentId, userId, assignment, completed) {
    const res = await fetch(`${baseUrl}assignments/${assignmentId}`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'userId': userId,
            'assignment': assignment,
            'completed': completed
        })
    });
    const data = await res.json();
    return data;
}

export async function deleteAssignment(assignmentId) {
    const res = await fetch(`${baseUrl}assignments/${assignmentId}`, {
        method: 'DELETE'
    });
    const data = await res.json();
    return data;
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

    if (userData.level >= 3) {
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
        </div>
        <a class="btn btn-green no-print" href="/rdpUtilities/${meeting}/?date=${date}&update=true">Update Document</a>
        <button id="delete" class="btn btn-red no-print">Delete Document</button>
        <button class="btn btn-blue no-print" onclick="window.print()">Print</button>
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
    <a class="btn btn-blue" href="/rdpUtilities/${meeting}">Back</a>
    `;

    wrapper.innerHTML = output;

    document.querySelector('#agenda-add').addEventListener('click', () => {
        const li = addItem();
        document.querySelector('#agenda-list').appendChild(li);
    });
}

export async function renderNewDocPage(meeting, createDocFunc, wrapper, method) {
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

        const res = await createDocFunc(date, openingPrayer, spiritualThought, training, agenda, closingPrayer, '');
        if (!res.error && res) {
            location = `/rdpUtilities/${meeting}/`;
        }
    });
}

export async function renderUpdateDocPage(meeting, getDocFunc, updateDocFunc, date, wrapper, method) {
    renderEditDocPage(meeting, wrapper, method);
    const doc = await getDocFunc(date);
    console.log(doc[0]);

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

        const res = await updateDocFunc(date, openingPrayer, spiritualThought, training, agenda, closingPrayer, '');
        if (!res.error && res) {
            location = `/rdpUtilities/${meeting}/`;
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
            console.log(date);
            const res = await deleteDocFunc(date);
            if (!res.error && res) {
                location = `/rdpUtilities/${meeting}/`;
            }
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
        console.log(doc);

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
            return '<button id="delete" class="btn btn-red no-print">Delete</button>';
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
        <a class="btn btn-green no-print" href="/rdpUtilities/sacrament/?date=${doc[0].date}&update=true">Update</a>
        ${deleteDoc()}
        <button class="btn btn-blue no-print" onclick="window.print()">Print</button>
        <a class="btn btn-blue no-print" href="/rdpUtilities/sacrament" >Back<a>`;

        wrapper.innerHTML = output;
    }
}

export async function renderEditSacrament(wrapper, method) {
    let today = new Date();

    if (today.getDay() != 7) {
        const sun = 7 - today.getDay();
        today = new Date(today.getFullYear(), today.getMonth(), today.getDate() + sun + 1).toISOString().slice(0, 10);
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
    <h3>Sacrament Program</h3>
    <ul id="sac-list"></ul>
    <button id="sac-add" class="btn btn-blue">Add Item</button>
    <h3>Closing Hymn</h3>
    <input id="closingHymn">
    <h3>Benediction</h3>
    <input id="closingPrayer">
    <button class="btn btn-green" id="submit">Submit</button>
    <a class="btn btn-blue" href="/rdpUtilities/sacrament/">Back</a>
    `;

    wrapper.innerHTML = output;
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
            let item = { item: '', name: '' };
            child.childNodes.forEach((child) => {
                if (child.id == 'sac-prog-item') item.item = child.value;
                if (child.id == 'sac-prog-name') item.name = child.value;
            });
            program.push(item);
        });

        const res = await createDocFunc(date, conducting, announcements, openingPrayer, openingHymn, sacramentHymn, closingHymn, releases, sustainings, other, program, closingPrayer);
        if (!res.error && res) {
            location = `/rdpUtilities/sacrament/`;
        }
    });
}

export async function renderUpdateSacrament(getDocFunc, updateDocFunc, date, wrapper, method) {
    renderEditSacrament(wrapper, method);
    const doc = await getDocFunc(date);
    console.log(doc[0]);

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
            let item = { item: '', name: '' };
            child.childNodes.forEach((child) => {
                if (child.id == 'sac-prog-item') item.item = child.value;
                if (child.id == 'sac-prog-name') item.name = child.value;
            });
            program.push(item);
        });

        // console.log(announcements);
        const res = await updateDocFunc(date, conducting, announcements, openingPrayer, openingHymn, sacramentHymn, closingHymn, releases, sustainings, other, program, closingPrayer);
        if (!res.error && res) {
            location = `/rdpUtilities/sacrament/`;
        }
    })
}

export async function renderAssignPage(userData, wrapper) {
    let output = '';
    if (userData.level >= 4) {
        const allAssign = await getAllAssignments();
        const allUsers = await getAllUsers();

        if (allAssign.length == 0) {
            output += '<h2>There are no assignments</h2>';
        } else {
            output += '<h2>All assignments</h2>';
            const assignments = [];
            allAssign.forEach((assignment) => {
                allUsers.forEach((user) => {
                    let active = false;
                    assignments.forEach((item) => {
                        if (item.userId === user._id) {
                            active = true;
                            if (assignment.userId === user._id) {
                                item.assignments.push(assignment);
                            }
                        }
                    });
                    if (!active) {
                        if (assignment.userId === user._id) {
                            assignments.push({ userId: user._id, name: `${user.firstName} ${user.lastName}`, assignments: [assignment] });
                        }
                    }
                });
            });

            // Display current user's assignments first
            for (let i = 0; i < assignments.length; i++) {
                if (assignments[i].userId == userData._id) {
                    let temp = [];
                    temp.push(assignments[0]);
                    assignments[0] = assignments[i];
                    assignments[i] = temp[0];
                }
            }


            assignments.forEach((item) => {
                output += `<h3>${item.name}</h3>`;
                const todo = [];
                const complete = [];
                item.assignments.forEach((assignment) => {
                    output += ``;
                    if (assignment.completed) {
                        complete.push(`<label class="assignment"><input class="assignment-check" type="checkbox" checked data-id="${assignment._id}" data-userId="${assignment.userId}" data-assignment="${assignment.assignment}"><p>${assignment.assignment}</p></label>`);
                    } else {
                        todo.push(`<label class="assignment"><input class="assignment-check" type="checkbox" data-id="${assignment._id}" data-userId="${assignment.userId}" data-assignment="${assignment.assignment}"><p>${assignment.assignment}</p></label>`);
                    }
                    output += ``;
                });
                todo.forEach(item => {
                    output += item;
                });
                complete.forEach(item => {
                    output += item;
                });

            });

        }
    }

    output += '<button id="new-assign" class="btn btn-blue">Create Assignment</button>';

    wrapper.innerHTML = output;

    document.querySelectorAll('.assignment-check').forEach(element => {

        element.addEventListener('click', async (event) => {
            const res = await updateAssignment(event.target.dataset.id, event.target.dataset.userid, event.target.dataset.assignment, event.target.checked);
        });
    })

    // document.querySelector('#new-assign').addEventListener('click', () => {
    //     if (userData.level >= 4) {
    //         output += '<label'
    //     }
    // })
    // wrapper.innerHTML = output;
}