function myFirstApi(metod,url,cb, body) {
    const xhr  = new XMLHttpRequest();

    xhr.open(metod, url);

    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.addEventListener('load', res => {
        const resBody = JSON.parse(xhr.responseText);
        console.log(resBody);
        const array = [resBody];
        resBody.length? cb(resBody) : cb(array);
    });
    xhr.send(JSON.stringify(body));
}
myFirstApi('GET','https://jsonplaceholder.typicode.com/users', resultResp);

    const button = document.querySelector('.btn');
    const form = document.querySelector('.form-group');

    form.addEventListener('submit', e => {
        e.preventDefault();
        const obj = {};
        for (let i = 0; i< Object.assign(e.target).length-1; i++) {
            const key = e.target[i].name;
            const value = e.target[i].value;
            obj[key] = value;
        }
        myFirstApi('POST','https://jsonplaceholder.typicode.com/users', resultResp, obj);
});


function resultResp(users) {
    const container = document.querySelector('.container');

    const card = document.createElement('div');
    container.style = 'width: 500px'
    console.log(container);
    users.forEach( user => {
        const div = document.createElement('div');
            div.textContent = user? user.name : '';
            div.style = 'border: 2px double grey; text-align: center; margin: 10px';

        div.addEventListener('click', e => {
            card.innerHTML = '';
            const userDetail = users.find(u => u.name === e.target.textContent);
            card.classList = 'card';
            card.style = 'width: 18rem; margin: 30px 0 0 89px;';

            const cardBody = document.createElement('div');
            cardBody.classList = 'card-body';
            const h5 = document.createElement('h5');
            h5.textContent = userDetail.name;
            const p = document.createElement('p');
            p.textContent = 'phone : ' + userDetail.phone;
            const p1 = document.createElement('p');
            p1.textContent = 'email : ' + userDetail.email;
            const p2 = document.createElement('p');
            p2.textContent = 'website : ' + userDetail.website;

            cardBody.appendChild(h5);
            cardBody.appendChild(p);
            cardBody.appendChild(p1);
            cardBody.appendChild(p2);

            card.appendChild(cardBody);

            container.appendChild(card);
        });
        form.reset();
            container.appendChild(div);


    });

}
