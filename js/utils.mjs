// const baseUrl = 'https://rdputilities-api.onrender.com/';
const baseUrl = 'http://156.155.158.70:1830/';

export function getParam(param) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const product = urlParams.get(param);
    return product;
};

export async function getUserData(userId) {
    const res = await fetch(`${baseUrl}users/${userId}`);
    const data = await res.json();
    return data;
};

export function setLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
};

export function getLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
};

export function getCurrentDate() {
    const date = new Date();
    return date;
};

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
};

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
};

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

    const data = await res;
    return data;
};

export async function getAllWardCouncilDocs() {
    const res = await fetch(`${baseUrl}wardCouncil`);
    const data = await res.json();
    return data;
};

export async function getWardCouncilDoc(date) {
    const res = await fetch(`${baseUrl}wardCouncil/${date}`);
    const data = await res.json();
    return data;
};

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
};

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
};

export async function deleteWardCouncilDoc(date) {
    const res = await fetch(`${baseUrl}wardCouncil/${date}`, {
        method: 'DELETE'
    });

    const data = res;
    return data;
};

export async function getAllBishopricDocs() {
    const res = await fetch(`${baseUrl}bishopric`);
    const data = await res.json();
    return data;
};

export async function getBishopricDoc(date) {
    const res = await fetch(`${baseUrl}bishopric/${date}`);
    const data = await res.json();
    return data;
};

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
};

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
};

export async function deleteBishopricDoc(date) {
    const res = await fetch(`${baseUrl}bishopric/${date}`, {
        method: 'DELETE'
    });

    const data = res;
    return data;
};


export async function getAllSacramentDocs() {
    const res = await fetch(`${baseUrl}sacrament`);
    const data = await res.json();
    return data;
};

export async function getSacramentDoc(date) {
    const res = await fetch(`${baseUrl}sacrament/${date}`);
    const data = await res.json();
    return data;
};

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
};

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
};

export async function deleteSacramentDoc(date) {
    const res = await fetch(`${baseUrl}sacrament/${date}`, {
        method: 'DELETE'
    });

    const data = res;
    return data;
};

export function setTitle(firstName, lastName) {
    document.title += ` ${firstName} ${lastName}`;
    document.querySelector('#profile').textContent = `${firstName[0]}${lastName[0]}`;
};

export async function renderBasepage(meeting, userData, getAllFunc, wrapper) {
    const currDate = getCurrentDate();
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
};

