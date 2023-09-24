/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function Add (number1, number2) {
    return number1+number2;
}
function addNumbers(){
    let addNumber1 = Number (document.querySelector('#add1') .value); 
    let addNumber2 = Number (document.querySelector('#add2') .value);

    document.querySelector('#sum') .value = Add(addNumber1,addNumber2);
}
document.querySelector('#addNumbers') .addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
function Subtract (number1, number2) {
    return number1-number2;
}
function SubtractNumbers(){
    let SubtractNumber1 = Number (document.querySelector('#subtract1') .value);
    let SubtractNumber2 = Number (document.querySelector('#subtract2') .value);

    document.querySelector('#difference') .value = Subtract(SubtractNumber1,SubtractNumber2);
}
document.querySelector('#subtractNumbers') .addEventListener('click', SubtractNumbers);

/* Arrow Function - Multiply Numbers */
function Multiply (number1,number2){
    return number1*number2;
}
function MultiplyNumbers(){
    let MultiplyNumber1 = Number (document.querySelector('#factor1') .value);
    let MultiplyNumber2 = Number (document.querySelector('#factor2') .value);
    document.querySelector('#product') .value = Multiply(MultiplyNumber1,MultiplyNumber2);
}
document.querySelector('#multiplyNumbers') .addEventListener('click', MultiplyNumbers);


/* Open Function Use - Divide Numbers */
function divide (dividend,divosor){
    return dividend/divosor;
}
function divideNumbers(){
    let Dividend = Number (document.querySelector('#dividend') .value);
    let Divisor = Number (document.querySelector('#divisor') .value);
    document.querySelector('#quotient') .value = divide(Dividend,Divisor);
}
document.querySelector('#divideNumbers') .addEventListener('click', divideNumbers);
/* Decision Structure */
let currentYear=2023;
let currentDate=25;
function getFullYear(){
    document.querySelector(currentDate) = (currentYear);
}
document.getElementById("year").innerHTML = new Date().getFullYear();


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
const numbersArray = [1, 2, 3, 4, 5, 6 , 7, 8, 9, 10, 11, 12, 13];
document.getElementById("array").innerHTML = numbersArray;
/* Output Odds Only Array */
document.querySelector('#odds') .innerHTML = numbersArray.filter(number => number % 2 ===1) ;
/* Output Evens Only Array */
document.querySelector('#evens') .innerHTML = numbersArray.filter(number => number % 2 ===0) ;
/* Output Sum of Org. Array */
numbersArray.reduce((sum, number) => sum + number);
document.getElementById("sumOfArray").innerHTML = numbersArray.reduce((sum, number) => sum + number);
/* Output Multiplied by 2 Array */
document.getElementById("multiplied").innerHTML = numbersArray.map(number => number * 2);
/* Output Sum of Multiplied by 2 Array */
let x2=numbersArray.map(number => number * 2);
document.getElementById("sumOfMultiplied").innerHTML = x2.reduce((sum, number) => sum + number);