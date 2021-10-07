// import functions
import { add } from '../calculations.js';
import { subtract } from '../calculations.js';
import { multiply } from '../calculations.js';


console.log(add(50, 100));
console.log(subtract(100, 50));
console.log(multiply(50, 100));

// reference needed DOM elements
const addNumber1 = document.getElementById('add-number-1');
const addNumber2 = document.getElementById('add-number-2');
const addButton = document.getElementById('add-button');
const addAnswer = document.getElementById('add-answer');

const subNumber1 = document.getElementById('sub-number-1');
const subNumber2 = document.getElementById('sub-number-2');
const subButton = document.getElementById('sub-button');
const subAnswer = document.getElementById('sub-answer');

const multiplyNumber1 = document.getElementById('multiply-number-1');
const multiplyNumber2 = document.getElementById('multiply-number-2');
const multiplyButton = document.getElementById('multiply-button');
const multiplyAnswer = document.getElementById('multiply-answer');

// set event listeners 

addButton.addEventListener('click', () => {
    // get user input(s)
    const x = +addNumber1.value;
    const y = +addNumber2.value;

    // do any needed work with the value(s)

    const sum = add(x, y);

    // update DOM to reflect new value(s)
    addAnswer.textContent = sum;

});

subButton.addEventListener('click', () => {

    const x = +subNumber1.value;
    const y = +subNumber2.value;

    const diff = subtract(x, y);

    subAnswer.textContent = diff;
});

multiplyButton.addEventListener('click', () => {

    const x = +multiplyNumber1.value;
    const y = +multiplyNumber2.value;

    const product = multiply(x, y);

    multiplyAnswer.textContent = product;
});