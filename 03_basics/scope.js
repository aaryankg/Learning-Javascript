// when we declare a variable using var keyword. It become global. That's way we do'nt use var keyword

//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
 // Here the scope of a and b are within bracket only. Outside it, we can not access this variable a and b.
}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "aaryan"

    function two(){
        const website = "github"
        console.log(username);
    }
    // console.log(website); This statement will give error.

     two()

}

// one()

if (true) {
    const username = "aaryan"
    if (username === "aaryan") {
        const website = " github"
        // console.log(username + website);
    }
    // console.log(website); This statement will give error.
}

// console.log(username);  This statement will give error.


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5)) // We can call function like this, if we are using below function structure.

function addone(num){
    return num + 1
}


// Another way to declare a function.
addTwo(5) // This statement will give error. We can not call a function like this by this declaration.
const addTwo = function(num){
    return num + 2
}
