import adventure from '../data.js';
const ul = document.querySelector('ul'); 

const mapImg = document.createElement('img');
//this checks if a quests has been completed or not
const yogi = JSON.parse(localStorage.getItem('YOGI'));
let completedQuests = true;
for (let adventures of adventure) {
    if (!yogi.completed[adventures.id]) {
        completedQuests = false;
    }
}

//if yogi chakras is less than or equal to 0 OR they have completed the quests redirect to the home page
if (yogi.chakra <= 0 || completedQuests) {
    window.location = '../Results/index.html';
}

for (let adventures of adventure) {
    const li = document.createElement('li'); //creating a li in the dom
    const a = document.createElement('a'); //creating an anchor element in dom that will hold an href

    mapImg.src = '../assets/map.png';
    a.href = `../quest/?id=${adventures.id}`; // creating a link attribute so that each adventure will lead to its own quest page
    a.textContent = adventures.title; //grabbing my titles from questData
    ul.append(mapImg);
    li.append(a); 
    ul.append(li); //and putting them in my hamburger

}