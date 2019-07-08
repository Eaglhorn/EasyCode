
/*Деструктурирующее присваивание*/

/*#1*/

function returnObj() {
    const [arg1,...other] = arguments;
    return {
        first : arg1,
        other : other
    }
}
returnObj('fdsfdfd',2,3,4,6,6,6,3,2);

/*--------------------------------------------------------------------------*/


/*2*/

let organisation ={
    name: 'Google',
        info: {
        employees: ['Vlad', 'Olga'],
            partners: ['Microsoft', 'Facebook', 'Xing']
    }
};

function getInfo(org) {
    const {name = 'Unknown'} = org;
    const {partners} = org.info;
    const [part1, part2] = partners;
    console.log(name);
    console.log(part1, part2)

}
getInfo(organisation);


/*--------------------------------------------------------------------------*/

/*Функции стрелки*/

/*3*/

 const func = (...props) => {
     const params = Array.prototype.slice.call(props);
     if (!params.length) return 0;
     return params.reduce( (prev, next) => prev + next);
 };

func(1, 2, 3, 4);
func();


/*--------------------------------------------------------------------------*/

/*Функции высшего порядка*/

/*4*/

function filterArray(arr, fn) {
    let result = '';
    for(let i = 0; i < arr.length; i++) {
       result += fn(arr[i]);
    }

    return 'New value: ' + result
}

function handler1(el) {
    return el;
}

function handler2(el) {
    const res = [];
        res.push(el * 10);
    return res + ', ';
}
function handler3(el) {
    const user = el.name + ' is ' + el.age + ', ';
    return user;
}
function handler4(el) {
    return el.split('').reverse().join('') + ', ';
}

filterArray(['my', 'name', 'is', 'Trinity'], handler1);
filterArray([10, 20, 30], handler2);
filterArray([{age: 45, name: 'Jhon'}, {age: 20, name: 'Aaron'}], handler3);
filterArray(['abc', '123'], handler4);

/*--------------------------------------------------------------------------*/

/*5*/

function every(arr, func) {
    if(!Array.isArray(arr)) console.error('First argument must be array');
    if( typeof func !== 'function') console.error('Second argument must be function');

    let  hightNumber;

      for(let i = 0; i < arr.length; i++) {
           let number = callBack(arr[i], i, arr);
            if(number === false) {
                hightNumber = false;
                break;
            }
            else {
                hightNumber = true;
            }

        }

  return hightNumber;

}

function callBack(number, index, array) {
    if(number > 5) return true;
    else return false;

}

every([7,6, 91,1,9,91], callBack );
/*--------------------------------------------------------------------------*/

