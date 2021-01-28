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

console.log(adventures.description);