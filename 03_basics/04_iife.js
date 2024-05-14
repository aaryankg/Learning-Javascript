// Immediately Invoked Function Expressions (IIFE)
// It is used to avoid when globle scope variable cause problem to some function.
// and it is also used when we want to run a function immediately.


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

// Here semicolumn is required to stop execution of first iife. so that we can run our second iife.
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')

