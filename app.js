// import functions and grab DOM elements
// const 'YOGI' = YOGI; 

const yogiForm = document.getElementById('form'); //I am puttin my html element in DOM

// initialize state

// set event listeners to update state and DOM
yogiForm.addEventListener('submit', (e) => { //on submit I am...
    e.preventDefault(); //preventing default behavior

    const formData = new FormData(yogiForm); // making a formData bundle for easy access in the future

    const userYogi = { // creating an object of the user input that is put in by the user along with three default values 
        name : formData.get('name'),
        character : formData.get('character'),
        chakras : 7,
        crystals : 0,
        completed: {},
    };
    const stringyUser = JSON.stringify(userYogi);
    localStorage.setItem('YOGI', stringyUser);
    
    window.location = '../Map';

});