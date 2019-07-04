/*#1*/

function multiply() {
    var result = 1;

    for(let i = 0; i < arguments.length;i++) {
        result = result * arguments[i];
    }
    return arguments.length? result : 0;
}

multiply(2,2,2);



/*--------------------------------------------------------------------------*/


/*#2*/

function reverseString(str) {
    return str.split('').reverse().join('');
}

reverseString('Привет человек');
/*--------------------------------------------------------------------------*/


/*#3*/

function unicodeString(str) {
    const STRING = str.split('');
    let array = [];
    for(let i = 0; i< STRING.length;i++) {
        const uCode = STRING[i].charCodeAt();
        array.push(uCode);
    }
    return array.join(' ');
}
unicodeString('Привет Hello');
/*--------------------------------------------------------------------------*/


/*#4*/

function luckyNumber(num) {
    if(num <= 10 && num >= 0) {
        let number = Math.floor(Math.random()* 11);
        if(number === num) {
            console.log('You are WIN!!');
        }else {
            console.log('Faild :( Your number: ' + num + ' but we got ' + number);
        }
    }
}
luckyNumber(0);
/*--------------------------------------------------------------------------*/


/*#5*/

function fillArray(n) {
    let array = [];
    while(n >= 0) {
        array.push(n--);
    }
    return array.reverse();
}
fillArray(11);
/*--------------------------------------------------------------------------*/

/*#6*/

function concatArray(arr) {
    let array = arr.concat(arr);
    return array;
}
concatArray([1,2,3,4]);
/*--------------------------------------------------------------------------*/


/*#7*/

function shiftElement() {
    let newArray = [];
    for(let i =0; i < arguments.length; i++) {
        newArray.push(arguments[i].slice(1));
    }
    return newArray;

}
shiftElement([1,2,3],[4,5,6],[7,8,9],['a','b','c']);
/*--------------------------------------------------------------------------*/

/*8*/

let arrayOfUsers = [
    {name: 'Denis', age: 29, gender: 'male'},
    {name: 'Ivan', age: 20, gender: 'male'}
];
function collectionUser(users, key, value) {
    let filterUser;
    if(arguments.length === 3) {
        filterUser = users.filter( user => user[key] === value);
    }
    return filterUser
}
collectionUser(arrayOfUsers,'age', 29);

