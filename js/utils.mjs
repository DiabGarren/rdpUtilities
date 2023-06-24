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
}

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
}

export async function deleteWardCouncilDoc(date) {
    const res = await fetch(`${baseUrl}wardCouncil/${date}`, {
        method: 'DELETE'
    });

    const data = res;
    return data;
}

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
}

export async function deleteBishopricDoc(date) {
    const res = await fetch(`${baseUrl}bishopric/${date}`, {
        method: 'DELETE'
    });

    const data = res;
    return data;
}

export function setTitle(firstName, lastName) {
    document.title += ` ${firstName} ${lastName}`;
    document.querySelector('#profile').textContent = `${firstName[0]}${lastName[0]}`;
}

export async function renderBasepage(meeting, userData, getAllFunc, wrapper) {
    let heading = document.createElement('h2');
    heading.textContent = 'Meetings';
    wrapper.appendChild(heading);

    const docs = await getAllFunc();

    docs.forEach((doc) => {
        let wcDoc = document.createElement('a');
        wcDoc.href = `/rdpUtilities/${meeting}/?date=${doc.date}`;
        wcDoc.textContent = doc.date;
        wcDoc.className = 'btn btn-blue';
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
    document.title += ` ${date}`;

    const doc = await getDocFunc(date);
    if (doc.length > 0) {
        let dateLab = document.createElement('h2');
        dateLab.textContent = `Date: ${date}`;
        dateLab.className = 'doc-item';

        let opening = document.createElement('div');
        opening.id = 'op';
        opening.className = 'doc-item';

        let openingLab = document.createElement('h2');
        openingLab.textContent = 'Opening Prayer';

        let openingTxt = document.createElement('p');
        openingTxt.textContent = doc[0].openingPrayer;
        openingTxt.id = 'openingTxt';

        opening.appendChild(openingLab);
        opening.appendChild(openingTxt);

        let sp = document.createElement('div');
        sp.id = 'sp';
        sp.className = 'doc-item';

        let spLab = document.createElement('h2');
        spLab.textContent = 'Spiritual Thought';

        let spTxt = document.createElement('p');
        spTxt.textContent = doc[0].spiritualThought;
        spTxt.id = 'spTxt';

        sp.appendChild(spLab);
        sp.appendChild(spTxt);

        let train = document.createElement('div');
        train.id = 'train';
        train.className = 'doc-item';

        let trainLab = document.createElement('h2');
        trainLab.textContent = 'Handbook Training';

        let trainTxt = document.createElement('p');
        trainTxt.textContent = doc[0].training;
        trainTxt.id = 'trainTxt';

        train.appendChild(trainLab);
        train.appendChild(trainTxt);

        let agenda = document.createElement('div');
        agenda.id = 'agenda';
        agenda.className = 'doc-item';

        let agendaLab = document.createElement('h2');
        agendaLab.textContent = 'Agenda';

        let agendaList = document.createElement('ul');
        agendaList.id = 'agendaList';
        doc[0].agenda.forEach((item) => {
            let agendaItem = document.createElement('li');
            agendaItem.textContent = item;
            agendaList.appendChild(agendaItem);
        });

        agenda.appendChild(agendaLab);
        agenda.appendChild(agendaList);

        let closing = document.createElement('div');
        closing.id = 'cp';
        closing.className = 'doc-item';

        let closingLab = document.createElement('h2');
        closingLab.textContent = 'Closing Prayer';

        let closingTxt = document.createElement('p');
        closingTxt.textContent = doc[0].closingPrayer;
        closingTxt.id = 'closingTxt';

        closing.appendChild(closingLab);
        closing.appendChild(closingTxt);

        let updateBtn = document.createElement('a');
        updateBtn.href = `/rdpUtilities/${meeting}/?date=${date}&update=true`;
        updateBtn.textContent = 'Update document';
        updateBtn.className = 'btn btn-green';

        let delBtn = document.createElement('button');
        delBtn.textContent = 'Delete document';
        delBtn.className = 'btn btn-red';
        delBtn.id = 'delete';

        wrapper.appendChild(dateLab);
        wrapper.appendChild(opening);
        wrapper.appendChild(sp);
        wrapper.appendChild(train);
        wrapper.appendChild(agenda);
        wrapper.appendChild(closing);

        if (userData.level >= 3) {
            wrapper.appendChild(updateBtn);
            wrapper.appendChild(delBtn);
        }

        let printBtn = document.createElement('a');
        printBtn.href = `/rdpUtilities/print/?type=${meeting}&date=${date}`;
        printBtn.textContent = 'Print';
        printBtn.className = 'btn btn-blue';
        wrapper.appendChild(printBtn);

    } else {
        let error = document.createElement('h2');
        error.textContent = 'Cannot find document';

        wrapper.appendChild(error);
    }

    let back = document.createElement('a');
    back.href = `/rdpUtilities/${meeting}/`;
    back.textContent = 'Back';
    back.className = 'btn btn-blue';

    wrapper.appendChild(back);
}

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
}

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
}

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

export async function renderPrint(meeting, getDocFunc, date, wrapper) {
    const doc = await getDocFunc(date);

    let heading = document.createElement('h2');
    heading.innerHTML = 'THE ROODEPOORT STAKE<br>OF<br>THE CHURCH OF JESUS CHRIST OF LATTER-DAY SAINTS';
    heading.className = 'print-heading print-center print-font';

    let subHeading = document.createElement('h3');
    if (meeting == 'wardCouncil') {
        subHeading.innerHTML = `Roodepoort Ward<br>
        Ward Coucil Meeting Agenda<br>
        7:00pm ${date}<br>
        Attendees: Bishopric, Elders Quorum, Relief Society, Young Woman, Primary`;
    } else if (meeting == 'bishopric') {
        subHeading.innerHTML = `Roodepoort Ward<br>
        Bishopric Meeting Agenda<br>
        8:00am ${date}`;
    }
    subHeading.classList = 'print-subheading print-center print-font';

    let opening = document.createElement('p');
    opening.textContent = `Opening Prayer: ${doc[0].openingPrayer}`;
    opening.className = 'print-item print-font';

    let spirit = document.createElement('p');
    spirit.textContent = `Spiritual Thought: ${doc[0].spiritualThought}`;
    spirit.className = 'print-item print-font';

    let training = document.createElement('p');
    training.textContent = `Handbook Training: ${doc[0].training}`;
    training.className = 'print-item print-font';

    let agenda = document.createElement('p');
    agenda.textContent = 'Agenda:';
    let agendaList = document.createElement('ul');
    doc[0].agenda.forEach((item) => {
        let agendaItem = document.createElement('li');
        agendaItem.textContent = item;
        agendaItem.className = 'print-list print-font';
        agendaList.appendChild(agendaItem);
    });

    let closing = document.createElement('p');
    closing.innerHTML = `Closing Prayer: ${doc[0].closingPrayer}`;
    closing.className = 'print-item print-font';

    wrapper.appendChild(heading);
    wrapper.appendChild(subHeading);
    wrapper.appendChild(opening);
    wrapper.appendChild(spirit);
    wrapper.appendChild(training);
    wrapper.appendChild(agenda);
    wrapper.appendChild(agendaList);
    wrapper.appendChild(closing);


    let print = document.createElement('button');
    print.textContent = 'Print';
    print.className = 'btn btn-blue no-print';
    print.onclick = () => {
        window.print();
    }


    let back = document.createElement('a');
    back.href = `/rdpUtilities/${meeting}/?date=${date}`;
    back.textContent = 'Back';
    back.className = 'btn btn-blue no-print'

    wrapper.appendChild(print);
    wrapper.appendChild(back);
}