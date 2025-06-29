// for (var i = 0; i < 10; i++) {
//   setTimeout(() => console.log(i), 1000);

// const { useState } = require("react");

//   //   In setTimepout setTimeout runs after the loop is finished (not in each iteration)
//   //   Var is global scope then same i varibale passed all three times
//   //   To solve this problem using let because it is block scop
//   //   console.log(i);
// }

// const users = [
//   { name: "Manisha", age: 22 },
//   { name: "Raj", age: 28 },
//   { name: "Simran", age: 24 },
// ];

// const filterdUsers = users.filter((user) => {
//   if (user.age < 25) {
//     console.log(user);
//   }
// });

// const filterdUsers = users.filter((user) => user.age < 25);

// console.log(filterdUsers);

// const [showToggle, setShowToggle] = useState(false)

// const handleToggle = () =>{
//     setShowToggle(!showToggle)
// }

// <button onClick={()=>handleToggle} className={showToggle ? "active" : ""}></button>

const users = [
  { name: "Manisha", age: 22 },
  { name: "Simran", age: 24 },
  { name: "Raj", age: 28 },
];

const newArray = users.map((user) => user.name);

console.log(newArray);

const products = [
  { name: "Shoes", price: 1200 },
  { name: "T-shirt", price: 800 },
  { name: "Bag", price: 1500 },
];

// let initialValue = 0;
// for take total price in reduce we use reduce method
// Reduce method is used to process the all element of an array into single value

// It works like this
// Step 1: 0 + 1200 → 1200
// Step 2: 1200 + 800 → 2000
// Step 3: 2000 + 1500 → 3500

const totalPrice = products.reduce((total, product) => {
  return total + product.price;
}, 0);

console.log(totalPrice);

// Reduce method
// array.reduce((accumulator, currentItem) => {
//   return updatedAccumulator;
// }, initialValue);

const numbers = [2, 4, 6, 8];

const mulNumbers = numbers.reduce((totalMul, number) => {
  return totalMul * number;
}, 1);

console.log(mulNumbers);

// *
// **
// ***
// ****

let n = 5;

// for (let i = 1; i <= n; i++) {
//   let stars = "*";
//   console.log(stars.repeat(i));
// }

// for (let i = 1; i <= n; i++) {
//   let stars = "*";
//   let space = " ";
//   console.log(space.repeat(n - i) + stars.repeat(i));
// }

for (let i = 1; i <= n; i++) {
  let stars = "* ";
  let space = "  ";
  console.log(space.repeat(n - i) + stars.repeat(i * 2 - 1));
}

// let m = 5;

// for (let i = n; i >= 1; i--) {
//   stars = "*";
//   let space = " ";
//   console.log(space.repeat(n - i) + stars.repeat(i));
// }

// for (let i = 1; i <= n; i++) {
//   let rowSt = "";
//   for (let j = 1; j <= i; j++) {
//     rowSt += "*";
//   }
//   console.log(rowSt);
// }

// for (let i = 1; i <= n; i++) {
//   let rowSt = "";
//   for (let j = 1; j <= i; j++) {
//     if (j === 1 || j === n || j === i) {
//       rowSt += "*";
//     } else {
//       rowSt += " ";
//     }
//   }
//   console.log(rowSt);
// }

// for (let i = 1; i <= n; i++) {
//   let rowSt = "";
//   for (let j = 1; j <= i; j++) {
//     if (j === 1 || j === i || i === n) {
//       rowSt += "*";
//     } else {
//       rowSt += " ";
//     }
//   }
//   console.log(rowSt);
// }

// let stars = "";
// for (let i = 0; i < 3; i++) {
//   stars += "*";
// }
// console.log(stars);

// console.log(i);

// this keyword
const person = {
  name: "Manisha",
  greet: function () {
    console.log("Hi, I'm " + this.name);
  },
};
// const greetFn = person.greet;
const greetFn = person.greet.bind(person);
greetFn();

// async await
console.log("Start");

async function fetchData() {
  console.log("Inside fetchData");
  return "Data received";
}

fetchData().then((data) => console.log(data));

console.log("End");

// start
// Inside fetchdata
// End
// Data revcived

// console.log(a);
// var a = 5;

// console.log(b);
// let b = 10;

console.log(typeof "0");
