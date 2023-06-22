import { getAllWardCouncilDocs, getLocalStorage, getUserData, getParam, getWardCouncilDoc, createWardCouncilDoc, deleteWardCouncilDoc } from './utils.mjs';

const id = getLocalStorage('id');
const user = await getUserData(id);

document.querySelector("#profile").textContent = `${user.firstName} ${user.lastName}`;


let date = getParam('date');
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
            output += `<a href="/rdpUtilities/wardCouncil/">Back</a>`;
            const doc = await getWardCouncilDoc(date);
            if (doc.length > 0) {
                output += `<h2>Opening Prayer</h2>
                <p>${doc[0].openingPrayer}</p>
                <h2>Spiritual Though</h2>
                <p>${doc[0].spiritualThought}</p>
                <h2>Handbook Training</h2>
                <p>${doc[0].training}</p>
                <h2>Agenda</h2><ul>`;
                const agenda = doc[0].agenda;
                console.log(agenda);
                agenda.forEach((item) => {
                    output += `<li>${item}</li>`;
                });
                output += `</ul><h2>Closing Prayer</h2>
                <p>${doc[0].closingPrayer}</p>
                <a href="#" id="delete">Delete</a>`;
            } else {
                output += `<h2>Cannot find document</h2>`;
            }
        } else {
            if (newDoc) {
                output += `<a href="/rdpUtilities/wardCouncil/">Back</a>
                <label>Date</label>
                <input type="date" id="date">
                <label>Opening Prayer</label>
                <input id="open" value="By invitation">
                <label>Spiritual Though</label>
                <input id="st">
                <label>Handbook Training</label>
                <input id="training">
                <div>
                <label>Agenda</label>
                <input type="button" value="Add Item" id="addOrg">
                <ul id="agenda"></ul>
                </div>
                <label>Closing Prayer</label>
                <input id="close" value="By invitation">
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


main.innerHTML += output;


if (newDoc) {
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
    document.querySelector('#submit').addEventListener('click', async () => {
        if (document.querySelector('#date').value) {
            console.log('Create new doc');
            let agendaItems = []
            document.querySelectorAll('.item').forEach((input) => {
                agendaItems.push(input.value);
            });
            
            const res = await createWardCouncilDoc(document.querySelector('#date').value, document.querySelector('#open').value, document.querySelector('#st').value, document.querySelector('#training').value, agendaItems, document.querySelector('#close').value, '');
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