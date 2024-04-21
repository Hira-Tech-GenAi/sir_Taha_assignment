// Task 1:
// Declare a variable with "srting" dataType. Add comment about your variable

//********** string =>"" ***********
let message: string = "Dill Dill Pakistan";

// Task 2:
// Declare a variable with "Number" dataType. Add comment about your variable

//******* number => (limit in JS)2 to power 53 ********
let gameScore: number = 200;

// Task 3:
// Declare a variable with "Boolean" dataType. Add comment about your variable

//******* boolean => true/false ********
let userLogin: boolean = true;

// Task 4:
// Declare a variable with "Any" dataType. Add comment about your variable

//******* Any (In some situations, not all type information is available)********
let isSomething: any = "Hira Khalid";
isSomething = 23;
isSomething = true

// Task 5:
// Declare a variable with "let". Its value should be "undefined". Add a comment about your variable.

//******* undefined => (declared variable but not assign a value) ********
let password;

// Task 6:
// Declare a variable with let. It will be of type unknown. Add a comment about your variable.

//******* unknown ********
//(unknown) is the type-safe counterpart of any . Anything is assignable to unknown , but unknown isn't assignable to anything but itself. 
let betterFromAny: unknown;

// Task 7:
// Declare a variable with let. It value will be bigint. Add a comment about your variable.

//******* BigInt ********
//(limit in JS)2 to power 53 => If the number is greater than this, then "BigInt" will be used.
const bigNumber = 3458990000032111489n

// Task 8:
// Declare a variable with "let". Its value will be a symbol. Add a comment about your variable.
//****** symbol => unique******
const id1:symbol = Symbol("123");
const id2:symbol = Symbol("123");
console.log(id1 === id2);

// Task 9:
// Declare a variable with "let". Its value will be "null". Add a comment about your variable.
// By default null and undefined are subtypes of all other types. That means you can assign null and undefined to something like number.

let empty: null = null;
