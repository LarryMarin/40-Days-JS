let day = "Monday";

switch (day) {
   case "monday":
       console.log("It's the start of the week.");
       break;
   default:
       console.log("It's a normal day.");
}
//What will be the output of this? The output will be Its a normal day because case monday has a lower case m and day has an upper case M. It needs to match exactly in order to print out case monday so it goes to default.


//Build an ATM Cash Withdrawl System that only allows multiples of 100
let withdraw = 1000;

if (withdraw%100===0)
{
    console.log("Withdraw Succesful!");
}
else 
{
    console.log("Invalid amount.");
}

//Build a calculator with a switch-case. Write a simple calculator that takes an operator (+, -, , /, %) as input, and performs the operation on two numbers. Print the output on the console.

let a = 10, b = 5;
let operator = "/";

switch (operator)
{
    case "+":
        console.log(a + b);
        break;
    case "-":
        console.log(a - b);
        break;
    case "*":
        console.log(a * b);
        break;
    case "/":
        console.log(a / b);
        break;
    case "%":
        console.log(a % b);
        break;
    
}


/*Pay for your movie ticket. Imagine, the INOX charges ticket prices based on age:
Children (<18 years): $3
Adults (18 - 60 years): $10
Seniors (60+ years): $8
Write a program that prints the ticket price based on the person’s age.
*/

let age = 60;
let ticketPrice = 0;
if (age < 18)
{
    ticket = 3;
    console.log(`$${ticketPrice}`);
}
else if (age >= 18 || age <= 60)
{
    ticket = 10;
    console.log(`$${ticketPrice}`);
}
else if(age > 60)
{
    ticket = 8;
    console.log(`$${ticketPrice}`);
}


 /*
Horoscope Sign Checker
Write a program that prints the zodiac sign(Aries, Taurus, Gemini, etc.) based on a person’s birth month.
Make it month bases, not date based. Like March and April borns are Aries, Aplil and May born are Taurus, and so on. Do not use if-else.
 */

let month = "August";

switch (month)
{
    case "March":
    case "April":
        console.log("Aries");
        break;
    case "April":
    case "May":
        console.log("Tauros");
        break;
    case "May":
    case "June":
        console.log("Gemini");
        break;
    case "June":
    case "July":
        console.log("Cancer");
        break;
    case "July":
    case "August":
        console.log("Leo");
        break;
    case "August":
    case "September":
        console.log("Virgo");
        break;
    case "September":
    case "October":
        console.log("Libra");
        break;
    case "October":
    case "November":
        console.log("Scorpio");
        break;
    case "November":
    case "December":
        console.log("Sagittarius");
        break;
    case "December":
    case "January":
        console.log("Capricorn");
        break;
    case "January":
    case "February":
        console.log("Aquarius");
        break;
    case "February":
    case "March":
        console.log("Pisces");
        break;
    
}

let side1 = 2, side2 = 3, side3 = 4;

if (side1 === side2 && side1 === side3)
{
    console.log("Equilateral Triangle");
}
else if(side1 === side2 && side1 !== side3 || side1 === side3 && side1 !== side2 || side2 === side3 && side2 !== side1)
{
    console.log("Isosceles Triangle.");
}
else
{
    console.log("Scalene Triangle");
}