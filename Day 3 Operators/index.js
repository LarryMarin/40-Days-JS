console.log("Day 03");

//Operator - Symbol + - * /
//Operands - x+y, x and y are operands
//Expression - Assignment Expression x = 2, Evaluating Expression x = 3 + 4

//Arithmetic Operator
let a = 10;
let b = 20;

console.log(a + b); //30
console.log(a - b); //-10
console.log(b - a); //10
console.log(a * b); //200
console.log(a / b); //0.5
console.log(a ** b);
console.log(a % b);

let count = 5;
console.log(count++); //count would print out 5 and then it will increment count to 6. This is post increment
console.log(++count); // count will print out 6 because this is a pre increment

count = 5;
console.log(count--); //count = count - 1, this will print 5 then it will decrement. This is post decrement
console.log(count); //count = 4
console.log(--count);//this will decrement count first then it will print count. This is pre decerement

console.log("****Assignment Operators****");

let x = 10;
x += 5; // 15
x -= 3; // 12
x *= 2; // 24
x /= 4; // 6

console.log("****Comparison Operators****");

console.log(4==5); //equivalent operator 4 is equal to 5
console.log(0==false);//true because java will make them into similar values. False will turn into 0
console.log(3=='3');//true because it is not strict. java will convert the '3' 
console.log(3==='3');//false because it is strict equality. checks if they are the same type. Rules: 1. If both operands are the same type it returns true 2. If both are null or undefined it will return true 
// 3. If an operands is NaN Not a number it will always return false

let obj1 = {'name': 'Larry'};
let obj2 = {'name': 'Larry'};
console.log(obj1 === obj2);//This returns false because the memory address are different

console.log(3 != '3');//loose
console.log(3 !== '3');//strict

// <, <=, >, >=

//Logical Operators

console.log("****Logical Operators****");
// && || ?? !

//op1 && op2 

console.log("Cow" && "Horse");// it will return Horse because logical and always takes the second operand if the first one is true, JavaScript will make Cow into True, and the second one is false.

//op1 || op2 It will always take true unless they are both false
console.log("Cow" || "Horse");//"Cow" since JavaScript turns Cow into true and Horse into False

//! Not Operator
console.log(!true);//prints false

//?? nullish coalescing operator If the first operand can be converted or resulted into null or undefined then return the second otherwise return the first

let a1 = null ?? 1; //1
let a2 = undefined ?? 3;//3
const a3 = false ?? "tapaScript"; //false
const a4 = 0 ?? "tapas"; //0

//Conditional Ternary Operator

console.log("****Conditional Ternary Operator");
//It works on a condition if the condition is satisfied it will return a particular value if it isnt satisified it will return a different value. It will return a boolean value
// condition ? val1 : val2 if it returns true returns val1 if its false it returns val2

let age = 23;
age >= 60 ? "Senior Citizen" : "Non-Senior Citizen";//returns Non Senior Citizen

//Bitwise Operators
console.log("****Bitwise Operators");
//returns the number into binary representation

// bitwise & AND, | OR, ^ XOR, ~ NOT, << LeftShift, >> RightShift

15 & 9; //turn this into binary. 15 = 1111 9 = 1001. if 1 matches 1 it returns 1, if 1 matches 0 it returns 0, if 0 matches 0 it returns 0. it reutrns 1001
1111 & 1001;//1001. if 1 matches 1 it returns 1, if 1 matches 0 it returns 0, if 0 matches 0 it returns 0

15 | 9; //15
1111 | 1001; //1111

15 ^ 9;//6. XOR returns 1 if only one of them is 1 else it will return it to 0. turn 15 into bitwise = 1111 and 9 = 1001. compare the 2 and you get 0110 which is 6
1111 ^ 1001;//0110

9 << 2;//turn 9 into binary, 1001, then shift to the left 2, we add 2 0s to the end, 100100 = 36
9 >> 2;//turn 9 into binary, 1001, then shift to the right 2, move everything to the right twice, 0010, aka add 2 zeroes in the front and delete the 2 numbers at the end




//Grouping
console.log("****Grouping****");
//controls the precedence of evaluation or the execution in an expression ()

let p = 1;
let q = 2;
let r = 3;

console.log(p + q * r);// 1 + 2 * 3 = 7
p + (q*r);//7
(p + q) * r;//9

//typeof
console.log("****typeof*****");
//an operator that returns a string that specifies the type of the operand

typeof "tapas";//"string"
typeof false;//boolean
let size = 100;
typeof size;//"number"

const numbers = [1,2,3,4];
typeof numbers; //"object" in JavaScript arrays are objects

typeof null; //"object" there are old applications that rely on this so it hasnt been changed

//instanceof
console.log("****instanceof****");
//it will return if an object is a instance of a particular object type ture/false