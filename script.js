// Asynchronous JavaScript and XML

//First Asynchronous Code using the setTimeout function
// setTimeout(()=>{
//     console.log('1')
//     setTimeout(()=>{
//         console.log('2')
//         setTimeout(()=>{
//             console.log('3')
//             setTimeout(()=>{
//                 console.log('4')
//                 setTimeout(()=>{
//                     console.log('5')
//                 },1000)
//             },1000)
//         },1000)
//     },1000)
// },1000)

// console.log('The code is running');

//Promises In JavaScript
// Various ways to make requests in JS === 1.XMLHttpRequest 2.Fetch API 3.Async...await function
// We have 2 major requests we make ===>>
// 1. GET request: when you request info from the backend (request for info)
// 2. POST request: when you send a request to the backend (i.e send info)

//Consuming promises with the fetchAPI
// Fetch API is a browser API used for making and handling requests

// API endpoint ==>  https://restcountries.com/v3.1/name/{name}
function getCountry(country) {
  // const err = new Error('OOPS!! 🤡Not found')
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => alert(err.message));
}

// getCountry("ni4435525662a");
// getCountry("spain");
// getCountry("guinea");

// Important points in your API response
// 1. CORS => Cross Origin Resource Sharing
// 2. response status ===>

// Using the Async...await function
async function asyncGetCountry(country) {
  try {
    const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

// asyncGetCountry("jordan");

// try {
//     let name = 'jentry'
//     console.log(names)
// } catch (error) {
//     console.log(error)
// }

// TOPICS HANDLED IN JAVASCRIPT
// Variables and Data Types
// Conditionals and Loops
// Arrays (methods and properties)
// String methods **
// Number methods **
// Functions (fn declaration, anonymous fns, arrow fns)
// Scoping and Hoisting
// DOM Manipulation
// Async JavaScript

let fName = "Damola";
console.log(fName);
let lName = "Jentry";
console.log(lName);

// setTimeout(()=>{
//     console.log('Jumoke wants to sleep')
// }, 5000)

console.log('Code is runing')
// setTimeout(fn(){
    
// },5000)


