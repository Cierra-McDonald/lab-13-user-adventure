import { findById } from '../utils.js';
import adventure from '../data.js';

const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const img = document.querySelector('section img');
const form = document.querySelector('form'); 
//Grabbing the id of the adventure (vinyasa,yin,kundalini) from the url
const params = new URLSearchParams(window.location.search);
//getting the id from 
const adventureId = params.get('id');
const adventures = findById(adventureId, adventure); //findById function takes in an id and an array
const button = document.createElement('button');

h1.textContent = adventure.title; 
//put picture here
p.textContent = adventures.description; 

img.src = `../assets/${'big-logo.png'}`; 
//adventures.image once you have collected your pictures
//creating a loop that will go through my choices from adventure data.js and create a dynamic form


const br = document.createElement('br');
// form.append(br);

for (let choice of adventures.choices) {

    const radio = document.createElement('input');
    const label = document.createElement('label'); 
    const span = document.createElement('span');
    
    span.textContent = choice.description;
     
    radio.type = 'radio'; 
    radio.value = choice.id;
    radio.name = 'choices';
    
    label.append(span, radio);
    form.append(label);
}

form.append(br);
button.textContent = 'Namaste';

form.appendChild(button);

button.addEventListener('submit', (e) => {
    e.preventDefault();

    // const formData = new FormData(form);

});