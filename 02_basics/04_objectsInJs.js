// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);
// use this, it is modern way of cancetination.

const users = [
    {
        id: 1,
        email: "aaryan@gmail.com"
    },
    {
        id: 1,
        email: "aaryan@gmail.com"
    },
    {
        id: 1,
        email: "aaryan@gmail.com"
    },
]
// It is an array of Object.
users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// It create an array of objects having keys as element.
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));
// It checks isLoggedIn key is present or not.



const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor // Writing again and again like this become hectic so we use following method to disturcture.
// {} It is used for destructering 
const {courseInstructor: instructor} = course
// Above extracting courseInstructor from course.
// We can also rename for our convience without changing original key name.
// console.log(courseInstructor);
console.log(instructor);


// This is how JSON look.
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// [
//     {},
//     {},
//     {}
// ]

