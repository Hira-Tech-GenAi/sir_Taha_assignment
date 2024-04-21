// Calculator
// make addition calculator with the help of inquirer and 2 numbers

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter first number", type: "number", name: "firstNumber" },
  { message: "Enter second number", type: "number", name: "secondNumber" },
  {
    message: "Select on of the operator to perform action",
    type: "list",
    name: "operator",
    choices: ["Addition"],
  },
]);

// conditional statement
if (answer.operator === "Addition") {
  console.log(answer.firstNumber + answer.secondNumber);
}

