import { findById } from '../utils.js';
import adventure from '../data.js';

const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const img = document.querySelector('section img');
const form = document.querySelector('form'); 
// const divHead = document.querySelector('header');
const divHead = document.getElementById('life-tracker');
//Grabbing the id of the adventure (vinyasa,yin,kundalini) from the url
const params = new URLSearchParams(window.location.search);
const adventureId = params.get('id');
const adventures = findById(adventureId, adventure); //findById function takes in an id and an array
const button = document.createElement('button');
const backToMap = document.getElementById('back-to-map');

h1.textContent = adventures.title; 
p.textContent = adventures.description; 
img.src = `../assets/${adventures.image}`; 
//creating a loop that will go through my choices from adventure data.js and create a dynamic form

const br = document.createElement('br');

for (let choice of adventures.choices) {

    const radio = document.createElement('input');
    const label = document.createElement('label'); 
    const span = document.createElement('span');
    // const div = 
    
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

form.addEventListener('submit', (e) => { // I want my namaste button to store user choice in localstorage
    e.preventDefault(); //prevents default behavior
    const formData = new FormData(form); //creates the bundle for easy access
    const selectionId = formData.get('choices');
    //go get the data about this choice
    const choice = findById(selectionId, adventures.choices);
    const yogi = JSON.parse(localStorage.getItem('YOGI'));
    const div = document.getElementById('results');
    //this changes the users chakra and crystals, += add and redifine at the same time
    
    //try to append these values into the header
    yogi.chakras += choice.chakra;
    yogi.crystals += choice.crystal;
    //use the selectionId to set the property dynamically, all adventures should be true
    yogi.completed[adventureId] = true; 
    div.textContent = choice.result;
    divHead.textContent = `You have: ${yogi.chakras} chakras and ${yogi.crystals} crystals!`;
    // divHead.childNodes[3].textContent = `You have: ${yogi.chakras} chakras and ${yogi.crystals} crystals!`;
    localStorage.setItem('YOGI', JSON.stringify(yogi));
});
backToMap.addEventListener('click', () => {
    
    window.location = '../Map';
});