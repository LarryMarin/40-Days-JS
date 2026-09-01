console.log("Day 02");

/*Variables are used to store data in JavaScript

var: function-scoped, can be redeclared (not recommended)
let: blocked-scoped, can be reassigned
const: block-scoped, cannot be reassigned

*/

let address = "Tokyo";

console.log(address);

address = "USA";

console.log(address);

let student = {
    name: "Alice",
    age: 22,
    isEnrolled: true
}

console.log(student.name); //Output: Alice

let studentName = "Alice";
let studentAge = 22;
let isEnrolled = true;    let favProgramLang = "JavaScript";
console.log(`Students name: ${studentName} Students Age: ${studentAge} Enrollment Status: ${isEnrolled} Favorite Programming Language: ${favProgramLang}`);

let myArray = [1,2,3,4,5,6,7];
myArray = [9,8,7,6,5,4,3,2,1];
console.log(myArray);

let 
/*
Primitive Data Types: basic data types that exist in a language

String- text values ("Hello")
Number- numeric values (25, 3.14)
Boolean- true and false (true, false)
Undefined- a variable declared but not assigned (let x;)
Null- Represents nothing (let y = null;)
BigInt- Large numbers ( BigInt(1234567890)1234567890)
Symbol- unqiue identifiers (Symbol("id"))

Non-Primitive (Reference) Data Types: 

Object- Collection of key-value pairs
Array- Ordered list of values
Functions- Code that can be executed

Primitive variables are storing the value inside the stack
Non-Primitives variables are storing the value inside the heap

JavaScript engine takes the line of code through 3 phases:

Tokenizing
Prasing
Interpreting
(Code Generation is a hidden 4 phase)

Tokenizing: breaks the code into multiple pieces so it can understand if its adhering to the grammar or not (breaks them into tokens)
Parsing: creats the Abstract Syntax Tree where each of these tokens are there and their definitions are there
*/