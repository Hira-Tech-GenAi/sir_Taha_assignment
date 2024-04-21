// Basic Functions Question:
// Define a function called greet that takes a parameter name and returns a greeting message including the provided name. Then, call the greet function with the argument "John" and log the result to the console.

function greet(message: string) {
  return message;
}
console.log(greet("John"));

// Function Return Value Question:
// Write a JavaScript function named calculateArea that takes two parameters: length and width, representing the length and width of a rectangle respectively. The function should calculate the area of the rectangle and return the result.

function calculateArea(length: number, width: number) {
  let areaOfRectangle = length * width;
  return areaOfRectangle;
}

console.log(calculateArea(5, 3));

// Provide an example of calling this function with values 5 for length and 3 for width, and then print the result.

// Default Parameter Function Question:
// Create a JavaScript function named greet that accepts two parameters: name and greeting. The function should return a greeting message using the provided name and greeting. If no greeting is provided, it should default to "Hello".
function greet1(name: string, greeting: string) {
  if (name == "string" || greeting == "") {
    // let message = "Hello";
    // return message;
    return `Hello`
  }else{
  return `Good morning, Hira!`
    
  }
}
  
  
const message = greet1("string", "")
console.log("Hira, ", message);
const message1 = greet1("hira", "'Good Morning'")
console.log("Hira, ", message1);

// For example:

// When greet("John", "Good morning") is called, it should return "Good morning, John!".
// When greet("Jane") is called, it should return "Hello, Jane!".

// Rest Parameter Question:
// Explain the concept of a rest parameter in typescript. write a typeScript function named friend that accepts any name of parameters and returns all name in array.

// For example:

// If `name('taha', 'Ahmed', 'Ali'), it should return ['taha', 'Ahmed', 'Ali'].
// Spread Operator:
// Explain the concept of a spread operator in typescript. write a typeScript function named friend that accepts any name of parameters and returns all name in array.then make a copy of that name and pop last name form array. make sure your orignal array should not be change.

// For example:

// If `name('taha', 'Ahmed', 'Ali'), it should return ['taha', 'Ahmed', 'Ali']

//
function friend(...names: string[]): string[] {
  return names;
}

const originalNames = friend("taha", "Ahmed", "Ali");
console.log("Original names:", originalNames);

// Create a shallow copy with spread
const copiedNames = [...originalNames];

// Remove the last name from the copied array
copiedNames.pop();

console.log("Copied names (without the last name):", copiedNames);
console.log("Original names (should remain unchanged):", originalNames);
