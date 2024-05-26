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

// In JavaScript, when comparing values using comparison operators like `<`, `>`, `<=`, and `>=`, the values being compared are converted to numbers before the comparison is made. When comparing a value like `undefined` to a number, the `undefined` value cannot be converted to a valid number, so it results in a special case where the comparison is not valid.

// When you use `undefined < 0`, JavaScript tries to convert `undefined` to a number before comparing it to `0`. However, since `undefined` cannot be converted to a valid number, this operation results in `NaN` (Not-a-Number). Any comparison involving `NaN` will always return `false` because `NaN` is not less than, greater than, or equal to any other value, including `0`.

// Therefore, `console.log(undefined < 0);` outputs `false` because the comparison involving `undefined` and `0` results in `NaN`, and any comparison with `NaN` will consistently return `false`.


// === it also check datatypes

console.log("2" === 2);