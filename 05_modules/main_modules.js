"use strict";
// use modules.
// Task 1:
// create one typescript file. write a code "const firstNumber = 10". and export it into main file.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Task 2:
// create another typescript file. write a code "const secondNumber = 30". and export it into main file.
// Task 3:
// create main.ts file. import data from both file and add both values. print it into terminal.
const index1_1 = __importDefault(require("./index1")); // import file in object form
console.log(index1_1.default.firstNumber);
const index2_1 = __importDefault(require("./index2"));
console.log(index2_1.default);
