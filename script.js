var array = [
    {
        name: 'Gagan'
    },
    {
        name: 'Bist'
    }
]

//********   MAP FUNCTION TO PUSH VALUE IN NEW ARRAY  ******** */

var newArray = [];

this.newArray = array.map((res) => {
    return res.name;
})

console.log(' Old Array ', array);
console.log(' New Array ', this.newArray);