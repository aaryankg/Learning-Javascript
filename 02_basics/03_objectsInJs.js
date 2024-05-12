// there are two ways to declare objects. 
// 1) literals 
// 2) constructor

// when we declare objects by constructor then it be singleton. But not with literals declaration

// Object.create   it is constructor method



// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Aaryan",
    "full name": "Aaryan Kumar Gautam",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
// to make symbol as key, we use []. 

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "aaryan@chatgpt.com"
// Object.freeze(JsUser) it is syntax to freeze objects. After this no change will occur to that object.
JsUser.email = "aaryan@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());