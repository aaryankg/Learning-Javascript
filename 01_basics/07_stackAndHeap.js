
// stack (primitive)
// heap (non primitive)
// primitives values are stored in stack and non primitive in heap.

// NOTE

// In JavaScript, functions are indeed stored in the heap. When you define a function in JavaScript, it is stored as an object in memory, and objects in JavaScript are allocated memory in the heap.

// When a function is declared, the function definition along with its lexical environment (variables, scopes, etc.) is stored on the heap. When the function is called, the function call information, parameters, and local variables are stored on the call stack.

// So, while the function itself is stored in the heap, the call stack is used to keep track of the function calls and their execution.


// example of primitive 

let myName = "Aaryan Kumar Gautam"

let anotherName = myName

anotherName = "chaiandcode"

console.log(myName);
console.log(anotherName);


// it will not change because copy of variable is given, not the refrence of original vairable.

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






