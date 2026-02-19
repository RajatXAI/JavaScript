//? Arrow Function - Basic Syntax

//* Normal Function Expression : 

// const add = function(a, b){
//     return Number(a) + Number(b)
// }

//* Arrow Function 

// const add = (a, b) =>{
//     return Number(a) + Number(b)
// }

//? Shortcut Syntax

//* 1. Single line return 

// const add = (a, b) => a + b; //* If is only expression so no need of return statement

//* 2. Single Parameter 

// const square = num => num ** 2;

//* No parameter

// const greet = () => "Hello"


//? Here we start the question practice 

//* Ex. Convert this function into an arrow function:
//! function add(a, b){
//!     return a + b;
//! }


// const add = (a, b) => a + b;
// console.log(add(2, 4))

//* Q1. Write an arrow function double that returns double of a number.

// let double = num => num * 2;
// console.log(double(4))

//* Q2. Create an arrow function isPositive that returns true if a number is greater than 0.

// let isPositive = num =>{
//     return Number(num) > 0
// }

// console.log(isPositive(4))

//* Q3. Write an arrow function getLength that returns the length of a string.

// let getLength = str => str.length
// console.log(getLength("Rajat"))

//* Q4. Create an arrow function multiply that takes three numbers and returns their product.

// let multiply = (a, b, c) => {
//     return Number(a) * Number(b) * Number(c)
// }

// console.log(multiply(2,3,4))

//* Q5. Write an arrow function with no parameters that returns the current year.

// let currentYear = () => "2026"
// console.log(currentYear())

//* Q6. Write an arrow function getMax that returns the largest of two numbers using ternary.

// let getMax = (a, b) => {
//     return Number(a) > Number(b) ? `${a}` : `${b}`
// }

// console.log(getMax(4,9))

//* Q7. Create an arrow function isEvenOrOdd that returns:
//* "Even" if number is even
//* "Odd" otherwise

// let isEvenOrOdd = num => Number(num) % 2 === 0 ? `Even` : `Odd`
// console.log(isEvenOrOdd(45))

//* Q8. Write an arrow function greetUser that returns:
//* "Good Morning, <name>" if name is provided
//* "Good Morning, Guest" otherwise

// const greetUser = name => name ? `Good Morning, ${name}` : "Good Morning, Guest";
// console.log(greetUser())

//* Q9. Create an arrow function squareIfPositive:
//* return square if number > 0
//* otherwise return 0

// let squareIfPositive = (num)=>{
   
//     num = Number(num)
//     return num > 0 ? num ** 2 : 0
// }
// console.log(squareIfPositive(2))

//* Q10. Write an arrow function checkRange:
//* return "Small" if number < 10
//* "Medium" if 10–50
//* "Large" if > 50

// let checkRange = (num) =>{

//     num = Number(num)
//     return num < 10 ? "small" : num > 10 && num < 50 ? "Medium" : "Large"
    
// }

// console.log(checkRange(33))