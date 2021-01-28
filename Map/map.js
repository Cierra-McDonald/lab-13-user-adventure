import questData from '../data.js';

const ul = document.querySelector('ul'); 


for (let adventure of questData) {
    const li = document.createElement('li'); //creating a li in the dom
    const a = document.createElement('a');

    a.href = `../quest/?id=${adventure.id}`; // creating a link attribute so that each adventure will lead to its own quest page

    a.textContent = adventure.title; //grabbing my titles from questData
    li.append(a); 
    ul.append(li); //and putting them in my hamburger

}