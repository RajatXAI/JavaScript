// ? Function Declaration (Basic Understanding)

// function greet(name){
//     return `Hello ${name}`
// }

// console.log(greet("Rajat"))



// ? Let's move to the Practice Questions

//* Q1. Write a function addNumbers that takes two numbers and returns their sum.

// function addNumbers(a, b){
//     return Number(a) + Number(b) 
// }

// console.log(addNumbers(4, 5))

//* Q2. Create a function isEven that takes a number and returns true if it is even, otherwise false.

// function isEven(num){
//     return num % 2 === 0
// }

// console.log(isEven(4))

//* Q3. Write a function greetUser that takes a name and returns:"Welcome, <name>!"

// function greetUser(name){
//     return `Welcome,${name}!`
// }

// console.log(greetUser("Rajat"))

//* Q4. Create a function findSquare that returns the square of a number.

// function findSquare(num){
//     return num ** 2
// }

// console.log(findSquare(5))

//* Q5. Write a function checkAge that takes age as input and returns:

//* "Adult" if age >= 18

//* "Minor" otherwise

// function checkAge(age){
//     age = Number(age)
//     return age >= 18 ? "Adult" : "Minor"
// }

// console.log(checkAge(33))

//* Q6. (Hoisting Test)
//* Call a function before its declaration and log:
//* "Function hoisted successfully"

// check()

// function check(){
//     console.log("Function hoisted successfully")
// }

//* Q7. Write a function multiply that takes three numbers and returns their product.

// function multiply(a, b, c){
//     return (Number(a) * Number(b)) * Number(c)
// }

// console.log(multiply(2,3,4))

//* Q8. Create a function getMax that takes two numbers and returns the larger number.

// function getMax(num1, num2){
//     num1 = Number(num1);
//     num2 = Number(num2);
//     return num1 > num2 ? num1 : num2;
// }


// console.log(getMax(34, 5))

//* Q9. Write a function reverseString that takes a string and returns it reversed.

// function reverseString(str){
//     return str.split("").reverse().join("");
// }

// console.log(reverseString("Rajat"))

//* Q10. Create a function isPositive that returns true if a number is greater than 0, otherwise false.

// function isPositive(num){
//     num = Number(num);
//     return num > 0;
// }


// console.log(isPositive(-3))

//* Q11. Write a function countCharacters that returns the length of a given string.

// function countCharacters(str){
//     return str.length;
// }

// console.log(countCharacters("Rajat"))


//* Q12. Q6. (Hoisting Thinking)
//* Call a function before declaration and inside it:
//* log "Start"
//* log the square of 5
//* log "End"

// run();

// function run(){
//     console.log("Start");
//     console.log(5 * 5);
//     console.log("End");
// }
