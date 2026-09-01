console.log("Day 12 -  JavaScript Objects");

let user = {//this is a user object with 2 properties: name and age
    name: "Larry", //the key is name and the value is Larry. this is called a key-value pair
    age: 40,//the key is age and the value is 40. each of these properties is a key-value pair
    "is admin": true//is admin needs to be in "" because space is a special character
};
//you dont need "" in name/age because if your key does not have a special character in your keys it will automatically be toString by JavaScript
//
console.log(user.name);
console.log(user.age);

user.isSeniorCitizen = false;//this creates isSeniorCitizen property and key-value in user

console.log(user);//this will show name age and isSeniorCitizen

user["movie lover"] = true;//this is how you add a property with a special character to an object

console.log(user["is admin"]);//this is how you print out/retrieve is admin in user. its different than the rest because of the special character space needing "". all special characters are done like this

user.age = 34;//this is how you change a properties value 
user["movie lover"] = false;//this is how you change a property with a special character

//delete user["movie lover"];//this will delete the property movie lovers key and value
//delete user.isSeniorCitizen;

console.log(user);

//delete user.age;//this is how you delete a property without a special character

const someKey = "age";

console.log(user[someKey]);//34

let car = prompt("Which is your favorite car.");

let favCars = {
    [car]: 5,
}

console.log(favCars);

//Constructor Function must start with a capital letter

function Car(name, model){//has 2 properties name and model and the 2 values are supplied by name/model in the constructor
    this.name = name;
    this.model = model;
}

const bmwCar = new Car("BMW", "X1");
const audiCar = new Car("Audi", "A8");
console.log(bmwCar);
console.log(audiCar);

console.log(bmwCar instanceof Car);

//new Object()

const person = new Object();//another way to create an object which allows you to add propreties to it.
person.name = alpha;
person.age = 76;
console.log(person);

//factory function can produced different type of functionality depends on the user input if the user asks.

function createUser(name, age){
    return{
        name,//this is working because we are using something called a shorthand. whenever the parameter through which we are passing the value and keyword are the same we do not need to use the colon we can use shorthand.
        age,
        greet(){
            console.log(this.name);
        }
    }
}

const user1 = createUser("Larry", 39);
console.log(user1);
user1.name;
user1.age;
user1.greet();//since we are accessing a function
const user2 = createUser("Bob", 32);
console.log(user2);

//The value in an object can be a nonprimitive value. The nonprimitives are objects, arrays, and functions

let profile = {
    name: "tapas",
    company: "CreoWis",
    message: function(){
        console.log(`${this.name} works at ${this.company}`);
    },
    address: {
        city: "Bangalore",
        pin: 56032,
        state: "Karnataka",
        country: "India",
        greeting: function(){
            console.log("Welcome to India");
        },
        salary: undefined
    }
}
console.log(profile.address.country);//this is how we access a nested object
//Nested Object: an object can have a property whose value can be another object
profile.address.greeting();//this is how we can access a function in a nested object
console.log(profile.name);
console.log(profile.company);

profile.message();

//I want to know if an object has a certain property. this is how we test it

console.log(profile.salary);

console.log("salary" in profile);//this is true because it does exist. The in operator checks if a particular property exists in an object

if (!profile.salary){//this will be wrong because salary does exist it is just set to undefined
    console.log("The salary property does not exist.");
}

//to check all the properties in an object we can use an for-in loop

for(let key in profile){//we use let because it will only exist in block scope so it will be destroyed after. if we leave it blank it will create a global variable  
    console.log(key);//it will iterate and get me all the properties in profile. this prints the key
    console.log(profile[key]);//this prints the value 
}

//Objct.keys()

console.log(Object.keys(profile));//this is another way to get all the keys in an object. we will get them in an array 
//object is pass by reference 

let fruit = {name: "mango"};
const oneMoreFruit = {name: "mango"};

//even though these 2 have the same value they both use different memory addresses which makes them different from each other

console.log(fruit == oneMoreFruit);//false
console.log(fruit === oneMoreFruit);//false
//both will be false since their references are different

fruit = oneMoreFruit;//this will make both fruit and oneMoreFruit now point in the same location in the memory which means they point to the same object.

console.log(fruit == oneMoreFruit);//true
console.log(fruit === oneMoreFruit);//true

//Static Methods: create, keys

//Object.assign()

const target = {p: 1, q: 2};
const source = {a: 3, b: 5};

const returnedObject = Object.assign(target, source);//this will combine target and sources keys and values into returnedObject
console.log(returnedObject);
//if they share keys the first key will be overridden by the second key

const obj = {name:"tapasScript"};
const obj2 = Object.assign({}, obj);//this will let us clone obj into obj2. they have the same value but have different reference

console.log(obj2);
console.log(obj === obj2);

const obj3 = {
    a:1,
    b:{c:2}
}

const obj4 = Object.assign({}, obj3);
console.log(obj4);// {a:1, b: {c:2}}
obj4.b.c = 3; 

console.log(obj3.b.c);//2? no its 3. This is how Object.assign() works. Object.assign() makes a shallow copy meaning it copys the properties value from the source to target. but when dealing with a nested object
//Object.assign() copies the references of those nested objects rather than creating a new copy
//if you are not dealing with a non nested object for assign it will be creating a new reference always 
console.log(obj4.b.c);//3

//structuredClone()

const obj5 = structuredClone(obj3);
//StructuredClone should be used instead of Object.assign() because of deep cloning. It will now have separate references for nested objects wont be copied so it wont be changed
console.log(obj3.a);
console.log(obj5.a);

console.log(obj3.b.c);
console.log(obj5.b.c);

//Object.entries(): converts object to an array

const myObj = {
    a: "tapas",
    b: 32
};

const myArray = Object.entries(myObj);
console.log(myArray);

//Convery Map or Array to Object we use Object.fromEntries()

const entries = new Map([
    ["foo", "bar"],
    ["baz", 42],
]);
const objEntries = Object.fromEntries(entries);
console.log(objEntries);

//immutable means something we cannot change. mutable means something we can change. 

const emp = {
    sal: 100
}

//Object.freeze()

Object.freeze(emp);//this will freeze this object (makes it immutable/cannot be changed no matter what)

emp.salary = 200;

console.log(emp);

console.log(Object.isFrozen(emp));

//Object.seal() helps with with object immutability. It prevents an kind of new addition/properties or removal of new properties but you can modify existing properties value

const dept = {
    name: "finance"
}

Object.seal(dept);

dept.address = "Bangalore";
delete dept.name;
console.log(dept);

dept.name = "HR";//this will change finance to HR
console.log(dept);//prints name: "HR"

//Object.hasOwn() checks if an object has a propety in it

console.log(Object.hasOwn(dept, "address"));//false
console.log(Object.hasOwn(dept, "name"));




