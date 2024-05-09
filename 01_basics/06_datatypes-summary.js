// Based on how it will stored and retrived, it is categerized in two groups.


//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

// Reference (Non primitive)

// Array, Objects, Functions



const id = Symbol('123')
const anotherId = Symbol('123')

// both id and anotherId are not same. whether both seems same value.
// symbol is used for unique identification

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n

// we use n at the end for bigInt


// Array

const heros = ["golu", "molu", "inshaan"];

// Object

let myObj = {
    name: "hitesh",
    age: 22,
}

// Function

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// js is dynamicaly type language because it check the data type at runtime 