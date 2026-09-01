console.log("Day 13: The this keyword");
//the main purpose is so that it can help us understand what is happening in a particular execution context. the literal meaning of this is that we are pointing to something
//so in js programming context we try to understand currently in which context of a particular object we are and and we are exectuing or my program is running. it tells us where this is being used
//Global Aspect

//this keyword and window object; //in node we will get this keyword and global object

this === window;//in the global execution context this keyword will be exactly equal to window which means this is pointing to the window object in a global level

console.log("this at the global", this);//window
//three other aspects to keep in mind
//object
//function
//implicit binding

//Inside of an object - Implicit binding: is a way in which you understand that if a method is called on an object using the dot notation the context of this is bound or associated to the object on which we have invoked the method

const employee = {
    id: "A5778",
    firstName: "Alex",
    lastName: "B",
    returnThis: function(){
        return this;
    },
    getFullName: function(){
        return `${this.firstName} ${this.lastName}`
    }
}

console.log("Employee ID", employee.id); //"A5778"
console.log("this inside the employee object", employee.returnThis());
//When we invoke an method on an object the context of this or the value of this is bound to the object on which we invoked the method

console.log("Constructed full name using this", employee.getFullName());

const tom = {
    name: "Tom",
    age: 7
}

const jerry = {
    name: "Jerry",
    age: 3
}

function greetMe(obj){
    obj.logMessage = function(){
        console.log(`${this.name} is ${this.age} years old`);
    }
}

greetMe(tom);
tom.logMessage();

greetMe(jerry);
jerry.logMessage();

//Inside Function

function sayName(){
    console.log("this inside a function", this);
}

sayName();//this keyword is not bound to the function so the this keyword is going to the outerscope which is the global scope which refers to the window object

function outer(a){
    console.log("this inside an outer function", this);

    return function inner(b){
        console.log("this inside an inner function", this);
    }
}

const outerResult = outer(5);
outerResult(3);
//this points to the window object (global) irrespective to where it is placed. it does not care about how scope works it will always point to the window object  
//strict mode is a mode to make sure that the code you are writing is adhering to the core philosophies of javascript and your codes does not end up with so many mistakes at the end.
//the behavior of the js output may differ because js may not allow certain things to happen. you have to write "use strict"; at the top of the javascript file
//it does not allow the this keyword to refer to the window object when it is used inside a standalone function irrespective of it being an inner or outer function. js will awlays mark this as undefined when you
//are using a plain standalone function

//Inside the arrow function

const getFood = () => this;

console.log("this inside a the arrow function defined in global scope", getFood());
//in strict mode while using the arrow function this will point to the window object. for arrow function it does not have its own this. the this keyword will be resolved is always by where exactly your arrow function is placed 
//(lexical scope) so in this arrow function it is in the global scope.
//for regular standalone function this in strict mode will be undefined and in non strict mode it will point to the window object
//for arrow functions it always depends on where you have defined the arrow function and what is surronding it. so in this context it will be the global scope aka the window object

const food = {
    name: "mango",
    color: "yellow",

    //getDesc: () => `${this.name} is ${this.color}`,
    /*getDesc: function(){
        return `${this.name} is ${this.color}`
    }*/
    getDesc: function (){
        return () => `${this.name} is ${this.color}`
    }
}

console.log(food.getDesc());
//this is always connected to the parent scope of the place where we have defined the arrow function. we have defined this arrow function inside this object. the parent of the object is global. so this will refer to the
//window object. so this will return undefined since window object doesnt have a name or color.

//getDesc is lexcially placed inside this block which is an object. getDesc doesnt have its own this so in this case its an arrow function. so this will be bound to whereever this arrow function is lexically placed that 
//particular scopes parent. this particular scope is the block scope and the parent of that is the global scope which is now refering to the window object

//with the fix turning it into a function now implicit binding works
//if we want to use arrow function we have to mess with the scope a little bit. we have to move the arrow function one level down so its scope points to the object food and not the global scope. we can use a function and place
//the arrow function inside of a function so this keyword works and returns the name and color of the parent scope (in this case its food)

const descFunc = food.getDesc();//we need to do this so it can print the name and color otherwise it would print `${this.name} is ${this.color}`
console.log(descFunc());

//with global scope this always refers to the window object with browser enviorment and node enviorment of the global object. for standalone object in strict mode it points to undefined. in non strict mode it is the global scope(window
//for implicit binding whenever you are calling the object name.theMethod you have to check what that particular method is about. if the method is a standard js function a non arrow function and if that function has the this keyword
//the this keyword is bound to the object on which you are calling the function or the method. if that function happens to be an arrow function whether it is inside an object or outside an object wherever it is it all depends
//on where the arrow function is lexically placed defining your code. check the parent scope of the place where the arrow function is defined because arrow function does not have its own this. this always refers to the parent
//scope of the scope where the arrow function is defined.

//Explicit binding is binding your this keyword or the value of this to something that is unrelated
//We use explicit binding if you want to refer being in one execution context from any other execution context and then you want to bind these two. 
//Explicit Binding - call, apply, bind

//the call method

function greeting(){
    console.log(`Hello, ${this.name} belongs to ${this.address}`);
}

const user = {
    name: 'tapaScript',
    address: 'All of you'
};

greeting.call(user);//js will bind the this keyword to the object user. this is an example of explicit binding using the call function through which we are able to associate the user object to the this keyword of this method
//by invoking the call function and passing this user object

//what if the function has a parameter?

const likes = function(hobby1, hobby2){
    console.log(this.name + 'likes' + hobby1 + ', ' + hobby2);
}

const person = {
    name: "Tapas"
}

likes.call(person, "teaching", "blogging");

const hobbiesToApply = ["Sleeping", "Eating"];

likes.apply(person, hobbiesToApply);
//difference between call and apply. for call if you have to pass the argument you have to pass the argument in the comma separated way. in apply you can pass the argument as an array

//bind(). bind wont give you the result of the execution of the function on which you are calling the bind rather you are returning a completly new function that you can execute at a later point in time to get the desired output

const newHobbies = function(hobby1, hobby2){
    console.log(this.name + ' likes ' + hobby1 + ' , ' + hobby2);
}

const officer = {
    name: 'Bob',
};

const newFn = newHobbies.bind(officer, "Dancing", "Singing");
newFn();
//when you want the function to be executed then and there to get the desired output where you want to associate the this to an object you will be using call. but you do not want to execute it immediately you want to execute it at
//a later point in time. with bind you can use newFn at a later point in time.

//Constructor

const Cartoon = function(name, animal){
    this.name = name;
    this.animal = animal;
    this.log = function(){
        console.log(this.name + ' is a ' + this.animal);
    }
};

const tomCartoon = new Cartoon("Tom", "Cat");
tomCartoon.log();
const jerryCartoon = new Cartoon("Jerry", "Mouse");
jerryCartoon.log();