export async function renderDocPage(meeting, userData, getDocFunc, date, wrapper) {
    document.title += ` ${date}`;

    const doc = await getDocFunc(date);
    if (doc.length > 0) {
        const docDate = new Date(date);

        let heading = document.createElement('h2');
        heading.innerHTML = 'THE ROODEPOORT STAKE<br>OF<br>THE CHURCH OF JESUS CHRIST OF LATTER-DAY SAINTS';
        heading.className = 'print-heading print-center print-font';

        let subHeading = document.createElement('h3');
        if (meeting == 'wardCouncil') {
            subHeading.innerHTML = `Roodepoort Ward<br>
        Ward Coucil Meeting Agenda<br>
        7:00pm ${docDate.getDate()} ${docDate.toLocaleString('default', { month: 'long' })} ${docDate.getFullYear()}<br>
        Attendees: Bishopric, Elders Quorum, Relief Society, Young Woman, Primary`;
        } else if (meeting == 'bishopric') {
            subHeading.innerHTML = `Roodepoort Ward<br>
        Bishopric Meeting Agenda<br>
        8:00am ${docDate.getDate()} ${docDate.toLocaleString('default', { month: 'long' })} ${docDate.getFullYear()}`;
        }
        subHeading.className = 'print-subheading print-center print-font';


        let openCon = document.createElement('div');
        let openLab = document.createElement('h2');
        openLab.textContent = 'Opening Prayer:';
        let openTxt = document.createElement('p');
        openTxt.textContent = doc[0].openingPrayer;

        openCon.appendChild(openLab);
        openCon.appendChild(openTxt);
        openCon.className = 'print-item print-font';

        let spCon = document.createElement('div');
        let spLab = document.createElement('h2');
        spLab.textContent = 'Spiritual Thought:';
        let spTxt = document.createElement('p');
        spTxt.textContent = doc[0].spiritualThought;

        spCon.appendChild(spLab);
        spCon.appendChild(spTxt);
        spCon.className = 'print-item print-font';

        let trainCon = document.createElement('div');
        let trainLab = document.createElement('h2');
        trainLab.textContent = 'Handbook Training:';
        let trainTxt = document.createElement('p');
        trainTxt.textContent = doc[0].training;

        trainCon.appendChild(trainLab);
        trainCon.appendChild(trainTxt);
        trainCon.className = 'print-item print-font';

        let agendaCon = document.createElement('div');
        let agendaLab = document.createElement('h2');
        agendaLab.textContent = 'Agenda:';

        let agendaList = document.createElement('ul');
        agendaList.id = 'agendaList';
        doc[0].agenda.forEach((item) => {
            let agendaItem = document.createElement('li');
            agendaItem.textContent = item;
            agendaList.appendChild(agendaItem);
        });

        agendaCon.appendChild(agendaLab);
        agendaCon.appendChild(agendaList);
        agendaCon.className = 'print-list print-font';

        let closeCon = document.createElement('div');
        let closingLab = document.createElement('h2');
        closingLab.textContent = 'Closing Prayer:';
        let closingTxt = document.createElement('p');
        closingTxt.textContent = doc[0].closingPrayer;

        closeCon.appendChild(closingLab);
        closeCon.appendChild(closingTxt);
        closeCon.className = 'print-item print-font';

        wrapper.appendChild(heading);
        wrapper.appendChild(subHeading);
        wrapper.appendChild(openCon);
        wrapper.appendChild(spCon);
        wrapper.appendChild(trainCon);
        wrapper.appendChild(agendaCon);
        wrapper.appendChild(closeCon);

        let updateBtn = document.createElement('a');
        updateBtn.href = `/rdpUtilities/${meeting}/?date=${date}&update=true`;
        updateBtn.textContent = 'Update document';
        updateBtn.className = 'btn btn-green no-print';

        let delBtn = document.createElement('button');
        delBtn.textContent = 'Delete document';
        delBtn.className = 'btn btn-red no-print';
        delBtn.id = 'delete';


        let printBtn = document.createElement('button');
        printBtn.textContent = 'Print';
        printBtn.className = 'btn btn-blue no-print';
        printBtn.onclick = () => {
            window.print();
        };

        wrapper.appendChild(updateBtn);

        if (userData.level >= 4) {
            wrapper.appendChild(delBtn);
        }
        wrapper.appendChild(printBtn);

    } else {
        let error = document.createElement('h2');
        error.textContent = 'Cannot find document';

        wrapper.appendChild(error);
    }

    let back = document.createElement('a');
    back.href = `/rdpUtilities/${meeting}/`;
    back.textContent = 'Back';
    back.className = 'btn btn-blue no-print';

    wrapper.appendChild(back);
};

