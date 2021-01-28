import adventureData from '../data.js';

const ul = document.querySelector('ul'); 


for (let adventure of adventureData) {
    const li = document.createElement('li'); //creating a li in the dom
    const a = document.createElement('a'); //creating an anchor element in dom that will hold an href

    a.href = `../quest/?id=${adventure.id}`; // creating a link attribute so that each adventure will lead to its own quest page
    console.log(a);
    a.textContent = adventure.title; //grabbing my titles from questData
    li.append(a); 
    ul.append(li); //and putting them in my hamburger

}