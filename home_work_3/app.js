/*This*/

/*1*/

const rectangle = {
    width: 9,
    height: 10,
  getSquare: function () {
     return this.width * this.height;
  }
};
rectangle.getSquare();

/*--------------------------------------------------------------------------*/

/*2*/

const price = {
    price: 10,
    discount: '15%',
    getPrice: function () {
        return this.price
    },
    getDiscPrice: function () {
        const toNumber = parseInt(this.discount);
        const result = this.price - (this.price * toNumber)/100;
        return result
    }
};

price.getPrice();
price.getDiscPrice();

/*--------------------------------------------------------------------------*/

/*3*/

const obj = {
    height: 10,
    overHeight: function () {
        obj.height = obj.height+1;
       return obj
    }
};
obj.overHeight();
obj.height;

/*--------------------------------------------------------------------------*/

/*4*/

const numerator = {
    value: 1,
    double: function () {
        numerator.value = numerator.value * 2;
        return numerator
    },
    plusOne: function () {
        numerator.value = numerator.value + 1;
        return numerator
    },
    minusOne: function () {
        numerator.value = numerator.value - 1;
        return numerator
    }
};
numerator.double().plusOne().plusOne().minusOne();
numerator.value;

/*--------------------------------------------------------------------------*/


/*5*/

const productSum = {
    price: 3,
    product: 5,
    total: function () {
        let result =  this.price * this.product;
        return result;
    }
};
productSum.total();

/*--------------------------------------------------------------------------*/


/*6*/

const detailSum = {
    price: 5,
    product: 3
};

productSum.total.call(detailSum);

/*--------------------------------------------------------------------------*/

/*7*/

let sizes = {width: 5, height: 10},
getSquare = function () {return this.width * this.height};

getSquare.call(sizes);

/*--------------------------------------------------------------------------*/

/*8*/

let element = {
    height: 25,
    getHeight: function () {return this.height;}
};

let getElementHeight = element.getHeight.bind(element);
getElementHeight();

/*--------------------------------------------------------------------------*/

/*Перебирающие методы*/

/*1*/

let simpleArray = [1,2,3,4,5,6,7,8,9,10];
    simpleArray.map( item => {
    const result = {digit: item, odd: item % 2 ? false : true}
    return result;
    });


/*--------------------------------------------------------------------------*/


/*2*/

const onceArray = [12, 4, 50, 1, 0, 18, 40];
    onceArray.every(item => item !== 0);


/*--------------------------------------------------------------------------*/

/*3*/

const stringArray = ['yes', 'hello', 'no', 'easycode', 'what'];
        stringArray.some(item => item.length > 3);



/*--------------------------------------------------------------------------*/

/*4*/

const charArray = [{char:"a",index:12}, {char:"w",index:8}, {char:"Y",index:10}, {char:"p",index:3}, {char:"p",index:2},
    {char:"N",index:6}, {char:" ",index:5}, {char:"y",index:4}, {char:"r",index:13}, {char:"H",index:0},
    {char:"e",index:11}, {char:"a",index:1}, {char:" ",index:9}, {char:"!",index:14}, {char:"e",index:7}];

    charArray.sort((a,b)=> a.index - b.index).reduce((acc,current) =>  acc + current.char,'');


/*--------------------------------------------------------------------------*/

/*5*/

const someArray = [  [14, 45],  [1],  ['a', 'c', 'd']  ];

       someArray.sort((a,b) => a.length - b.length);

/*--------------------------------------------------------------------------*/

/*6*/

const coresArray = [
    {cpu: 'intel', info: {cores:2, сache: 3}},
    {cpu: 'intel', info: {cores:4, сache: 4}},
    {cpu: 'amd', info: {cores:1, сache: 1}},
    {cpu: 'intel', info: {cores:3, сache: 2}},
    {cpu: 'amd', info: {cores:4, сache: 2}}
];
       coresArray.sort((a,b) => a.info.cores - b.info.cores);


/*--------------------------------------------------------------------------*/

/*7*/

const products = [
    {title: 'prod1', price: 5.2}, {title: 'prod2', price: 0.18},
    {title: 'prod3', price: 15}, {title: 'prod4', price: 25},
    {title: 'prod5', price: 18.9}, {title: 'prod6', price: 8},
    {title: 'prod7', price: 19}, {title: 'prod8', price: 63}
];

function sortProduct(array,min, max) {
    const filterArray = array.filter(item => {
        return item.price >= min && item.price <= max;
    });
    return filterArray.sort( (a,b) => a.price - b.price);
    }
sortProduct(products, 15, 30);
/*--------------------------------------------------------------------------*/
