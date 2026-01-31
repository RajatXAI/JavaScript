// ? Level 1: Basic Expressions

// ! What is the Output 

let a1 = 5 + 2 * 3 //* Ans -> 11
console.log(a1);  

let a2 = (5 + 2) * 3 //* Ans -> 21
console.log(a2);

let a3 = 10 / 2 + 3 //*  Ans -> 8
console.log(a3);

let a4 = 8 - 3 + 2 //* Ans -> 7 , In JS + aur - same precedence operators -> Left to Right evaluate hote hai,  
console.log(a4);

// * + and - 
// precedence same
// associativity left to right, So that's why answer is become is 7.

let a5 = "5" + 2; //* Ans -> 52, because of String concatenating
console.log(a5);

let a6 = "5" - 2 //* Ans -> 3, JS automatic convert string to number in - case
console.log(a6);

let a7 = true + 1 //* Ans -> 2, In JS true consider 1 so that's why answer is 1 + 1 = 2, Because true is become 1
console.log(a7);

let a8 = false + 10 //* Ans -> 10 In JS false consider 0 so that's why answer is 0 + 10 = 10 , Because false is become 0
console.log(a8);

/*----------------------------------------------------------------------------------------------------------------------------------*/

// ? Level 2: Type Coercion Expressions 

// ! What is the Output

let a9 = "10" * "2" //* Ans -> 20, Because of Type Coercion Js automatic convert string to number and calculate math expressions
console.log(a9);

let a10 = "10" + "2" //* Ans -> 102, Because JS + have two option one is perform mathematical operation and second is Js concatenating
console.log(a10);

let a11 = "10" - "2" //* Ans -> 8
console.log(a11);

let a12 = 10 + +"20" //* Unary + (type convert)
console.log(a12);

//!Step 1: Unary + pehle chalega
//Unary operators ki precedence zyada hoti hai than binary +.
// +"20" -> 20
//( String "20" → Number 20 )
//!Step 2: Ab expression bacha
// 10 + 20
//!Step 3: Addition
// 30

let a13 = 10 + true //* Ans -> 10 + 1 = 11
console.log(a13)

let a14 = null + 5 //* Ans -> 0 + 5 
console.log(a14)

let a15 = undefined + 5 //* Ans -> NaN
console.log(a15)


//? Level 3: Comparison Expressions
//! What is the Output

let a16 = 5 == "5" //* Ans -> true
console.log(a16);

let a17 = 5 === "5" //* Ans -> false
console.log(a17);

let a18 = null === undefined //* Ans -> false
console.log(a18);

let a19 = 0 == false //* Ans -> true 
console.log(a19);

let a20 = 0 === false //* Ans -> false 
console.log(a20);

//== (loose equality)
// Type convert karta hai
// Compare karne se pehle values ko same type me laata hai
// Steps:
// false -> 0
// 0 == 0 -> true

//===(strict equality)
// No type conversion
// Value are type dono check karta hai
// false (boolean)
//0 (number)
// Types different -> false


//? Level 4: Logical Expressions
//! What is the Output

let a21 = true && false //* Ans  -> false
console.log(a21);


let a22 = true || true //* Ans -> true
console.log(a22);


let a23 = false || "Hello" //* Ans -> Hello
console.log(a23);

let a24 = "" && "JS" //* Ans -> blank string 
console.log(a24);

let a25 = !true + 2 //* Ans -> 2
console.log(a25);


//? LEVEL 5: Increment / Decrement Expressions (🔥 Very Important)
//! What is the Output

let x = 5;
x++;
console.log(x); //* 6

let x1 = 5
++x1;
console.log(x1); //* 6

let x2 = 5
let y = x2++ + 2;
console.log(y); //* 7

let x3 = 5;
let y1 = ++x3 + 2;
console.log(y1); //* 8

let x4 = 10;
let y2 = x4-- + --x4;
console.log(y2); //* 18



