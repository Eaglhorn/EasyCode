/*1*/

function minus(value = 0) {
        return function(val = 0) {
            return value - val;
        }
};
minus(5)(2);


/*-------------------------------------*/

/*2*/

function multiplyMaker(value) {
    return function (val) {
        value = value * val;
        return value;
    }

}
const multiply = multiplyMaker(2)
multiply(2);
multiply(1);
multiply(3);
multiply(10);

/*-------------------------------------*/

/*3*/

const stringModule = (function () {
    let newString = '';
    function setString(string) {
         newString = string;
    }
    function getString() {
        return newString;
    }
    function getLength() {
        const array = newString.split('');
        return array.length;
    }
    function getReverse() {
        const reverse = newString.split('').reverse().join('');
        return reverse;
    }
    return {
        setString,
        getString,
        getLength,
        getReverse
    }
}());
stringModule.setString('hello, i"m robot');
stringModule.getString();
stringModule.getLength();
stringModule.getReverse();
/*-------------------------------------*/

/*4*/

const calculator = (function () {
    let newValue = 0;
    function setValue(val) {
        newValue = val;
    }
    function concat(value) {
        newValue = newValue + value;
        return  newValue;
    }
    function minus(value) {
        newValue = newValue - value;
        return newValue;
    }
    function multiply(value) {
        newValue = newValue * value;
        return newValue;
    }
    function divide(value) {
        newValue = newValue / value;
        return newValue;
    }
    function power(value) {
         newValue = value * value;
        return newValue
    }
    function getValue() {
        return newValue.toFixed(2);
    }

    return {
        setValue,
        concat,
        minus,
        multiply,
        divide,
        power,
        getValue

    }
}());
calculator.setValue(10);
calculator.concat(5);
calculator.multiply(2);
calculator.getValue();


/*-------------------------------------*/
