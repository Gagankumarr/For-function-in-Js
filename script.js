let array = [
    {
        name: 'Gagan'
    },
    {
        name: 'Bist'
    }
]

//********   For  function TO PUSH VALUE IN NEW ARRAY  ******** */

let newArray = [];

for (let i = 0; i < array.length; i++) {
    let newList = array[i].name;
    console.log(newList);
    newArray.push(newList);
}

console.log(' Old Array ', array);
console.log(' New Array ', newArray);

