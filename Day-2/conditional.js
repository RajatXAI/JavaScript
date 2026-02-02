// ? BEGINNER (if / else)

//* Write a program to check whether a number is positive, negative, or zero.
//  const rl = require("../Utils/rl")

// rl.question("Enter number: ", function(n){
//     let num = Number(n)
//     if(num === 0) return done("Number is zero");
//     if(num > 0) return done("Number is positive");
//     return done("Number is negative");


//     function done(msg){
//         console.log(msg);
//         rl.close();
//     }
// })



//* Write a program to check whether a number is even or odd.

// rl.question("Enter number: ", function(n){
//     let num = Number(n)
    
//     if(num % 2 === 0)return check("Even");
//     return check("Odd");

//     function check(msg){
//         console.log(msg);
//         rl.close();
//     }
// })

//* Write a program to check whether a person is eligible to vote (age ≥ 18).

// rl.question("Enter age: ", function(n){
//     let age = Number(n)
//     if(age >= 18)return check("Person is eligible to vote");
//     return check("Person is not eligible to vote");

//     function check(msg){
//         console.log(msg);
//         rl.close();
//     }
// })
//* Write a program to find the greater of two numbers.

// rl.question("Enter first number: ", function(fn){
//     rl.question("Enter second number: ", function(sn){
//         let first = Number(fn)
//         let second = Number(sn)

//         if(first > second) return check(first+" : is greater")
//         if(second > first) return check(second+": is grater") 
//         return check("Both are equal")
//     })

//     function check(msg){
//         console.log(msg)
//         rl.close();
//     }
// })


//* Write a program to check whether a number is divisible by 5.

// rl.question("Enter number: ", function(n){
//     let num = Number(n)

//     if(num % 5 === 0) return check(num+" : number divisible by 5")
//     return check(num+" : number is note divisible by 5")

//     function check(msg){
//         console.log(msg)
//         rl.close();
//     }
// })

//* Ask user for password and print access status, Hardcoded correct password. Compare with user input.

// rl.question("Enter password : ", function(paw) {
//     let userPaw = Number(paw);
//     let password = 2345;
//     if(userPaw === password) return check("Access")
//     return check("Access Denied")

//     function check(msg){
//         console.log(msg)
//         rl.close();
//     }
// })

//* Allow only 3 attempts to enter correct password, If user gets it right early, stop. If not → “Account locked”
 
// let setPwd = 3478;
// let attempts = 1;

// while (true) {

//     let input = prompt("Enter password : ");
//     if (input.trim() === "") {
//         alert("Input cannot be empty");
//     } 
//     else if (!/^\d+$/.test(input)) {
//         alert("Please enter only number");
//     } 
//     else {
//         let userPwd = Number(input);

//         if (userPwd === setPwd) {
//             alert("Welcome Back");
//             break;
//         }
//         if (attempts === 3) {
//             alert("Account Locked");
//             break;
//         }
//         attempts++;
//     }
// }


//* Ask user for words until they type “stop”. Count how many times they typed “yes”, Loop until "stop" is typed. Count "yes".

// let count = 0;
// while(true){
    
//     let input = prompt("Enter word: ").trim().toLowerCase();
//     if(input === "yes"){
//         count++
//     }
//     else if(input === "stop"){
//         alert(`You type (Yes): ${count} times`)
//         break;
//     }
// }