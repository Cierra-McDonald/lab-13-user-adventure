// IMPORT MODULES under test here:
// import { example } from '../example.js';
import adventure from '../data.js';
import {  }

const test = QUnit.test;

test('the formData function should save user input into localStorage', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const form = new FormData();
    form.append('name', 'Cierra');
    form.append('character', 'Lavender Candle');
    setUser(form);

    const actual = localStorage.getItem('YOGI');
    const trueActual = JSON.parse(actual);

    const expected = {
        name: 'Cierra',
        character :'Lavender Candle', 
        chakras : 7, 
        crystals : 0, 
        completed: {},
    };
    
    //Act 
    // Call the function you're testing and set the result to a const


    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(trueActual, expected);
});
