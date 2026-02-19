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
