//? Practice Questions 

//* Q1. Create an array with 3 fruits and print the second fruit.

// let arr = ["Apple", "Mango", "Banana"]
// console.log(arr[1])


//* Q2. Add "Grapes" at the end and "Pineapple" at the beginning of this array 

// let arr = ["Apple", "Mango", "Banana"]
// arr.push("Grapes") //* yeh always items ko end me add karega
// arr.unshift("Pineapple") //* yeh always items ko starting me add karega
// console.log(arr)

//* Q3. Replace "Banana" with "Kiwi" in the array above.

// let arr = ["Apple", "Mango", "Banana"]
// arr[2] = "Kiwi"
// console.log(arr)

//* Q4. Remove the last item from this array using a method:

// let arr = ["Apple", "Mango", "Banana"]
// arr.pop() //* yeh method always last element ko hata deta hai
// console.log(arr)

//* Q5. Insert "Red" and "Blue" at index 1 in this arrya:

// let arr = ["Apple", "Mango", "Banana"]
// arr.splice(1,0, "Red", "Blue") 
// console.log(arr)

//* Q6. Extract only the middle 3 elements from this arrya

// let arr = [ 1, 2, 30, 40, 55, 6, 7,]
// let arr1 = arr.slice(2, 5)
// console.log(arr1)

//* Q7. Sort this array alphabetically and then reverse it:

// let names = ["Anil", "Zara", "Mira", "Doly"]
// names.sort().reverse()
// console.log(names)

//* Q8. Use .map() to square each number:

// let arr = [2, 7, 2, 9, 6]

// let arr1 = arr.map(function(val){
//     return val ** 2
// })

// console.log(arr1)

//* Q9. Use .filter() to keep numbers greater than 20:

// let arr = [ 11, 2, 3, 55, 6, 77, 8, 9, 10]

// let arr1 = arr.filter((val) => {
//     return val > 10
// })

// console.log(arr1)

//* Q10. Use .reduce() to find the sum of this array:

// let arr = [1, 2, 3, 4, 5, 6]

// let arr1 = arr.reduce((acc, val)=>{
//     return acc + val
// }, 0)

// console.log(arr1)

//* Q11. Use .find() to get the first number less than 10:

// let arr = [12, 3, 15, 2, 8, 20]

// let ans = arr.find((val)=>{
//     return val < 10
// })

// console.log(ans)

//* Q12. Use .some() to check if any student has scored below 35:

// let arr = [45, 60, 28, 90]

// let check = arr.some((val)=>{ // .some() method true or false return karta hai 
//     return val < 35 
// })

// console.log(check)

//* Q13. Use .every() to check if all numbers are even:

// let arr = [1, 2, 3, 4, 5, 6, 7, 8,]

// let check = arr.every((val) =>{ // .every() method true or false return karta hai 
//     return val % 2 === 0
// })

// console.log(check)

//* Q14. Destructure this array to get firstName and lastName

// let fullName = ["Rajat", "Saini"]

// let [firstName , lastName] = fullName

// console.log(firstName, lastName)

//* Q15. Merge two arrays using spread operator:

// let a = [1, 2]
// let b = [3, 4]

// let c = [...a, ...b]

// console.log(c)

//* Q16. Add "India" to the start of this arrya using spread:

// let countries = ["USA", "UK"]

// console.log("India", ...countries)

// * Q17. Clone this array properly  (not by reference):

// let arr = [1, 2, 3, 4, 5]

// let arr1 = [...arr]

// console.log(arr1)



let a = 10 
let b = 20 

console.log(a)

function greet(){

    console.log("Hello")
}

greet() 

console.log(b)
