// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

// most of time we should avoid this type of comparision 
// because sometime it got conveted into zero and sometimes NaN

// equality check and comparision work diffrently
// comparision convert null to number and treating it as 0
// that's why null > o is false and null >= 0 is true

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === it also check datatypes

console.log("2" === 2);