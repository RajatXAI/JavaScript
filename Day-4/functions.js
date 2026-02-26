//? Callback Function

//* Q1. Write a function execute that takes a function as a parameter and calls it.

// function execute(cb){
//     cb();
// }

// execute(function(){
//     console.log("Executed")
// });

//* Q2. Create a function calculate that takes three parameters:
//* two numbers
//* one callback function
//* The callback decides the operation.

// function calculate(a, b, operation){
//     operation(Number(a), Number(b))
// }

// calculate(4, 5, function(a, b){
//     console.log(a + b)
// })

//* Q3. Write a function greetUser that takes name and callback.
//* Callback should modify the name before printing.

// function greetUser(name, callback){
//     name = "Saloni Saini"
//     callback(name);
// }

// greetUser("Rajat", function(modifyName){
//     console.log(modifyName)
// })

//* Q4. Use forEach with an arrow callback to print squares of numbers in [1,2,3,4].

// let arr = [1,2,3,4]
// arr.forEach((val)=>{
//     console.log(val ** 2)
// })

//* Q5. Write a function runTwice that takes a callback and executes it two times.

// function runTwice(callback){
//     callback();
//     callback();
// }

// runTwice(function(){
//     console.log("Execute")
// })

//* Q6. Create a function greet that takes a name and a callback.
//* The callback should transform the name before printing it.
//* Example idea:
//* original: "rajat"
//* callback makes it uppercase

// function greet(name, callback){
//     callback(name.toUpperCase());
// }

// greet("Rajat Saini", function(uppercase){
//     console.log(uppercase)
// })

//* Q7. Write a function applyOperation that takes:
//* two numbers
//* one callback
//* Return the result of the callback.

// function applyOperation(a, b, callback){
//     callback(Number(a), Number(b));
// }

// applyOperation(4,5, function(x, y){
//     console.log( x ** y)
// })

//* Q9. Use rest parameter to accept any number of scores and return the total.

// function getScore(...scores){
//     let total = 0;
//     scores.forEach(function(val){
//         total = total + val
//     })

//     return total
// }

// let sum = getScore(1,2,3,4,5,6)

// console.log(sum)

//* Q10. Fix the funtion with early return
//* function checkAge(age){
//*     if(age < 18){
//*         console.log("Too young")
//*     }else{
//*         console.log("Allowed")
//*     }
//* }

// const checkAge = (age) => age < 18 ? "Too young" : "Allowed";
// console.log(checkAge(20))

//* Q11. Create a function processArray that takes:
//* an array
//* a callback
//* Apply the callback to each element using a loop (not map).

// let num = [1, 2, 3, 4, 5];

// function processArray(arr, callback) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     result.push(callback(arr[i]));
//   }
//   return result;
// }

// let squared = processArray(num, function (num) {
//   return num * num;
// });

// console.log(squared);



//* Q13. Create your own version of map:
//* Function name: CustomMap
//* It should take array + callback and return a new transformed array.

// let arr = [1, 2, 3, 4];
// function customMap(arr, callback) {
//   callback();
// }

// customMap(arr, function (newArr) {
//   console.log(newArr);
// });

