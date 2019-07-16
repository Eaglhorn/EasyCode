/*DOM*/
/*1*/

function isParent(parent, children) {
    return parent.contains(children);
}
isParent(document.body.children[0], document.querySelector('mark'));

/*----------------------------------------------------------------------*/

/*2*/
function getLinks() {
    const allLinks = document.querySelectorAll('a');
    const linkArray = [];
    allLinks.forEach(item => {
        let parent = item.parentElement;
        while (true) {
            if (parent === null) {
                linkArray.push(item);
                break;
            } else if (parent.tagName === 'UL') {
                break;
            }
            parent = parent.parentElement;
        }
    });
    return linkArray;
}

getLinks();


/*----------------------------------------------------------------------*/

/*3*/

function foundElement(el)  {
    console.log(el.previousElementSibling);
    console.log(el.nextElementSibling);
}

foundElement(document.querySelector("ul"));


/*Манипуляция DOM. Работа с атрибутами*/

/*6*/
const users = [
    {
        "_id": "5d220b10e8265cc978e2586b",
        "isActive": true,
        "balance": 2853.33,
        "age": 20,
        "name": "Buckner Osborne",
        "gender": "male",
        "company": "EMPIRICA",
        "email": "bucknerosborne@empirica.com",
        "phone": "+1 (850) 411-2997",
        "registered": "2018-08-13T04:28:45 -03:00",
        "nestedField": { total: 300 }
    },
    {
        "_id": "5d220b10144ef972f6c2b332",
        "isActive": true,
        "balance": 1464.63,
        "age": 38,
        "name": "Rosalie Smith",
        "gender": "female",
        "company": "KATAKANA",
        "email": "rosaliesmith@katakana.com",
        "phone": "+1 (943) 463-2496",
        "registered": "2016-12-09T05:15:34 -02:00",
        "nestedField": { total: 400 }
    },
    {
        "_id": "5d220b1083a0494655cdecf6",
        "isActive": false,
        "balance": 5423.39,
        "age": 40,
        "name": "Estrada Davenport",
        "gender": "male",
        "company": "EBIDCO",
        "email": "estradadavenport@ebidco.com",
        "phone": "+1 (890) 461-2088",
        "registered": "2016-03-04T03:36:38 -02:00",
        "nestedField": { total: 200 }
    },
    {
        "_id": "5d220b1083a0494655cdecf6",
        "isActive": false,
        "balance": 3123.39,
        "age": 40,
        "name": "Estrada Davenport",
        "gender": "male",
        "company": "EBIDCO",
        "email": "estradadavenport@ebidco.com",
        "phone": "+1 (890) 461-2088",
        "registered": "2016-03-04T03:36:38 -02:00",
        "nestedField": { total: 200 }
    },    {
        "_id": "5d220b1083a0494655cdecf6",
        "isActive": false,
        "balance": 7823.39,
        "age": 40,
        "name": "Estrada Davenport",
        "gender": "male",
        "company": "EBIDCO",
        "email": "estradadavenport@ebidco.com",
        "phone": "+1 (890) 461-2088",
        "registered": "2016-03-04T03:36:38 -02:00",
        "nestedField": { total: 200 }
    }
];

const map = {name: 'Name', email: 'Email', balance: 'Balance'};

const container = document.querySelector('.container');
const fragment = document.createDocumentFragment();
const table = document.createElement('table');

const tbody = document.createElement('tbody');

const thead = document.createElement('thead');
const th = document.createElement('th');
const th1 = document.createElement('th');
const th2 = document.createElement('th');
th.textContent = `${map.name}`;
th1.textContent = `${map.email}`;
th2.textContent = `${map.balance}`;


thead.appendChild(th);
thead.appendChild(th1);
thead.appendChild(th2);

function create_table(array) {
    let total = 0;
    array.forEach(item => {
        const tr = document.createElement('tr');
        const td = document.createElement('td');
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');

        td.textContent = `${item.name}`;
        td1.textContent = `${item.email}`;
        td2.textContent = `${item.balance}`;

        tr.appendChild(td);
        tr.appendChild(td1);
        tr.appendChild(td2);

        tbody.appendChild(tr);

        total = total + item.balance;


    });

    const final = document.createElement('tr');

    final.textContent = 'Total balance : ' + `${total}`;
    final.style.cssText = 'text-align : right';
    tbody.appendChild(final);

    fragment.appendChild(thead);
    fragment.appendChild(tbody);

    table.appendChild(fragment);
    container.appendChild(table);
}
create_table(users);


table.appendChild(fragment);
container.appendChild(table);

/*----------------------------------------------------------------------*/


/*События*/

/*1*/

var btn = document.querySelector('#btn-msg');
var msg = btn.getAttribute('data-text');
console.log(msg);
btn.addEventListener('click',  function () {
    alert(msg);
});

/*----------------------------------------------------------------------*/


/*2*/

btn.addEventListener('mouseover', function() {
    btn.classList.add( 'bg-red');
    btn.style.cssText = 'background : red'
});
btn.addEventListener('mouseout', function () {
    btn.classList.remove('bg-red');
    btn.style.cssText = undefined;

});

/*----------------------------------------------------------------------*/


/*3*/

var body = document.querySelector('body')
    body.addEventListener('click', function (e) {
        var tag = document.getElementById('tag');
        var el = e.target.localName;

        tag.textContent = 'Tag: ' + `${el}`
    });

/*----------------------------------------------------------------------*/

/*7*/
var arrow = false;

const button_sort = document.createElement('button');
    button_sort.textContent = 'Sort';
    button_sort.style.background = 'lightblue';

    button_sort.addEventListener('click', sortTable);

function sortTable() {
    arrow = !arrow;
    arrow ? i_sort.className = 'fa fa-arrow-up' : i_sort.className = 'fa fa-arrow-down';
    let result =  users.sort((a,b) => {
       return arrow ? a.balance > b.balance : a.balance < b.balance;
    });

    tbody.remove();
    create_table(result);
    return  result
}
const i_sort = document.createElement('i');
    i_sort.className = 'fa fa-arrow-up';
    i_sort.style.color = 'white';

button_sort.appendChild(i_sort);
container.appendChild(button_sort);


/*----------------------------------------------------------------------*/
