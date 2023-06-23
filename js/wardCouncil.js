import { getAllWardCouncilDocs, getLocalStorage, getUserData, getParam, getWardCouncilDoc, createWardCouncilDoc, deleteWardCouncilDoc } from './utils.mjs';

const id = getLocalStorage('id');
const userData = await getUserData(id);

document.title += ` ${userData.firstName} ${userData.lastName}`;
document.querySelector('#profile').textContent = `${userData.firstName[0]}${userData.lastName[0]}`;


let date = getParam('date');
const newDoc = getParam('new');

const wrapper = document.querySelector('.wrapper');
// let output = '';

if (!id) {
    location = '/rdpUtilities';
} else {
    const userData = await getUserData(id);
    if (userData.level < '2') {
        location = '/rdpUtilities/restricted';
    } else {
        if (date) {
            document.title += ` ${date}`;
            document.querySelector('h1').textContent += ` ${date}`;

            let back = document.createElement('a');
            back.href = '/rdpUtilities/wardCouncil/';
            back.textContent = 'Back';
            back.className = 'btn';

            wrapper.appendChild(back);

            const doc = await getWardCouncilDoc(date);
            if (doc.length > 0) {
                let opening = document.createElement('div');
                opening.id = 'op';
                opening.className = 'ward_council-item';

                let openingLab = document.createElement('h2');
                openingLab.textContent = 'Opening Prayer';

                let openingTxt = document.createElement('p');
                openingTxt.textContent = doc[0].openingPrayer;

                opening.appendChild(openingLab);
                opening.appendChild(openingTxt);

                let sp = document.createElement('div');
                sp.id = 'sp';
                sp.className = 'ward_council-item';

                let spLab = document.createElement('h2');
                spLab.textContent = 'Spiritual Thought';

                let spTxt = document.createElement('p');
                spTxt.textContent = doc[0].spiritualThought;

                sp.appendChild(spLab);
                sp.appendChild(spTxt);

                let train = document.createElement('div');
                train.id = 'train';
                train.className = 'ward_council-item';

                let trainLab = document.createElement('h2');
                trainLab.textContent = 'Handbook Training';

                let trainTxt = document.createElement('p');
                trainTxt.textContent = doc[0].training;

                train.appendChild(trainLab);
                train.appendChild(trainTxt);

                let agenda = document.createElement('div');
                agenda.id = 'agenda';
                agenda.className = 'ward_council-item';

                let agendaLab = document.createElement('h2');
                agendaLab.textContent = 'Agenda';

                let agendaList = document.createElement('ul');
                doc[0].agenda.forEach((item) => {
                    let agendaItem = document.createElement('li');
                    agendaItem.textContent = item;
                    agendaList.appendChild(agendaItem);
                });

                agenda.appendChild(agendaLab);
                agenda.appendChild(agendaList);

                let closing = document.createElement('div');
                closing.id = 'cp';
                closing.className = 'ward_council-item';

                let closingLab = document.createElement('h2');
                closingLab.textContent = 'Closing Prayer';

                let closingTxt = document.createElement('p');
                closingTxt.textContent = doc[0].closingPrayer;

                closing.appendChild(closingLab);
                closing.appendChild(closingTxt);

                let del = document.createElement('div');
                let delBtn = document.createElement('a');
                delBtn.href = `/rdpUtilities/wardCouncil/delete/?date=${date}`;
                delBtn.textContent = 'Delete document';
                delBtn.className = 'btn delete-btn';

                del.appendChild(delBtn);

                wrapper.appendChild(opening);
                wrapper.appendChild(sp);
                wrapper.appendChild(train);
                wrapper.appendChild(agenda);
                wrapper.appendChild(closing);

                if (userData.level >= 3) {
                    wrapper.appendChild(del);
                }

            } else {
                let error = document.createElement('h2');
                error.textContent = 'Cannot find document';

                wrapper.appendChild(error);
            }
        } else {
            if (newDoc) {
                let back = document.createElement('a');
                back.href = '/rdpUtilities/wardCouncil/';
                back.textContent = 'Back';
                back.className = 'btn';

                wrapper.appendChild(back);

                let warn = document.createElement('h3');
                warn.className = 'form-warning';
                warn.id = 'message';

                let date = document.createElement('div');
                date.className = 'ward_council-item';
                
                let dateLab = document.createElement('h2');
                dateLab.textContent = 'Date';
                
                let dateTxt = document.createElement('input');
                dateTxt.type = 'date';
                dateTxt.id = 'date';

                date.appendChild(dateLab);
                date.appendChild(dateTxt);

                let opening = document.createElement('div');
                opening.id = 'op';
                opening.className = 'ward_council-item';

                let openingLab = document.createElement('h2');
                openingLab.textContent = 'Opening Prayer';

                let openingTxt = document.createElement('input');
                openingTxt.id = 'open';
                openingTxt.value = 'By invitation';

                opening.appendChild(openingLab);
                opening.appendChild(openingTxt);

                let sp = document.createElement('div');
                sp.id = 'sp';
                sp.className = 'ward_council-item';

                let spLab = document.createElement('h2');
                spLab.textContent = 'Spiritual Thought';

                let spTxt = document.createElement('input');
                spTxt.id = 'st';

                sp.appendChild(spLab);
                sp.appendChild(spTxt);

                let train = document.createElement('div');
                train.id = 'train';
                train.className = 'ward_council-item';

                let trainLab = document.createElement('h2');
                trainLab.textContent = 'Handbook Training';

                let trainTxt = document.createElement('input');
                train.id = 'training';
                train.appendChild(trainLab);
                train.appendChild(trainTxt);

                let agenda = document.createElement('div');
                agenda.id = 'agenda';
                agenda.className = 'ward_council-item';

                let agendaLab = document.createElement('h2');
                agendaLab.textContent = 'Agenda';

                let addItem = document.createElement('input');
                addItem.type = 'button';
                addItem.value = 'Add item';
                addItem.id = 'addItem';
                addItem.className = 'btn';

                let agendaList = document.createElement('ul');
                agendaList.id = 'agendaList';

                agenda.appendChild(agendaLab);
                agenda.appendChild(addItem);
                agenda.appendChild(agendaList);

                let closing = document.createElement('div');
                closing.id = 'cp';
                closing.className = 'ward_council-item';

                let closingLab = document.createElement('h2');
                closingLab.textContent = 'Closing Prayer';

                let closingTxt = document.createElement('input');
                closingTxt.id = 'close';
                closingTxt.value = 'By invitation';

                closing.appendChild(closingLab);
                closing.appendChild(closingTxt);

                let submit = document.createElement('input');
                submit.type = 'button';
                submit.value = 'Submit';
                submit.className = 'btn';
                submit.id = 'submit';

                wrapper.appendChild(warn);
                wrapper.appendChild(date);
                wrapper.appendChild(opening);
                wrapper.appendChild(sp);
                wrapper.appendChild(train);
                wrapper.appendChild(agenda);
                wrapper.appendChild(closing);
                wrapper.appendChild(submit);

            } else {
                const docs = await getAllWardCouncilDocs();

                docs.forEach((doc) => {
                    let wcDoc = document.createElement('a');
                    wcDoc.href = `/rdpUtilities/wardCouncil/?date=${doc.date}`;
                    wcDoc.textContent = doc.date;
                    wcDoc.className = 'btn';
                    wrapper.appendChild(wcDoc);
                });
                let createDoc = document.createElement('a');
                createDoc.href = '/rdpUtilities/wardCouncil/?new=true';
                createDoc.textContent = 'Create document';
                createDoc.className = 'btn';

                wrapper.appendChild(createDoc);
            }
        }
    }
}


if (newDoc) {
    const agendaList = document.querySelector('#agendaList');
    document.querySelector('#addItem').addEventListener('click', () => {
        let list = document.createElement('li');
        list.classList.add('items');

        let item = document.createElement('h3');
        item.textContent = 'Item';
        let itemIn = document.createElement('input');
        itemIn.classList.add('item');

        let removeItem = document.createElement('input');
        removeItem.type = 'button';
        removeItem.classList.add('removeItem');
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

            const res = await createWardCouncilDoc(date, open, st, train, agendaItems, close, '');
            if (!res.error && res) {
                location = '/rdpUtilities/wardCouncil/';
            }
        } else {
            document.querySelector('#message').textContent = 'Please select a date';
        }
    });
}

if (document.querySelector('#delete')) {
    document.querySelector('#delete').addEventListener('click', async () => {
        console.log(date);
        const res = await deleteWardCouncilDoc(date);
        if (!res.error && res) {
            location = '/rdpUtilities/wardCouncil/';
        }
    });
}