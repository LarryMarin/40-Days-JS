//1. What will be the output of the following code and why?

let user = "Alice";

function outer() {
    function inner() {
        console.log(user);
    }
    let user = "Bob";
    inner();
}

outer();

//The output will be Bob because of Scope Chain. Since there is no user variable declared in inner() it will look to one level up from it which is outer() and outer() has user declared as "Bob"

//2. What is the mistake in the code below?

let total = 0; // Global, bad practice

function add(num) {
    total += num;
}

add(5);
add(10);
console.log(total);

//The mistake is that total can be accessed and changed from anywhere since it is a global variable and because it is global it can mess with the function add().

//3. Create a function with a nested function and log a variable from the parent function.

function myDog()
{
    function inner(){
        console.log(dog);
    }
    let dog = "My dog is very cute.";
    inner();
}

myDog();

//4. Use a loop inside a function and declare a variable inside the loop. Can you access it outside?

function totalCount(){
    for(let i = 0; i<10; i++)
    {
        var count = 0;
        count+=i;
    }
}
//console.log(count);
//No if I declare them inside the loop I cannot access them outside since the loop is inside a function scope.

//5. Write a function that tries to access a variable declared inside another function.

function food(){
    console.log(drink);
}

function drink(){
    let drink = "My favorite drink is coca cola. I like it with hamburgers and fries.";
    console.log(drink);
}

food();
drink();

//6. What will be the output and why?

//console.log(a);
//let a = 10;

//There will be a ReferenceError saying cannot access a before initialization

//7.Where is the age variable accessible?

function showAge() {
    let age = 25;
    console.log(age);
}
//console.log(age);

//age is only accessible within the function showAge() because of function scope meaning a variable declared in a function is only accessible within that function. B. Only inside showAge()

//8. What will be the output and explain the output?

let message = "Hello";

function outer() {
    let message = "Hi";

    function inner() {
        console.log(message);
    }

    inner();
}

outer();

//The output will be Hi because of Scope Chain meaning inner() does not have the variable message declared inside of its function so it will look one level higher. It will go up to the function outer() and see if 
//it has message declared. Since it does inner() will use outer() declared variable to use in its execution.

//9. What will be the output and why?

let x = "Global";

function outer() {
    let x = "Outer";

    function inner() {
        let x = "Inner";
        console.log(x);
    }

    inner();
}

outer();

//The output will be "Inner" twice because of function scope. Since inner() has the variable x declared as "Inner" it can then use it to print it out. It does not need to use Scope Chain.

//10. What will be the output and why?

function counter() {
    let count = 0;
    return function () {
        count--;
        console.log(count);
    };
}

const reduce = counter();
reduce();
reduce();

//The output will be -1 and -2 because of Scope Chain. The inner function inside of the function counter() will access count from a level higher of it which is counter()


