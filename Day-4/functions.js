//? Callback + Closures Function Practice

//* LEVEL 1 - Controlled Counter System

//* Q1. Create a Secure Counter System

//* Goal:
//* Create a Function createCounter

//* Requirements:
//* It should NOT expose the count variable directly
//* It should return an object with:
//* increment(callback)
//* decrement(callback)
//* getValue()

//* BEHAVIOR:
//* count must be private(closure)
//* Every time increment/descrement runs:
//* Update count
//* Execute callback and pass updates count

//     function backAccount(){
//         let balance = 1000

//         return {

//             deposite(amount){
//                 balance += amount
//                 console.log(`You are deposite ${amount} rupee and you updated balance is : ${balance}`)
//             },

//             withdraw(amount){
//                 balance -= amount
//                 console.log(`You are withdwar ${amount} rupee and you updated balance is : ${balance}`)
//             },

//             currentBalance(){
//                 console.log(`Your current balance is : ${balance}`)
//             }
//         }
//     }

// function doTransaction(){

//     const account = backAccount() // closure created

//     account.deposite(2000)
//     account.withdraw(200)
//     account.currentBalance()
// }

// doTransaction()

//? Nested closure question

// function outer() {
//     let count = 0;

//     return function inner() {
//         count++;
//         console.log(count);

//         return function deeper() {
//             count++;
//             console.log(count);
//         };
//     };
// }

// const fn = outer(); // outer function call & return inner function & assign to the fn * also remember count value = 0

// const a = fn(); // inner funtion call & deepar funtion assign to the a * also remember count value = 1
// const b = fn(); // same -> inner funtion call & deepar funtion assign to the b * also remember count value = 2

// a(); // last deeper function call & return undefined * also remember last count value = 2 and then count value is = 3
// b(); // last deeper function call & return undefined * also remember last count value = 3 and then count value is = 4

//? Tumhe ek aisa system banana hai jisme ek variable (jaise password ya balance) direct access nahi hona chahiye.
//? 👉 Requirements:
//? direct access ❌
//? sirf controlled functions ke through access ✔️
//? 👉 Socho:
//? closure ka use kahan hoga?

// function systemCheck(){
//     const pass = 1234

//     return function check(check){

//         if(isNaN(check)) return console.error("Plase enter first your passward");

//         if(pass===check)return console.log("Access Granted");
//         return console.log("Access Denaid!")
//     }
// }

// const system = systemCheck();

// // Enter passward First
// system("1234");

//? Ek web page me button hai. Har click pe count badhna chahiye.
//? 👉 Requirements:
//? global variable use nahi karna
//? multiple buttons ho sakte hain
//? 👉 Socho:
//? har button ka count alag kaise hoga?

// function countCheck(){

//     let count = 0

//     return function counter(){
//         count++
//         console.log(count)
//     }

// }

// function button(){
//     const btn = countCheck()
//     btn()
//     btn()
// }

// button()
// button()

//? Tum ek function bana rahe ho jo configuration accept karta hai (jaise tax rate, discount, etc.) aur ek naya function return karta hai.
//? 👉 Question:
//? returned function configuration kaise yaad rakhega?

// function configuraiton(a){
//     return function(b){
//         return function(c){

//             console.log(a,b,c)
//         }
//     }
// }

// let check = configuraiton(1)(3)
//  check(4)

//? Ek function banao jo message le
//? callback ke through delay ke baad print kare

// function mesg(msg){
//     setTimeout(() => {
//         console.log(msg)
//     },1000);

// }

// mesg("Hello")

//? Ek function banao jo ek number le aur ek function return kare
//? returned function dusra number le
//? dono numbers multiply kare

// function check(num1){
//     return function(num2){
//         let mul = num1 * num2
//         return mul
//     }
// }

// let checkResult = check(2);

// console.log(checkResult(3));

//? Ek function banao jo:
//? ek callback le
//? ek delay le
//? delay ke baad callback run kare

// function check(callback, delay) {
//   setTimeout(callback, delay);
// }

// check(function () {
//     console.log("Hello");
//   },2000);

//? Counter banao jo:
//? ek limit le
//? limit ke baad increment na kare


// function counter(){
//   let count = 0;

//   return function(){
//     if(count >= 6){
//       return "Limit reached";
//     }
//     return ++count;
//   }
// }

// let check = counter();

// console.log(check()); 
// console.log(check()); 
// console.log(check()); 
// console.log(check()); 
// console.log(check()); 
// console.log(check()); 
// console.log(check()); 


//? Ek function banao jo:
//? ek secret value store kare
//? sirf ek function ke through read/update ho

// function checkCurrentStatus(){
//   let secretVal = 1234

//   return{
//     read(){
//       return secretVal;
//     },
//     update(upd){
//       return secretVal = upd
//     }
//   }
// }

// let check = checkCurrentStatus()

// console.log(check.read())
// console.log(check.update(2345))


//? Ek function banao jo:
//? ek callback le
//? ek number n le
//? callback ko n times run kare


// function takes(callback, n){

//     for(let i = 1; i<=n; i++){
//       callback(i);
//     }

// }

// takes(function(e){
//   console.log(`Callback run : ${e} times`)
// },6)



//? Ek function banao jo:
//? har input store kare
//? ek function return kare jo history dikha sake

// function historyTracker(...inp){
//   let input = inp

//   return input

// }

// console.log(`Input History => ${historyTracker("rajat", 1,2,3,true)}`)

//? Username Generator
//? Ek function:
//? input: full name "Rohit Sharma"
//? output: "rohit_123" (first name lowercase + random number)

// function userName(fullName){
//     const first = fullName.trim().toLowerCase().split(" ")[0];
//     const random = Math.floor(Math.random() * 1000);

//     console.log(`Your FullName is : ${fullName} ...and\nYour userName is now : ${first}_${random}`);
// }

// userName("Rajat Saini");
// userName("Anil");



// function useState(initialValue) {

//   let state = initialValue;

//   return [
//     function getState() {
//       return state;
//     },
//     function updateValue(newValue) {
//       state = newValue;
//     }
//   ];
// }

// const [getState, updateValue] = useState(0);


// updateValue(10);

// console.log(getState());