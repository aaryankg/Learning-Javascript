const user = {
    username: "aaryan",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}
// This keyword is used to access values of current context.

//NOTE:
//When we print only 'this' keyword in node environment. It refers to empty object. 
// And when we print only 'this' keyword in browser. Then it refers to window object.

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

//When we print only this keyword in a function, It gives a globle object containing many things.
// function chai(){
//     let username = "aaryan"
//     console.log(this.username); // but this does not work in the function like object.
// }

// chai()

// const chai = function () {
//     let username = "aaryan"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "aaryan"
    console.log(this);
}


// chai()

// Arrow function:
// this keyword does not work in the arrow function. When we try to print this keyword in the arrow function, it results empty object.

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// NOTE: When we use curly brackets, it will be an explicit return, meaning we have to define the return explicitly.
// When we use parenthesis, then we do not need to write return. It will be handled by Js. It is also known as implicit return.

// const addTwo = (num1, num2) =>  num1 + num2
// OR
// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "aaryan"})


console.log(addTwo(3, 4))


