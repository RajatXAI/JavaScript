//* Print numbers from 1 to 10 using a for loop.

// for(let i = 1; i<=10; i++){
//     console.log(i);
// }

//* Print numbers from 10 to 1 using a while loop.

// let i = 10
// while(i >= 1){
//     console.log(i);
//     i--;
// }

//* Print even numbers from 1 to 20 using a for loop

// for(let i = 2; i<=20; i = i + 2){
//     console.log(i);
// }
//* Print odd numbers from 1 to 15 using a for loop

// for(let i = 1; i<=15; i = i + 2){
//     console.log(i);
// }

//* Print the multiplication table of 5 (i.e. 5 x 1 = 5)

// for(let i = 1; i <= 10; i++){
//     console.log(`5 x ${i} = ${5 * i}`);
// }

//* Find the sum of numbers from 1 to 100 using a loop.

// let sum = 0;
// for(let i = 1; i <= 100; i++){
//     sum = sum + i;
// }
// console.log(sum);

//* Print all numbers between 1 to 50 that are divisible by 3.

// for(let i = 1; i <= 50; i++){
//     if(i % 3 === 0 ){
//         console.log(i);
//     }
// }

//* Ask the user for a number and print whether each number from 1 to that number is even or odd.
//* (e.g., "1 is odd", "2 is even");

// let val = 20 //+prompt("Enter number : ");

// for(let i = 1; i <= val; i++){
//     if(i % 2 === 0){
//         console.log(`${i} is even`)
//     }else{
//         console.log(`${i} is odd`)
//     }
// }

//* Count how many numbers between 1 to 100 are divisible by both 3 and 5.

// for(let i = 1; i <= 100; i++){
//     if(i % 3 === 0 && i % 5 === 0){
//         console.log(`${i} number is divisible by 3 & 5`)
//     }
// }

//* Stop at First Multiple of 7 

//* Write a loop from 1 to 100 that:
//*     Prints each number
//*     Stops completely When it finds the first number divisible by 7

// for(let i = 1; i <= 100; i++){
//     console.log(i);

//     if(i % 7 === 0){
//         break;
//     }
// }

//* Skip Multiples of 3 

//* Write a loop from 1 to 20 that:
//*     Skips numbers divisible by 3
//*     Prints all others

//* Expected Output:
//* 1 2 3 4 5 7 8 10 11 ... (no 3, 6, 9, etc.)

// for(let i = 1; i <= 20; i++){
//     if(i % 3 === 0) continue;
//     console.log(i);
// }


//* Print First 5 Odd numbers only

//* Write a loop from 1 to 100 that:
//*     Prints only 5 odd numbers
//*     Then stops the loop

let count = 0;

for(let i = 1; i<= 100; i = i + 2){
    console.log(i);
    count++;
    if(count === 5) break;
}