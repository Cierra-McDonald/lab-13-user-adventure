
export function findById(id, array){
    for (let i = 0; i < array.length; i++) {
        const item = array[i];

        if (id === item.id) {

            return item;

        }

    }
}