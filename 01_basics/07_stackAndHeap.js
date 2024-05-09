
// stack (primitive)
// heap (non primitive)
// primitives values are stored in stack and non primitive in heap.

// example of primitive 

let myName = "Aaryan Kumar Gautam"

let anotherName = myName

anotherName = "chaiandcode"

console.log(myName);
console.log(anotherName);


// it will not change because copy of variable is given not the refrence of original vairable.

// example of non primitive 

let userOne = {
    email : "aaryan@gmail.com"
}

let userTwo = userOne

userTwo.email = "akg@gmail.com"

console.log(userOne.email)
console.log(userTwo.email);

// whenever some value stored in heap, refrence is given to variable. 
// if anything will change to userTwo.
// It will be change in userOne because they point same value.






