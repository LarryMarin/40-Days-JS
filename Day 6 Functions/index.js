//Functions
/* What is a function? It is a methodology in programming which you can use to save yourself from repetitive task. This increases reusability. The Mathematical definition is matching input to an output*/

console.log("Day 06");

//Define or declare a function
function printThis() {
    //This is a function body where you describe what the function will do
    console.log("Printing...");
}//this is a function definition or function declaration

//Call or Invoke a function

printThis(); //JS interpreter will see printThis() and does not see a function declaration before it so it will call this function.

// Function as an expression

let printMe = function() { //this is a variable whose value is a function
    console.log("Print me");
}

console.log(printMe);

printMe();//in order to execute this as a funciton we need to do printMe(). it contains a function so it can be called like a function


//Paramaters and Arguments

function sum(a, b){ //The input that we pass through a function while declaring the function is called paramater or place holders
    const result = a + b; 
    //console.log(result);
    return result;
}

sum(10, 4);

let result = sum(10,9);
console.log(result);

function double(x){
    return 2*x;
}
console.log(double(result));
// the actual value while invoking or calling the function we are passing is called argument.
/*Parameters are the place holders or the variables that we pass as an input to a function while declaring or defining a function. Arguments are the actual value that will replace those declared variables while invoking and 
calling the function*/


//Default Paramaters

function calc(a, b){
    return((a+b)*2);
}

const resVar = calc(2); //will return NaN because b is undefined.

function calc2(a, b = 0){
    return((a+b)*2);
}

const resVar2= calc(2);//this will return a number now because the default value of b is 0.
const resVar3 = calc(2,7); //now the 7 can replace the default value of b.

//Rest parameter

function calculateThis(x, y, ...rest)
{
    console.log(x,y,rest);
}

calculateThis(1,2,3,4,5,6,7,8,9);
//the rest parameter ... will create an array with the rest of the inputs. the rest parameter always needs to be the last parameter

//Nested Function

//The function that holds a function inside it is the outer function. THe function that becomes a function inside another function is called inner function

/*function outer(){
    console.log("Outer");
    function inner(){
        console.log("Inner");
    }//if you are defining a function inside an outer function as an inner fucntion you can only call this function within the outer function not outside of it
    inner();
}*/

//To use the inner function outside of the outer function you need to return the inner function
function outer(){
    console.log("Outer");
    return function inner(){
        console.log("Inner");
    }//if you are defining a function inside an outer function as an inner fucntion you can only call this function within the outer function not outside of it
}

let retFunc = outer();

console.log(retFunc());

//Callback Function. A function that you can pass as an argument to another function and call that function that you are passing at some point in time.

function foo(func){
    console.log("foo");

    func();
}

foo(function (){//this is an anonymous function
    console.log("buzz");
})

//We give functions name becuase after defining the function we want to call or invoke a function at a later point in time
//If we dont have to invoke or call a function at a later point in time using its name rather we want to define the function and pass it along at the same time without using a name we will use the Anonymous function

let func = function() {
    console.log("buzz");
}

const buz = function(){
    console.log("buzz");
}

foo(buz);

//Pure Function. A function that returns or that provides the same output for the same input

function greeting(name) {
    return "Hello " + name;
}

console.log(greeting("Larry"));

let greetingMsg = "Hola "; 

function greeting2(name) {
    return greetingMsg  + name;
}

console.log(greeting2("Larry"));
console.log(greeting2("Larry"));

greetingMsg = "Namaste ";

console.log(greeting2("Larry"));
console.log(greeting2("Larry"));
//The greetingMsg is called a side effect since it is outside of the function and it makes the function impure.

//Higher Order Function HOF. This is a function that takes another function as a parameter or as an argument and can return a function from it.

//A function that takes another function as a parameter or as an argument
function getCamera(camera){
    camera();
}

getCamera(function(){
    console.log("Sony");
})

//A function that can return another function

function returnFunc(){
    return function() {
        console.log("Hello");
    }
}

const retFun = returnFunc();
retFun();

//This is useful in creating wrappers

//Arrow Function

let greetMe = () => {
    console.log("Hello"); //If its one line we can remove the {}
}//if there are multiple lines we must use return

greetMe();

let greetMe2 = (greetingMsg) => greetingMsg + "great"; 

console.log(greetMe2("Hola"));

//How the this keyword behaves differently in the arrow function

//IIFE Immediately Invoke Function Expression. we have to use the group operator () so it gets executed Immediately. This is useful in plugin development where we want the plugin the moment the javascript guest is loaded in the browser
//we want it to be executed immediately without it being called the moment the javascript codes is loaded in async


(function() {
    console.log("IIFE");
})()

(function(count){
    console.log("IIFE", count);
})(1) //we can pass an argument in IIFE

//Recursion. You can call the function name inside the function. But it has a cost. It will add to the call stack. So we need a condition for the exit of the recursion.

function fetchWater(count){
    console.log("Fetching water....", count);

    if(count === 0)
    {
        console.log("No more water left to fetch...");
        return;
    }
    fetchWater(count - 1);
}