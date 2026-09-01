console.log("**** Examples ****");

const user = {
    name: "Tapas",
    greet: function(){//from here
        //function inner(){
        const inner = () => {
            console.log(`Hello, ${this.name}!`);
        }
        inner();
        },//to here is an object method
};

user.greet();
/*
Our rule says when a this is used inside a standalone function which is not a object method. this is the value of an objects property.when an objects property having a value which is a function that is the one called a method.
since we used the this keyword in a standalone function. so it will point to the window object in non strict mode or undefined in strict mode.
With an arrow function the this keyword depends on where the arrow function is lexically placed the arrow function does not have its own this it will always look at its parents scope. the arrows functions scope is the outer function.
the arrow functions parents scope is the user object. so this.name will be Tapas.
*/

const obj = {
    name: "John",
    greet: function(){
        console.log(`Hello ${this.name}!`);
    },
};

const greetFn = obj.greet;//we are not executing the function obj.greet() and it would have done implicit binding which would print the console.log. we are taking the function and putting it into the variable instead
//which will allow us to execute it at a later point in time
greetFn();
/*
Why is this printing `Hello, `?
greetFn() is not attached to the object obj at all. It is not connected to the global/window which means this is now connected to global/window which is why it prints `Hello, `.
greetFn() is being executed in the global execution context so it is completely detached from the object obj.
*/

greetFn.call(obj);//greetFn() will be called using the context of this obj so that if there is a this keyword then it will be resolved to this particular obj object