export function renderEditDocPage(meeting, wrapper, method) {
    let warn = document.createElement('h3');
    warn.className = 'form-warning';
    warn.id = 'message';

    let heading = document.createElement('h2');
    heading.textContent = `${method} meeting`;

    wrapper.appendChild(heading);

    let dateContainer = document.createElement('div');
    dateContainer.className = 'doc-item';

    let dateLab = document.createElement('h3');
    dateLab.textContent = 'Date';

    let dateTxt = document.createElement('input');
    dateTxt.type = 'date';
    dateTxt.id = 'date';

    dateContainer.appendChild(dateLab);
    dateContainer.appendChild(dateTxt);

    let opening = document.createElement('div');
    opening.id = 'op';
    opening.className = 'doc-item';

    let openingLab = document.createElement('h3');
    openingLab.textContent = 'Opening Prayer';

    let openingTxt = document.createElement('input');
    openingTxt.id = 'open';
    openingTxt.value = 'By invitation';

    opening.appendChild(openingLab);
    opening.appendChild(openingTxt);

    let sp = document.createElement('div');
    sp.id = 'sp';
    sp.className = 'doc-item';

    let spLab = document.createElement('h3');
    spLab.textContent = 'Spiritual Thought';

    let spTxt = document.createElement('input');
    spTxt.id = 'st';

    sp.appendChild(spLab);
    sp.appendChild(spTxt);

    let train = document.createElement('div');
    train.id = 'train';
    train.className = 'doc-item';

    let trainLab = document.createElement('h3');
    trainLab.textContent = 'Handbook Training';

    let trainTxt = document.createElement('input');
    trainTxt.id = 'training';
    train.appendChild(trainLab);
    train.appendChild(trainTxt);

    let agenda = document.createElement('div');
    agenda.id = 'agenda';
    agenda.className = 'doc-item';

    let agendaLab = document.createElement('h3');
    agendaLab.textContent = 'Agenda';

    let addItem = document.createElement('button');
    addItem.textContent = 'Add item';
    addItem.id = 'addItem';
    addItem.className = 'btn btn-blue';

    let agendaList = document.createElement('ul');
    agendaList.id = 'agendaList';

    agenda.appendChild(agendaLab);
    agenda.appendChild(addItem);
    agenda.appendChild(agendaList);

    let closing = document.createElement('div');
    closing.id = 'cp';
    closing.className = 'doc-item';

    let closingLab = document.createElement('h3');
    closingLab.textContent = 'Closing Prayer';

    let closingTxt = document.createElement('input');
    closingTxt.id = 'close';
    closingTxt.value = 'By invitation';

    closing.appendChild(closingLab);
    closing.appendChild(closingTxt);

    wrapper.appendChild(warn);
    wrapper.appendChild(dateContainer);
    wrapper.appendChild(opening);
    wrapper.appendChild(sp);
    wrapper.appendChild(train);
    wrapper.appendChild(agenda);
    wrapper.appendChild(closing);

    let submit = document.createElement('a');
    submit.textContent = 'Submit';
    submit.className = 'btn btn-green';
    submit.id = 'submit';

    let back = document.createElement('a');
    back.href = `/rdpUtilities/${meeting}/`;
    back.textContent = 'Back';
    back.className = 'btn btn-blue';

    wrapper.appendChild(submit);
    wrapper.appendChild(back);

    document.querySelector('#addItem').addEventListener('click', () => {
        let list = document.createElement('li');
        list.className = 'items';

        let item = document.createElement('h3');
        item.textContent = 'Item';
        // let itemIn = document.createElement('input');
        // itemIn.className = 'item';
        let itemIn = document.createElement('textarea');
        itemIn.className = 'item';

        let removeItem = document.createElement('input');
        removeItem.type = 'button';
        removeItem.className = 'removeItem';
        removeItem.value = 'X';

        list.appendChild(item);
        list.appendChild(itemIn);
        list.appendChild(removeItem);
        agendaList.appendChild(list);
        itemIn.focus();

        removeItem.addEventListener('click', () => {
            agendaList.removeChild(list);
        });

    });
};

export async function renderNewDocPage(meeting, createDocFunc, wrapper, method) {
    renderEditDocPage(meeting, wrapper, method);
    document.querySelector('#submit').addEventListener('click', async () => {
        console.log(document.querySelector('#date').value);
        if (document.querySelector('#date').value) {
            console.log('Create new doc');
            let agendaItems = []
            document.querySelectorAll('.item').forEach((input) => {
                agendaItems.push(input.value);
            });

            const date = document.querySelector('#date').value;
            const open = document.querySelector('#open').value;
            let st = document.querySelector('#st').value;
            if (!st) {
                st = 'N/A';
            }
            let train = document.querySelector('#training').value;
            if (!train) {
                train = 'N/A';
            }
            const close = document.querySelector('#close').value;

            const res = await createDocFunc(date, open, st, train, agendaItems, close, '');
            if (!res.error && res) {
                location = `/rdpUtilities/${meeting}/`;
            }
        } else {
            document.querySelector('#message').textContent = 'Please select a date';
        }
    });
};

