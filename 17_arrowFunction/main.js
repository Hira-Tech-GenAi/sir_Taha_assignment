"use strict";
// Basic Arrow Functions Question:
// Define a Arrow function called greet that takes a parameter name and returns a greeting message including the provided name. Then, call the greet Arrow function with the argument "John" and log the result to the console.
Object.defineProperty(exports, "__esModule", { value: true });
let greet = (name) => {
    return `Hello ${name} `;
};
let greetMassage = greet("John");
console.log(greetMassage);
// Arrow Function Return Value Question:
// Write a JavaScript Arrow function named calculateArea that takes two parameters: length and width, representing the length and width of a rectangle respectively. The Arrow function should calculate the area of the rectangle and return the result.
const calculateArea = (length, width) => {
    return length * width;
};
let result = calculateArea(5, 3);
console.log(result);
// Provide an example of calling this Arrow function with values 5 for length and 3 for width, and then print the result.
// Default Parameter Arrow Function Question:
// Create a JavaScript Arrow function named greet that accepts two parameters: name and greeting. The Arrow function should return a greeting message using the provided name and greeting. If no greeting is provided, it should default to "Hello".
// For example:
// When greet("John", "Good morning") is called, it should return "Good morning, John!".
// When greet("Jane") is called, it should return "Hello, Jane!".
let greet1 = (name, greeting) => {
    if (name == "string" || greeting == "") {
        // let message = "Hello";
        // return message;
        return `Hello`;
    }
    else {
        return `Good morning, Hira!`;
    }
};
const message = greet1("string", "");
console.log("Hira, ", message);
const message1 = greet1("hira", "'Good Morning'");
console.log("Hira, ", message1);
// Rest Parameter in Arrow Function Question:
// Explain the concept of a rest parameter in typescript. write a typeScript Arrow function named friend that accepts any name of parameters and returns all name in array.
// For example:
// If `name('taha', 'Ahmed', 'Ali'), it should return ['taha', 'Ahmed', 'Ali'].
// Spread Operator in Arrow Function:
// Explain the concept of a spread operator in typescript. write a typeScript Arrow function named friend that accepts any name of parameters and returns all name in array.then make a copy of that name and pop last name form array. make sure your orignal array should not be change.
// For example:
// If `name('taha', 'Ahmed', 'Ali'), it should return ['taha', 'Ahmed', 'Ali'].
let friend = (...names) => {
    return names;
};
const originalNames = friend("taha", "Ahmed", "Ali");
console.log("Original names:", originalNames);
// Create a shallow copy with spread
const copiedNames = [...originalNames];
// Remove the last name from the copied array
copiedNames.pop();
console.log("Copied names (without the last name):", copiedNames);
console.log("Original names (should remain unchanged):", originalNames);
