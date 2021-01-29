const yogi = JSON.parse(localStorage.getItem('YOGI'));



const resultSpan = document.getElementById('result-story');
const playAgainButton = document.getElementById('play-again'); 

resultSpan.textContent = resultMessage(); 


function resultMessage() { 
    if (yogi.chakra <= 0) {
       
        return `${yogi.nam} are still working through barrieres and need to practice self-love, acceptance, and peace, don't forget to breathe`;
    } else {
        return 'You unblocked all 7 chakras, you are living in harmony with thyself, environment and world!';
    }
    
}
playAgainButton.addEventListener('click', () => { //I want to clear the game and clear local storage, go back to home page
    window.localStorage.clear();
    // userYogi = { 
    //     name: '',
    //     character :  
    //     chakras : 7, 
    //     crystals : 0, 
    //     completed: {},
    // }
    window.location = '../index.html';
});