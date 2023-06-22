import { getAllWardCouncilDocs, getLocalStorage, getUserData, getParam, getWardCouncilDoc, createWardCouncilDoc } from './utils.mjs';

const id = getLocalStorage('id');
const date = getParam('date');
const newDoc = getParam('new');

const main = document.querySelector('main');
let output = '';

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
            output += `<a href="/rdpUtilities/wardCouncil/">Back</a><h2>Agenda</h2><ul>`;
            const doc = await getWardCouncilDoc(date);
            if (doc.length > 0) {
                const agenda = doc[0].agenda;
                console.log(agenda);
                agenda.forEach((item) => {
                    output += `<li>${item}</li>`;
                });
                output +=`</ul>`;
            } else {
                output += `<h2>Cannot find document</h2>`;
            }
        } else {
            if (newDoc) {
                output += `<label>Date</label>
                <input type="date" id="date">
                <div>
                <label>Agenda</label>
                <input type="button" value="Add Item" id="addOrg">
                <ul id="agenda"></ul>
                </div>
                <input type=button value="Submit" id="submit">`;
            } else {
                const docs = await getAllWardCouncilDocs();

                docs.forEach((doc) => {
                    output += `<a href="/rdpUtilities/wardCouncil/?date=${doc.date}">${doc.date}</a>`;
                });

                output += `<a href="/rdpUtilities/wardCouncil/?new=true">Create document</a>`;

            }
        }
    }
}


main.innerHTML = output;

if (newDoc) {
    document.querySelector('#date').addEventListener('change', (event) => {
        console.log(event.target.value);
    });
    const agendaList = document.querySelector('#agenda');
    document.querySelector('#addOrg').addEventListener('click', () => {
        let list = document.createElement('li');
        list.classList.add('items');

        let item = document.createElement('label');
        item.textContent = 'Item';
        let itemIn = document.createElement('input');
        itemIn.classList.add('item');

        let removeItem = document.createElement('input');
        removeItem.type = 'button';
        removeItem.classList.add('removeItem');
        removeItem.value = '❌';

        list.appendChild(item);
        list.appendChild(itemIn);
        list.appendChild(removeItem);
        agendaList.appendChild(list);

        removeItem.addEventListener('click', () => {
            agendaList.removeChild(list);
        });

    });
    document.querySelector('#submit').addEventListener('click', () => {
        if (document.querySelector('#date').value) {
            let agendaItems = []
            document.querySelectorAll('.item').forEach((input) => {
                agendaItems.push(input.value);
            });
            console.log(document.querySelector('#date').value, agendaItems);

            const res = createWardCouncilDoc(document.querySelector('#date').value, agendaItems, '');
            if (!res.error) {
                location = '/rdpUtilities/wardCouncil/';
            }
        }
    });
}
