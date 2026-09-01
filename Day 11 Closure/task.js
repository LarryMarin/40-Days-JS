//1. What will be the output of the following code and why?

function outer() {
    let count = 0;
    return function inner() {
        count++;
        console.log(count);
    };
}
const counter = outer();
counter();
counter();

//The output will be 1 and 2 because even though counter is const whats actually changing is the count variable inside of outer not counter itself.

//2. What will be the output and why?

function testClosure() {
    let x = 10;
    return function () {
        return x * x;
    };
}
console.log(testClosure()());

//The output will be 100 because the inner function is returning x*x so it is using Scope Chain to take the x = 10 from the outer function testClosure(). It then uses closure to ensure it keeps x = 10 after testClosure() is done
//running. Then the second () calls the return function to multiply x*x and since it used closure to retain x=10 it will return 100.

//3. Create a button dynamically and attach a click event handler using a closure. The handler should count and log how many times the button was clicked.

/*function setupButton() {
    let clickCount = 0;

    const button = document.createElement("button"); // create it dynamically
    button.textContent = "Click me";

    button.addEventListener("click", function () {
        clickCount++;
        console.log(`Button clicked ${clickCount} times.`);
    });

    document.body.appendChild(button); // add it to the page
}*/

//setupButton();
//Static = exists before the program runs
//Dynamic = created while the program is running

//4. Write a function createMultiplier(multiplier) that returns another function to multiply numbers.

function createMultiplier(multiplier){
    let mult = multiplier;
    return function(){
        return mult*mult;
    }
}

console.log(createMultiplier(3)());

//5. What happens if a closure references an object?
//The closure allows anyone to modify whatever it is referencing inside of the object.

//6. Write a function factory of counter to increment, decrement, and reset a counter. Use closure to refer the count value across the functuions.

function counterFactory(counter){
    let count = counter;

    return {
        "increment" : () =>{
            count++;
            console.log("Incrementing the counter. The current count is:", count);
        },
        "decrement" : () =>{
            count--;
            console.log("Decrementing the counter. The current count is:", count);
        },
        "reset" : () =>{
            count = 0;
            console.log("The counter has been reset: ", count);
        }
    }
    
}

const myCount = counterFactory(0);

myCount.increment();
myCount.increment();
myCount.increment();
myCount.decrement();
myCount.reset();
