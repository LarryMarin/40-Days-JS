/* Control Flow:
We want to control the flow of a program using certain conditions.
if
if else
switch-case
break
continue */

console.log("Day 4");

let catchingBus = true;

if (catchingBus) //branching begins here. It either executes the if code or it will execute the else code depending on if the condition is satisfied
{
    console.log("I will reach home on time.");
}
else
{
    console.log("I will reach home late.");
}


let age = 18;

if (age >= 18)
{
    console.log("You are eligible to vote.");
}
else
{
    console.log("You are not eligible to vote.");
}

let score = 76;

if (score >= 90)
{
    console.log("Grade A");
}
else if(score >= 80)
{
    console.log("Grade B");
}
else if(score >= 70)
{
    console.log("Grade C");
}
else 
{
    console.log("Fail");
}


let x = 0;

if (x===0)
{
    console.log(0);
}
else if(x >= 0)
{
    console.log("Greater than 0");
}
else (x <= 0)
{
    console.log("Less than 0");
}
//If we did this with 3 separate if statements and no if else-if it would print all 3. Thats why else if is important


const condition = true;
const innerCondition = false;
if (condition) //this is a condition
{
    console.log("Outter if");

    if (innerCondition)
    {
        console.log("Inner if");
    }

    else
    {
        console.log("Inner else");
    }
}

else
{
    console.log("Outter else");
}

//Swtich-Case
let positon = 1;

switch (position){ //this is a fixed value
    case 1: 
        console.log("Print 1"); 
        break;
    
    case 2: 
        console.log("Print 2"); 
        break;

    case 3: 
        console.log("Print 3"); 
        break;

    case 4: 
        console.log("Print 4"); 
        break;
}

let day = 5;

switch (day){
    case 1: 
        console.log("Monday");
        break;
    case 2: 
        console.log("Tuesday");
        break;
    case 3: 
        console.log("Wednesday");
        break;
    case 4: 
        console.log("Thursday");
        break;
    case 5: 
        console.log("Friday");
        break;
    case 6: 
        console.log("Saturday");
        break;
    case 7: 
        console.log("Sunday");
        break;

    default:
        console.log("Invalid Day Number");
}

let name = "google";

switch (name)
{
    case "tapaScript":
        console.log("Teaching 40 days of JS.");
        break;
    
    case "google":
        console.log("Giving answer to all searches.");
        break;

    default:
        console.log("You are neither google nor tapaScript!");
}

/* Why is switch case better than if-else? 1. Better performance. If there are too many if-else conditions it will have to deal with all of them. In switch-case it is a fixed value so it utilizes a jump table.
The table contains the value and index. It will go to the table directly and you can search the table quickly and search the particular row and get that value immediately*/
/* Readablity, Performance for switch case is better than if-else. If we have complex logical operations we have to use if-else. If we are working on a fixed value and based on that we want to take position on that fixed value switch
case is better*/

//ternary operator

catchingBus ? console.log("I will reach home on time.") : console.log("I will be late to reach home"); //this is good for one level/short hand

const city = "Bangalore";

switch (city) {
    case "Bangalore":
    case "Kolkata":
    case "Agra":
    case "Jaipur":
        console.log("All these are in India");
        break;
    case "New York":
    default:
        console.log("All these are in the USA");
}
//this will print out line 175. The reason is because if all the cases are matching we can use this style so that they all print out the same thing.