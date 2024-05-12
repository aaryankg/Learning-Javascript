// array

// In javascript, arrays are resizable and can store values of different types.
// JavaScript array-copy operations create shallow copies. 

// first way to define array
const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["KungfuPanda", "Superman"]

// second way to define array
const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6) it push element at the end of array.
// myArr.push(7)
// myArr.pop() it pop element at the end.

// myArr.unshift(9) it push element at start
// myArr.shift() it pop element at start 

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()
// it convert array element into string formate 
// console.log(myArr);
// console.log( newArr);


// slice, splice
// slice does not manuplate original array but splice does.
console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)
// slice(1,3) it will not include 3rd index value.

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
// splice remove element based on specified indexes.
// splice(1,3) it will remove element from index 1 to 3 from original array and create a new array.

console.log("C ", myArr);
console.log(myn2);