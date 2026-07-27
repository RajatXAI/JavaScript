//? Practice Questions

//* Q1. Create an object for a student with name, age and isEnrolled.

// let obj = {

//     name: "Rajat Saini",
//     age : 24,
//     isEnrolled : true
// }

// console.log(obj)

//* Q2. Can an Object key be a number or boolean : 

// let obj = {

//     ture : "yes",
//     24 : "answer",
// }

// console.log(obj[24])

//* Q3. Access the value of "first-name" from this objects:

// const obj = {
//     "first-name" : "Rajat"
// }

// console.log(obj["first-name"])
// console.log(obj.first-name) // dot ke sath not allowend (-)

//* Q4. Given a dynamic key let key = "age", how will you access use [key]:

// let key = "age" 
// const user = {
//     age : 26, 
// }

// console.log(user[key])

//* Q5. From the object below, print the latitude:

// const location = {
//     city : "Meerut",
//     coordinates: {
//         lat : 23.2,
//         lan : 77.4,
//     },
// }

// console.log(location.coordinates.lat)

//* Q6. Destructure the city and lat from the location object above:

// let {city} = location
// let{lat} = location.coordinates
// console.log(city, lat)

//* Q7. Destructure the "first-name" as a varibale called firstName:

// const obj = {
//     "first-name" : "Rajat"
// }

// let {"first-name" : firstName} = obj
// console.log(firstName)

//* Q8. Use for-in to log all keys in this object:

// const course ={
//     title : "JavaScript",
//     duration: "4 weeks"
// }

// for(let key in course){
//     console.log(key, course[key])
// }

//* Q9. Use Object.entries() to print all key-value pair as: 

// const course ={
//     title : "JavaScript",
//     duration: "4 weeks"
// }

// Object.entries(course).forEach((val) =>{
//     console.log(val[0] + ": " + val[1])
// })


//? Destructuring
// ? JavaScript Object Destructuring Practice Set - 01

// * Question 1 - User Profile
// * Problem Statement

// * Tum ek social media application bana rahe ho. API se ek user object mila hai. Tumhe sirf user ka naam aur age profile page par dikhani hai.

// * Task

// Destructuring ka use karke:

// name
// age

// alag variables me store karo.

// Uske baad console me dono print karo.

// Expected Output
// Rajat
// 22


// const user = {

//     name: "Rajat Saini",
//     email: "rajat@gmail.com",
//     password: "R@jat90"
// }

// const {name, email} = user
// console.log(name, email); 
// It's work not dobut but not professional way 


// console.log({name, email});
// this is the professional way and follow indstury standard



// * Question 2 - Employee Dashboard
// * Problem Statement

// * Company ke HR dashboard me employee ka data aaya hai. Lekin frontend developer ko employeeName aur employeeSalary naam ke variables chahiye.

// * Task

// Destructuring ka use karke

// name ko employeeName
// salary ko employeeSalary

// rename karo.

// Console me dono print karo.

// Expected Output
// Amit
// 50000

// const employee = {
//     name: "Amit",
//     salary: 50000,
//     department: "IT"
// };

// const {name: employeeName, salary:employeeSalary} = employee


// console.log({employeeName, employeeSalary});


// * Question 3 - Product Page
// * Problem Statement

// * Ek e-commerce website me kabhi-kabhi API discount bhejti hai aur kabhi nahi.

// * Task

// Destructuring ka use karke

// name
// price
// discount

// nikaalo.

// Agar discount exist nahi karta to uski default value 0 honi chahiye.

// Console me tino values print karo.

// Expected Output
// iPhone 16
// 85000
// 0

// const product = {
//     name: "iPhone 16",
//     price: 85000
// };

// const {name: productName, price: productPrice, discount = 0} = product

// console.log({ productName, productPrice, discount });

// * Question 4 - Student Details
// * Problem Statement

// * School management system me student ka data aaya hai. Tumhe sirf student ka naam alag chahiye. Baaki sari information ek alag object me store karni hai.

// * Task

// Destructuring ka use karke

// name
// baaki properties studentInfo object me store karo.

// Console me dono print karo.

// Expected Output
// Rahul

// {
//  age:19,
//  course:"BCA",
//  city:"Delhi"
// }



// const student = {
//     name: "Rahul",
//     age: 19,
//     course: "BCA",
//     city: "Delhi"
// };


// const {name, ...studentInfo} = student

// console.log({name, studentInfo});



// * Question 5 - Delivery Address
// * Problem Statement

// * Ek shopping website par order details aayi hain. Address ek nested object ke andar hai. Delivery page par sirf city aur pincode dikhana hai.

// * Task

// Nested destructuring ka use karke

// city
// pincode

// alag variables me store karo.

// Console me print karo.

// Expected Output
// Noida
// 201301

// const order = {
//     id: 101,
//     customer: "Rajat",
//     address: {
//         city: "Noida",
//         state: "UP",
//         pincode: 201301
//     }
// };

// const {address} = order
// const {city, pincode} = address

// const {address : {city, pincode}} = order

// console.log({city, pincode}) 




