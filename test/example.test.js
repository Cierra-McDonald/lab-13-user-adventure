import adventure from '../data.js';
import { resultMessage } from '../Results.js';
const yogi = JSON.parse(localStorage.getItem('YOGI'));

const test = QUnit.test;

// test('the formData function should save user input into localStorage', (expect) => {
//     //Arrange
//     // Set up your arguments and expectations
//     const form = new FormData();
//     form.append('name', 'Cierra');
//     form.append('character', 'Lavender Candle');
//     setUser(form);

//     const actual = localStorage.getItem('YOGI');
//     const trueActual = JSON.parse(actual);

//     const expected = {
//         name: 'Cierra',
//         character :'Lavender Candle', 
//         chakras : 7, 
//         crystals : 0, 
//         completed: {},
//     };
    
//     //Act 
//     // Call the function you're testing and set the result to a const


//     //Expect
//     // Make assertions about what is expected versus the actual result
//     expect.deepEqual(trueActual, expected);
// });


test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = '';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = resultMessage(-5);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
