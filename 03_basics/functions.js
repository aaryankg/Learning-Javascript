// Basic function foramte
function sayMyName(){
    console.log("A");
    console.log("A");
    console.log("R");
    console.log("Y");
    console.log("A");
    console.log("N");
}

// sayMyName()
// sayMyName is refrence to function and sayMyName() execution of function.


// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result

    // Or
    
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username){
    if(!username){
        console.log("PLease enter a username");
        return
        // If some statement are written after return. It will not execute.
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("aaryan"))

function loginUserMessage2(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
        // If some statement are written after return. It will not execute.
    }
    return `${username} just logged in`
}

// We can give default name like sam etc. If user does not enter his/her name. It will print. 
// And  If condition will not execute. Because username will be never undefined.

// console.log(loginUserMessage("aaryan"))



function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))
// Rest operator (...) : We can take many agruments using rest operator.


// Passing object in function.
const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)

// We can also pass object direclty as a argument.
handleObject({
    username: "sam",
    price: 399
})


// Passing array in function
const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));
// We can also pass array in function directly.