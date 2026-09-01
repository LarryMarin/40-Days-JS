/*
4 types of Scopes in JavaScript

1. Global Scope
2. Function Scope
3. Block Scope
4. Module Scope
*/

//Global Scope

let name = "Larry";

function greeting(){
    console.log("Hello ", name);
}

greeting();

console.log(name);

{
    console.log("Inside Block ", name);
}

//Global Scope can be accessed from anywhere: globally, functions, and in blocks which means it can be changed from anywhere as well unless you use const.
//When you declare a variable using var in the global scope that variable becomes the property of the window object. When you declare the variable with let or const it wont be added to the window object.

//Function Scope: variable declared inside a funciton are only accessible within that function.

function toDo(){
    var task = "Learning 40 days of JS.";
    console.log(task);
}

toDo();

console.log(task);//this will give a ReferenceError task is not defined

//Block Scope: variables declared inside a block {} using let and const cannot be accessed outside the block. if-else, for loop, do-while/while loop, switch

{
    let count = 10;
    console.log(count);    
}

console.log(count);//ReferenceError count is not defined. You can access a variable var outside of the block scope.

//Var is always function scope: only accessible inside a function. let and const are always block scope: cannot access it outside of the block.

//Scope Chain

//When you access the variable you declared how the value of the variable is resolved or is accessed depending on a mechanism JS applies. JS first searches in the nearest scope to see if it is accessible. If not it will go 1 level
//higher until it reaches the global scope

let globalVar = "I am a Global Variable.";

function outer(){
    let outerVar = "I am a Outer Variable.";

    function inner(){
        let innerVar = "I am an Inner Variable";
        console.log(innerVar);// Check inner() to and sees it so it uses it.
        console.log(outerVar);// Checks inner() and doesnt see outerVar so it moves up to inner(). Sees it in inner and usses it
        console.log(globalVar);// "I am a Global Variable." Looks inside inner() and doesnt see globalVar so it moves up. Checks outer() and doesnt see it so it moves up to global scope. Sees it there and uses it.
    }
    inner();
}

outer();

var count = 10;
function outer2(){
    var count = 20;

    function inner(){
        //var count = 30;
        console.log(count);//30. If count inside of inner does not exist it will use scope chain and check 1 above it which would be outer2 this will print 20 instead.
    }
    inner();
    console.log(count);//20
}
outer2();
console.log(count);//10

//Variable Shadowing: occurs when a variable in an inner scope has the same name as a variable in an outer scope. It hides the outer scopes variable, its value, with the inner scope variable value.
//JS will prioritize the variable in the nearest scope and ignore the one in the outer scope.

let message = "I am doing great.";

function situation(){
    let message = "I am not doing great.";
    console.log(message);//"I am not doing great."
}

situation();
console.log(message);//"I am doing great."

