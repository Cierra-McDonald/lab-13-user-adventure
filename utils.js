
export function findById(id, array){
    for (let i = 0; i < array.length; i++) {
        const item = array[i];

        if (id === item.id) {

            return item;

        }

    }
}
export function renderYogiScore(yogi) {//will render the yogi score chakras and crystals) to the header
    const divHead = document.querySelector('life-tracker');
    divHead.textContent = `You have: ${yogi.chakras}chakras and ${yogi.crystals} crystals!`;

    return;
}