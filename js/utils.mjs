const baseUrl = 'https://rdputilities-api.onrender.com/';
// const baseUrl = 'http://156.155.158.70:1830/';

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

        let heading = document.createElement('h2');
        heading.textContent = 'Roodepoort Ward Sacrament Meeting - Agenda';
        heading.className = 'sac-heading print-font';

        let topCon = document.createElement('div');
        topCon.className = 'sac-top';


        let conductCon = document.createElement('div');
        conductCon.className = 'sac-item print-font';
        let conductLab = document.createElement('h2');
        conductLab.textContent = 'Conducting:';
        let conductTxt = document.createElement('p');
        conductTxt.textContent = doc[0].conducting;

        conductCon.appendChild(conductLab);
        conductCon.appendChild(conductTxt);

        let dateCon = document.createElement('div');
        dateCon.className = 'sac-item print-font';
        let dateLab = document.createElement('h2');
        dateLab.textContent = 'Date:';
        
        let dateTxt = document.createElement('p');
        dateTxt.textContent = `${docDate.getDate()} ${docDate.toLocaleDateString('default', { month: 'long' })} ${docDate.getFullYear()}`;

        dateCon.appendChild(dateLab);
        dateCon.appendChild(dateTxt);

        topCon.appendChild(conductCon);
        topCon.appendChild(dateCon);

        let presidingCon = document.createElement('div');
        presidingCon.className = 'sac-item print-font';
        let presidingLab = document.createElement('h2')
        presidingLab.textContent = 'Presiding:';

        presidingCon.appendChild(presidingLab);

        let greetingCon = document.createElement('div');
        greetingCon.className = 'sac-item print-font';
        let greetingLab = document.createElement('p')
        greetingLab.textContent = 'Greeting and Welcome (new members and visitors)';

        greetingCon.appendChild(greetingLab);


        let authorityCon = document.createElement('div');
        authorityCon.className = 'sac-item print-font';
        let authorityLab = document.createElement('h2')
        authorityLab.textContent = 'Acknowledge Visiting Authorities:';

        authorityCon.appendChild(authorityLab);

        let announceCon = document.createElement('div');
        announceCon.className = 'sac-list print-font';
        let announceLab = document.createElement('h2');
        announceLab.textContent = 'Announcements:';
        
        let announceList = document.createElement('ul');
        doc[0].announcements.forEach((item) => {
            let announceItem = document.createElement('li');
            announceItem.textContent = item;
            announceList.appendChild(announceItem);
            
        });

        announceCon.appendChild(announceLab);
        announceCon.appendChild(announceList);

        let openCon = document.createElement('div');
        openCon.className = 'sac-bus';
        
        let openHymnCon = document.createElement('div');
        openHymnCon.className = 'sac-item print-font';
        let openHymnLab = document.createElement('h2');
        openHymnLab.textContent = 'Opening Hymn:';
        let openHymnTxt = document.createElement('p');
        openHymnTxt.textContent = doc[0].hymns.openingHymn;

        openHymnCon.appendChild(openHymnLab);
        openHymnCon.appendChild(openHymnTxt);

        let openPrayerCon = document.createElement('div');
        openPrayerCon.className = 'sac-item print-font';
        let openPrayerlab = document.createElement('h2');
        openPrayerlab.textContent = 'Invocation:';
        let openPrayerTxt = document.createElement('p');
        openPrayerTxt.textContent = doc[0].openingPrayer;

        openPrayerCon.appendChild(openPrayerlab);
        openPrayerCon.appendChild(openPrayerTxt);

        openCon.appendChild(openHymnCon);
        openCon.appendChild(openPrayerCon);

        let wardBus = document.createElement('div');
        wardBus.className = 'sac-bus';
        let businessLabCon = document.createElement('div');
        businessLabCon.className = 'sac-item print-font';
        let businessLab = document.createElement('h2');
        businessLab.textContent = 'Ward Business';
        businessLabCon.appendChild(businessLab);

        let businessNameCon = document.createElement('div');
        businessNameCon.className = 'sac-item print-font';
        let businessName = document.createElement('h2');
        businessName.textContent = 'Name';

        businessNameCon.appendChild(businessName);

        wardBus.appendChild(businessLabCon);
        wardBus.appendChild(businessNameCon);

        let releaseCon = document.createElement('div');
        let releaseInfo = document.createElement('div');

        let releaseLab = document.createElement('h2');
        releaseLab.textContent = 'Releases:';
        let releaseExp = document.createElement('p');
        releaseExp.innerHTML = `"We have released [name] as [position] and propse that he/she be given a vote of thanks for his/her service. All those who wish to wxpress their appreciation may do so by raising the right hand"<br>
        Or<br>
        "We have released the following individuals: [list names and positions]. We propose that they may be given a vote of thanks for their service. All those that wish to express their appreciation may do so by raising the right hand."`;
        releaseInfo.appendChild(releaseLab);
        releaseInfo.appendChild(releaseExp);

        let releaseList = document.createElement('ul');
        doc[0].wardBusiness.releases.forEach((item) => {
            let releaseTxt = document.createElement('li');
            releaseTxt.textContent = item;
            releaseList.appendChild(releaseTxt);
        });
        releaseCon.appendChild(releaseInfo);
        releaseCon.appendChild(releaseList);

        let sustainCon = document.createElement('div');
        let sustainInfo = document.createElement('div');

        let sustainLab = document.createElement('h2');
        sustainLab.textContent = 'Sustainings:';
        let sustainExp = document.createElement('p');
        sustainExp.innerHTML = `(Members should be asked to please stand and remain standing as their names and positions are presented to the congregation.)<br>
        "We have called [name] as [position] and propose that he/she be sustained..."<br>
        or<br>
        "We have called the following individuals: [list names and positions]. We propose that they be sustained."`;
        sustainInfo.appendChild(sustainLab);
        sustainInfo.appendChild(sustainExp);

        let sustainList = document.createElement('ul');
        doc[0].wardBusiness.sustainings.forEach((item) => {
            let sustainTxt = document.createElement('li');
            sustainTxt.textContent = item;
            sustainList.appendChild(sustainTxt);
        });
        sustainCon.appendChild(sustainInfo);
        sustainCon.appendChild(sustainList);

        let otherCon = document.createElement('div');
        let otherInfo = document.createElement('div');

        let otherLab = document.createElement('h2');
        otherLab.textContent = 'Other:';
        let otherExp = document.createElement('p');
        otherExp.textContent = '(baby blessings/confirmations)';

        otherInfo.appendChild(otherLab);
        otherInfo.appendChild(otherExp);

        let otherList = document.createElement('ul');
        doc[0].wardBusiness.other.forEach((item) => {
            let otherTxt = document.createElement('p');
            otherTxt.textContent = item;
            otherList.appendChild(otherTxt);
        });

        otherCon.appendChild(otherInfo);
        otherCon.appendChild(otherList);

        let sacHymnCon = document.createElement('div');
        let sacHymnLab = document.createElement('h2');
        sacHymnLab.textContent = 'Sacrament Hymn:';
        let sacHymnTxt = document.createElement('p');
        sacHymnTxt.textContent = doc[0].hymns.sacramentHymn;

        sacHymnCon.appendChild(sacHymnLab);
        sacHymnCon.appendChild(sacHymnTxt);

        let sacProgCon = document.createElement('div');
        let sacProgLab = document.createElement('h2');
        sacProgLab.textContent = 'Sacrament Program';
        sacProgCon.appendChild(sacProgLab);

        doc[0].program.forEach((item) => {
            let progLab = document.createElement('h2');
            progLab.textContent = item.substring(0, item.indexOf(":")+1);
            let progTxt = document.createElement('p');
            progTxt.textContent = item.substring(item.indexOf(":")+2);

            sacProgCon.appendChild(progLab);
            sacProgCon.appendChild(progTxt);
        })


        let closeHymnCon = document.createElement('div');
        let closeHymnLab = document.createElement('h2');
        closeHymnLab.textContent = 'Closing Hymn:';
        let closeHymnTxt = document.createElement('p');
        closeHymnTxt.textContent = doc[0].hymns.closingHymn;

        closeHymnCon.appendChild(closeHymnLab);
        closeHymnCon.appendChild(closeHymnTxt);

        let closePrayerCon = document.createElement('div');
        let closePrayerLab = document.createElement('h2');
        closePrayerLab.textContent = 'Benediction:';
        let closePrayerTxt = document.createElement('p');
        closePrayerTxt.textContent = doc[0].closingPrayer;

        closePrayerCon.appendChild(closePrayerLab);
        closePrayerCon.appendChild(closePrayerTxt);

        wrapper.appendChild(heading);
        wrapper.appendChild(topCon);
        wrapper.appendChild(presidingCon);
        wrapper.appendChild(greetingCon);
        wrapper.appendChild(authorityCon);
        wrapper.appendChild(announceCon);
        wrapper.appendChild(openCon);
        wrapper.appendChild(wardBus);
        wrapper.appendChild(releaseCon);
        wrapper.appendChild(sustainCon);
        wrapper.appendChild(otherCon);
        wrapper.appendChild(sacHymnCon);
        wrapper.appendChild(sacProgCon);
        wrapper.appendChild(closeHymnCon);
        wrapper.appendChild(closePrayerCon);


        let print = document.createElement('button');
        print.textContent = 'Print';
        print.className = 'btn btn-blue no-print';
        print.onclick = () => {
            window.print()
        };

        let back = document.createElement('a');
        back.href = `/rdpUtilities/sacrament/`;
        back.textContent = 'Back';
        back.className = 'btn btn-blue no-print';

        wrapper.appendChild(print);
        wrapper.appendChild(back);
    }
};

