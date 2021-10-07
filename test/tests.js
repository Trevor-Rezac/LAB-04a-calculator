// IMPORT MODULES under test here:
import { add } from '../calculations.js';
import { subtract } from '../calculations.js';

const test = QUnit.test;

// name your test by what it is testing
test('adds two numbers 5 and 3', (expect) => {
    //1. Arrange
    // Set up your arguments and expectations
    const x = 5;
    const y = 3;
    const expected = 8;

    //2. Act 
    // Call the function you're testing and set the result to a const
    const actual = add(x, y); // use your function here

    //3. Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('subtracts two numbers 11 and 5', (expect) => {
    //1. Arrange
    // Set up your arguments and expectations
    const x = 11;
    const y = 5;
    const expected = 6;

    
    //2. Act 
    // Call the function you're testing and set the result to a const
    const actual = subtract(x, y);// use your function here

    //3. Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});