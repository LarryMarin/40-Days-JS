//odd or even

let myNum = 2;
if(myNum%2==0)
    console.log("Is Even");
else 
    console.log("Is Odd");

//do you have a driver license

let age = 24;
if (age < 18)
    console.log("You are not eligible for a drivers license");
else
    console.log("You are eligible for a driving license");

//Calculate CTC with Bonus

let monthlySalary = 12300;
let bonus = .20;
let anualSalary = monthlySalary * 12;
anualSalary += anualSalary * bonus;
console.log(anualSalary);

//Traffic Simulation

let color = "Red";
if (color === "Green")
    console.log("GO!");
else if (color === "Red")
    console.log("STOP!");

//Electricity Bill Calc

let units = 150;
let monthlyUnits = units * 30;
let discount = .20;
let annualPayment = monthlyUnits * 12;
annualPayment -= annualPayment * .2;
console.log(annualPayment);

//Leap Year Checker

let year = 2025;
let isLeapYear = (year %2===0 && year%100!==0) ? "Leap Year" : (year % 400 === 0)? "Leap Year" : "Not Leap Year";

console.log(isLeapYear);

//max of 3 numbers
let p = 10; q = 9, r = 19;

if (p > q && p > r)
    console.log("p is the maximum number");
else if(q > p && q > r)
    console.log("q is the maximum number");
else
    console.log("r is the maximum number");

//bitwise doubling

let count = 5;
count = count << 1;
console.log(count);