export async function renderEditSacrament(wrapper, method) {
    let warn = document.createElement('h3');
    warn.className = 'form-warning';
    warn.id = 'message';

    let heading = document.createElement('h2');
    heading.textContent = `${method} meeting`;

    wrapper.appendChild(heading);

    let dateCon = document.createElement('div');
    dateCon.className = 'doc-item';
    let dateLab = document.createElement('h2');
    dateLab.textContent = 'Date:';
    let dateTxt = document.createElement('input');
    dateTxt.type = 'date';
    dateTxt.id = 'date';

    dateCon.appendChild(dateLab);
    dateCon.appendChild(dateTxt);

    let conductCon = document.createElement('div');
    conductCon.className = 'doc-item';
    let conductLab = document.createElement('h2');
    conductLab.textContent = 'Conducting:';
    let conductTxt = document.createElement('input');
    conductTxt.id = 'conduct';

    conductCon.appendChild(conductLab);
    conductCon.appendChild(conductTxt);

    let announceCon = document.createElement('div');
    announceCon.className = 'doc-item';
    let announceLab = document.createElement('h2');
    announceLab.textContent = 'Announcements:';
    let addAnnItem = document.createElement('button');
    addAnnItem.textContent = 'Add item';
    addAnnItem.id = 'addAnnItem';
    addAnnItem.className = 'btn btn-blue';
    let announceList = document.createElement('ul');
    announceList.id = 'announceList';
    
    announceCon.appendChild(announceLab);
    announceCon.appendChild(addAnnItem);
    announceCon.appendChild(announceList);

    let openHymnCon = document.createElement('div');
    openHymnCon.className = 'doc-item';
    let openHymnLab = document.createElement('h2');
    openHymnLab.textContent = 'Opening Hymn:';
    let openHymnTxt = document.createElement('input');
    openHymnTxt.id = 'openHymn';

    openHymnCon.appendChild(openHymnLab);
    openHymnCon.appendChild(openHymnTxt);

    let openPrayerCon = document.createElement('div');
    openPrayerCon.className = 'doc-item';
    let openPrayerlab = document.createElement('h2');
    openPrayerlab.textContent = 'Invocation';
    let openPrayerTxt = document.createElement('input');
    openPrayerTxt.id = 'openPrayer';

    openPrayerCon.appendChild(openPrayerlab);
    openPrayerCon.appendChild(openPrayerTxt);

    let businessCon = document.createElement('div');
    let businessLab = document.createElement('h2');
    businessLab.textContent = 'Ward Business';

    businessCon.appendChild(businessLab);

    let releaseCon = document.createElement('div');
    releaseCon.className = 'doc-item';
    let releaseLab = document.createElement('h2');
    releaseLab.textContent = 'Releases:';
    let addRelItem = document.createElement('button');
    addRelItem.textContent = 'Add item';
    addRelItem.id = 'addRelItem';
    addRelItem.className = 'btn btn-blue';
    let releaseList = document.createElement('ul');
    releaseList.id = 'releaseList';

    releaseCon.appendChild(releaseLab);
    releaseCon.appendChild(addRelItem);
    releaseCon.appendChild(releaseList);

    let sustainCon = document.createElement('div');
    sustainCon.className = 'doc-item';
    let sustainLab = document.createElement('h2');
    sustainLab.textContent = 'Sustainings:';
    let addSusItem = document.createElement('button');
    addSusItem.textContent = 'Add item';
    addSusItem.id = 'addSusItem';
    addSusItem.className = 'btn btn-blue';
    let sustainList = document.createElement('ul');
    sustainList.id = 'sustainList';
    
    sustainCon.appendChild(sustainLab);
    sustainCon.appendChild(addSusItem);
    sustainCon.appendChild(sustainList);
    
    let otherCon = document.createElement('div');
    otherCon.className = 'doc-item';
    let otherLab = document.createElement('h2');
    otherLab.textContent = 'Other:';
    let addOtherItem = document.createElement('button');
    addOtherItem.textContent = 'Add item';
    addOtherItem.id = 'addOtherItem';
    addOtherItem.className = 'btn btn-blue';
    let otherList = document.createElement('ul');
    otherList.id = 'otherList';
    
    otherCon.appendChild(otherLab);
    otherCon.appendChild(addOtherItem);
    otherCon.appendChild(otherList);
    
    let sacHymnCon = document.createElement('div');
    sacHymnCon.className = 'doc-item';
    let sacHymnLab = document.createElement('h2');
    sacHymnLab.textContent = 'Sacrament Hymn:';
    let sacHymnTxt = document.createElement('input');
    sacHymnTxt.id = 'sacHymn';
        
    sacHymnCon.appendChild(sacHymnLab);
    sacHymnCon.appendChild(sacHymnTxt);
    
    let sacProgCon = document.createElement('div');
    sacProgCon.className = 'doc-item';
    let sacProgLab = document.createElement('h2');
    sacProgLab.textContent = 'Sacrament Program';
    let addSacItem = document.createElement('button');
    addSacItem.textContent = 'Add item';
    addSacItem.id = 'addSacItem';
    addSacItem.className = 'btn btn-blue';
    let sacList = document.createElement('ul');
    sacList.id = 'sacList';

    sacProgCon.appendChild(sacProgLab);
    sacProgCon.appendChild(addSacItem);
    sacProgCon.appendChild(sacList);


    let closeHymnCon = document.createElement('div');
    closeHymnCon.className = 'doc-item';
    let closeHymnLab = document.createElement('h2');
    closeHymnLab.textContent = 'Closing Hymn:';
    let closeHymnTxt = document.createElement('input');
    closeHymnTxt.id = 'closeHymn';

    closeHymnCon.appendChild(closeHymnLab);
    closeHymnCon.appendChild(closeHymnTxt);

    let closePrayerCon = document.createElement('div');
    closePrayerCon.className = 'doc-item';
    let closePrayerLab = document.createElement('h2');
    closePrayerLab.textContent = 'Benediction:';
    let closePrayerTxt = document.createElement('input');
    closePrayerTxt.id = 'closePrayer';

    closePrayerCon.appendChild(closePrayerLab);
    closePrayerCon.appendChild(closePrayerTxt);

    wrapper.appendChild(heading);
    wrapper.appendChild(warn);
    wrapper.appendChild(dateCon);
    wrapper.appendChild(conductCon);
    wrapper.appendChild(announceCon);
    wrapper.appendChild(openHymnCon);
    wrapper.appendChild(openPrayerCon);
    wrapper.appendChild(businessCon);
    wrapper.appendChild(releaseCon);
    wrapper.appendChild(sustainCon);
    wrapper.appendChild(otherCon);
    wrapper.appendChild(sacHymnCon);
    wrapper.appendChild(sacProgCon);
    wrapper.appendChild(closeHymnCon);
    wrapper.appendChild(closePrayerCon);

    let submit = document.createElement('a');
    submit.textContent = 'Submit';
    submit.className = 'btn btn-green';
    submit.id = 'submit';

    let back = document.createElement('a');
    back.href = `/rdpUtilities/sacrament/`;
    back.textContent = 'Back';
    back.className = 'btn btn-blue';

    wrapper.appendChild(submit);
    wrapper.appendChild(back);

    document.querySelector('#addAnnItem').addEventListener('click', () => {
        let list = document.createElement('li');
        list.className = 'items';

        let item = document.createElement('h3');
        item.textContent = 'Item';
        let itemIn = document.createElement('textarea');
        itemIn.className = 'announceItem';

        let removeItem = document.createElement('input');
        removeItem.type = 'button';
        removeItem.className = 'removeItem';
        removeItem.value = 'X';

        list.appendChild(item);
        list.appendChild(itemIn);
        list.appendChild(removeItem);
        announceList.appendChild(list);
        itemIn.focus();

        removeItem.addEventListener('click', () => {
            announceList.removeChild(list);
        });
    });

    document.querySelector('#addRelItem').addEventListener('click', () => {
        let list = document.createElement('li');
        list.className = 'items';

        let item = document.createElement('h3');
        item.textContent = 'Item';
        let itemIn = document.createElement('textarea');
        itemIn.className = 'releaseItem';

        let removeItem = document.createElement('input');
        removeItem.type = 'button';
        removeItem.className = 'removeItem';
        removeItem.value = 'X';

        list.appendChild(item);
        list.appendChild(itemIn);
        list.appendChild(removeItem);
        releaseList.appendChild(list);
        itemIn.focus();

        removeItem.addEventListener('click', () => {
            releaseList.removeChild(list);
        });
    });

    document.querySelector('#addSusItem').addEventListener('click', () => {
        let list = document.createElement('li');
        list.className = 'items';

        let item = document.createElement('h3');
        item.textContent = 'Item';
        let itemIn = document.createElement('textarea');
        itemIn.className = 'sustainItem';

        let removeItem = document.createElement('input');
        removeItem.type = 'button';
        removeItem.className = 'removeItem';
        removeItem.value = 'X';

        list.appendChild(item);
        list.appendChild(itemIn);
        list.appendChild(removeItem);
        sustainList.appendChild(list);
        itemIn.focus();

        removeItem.addEventListener('click', () => {
            sustainList.removeChild(list);
        });
    });

    document.querySelector('#addOtherItem').addEventListener('click', () => {
        let list = document.createElement('li');
        list.className = 'items';

        let item = document.createElement('h3');
        item.textContent = 'Item';
        let itemIn = document.createElement('textarea');
        itemIn.className = 'otherItem';

        let removeItem = document.createElement('input');
        removeItem.type = 'button';
        removeItem.className = 'removeItem';
        removeItem.value = 'X';

        list.appendChild(item);
        list.appendChild(itemIn);
        list.appendChild(removeItem);
        otherList.appendChild(list);
        itemIn.focus();

        removeItem.addEventListener('click', () => {
            otherList.removeChild(list);
        });
    });

    document.querySelector('#addSacItem').addEventListener('click', () => {
        let list = document.createElement('li');
        list.className = 'items';

        let item = document.createElement('h3');
        item.textContent = 'Item';
        let itemIn = document.createElement('textarea');
        itemIn.className = 'sacItem';

        let removeItem = document.createElement('input');
        removeItem.type = 'button';
        removeItem.className = 'removeItem';
        removeItem.value = 'X';

        list.appendChild(item);
        list.appendChild(itemIn);
        list.appendChild(removeItem);
        sacList.appendChild(list);
        itemIn.focus();

        removeItem.addEventListener('click', () => {
            sacList.removeChild(list);
        });
    });
}