export async function renderUpdateDocPage(meeting, getDocFunc, updateDocFunc, date, wrapper, method) {
    renderEditDocPage(meeting, wrapper, method);
    const doc = await getDocFunc(date);
    console.log(doc[0]);
    document.querySelector('#date').value = doc[0].date;
    document.querySelector('#open').value = doc[0].openingPrayer;
    document.querySelector('#st').value = doc[0].spiritualThought;
    document.querySelector('#training').value = doc[0].training;

    doc[0].agenda.forEach((item) => {
        let list = document.createElement('li');
        list.className = 'items';

        let itemLab = document.createElement('h3');
        itemLab.textContent = 'Item';
        let itemIn = document.createElement('textarea');
        itemIn.className = 'item';
        itemIn.textContent = item;

        let removeItem = document.createElement('input');
        removeItem.type = 'button';
        removeItem.className = 'removeItem';
        removeItem.value = 'X';

        list.appendChild(itemLab);
        list.appendChild(itemIn);
        list.appendChild(removeItem);
        agendaList.appendChild(list);

        removeItem.addEventListener('click', () => {
            agendaList.removeChild(list);
        });

        agenda.appendChild(agendaList);

        document.querySelector('#submit').addEventListener('click', async () => {
            console.log(document.querySelector('#date').value);
            if (document.querySelector('#date').value) {
                console.log('Create new doc');
                let agendaItems = []
                document.querySelectorAll('.item').forEach((input) => {
                    agendaItems.push(input.value);
                });

                const date = document.querySelector('#date').value;
                const open = document.querySelector('#open').value;
                let st = document.querySelector('#st').value;
                if (!st) {
                    st = 'N/A';
                }
                let train = document.querySelector('#training').value;
                if (!train) {
                    train = 'N/A';
                }
                const close = document.querySelector('#close').value;

                const res = await updateDocFunc(date, open, st, train, agendaItems, close, '');
                if (!res.error && res) {
                    location = `/rdpUtilities/${meeting}/`;
                }
            } else {
                document.querySelector('#message').textContent = 'Please select a date';
            }
        });
    });
};

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
};

export async function renderSacrament(userData, getDocFunc, date, wrapper) {
    document.title += ` ${date}`;

    const doc = await getDocFunc(date);
    if (doc.length > 0) {
        console.log(doc);
        const docDate = new Date(date);

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
                out += `<div><hi>${item.item}:</hi> <pi>${item.name}</pi></div>`;
            });
            return out;
        }

        let output = '';

        output += `
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
                    <pi>${doc[0].date}</pi>
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
        <a class="btn btn-green no-print" href="/rdpUtilities/sacrament/?date=${doc[0].date}&update=true">Update</a>
        <button class="btn btn-blue no-print" onclick="window.print()">Print</button>
        <a class="btn btn-blue no-print" href="/rdpUtilities/sacrament" >Back<a>`;

        wrapper.innerHTML = output;
    }
};

export async function renderEditSacrament(wrapper, method) {
    let today = new Date();

    if (today.getDay() != 7) {
        const sun = 7 - today.getDay();
        today = new Date(today.getFullYear(), today.getMonth(), today.getDate() + sun + 1).toISOString().slice(0, 10);
    }

    const addItem = () => {
        let li = document.createElement('li');
        let input = document.createElement('input');
        let button = document.createElement('button');
        button.setAttribute('onclick', 'this.parentNode.remove()');
        button.textContent = 'X';

        li.appendChild(input);
        li.appendChild(button);
        return li;
    }

    const addSacItem = () => {
        let li = document.createElement('li');
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
    <button class="btn btn-blue" id="announce-add">Add Item</button>
    <h3>Opening Hymn:</h3>
    <input id="openingHymn">
    <h3>Invocation</h3>
    <input id="openingPrayer">
    <h3>Ward Business</h3>
    <h3>Releases:</h3>
    <ul id="release-list"></ul>
    <button class="btn btn-blue" id="release-add">Add Item</button>
    <h3>Sustainings:</h3>
    <ul id="sustain-list"></ul>
    <button class="btn btn-blue" id="sustain-add">Add Item</button>
    <h3>Other:</h3>
    <ul id="other-list"></ul>
    <button class="btn btn-blue" id="other-add">Add Item</button>
    <h3>Sacrament Hymn</h3>
    <input id="sacramentHymn">
    <h3>Sacrament Program</h3>
    <ul id="sac-list"></ul>
    <button class="btn btn-blue" id="sac-add">Add Item</button>
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
            if (child.nodeName == 'INPUT') {
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
            let item = {item: '', name: ''};
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
    })
}

export async function renderUpdateSacrament(getDocFunc, updateDocFunc, date, wrapper, method) {
    renderEditSacrament(wrapper, method);
    const doc = await getDocFunc(date);
    console.log(doc[0]);

    document.querySelector('#date').value = doc[0].date;
    document.querySelector('#conduct').value = doc[0].conducting;
    document.querySelector('#openHymn').value = doc[0].hymns.openingHymn;
    document.querySelector('#openPrayer').value = doc[0].openingPrayer;
    document.querySelector('#sacHymn').value = doc[0].hymns.sacramentHymn;
    document.querySelector('#closeHymn').value = doc[0].hymns.closingHymn;
    document.querySelector('#closePrayer').value = doc[0].closingPrayer;
}
