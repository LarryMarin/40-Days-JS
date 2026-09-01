//2. What is the problem here? Fix it to log the correct name and explain the fix
/*const user = {
  name: "tapaScript",
  greet: () => {
    console.log(`Hello, ${this.name}!`);
  },
};

user.greet();
*/
//The problem is on how the arrow function works with this. It will look at its parents scope. In this case its parent is user and the scope is the global/window. Global/window does not have a name value so it returns `Hello, `
//this is the fix

const user = {
  name: "tapaScript",
  greet: function(){
    return () => console.log(`Hello, ${this.name}!`);
  }
};
const hello = user.greet();
console.log(hello());

//3. Can you explain what is the problem here and fix the issue to log the correct name?
const obj = {
  name: "Tom",
  greet: function () {
    console.log(`Hello, ${this.name}!`);
  },
};

const greetFn = obj.greet;
greetFn();
//The problem here is line 31. greetFn is not attached to the object obj at all so it does not have a name it can access which is why it prints Hello, undefined. Here is the fix
greetFn.call(obj);
//By binding greetFn by calling the object obj we can then access the name parameter in the object obj so this.name can work properly

//4. What is the problem with the following code? Why isn't it logging the name correctly?
const user2 = {
  name: "Alex",
  greet: function () {
    function inner() {
      console.log(`Hello, ${this.name}!`);
    }
    inner();
  },
};

user2.greet();
//The problem here is how scope works with this. this checks the functions parents scope and in this case the parent is inner and the scope is the greet method. greet method does not have a name parameter so it returns
//undefined. The fix here is to change which scope this is looking at since this looks one level higher so we want it to look at the object user2 scope instead of the greet methods scope

//5. Create a Sports constructor function that takes name and number of players as arguments and assigns them using this keyword. Then, create two sports instances and log their details

const Sports = function (name, numOfPlayers){
    this.name = name;
    this.numOfPlayers = numOfPlayers;
    this.log = function(){
        console.log(this.name + ' has ' + this.numOfPlayers + ' players!');
    }
}
const football = new Sports("football", "11");
football.log();
const basketball = new Sports("basketball", "5");
basketball.log();
//6. Can you attach the car1's describe() method to car2 object? Give all possible solutions that you can think of
const car1 = {
  brand: "Audi",
  model: "A8",
  describe: function () {
    console.log(`This car is a ${this.brand} ${this.model}.`);
  },
};

const car2 = {
  brand: "BMW",
  model: "X1",
};
const carDesc = car1.describe;
carDesc.call(car2);
carDesc.apply(car2);

//7. What will be the output of the following code and why?
const person = {
  name: "Charlie",
  sayHello: function () {
    console.log(this.name);
  },
  sayHelloArrow: () => {
    console.log(this.name);
  },
};

person.sayHello();
person.sayHelloArrow();
/*
Options are:

A: "Charlie" and "Charlie"
B: "Charlie" and undefined
C: "Charlie" and "" (empty string)
D: undefined and "Charlie"

The output will be B and its because of how this works for standalone functions and arrow functions. Since the method in this case person is calling on the standalone function sayHello sayHello will have access to persons name
parameter and value which will make this work.
The arrow function however works differently. It takes the parent objects scope which means it will take the person objects scope to access this since arrow function doesnt have its own this. So it will then access the global/window
scopes this since that is the person objects scope and global/window does not have a name parameter or value in it so it returns undefined.
*/