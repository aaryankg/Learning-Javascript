// first way to define string 
const name = "aaryan"

const repoCount = 50

// console.log(name + repoCount + " Value"); this is old way to concatenate.

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// always use above way of concatenation because it is modern and easy way.


// this is another way to define string.
const gameName = new String('aaryan-hc-com')

// console.log(gameName[0]); to see 0th character 
// console.log(gameName.__proto__); to see string prototype method


// console.log(gameName.length);
// console.log(gameName.toUpperCase());

// charAt() : It provides the char value present at the specified index.
console.log(gameName.charAt(2));

// indexOF() : It provides the position of a char value present in the given string.
console.log(gameName.indexOf('t'));


// substring() : It is used to fetch the part of the given string on the basis of the specified index.
const newString = gameName.substring(0, 4) 

console.log(newString);

const anotherString = gameName.slice(-8, 4)
// slice method also accept negative index value.
console.log(anotherString);

const newStringOne = "   aaryan    "
console.log(newStringOne);
console.log(newStringOne.trim());
// trim() : It trims the white space from the left and right side of the string.

const url = "https://aaryan.com/aaryan%20gautam"

console.log(url.replace('%20', '-'))
// replace() : It replaces a given string with the specified replacement.

console.log(url.includes('sundar'))
// it checks specified character is present or not.

console.log(gameName.split('-'));
// split() : It splits a string into substring array, then returns that newly created array.