export async function renderNewSacrament(createDocFunc, wrapper, method) {
    renderEditSacrament(wrapper, method);
    document.querySelector('#submit').addEventListener('click', async () => {
        console.log(document.querySelector('#date').value);
        if (document.querySelector('#date').value) {
            console.log('Create new doc');
            const date = document.querySelector('#date').value;
            const conduct = document.querySelector('#conduct').value;
            const openHymn = document.querySelector('#openHymn').value;
            const openPrayer = document.querySelector('#openPrayer').value;
            const sacHymn = document.querySelector('#sacHymn').value;
            const closeHymn = document.querySelector('#closeHymn').value;
            const closePrayer = document.querySelector('#closePrayer').value;

            let announceItems = [];
            document.querySelectorAll('.announceItem').forEach((input) => {
                announceItems.push(input.value);
            });

            let releaseItems = []
            document.querySelectorAll('.releaseItem').forEach((input) => {
                releaseItems.push(input.value);
            });

            let sustainItems = []
            document.querySelectorAll('.sustainItem').forEach((input) => {
                sustainItems.push(input.value);
            });

            let otherItems = []
            document.querySelectorAll('.otherItem').forEach((input) => {
                otherItems.push(input.value);
            });

            let sacItems = []
            document.querySelectorAll('.sacItem').forEach((input) => {
                sacItems.push(input.value);
            });

            const res = await createDocFunc(date, conduct, announceItems, openPrayer, openHymn, sacHymn, closeHymn, releaseItems, sustainItems, otherItems, sacItems, closePrayer);
            if (!res.error && res) {
                location = `/rdpUtilities/sacrament/`;
            }
        } else {
            document.querySelector('#message').textContent = 'Please select a date';
        }
    });
}