const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)
// it modify existing array

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// it return a new array. 
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]
// it is modern way of array concatination

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
// instead of using infinity, we should always specify depth.
console.log(real_another_array);



console.log(Array.isArray("Hitesh"))
// it checks given value is array or not 
console.log(Array.from("Hitesh"))
// it make array from given things.
console.log(Array.from({name: "hitesh"})) // interesting
// it does not convert object to an array directly. 
// we have to specify whether we want to convert into array based on key or value.

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
// it make array from set of element.