
console.log("Day 15: JavaScript Master Course.");

/*
What is an array in JS? [1, 2]
*/

const mixedArray = [100, true, "tapasScript", {}];
//index = position of an element in the array is known as its index
//index starts at 0
//index ends with length - 1. JS arrays are not a fixed length

const salad = ['tomato', 'mushroom', 'brocoli', 'cucumber', 'corn', 'carrot', 'avocado'];
//Another way to create an array is the Array Constructor Function. A constructor function are something that looks like a function buy by convention it should start with a capital letter and it uses the this keyword 
//to make sure that it can create the property and assign the value to the property of an object at run time.

function Car(model){
    this.model = model;
}
const bmwCar = new Car("BMW X1");
console.log(bmwCar);

//Array Constructor function
const anotherSalad = new Array('tomato', 'mushroom', 'brocoli', 'cucumber', 'corn', 'carrot', 'avocado')

console.log("Salad", salad);
console.log("Another Salad", anotherSalad);
console.log(salad === anotherSalad);

const two = new Array(2);
console.log(two);
//When you pass 1 arguement to the array constructor you will not create that array with that argument as an element. Rather you will create an array of length of this number you are passing and none of the elements will be defined in it which
//is why theres an empty slot. if we do Array(1, 2) it will print 1, 2

//Accessing the index in an array
//const element = array[index]

console.log(salad[0]);
console.log(salad[2]);
console.log(salad[5]);

for (let i = 0; i <= salad.length - 1; i++){
    console.log(`Element at index ${i} is ${salad[i]}`);
}

//How to add elements to an array
//push() - gets added to the end of the array
const ret1 = salad.push('peanut');
console.log(ret1);//returns the number 8 because after the insertion of one element at the end of the array the push method returns the number of elements currently there in that array
console.log(salad); //returns salad array with peanut at the back
//push actually muted salad aka it changed array/array can be changed (mutable/mutability means able to change immutable means it cannot be changed)

//unshift() - adds elements to the start of the array

const unRet = salad.unshift('peanut');
console.log(unRet); //returns the number 9
console.log(salad); //returns salad array with peanut at the front

//How to remove elements from an array
//pop() - removes an element at the end of the array.
console.log(salad);
const popRet = salad.pop(); //pop returns the removed element
console.log(popRet);
console.log(salad);

//shift - removes an element at the start of the array

console.log(salad);
const shiftRet = salad.shift(); //shift returns the removed element
console.log(shiftRet);
console.log(salad);
//all these methods muted the source array/changed the source array

//How to copy and clone an array in JS

//slice() - copies an array to another array

const saladCopy = salad.slice();//does not mute the source array/change the source array (immutable). it copies the array salad and assigns it to the variable saladCopy
console.log("Salad before copy", salad);
console.log("Salad after copy", saladCopy);
console.log(salad === saladCopy);//flase. not the same references or the same arrays. they are different arrays

//How to determine if a value is an array in JS
//isArray() validates wether its an array or not
Array.isArray('tomato', 'mushroom', 'brocoli', 'cucumber', 'corn', 'carrot', 'avocado');//true
Array.isArray('tomato');//false because this is a string
Array.isArray({'tomato': 'tomato'});//false because this is an object with a key and a value
Array.isArray([]);//true because though it is empty array it is an array

const arr = [1, 2, 3, 4];
Array.isArray(arr);//true

//Array Destructuring in JS

/*
const tomato = salad[0];
const mushroom = salad[1];
const carrot = salad[5];
*/

//to write this in a shorter way we will be using Array Destructuring

const [tomato, mushroom, carrot] = ['tomato', 'mushroom', 'carrot'];//the left side of the assignment operator will be the variables which will hold the value after destructuring
console.log(tomato, mushroom, carrot);

//How to Assign a Default Value to a Variable

//Other than destructuring we can Assign a Default Value to a Variable while extracting the element of an array using array destructuring

const [tomato, mushroom = 'mushroom'] = ['tomato'];

console.log(tomato);
console.log(mushroom);

//['tomato', 'mushroom', 'carrot'];//we only want to extract tomato and carrot
//const tomato = [0]; //const carrot = [2]; one way is that we take the index of this particular array and assign it to the variable
//this is how we do it with Destructuring

const [tomato, , carrot] = ['tomato', 'mushroom', 'carrot']; //we can skip a value in an array by leaving a blank space

//Nested Array

//[1, 2, [4, 5, [6, 7, [8, 9]]]];//when an array is placed another array the inside array is a nested array. there is no limit to nesting arrays
//if we want to destructur elements from a nested array this is how we do it

let fruits = ['melon', 'pineapple', 'banana', 'watermelon', ['tomato', 'mushroom', 'carrot']];
const veg = fruits[4];
const carrot = veg[2];

fruits[4][2];//carrot (its like a matrix) this is simpler than destructuring

let [,,,,[,,carrot]] = ['melon', 'pineapple', 'banana', 'watermelon', ['tomato', 'mushroom', 'carrot']];//this is how we do it by destructuring

//Rest Parameter and Spread Operator
// ... can be used as rest syntax and spread parameter
//for rest ... shows up to the left of the assignment operator (goes with your variables). for spread ... shows up on the right of the assignment operator (goes with array values)

const [tomato, mushroom, ...rest] = ['tomato', 'mushroom', 'brocoli', 'cucumber', 'corn', 'carrot', 'avocado'];//we want to save the other indexes we arent using we use rest
console.log(rest);

//spread operator we can create a clone or copy of an existing array

const mySalad = ['tomato', 'mushroom', 'brocoli', 'cucumber', 'corn', 'carrot', 'avocado'];
const mySaladCopy = [...mySalad];//the element of the array gets spreaded (it comes out). each of the elements is going to come out of mySalad and sits inside the square brackets. creates a copy/new instance with different references

mySalad === mySaladCopy;

//Destructuring Use Cases in JavaScript

//How to swape variables with destructuring

let first = 'sad';
let second = 'happy';

//without using destructuring you have to take a third temporary variable and have to assign first to temp then second to first etc.

[first, second] = [second, first];

console.log(first);
console.log(second);

//merging 2 arrays and create one single array. use the spread operator

const emotions = ['sad', 'happy'];
const veggies = ['brocolli', 'cucumber', 'corn', 'carrot'];

const emotionalVeggies = [...emotions, ...veggies];
console.log(emotionalVeggies);

//Length Property

const arr1 = [11, 21, 73];
const arr2 = new Array(7);
console.log(arr1.length); //3
console.log(arr2.length); //7

// array can hold 2^32 -1 (2 ** 32 -1)

arr1.length = 2;
console.log(arr1);//by making the length equal to 2 it removes 73

//arr1.length = 2 ** 32;//Range Error: failed to set the length property of Array: Invalid Array Length
//arr1.length = 0;//empties array
arr1.length = 9; 
console.log(arr1);

//JavaScript Array Methods

//How to create, remove, update, and access arrays in javascript

//concat() merges one or more arrays and returns the merged array

const first = [1, 2, 3];
const second = [4, 5, 6];
const third = [7, 8, 9];
const merged = first.concat(second, third);
console.log(merged);//1,2,3,4,5,6,7,8,9

console.log(first); //1,2,3
console.log(second);//4,5,6
console.log(third);
//we can concat as many arrays as we want

//join() joins all array elements of an array using a separator and ultimately returns a string

const emotions = ['happy', 'love', 'worried', 'sad'];

//const joined = emotions.join();
const joined = emotions.join("<=>");
console.log(joined);
//we can use different separators instead of ,

[].join();//returns an empty string ""

//fill() fills an array with a static value. unlike concat this mutes the array/changes the array

const colors = ['red', 'blue', 'green'];
colors.fill("pink", 1, 3);//in order to only cover blue and green we need to do colors.fill("red", index we want to start from, and the length we want to end at)
console.log(colors);

//includes() determines the presence of an element in an array. if the element is present in the array it returns true if not it returns false.

const names = ['tom', 'alex', 'bob', 'john', 'tom'];

console.log(names.includes('Tom')); //will be false because it is case sensitive
console.log(names.includes('july')); //false

//indexOf() used when you want to know the index position of an element in an array. it returns the index position of the first ocurrence of that element in the array.

names.indexOf('alex');//returns 1
names.indexOf('rob');//returns -1 because it is not found 

names.indexOf('tom');//returns 1
names.lastIndexOf('tom');//returns 4

//reverse() reverses the elements position in the array so that the last index of the array becomes the first etc.

const names2 = ['tom', 'alex', 'bob'];
console.log(names2.reverse());

//sort() sorts the elements in an array. default sort converts the each of the elements type to string then sorts them. default sort order is ascending.

const names3 = ['tom', 'alex', 'bob'];
console.log("After default sorting:", names3.sort());

const artist = [
    'John White Abbott',
    'Leonardo DaVinci',
    'Charles Aubry',
    'Anna Atkins',
    'Barent Avercamp'
]

console.log("Default Sorting of artists array:", artist.sort());
//if you want to change the order of the sorting or sort something that is not string then you need to write something called a comparator. you will compare each of the element and either push them up or down to make sure that you are developing
//your own sorting algorithm. that compartor function or sorting algorithm you can pass as a parameter through the sort function

artist.sort(function(a, b){
    return a === b ? 0 : a > b ? -1 : 1; //this is for descending. first part checks if they are equal no movement needed. if one is greater than the other one do the reverse. if that is not the case then do up/down accordingly
})

console.log('Sort the artist names (descending)', artist);

let ages = [2, 1000, 10, 3, 23, 12, 30, 21];
//console.log("Age with default sorting: ", ages.sort();
console.log("Age with default sorting: ", ages.sort(function(a, b){
    return a === b ? 0 : a > b ? 1 : -1; //this is for ascending sorting
}));
//without the sorting algorithm javascript will instead compare the strings and sort the strings not the numbers. the strict equality operator is what makes it work

//splice() deletes elements in an array, add a new element to an array, and modify an element in an array

//splice(start, deleteCount, item, item1, item2);
//start is the index from where you are planning to change your array
//deleteCount will be an integer number that will indicate how many elements you want to delete from this array starting from the start position. if deleteCount is 0 or negative nothing will be removed
//item, item1, item2 - these are the elements getting added beginning from the start index.
//splice() always returns the array containing the deleted item

const names4 = ['tom', 'alex', 'bob'];
//console.log(names4.splice(0, 1, "john"));//returns the item it is deleting in an array. so it returns tom in an array
//console.log(names4); //prints john, alex, bob

//names4.splice(1,0, 'zack');
//console.log(names4);
names4.splice(2, 1, 'zack');//start at the 2nd index (bob), removes one element, addes zack starting from the 2nd index
console.log(names4);//tom, alex, zack

// at() - retrieves elements using both positive and negative indexes

const junkFoodILove = ['hot dog', 'hamburger', 'fries', 'pizza', 'corndog', 'sandwhich', 'tacos', 'popcorn'];

junkFoodILove.at(0);//hot dog
junkFoodILove.at(3);//pizza
junkFoodILove.at(-1);//popcorn this counts from right to left so it starts at popcorn
junkFoodILove.at(-5);//pizza
junkFoodILove.at(-8);//hotdog
junkFoodILove.at(10);//undefined since there is no 10th element both forward or backwards

//copyWithin() - copies part of an array to another location in the same array. takes a target a start and an end. target is where you will put your elements. start is where you will start copying from. end is where you will end the copying

//copyWithin(target, start, end);

const array = [1,2,3,4,5,6,7];
array.copyWithin(0,3,6); // copy onto the 0th element, the 3rd index we will start the copy, until the 6th length we want to copy
console.log(array);

const array1 = [1,2,3,4,5,6,7];
array1.copyWithin(0,4);//want to replace the 0th element (starting at number 1/index 0), we start at the 4th index (5), since end is empty we copy until the end

//flat() 
{
    const arr1 = [0, 1, 2, [3, 4]];
    console.log(arr1.flat());//flattens the array out so it prints out [0,1,2,3,4]

    const arr2 = [0, 1, [2,[3,[4,5]]]];
    //console.log(arr1.flat(2));//goes up to the second level of the array so it prints [0, 1, 2, 3, Array(2)]
    console.log(arr1.flat(Infinity));//this flattens every single array into one
}

//grouping data in an array -  helps in the grouping of an elemenet in the array or any other iterable using the key that you specify for grouping

{
    const employees = [
        {name: "Bob", dept: "Engineering", salary: 5000},
        {name: "Alex", dept: "HR", salary: 3000},
        {name: "Ravi", dept: "Engineering", salary: 7000},
        {name: "John", dept: "Engineering", salary: 1000},
        {name: "Tom", dept: "Sales", salary: 6000}
    ];

    const groupedByDept = Object.groupBy(employees, ({dept}) => dept);//we passed the key {dept} and how we want to group this data by dept
    console.log(groupedByDept);

    const groupedByMoreThan5000 = Object.groupBy(employees, ({salary}) => {
        return salary >= 5000 ? "More than 5k" : "Less than 5k";
    })
    console.log(groupedByMoreThan5000);
}

//Immutability
//In programming it is required that how much ever possible you manage your code, you manage your data changes in the immutable way. You do not change the data structure rather if you have to change something you make a copy of it and make the change
//on the copy. the data is the source of the truth. if actual data is changed from multiple points by multiple functionalities you should have track of who, at what circumstances is changing your data. If you dont have that track/predictability 
//it is very difficult to debug and identify all the state changes of your data. So do not mute the source data do it on a copy. If you have to make a change again then make another copy on that copy etc.

//toReversed() is the immutable version of reverse()

const items = [1, 2, 3];
const reversedItems = items.toReversed();//doesnt change source array rather it will return a new array that now we can hold inside of a new variable
console.log(reversedItems);
console.log(items);

//toSorted() is the immutable version of sort()

const months = ["Mar", "Jan", "Feb", "Dec"];
const sortedMonths = months.toSorted();
console.log(sortedMonths);
console.log(months);

//toSpliced() it will not change the original array. it will return a new array with the changes in it

const month = ["Jan", "Mar", "Apr", "May"];
const month2 = month.toSpliced(1,0,"Feb");
console.log(month2);
console.log(month);

//Always use these immutable methods that do not change source data

//with() 

const numbers = [1, 2, 3, 4, 5];//want to add 6 to second index
//numbers[2] = [6];//this is the normal way
//console.log(numbers);
//but it was muted/changed directly
//with() takes index,value it can used negative numbers. if negative starts right to left. if positive left to right
const newArray = numbers.with(2,6);
console.log(newArray);
console.log(numbers);

//numbers[-2] = 8; wont work
const anotherArray = numbers.with(-2, 8);//it will start from the end and replace 4 with 8
console.log(anotherArray);
//when you want to seek and replace an element of an array using its index but you dont want to modify/mute the array use with()

//Array Like
//{key: "value"}//this is an object

//[1,2,3]//this is an array
//array like is an object that has some behavior like arrays. it has index to access elements and non negative length property. 
//array has other functionalities, methods like push, pop, join, math, reduced. array like does not have this

const arrLike = {0: 'I', 1: 'am', 2: 'array-like', length:3};

console.log(arrLike);//'array-like'
arrLike.length;//3
console.log("is arrLike an array?", Array.isArray(arrLike));//false
console.log("is arrLike an object?", arrLike instanceof Object);//true

function checkArgs(){
    console.log("Array like args", arguments);//whenever you have a function created you have access to a special variable called arguments inside the function
    const argArr = [...arguments];
    console.log("Converted array args", argArr);
    //while calling this function if you pass any arguments this arguments will have the information about 1 and 45. 0 index has 1, 1 index has 45, length: 2, and prototype is an object. this makes it array-like
/*    arguments.forEach(elem) => {
        //this will fail
    }
        
*/
    argArr.forEach((elem) => {
            console.log(elem);
    }) 
}

checkArgs(1, 45);
//When dealing with an array-like we most likely want to iterate over them because they look like an array. So we want to take the elements out of it. So we have to convert array-like to an array so we can act upon it.
//we can apply the spread operator. it will convert the array-like into an array

console.log("HTML Collection as Array Like", document.getElementsByTagName('li'));
const collectionArr = Array.from(document.getElementsByTagName('li'))//if we put an array-like we are returned an array
console.log("Converted Array", collectionArr);

//fromAsync() will also create a new array but one major difference. Array.from() you get the array directly. with Array.fromAsync() you will get a Promise as a return and then you have to handle that Promise to get the actual array value out of it
//second difference: Array.from() straight away works right away with an array. Array.fromAsync() also works with Async iterable object. readable stream async generator. so if you have async iterable objects and from there you want to convert or get
//an array out as a result then we use Array.fromAsync(). it will return a promise because its an asynchronus function and we have to handle the promoise.

const collectionPromise = Array.fromAsync(document.getElementsByTagName('li'));
console.log("Converted Array", collectionPromise);//this returns us a promise not an array
//this is how we handle a promise
//if there is an error we handle it with a .catch
collectionPromise.then((value) => console.log(value))

const ret = Array.fromAsync({
    0: Promise.resolve('tapaScript'),
    1: Promise.resolve('Google'),
    2: Promise.resolve('Apple'),
    length: 3
}).then((value) => console.log(value))

console.log(ret);

//of() - is a static method that helps us create a new array instance but unlike the previous 2 instances here we create a new array instance from any number of arguments

const a = new Array(2,3,4);
const b = [4,5,6];

const c = Array.of(2, true, 'test', {name: "Alex"}, [1,2,3]);
console.log(c);

//Array Iterator Methods in JavaScript

//filter() 
let customers = [
    {
        id: 1,
        f_name: "Abby",
        l_name: "Thomas",
        gender: "M",
        married: true,
        age: 32,
        expense: 500,
        purchased: ["Shampoo", "Toys", "Book"],
    },
    {
        id: 2,
        f_name: "Jerry",
        l_name: "Tom",
        gender: "M",
        married: true,
        age: 64,
        expense: 100,
        purchased: ["Stick", "Blade"],
    },
    {
        id: 3,
        f_name: "Dianna",
        l_name: "Cherry",
        gender: "F",
        married: true,
        age: 22,
        expense: 1500,
        purchased: ["Lipstik", "Nail Polish", "Bag", "Book"],
    },
    {
        id: 4,
        f_name: "Dev",
        l_name: "Currian",
        gender: "M",
        married: true,
        age: 82,
        expense: 90,
        purchased: ["Book"],
    },
    {
        id: 5,
        f_name: "Maria",
        l_name: "Gomes",
        gender: "F",
        married: false,
        age: 7,
        expense: 300,
        purchased: ["Toys"],
    },
];

//Get senior citizens by filtering out customers 

//const newArray = arr.filter((element, index, array) =>
// {

// });
//we apply the filter method to an array and then it takes a callback function. the callback function is also a test function. this test function gets applied on every element of an array. this isnt only on filter. each of these iterators
//method apply this callback function on each element of an array and try to figure out something. some methods like filter apply this function on each of the elements of an array and try to test the condition. if the condition is true
//then it will behave in a certain way. if it is false then it will behave in a certain way
//for filter function the test function if it evalutes to be true that means the element on which after applying this callback function the result is true that particular element will be inside the returned array.
//if the result of applying this callback function on an element is false then that particular element wont be part of the new array that it returns. it means it filters it out and then it returns the elements in an array
//that passes this test condition and returns true.

const seniorCustomers = customers.filter((customers) => {
    return customers.age >= 60;
})

console.log("Senior Customer List", seniorCustomers);

//map() - creates a new array.

const customersWithFullName = customers.map((customers) =>{
    let title = "";

    if(customers.gender === 'M'){
        title = "Mr.";
    }
    else if(customers.gender === 'F' && customers.married){
        title = "Mrs.";
    }
    else{
        title = "Miss";
    }
    customers['full_name'] = `${title} ${customers.f_name} ${customers.l_name}`;
    return customers;
})
//whatever transformation logic im writing that logic will be applied on each of the customer data and then after we get the updated customer data that updated customer data will be added to this array

console.log("Customer after adding fullname", customersWithFullName);

//reduce() - The average age of the customers who have purchased the item, 'Book'
//reduce the arrays elements value into a single value
/*
arr.reduce(
    reducer(
        accumulator,//is initialized with initialvalue. then accumulates reducers return value
        currentvalue,
        index,
        array),
    initialvalue);
*/

//A reducer function which is also called as callback function to be called on each element of the array
//initial value is what the accumulator will be initialized to
/*
const ret = function reducer(accumulator, currentValue, index, array){
    //do something with avvumulator and currentvalue
    //You get a result
    //You return that result
    //the next element in the array is initialized with the result
}
*/

const arr = [1, 2, 3, 4, 5];//want to know the total of this
const result = arr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

console.log(result);

let count = 0;
const total = customers.reduce((accumulator, customer) => {
    if (customer.purchased.includes("Book")) {
        accumulator = accumulator + customer.age;
        count = count + 1;
    }
    return accumulator;
}, 0);

console.log('Customer Avg Age Purchased Book:', Math.floor(total/count));

//reduceRight() will do the reduce process from right to left instead of left to right

let number = [100, 40, 15];

const subsResult = number.reduceRight((accumulator, current) => {
    return accumulator - current;
});

console.log("Subs", subsResult);

//some() - checks if a specified condition is satisfied for at least one element in the array. if it does satisfy it it returns true if not then it returns false
//Do we have a young customer age less than 10

const hasYoungCustomers = customers.some((customer) =>{
    return customer.age < 10;
});

console.log('Has young customer age < 10:',hasYoungCustomers);

//every() - takes a test function and applies it on each of the elements of the array and return true if it satisfied for all the elements. otherwise return false
//Every customer is married?

const isAllMarried = customers.every((customer) => {
    return customer.married;
});
console.log('All Customers Married?', isAllMarried);

//find() - find the youngest customer

const foundYoungCustomer = customers.find((customers) => {
    return customers.age < 10;
});
console.log('Found Young Cusomter age < 10:', foundYoungCustomer);

// findIndex() method always gives first ocurrence starting from the left of the array
const youngCustomerIndex = customers.findIndex((customer) => {
    return customer.age < 10;
});

console.log("Found Young Customer Index: ", youngCustomerIndex);

//findLastIndex() always gives first ocurrence starting from the right of the array
// findIndex() method
const youngCustomerIndex2 = customers.findIndex((customer) => {
    return customer.age < 10;
});

console.log("Found Young Customer Index: ", youngCustomerIndex2);

// findLast() method starts from the left to right and finds the last ocurrence 

const lastFoundYoungCustomer = customers.findLast((customer) => {
    return customer.age < 10;
});
console.log(
    "[find] Last Found Young Customer(Age < 10): ",
    lastFoundYoungCustomer
);

//Array method chaining

//Use Case: Get the total amount spent by Married Customers 

//reduce()
//map()
//filter() to figure out who are the married customers

//Find all the married customers
/*
const marriedCustomers = customers.filter((customers) =>{
    return customers.married;
});

const expenseMapped = marriedCustomers.map((marriedCustomer) =>{
    return marriedCustomers.expense;
});

const totalExpenseMarriedCustomer = expenseMapped.reduce((accum, expense) => {
    return accum + expense;
}, 0);

console.log("Total expenses of married customers:", totalExpenseMarriedCustomer);
*/
const totalExpense = customers
    .filter((customer) => {
        return customer.married;
    })
    .map((marriedCustomer) => {
        return marriedCustomer.expense;
    })
    .reduce((accum, expense) => {
        return accum + expense;
    }, 0);

console.log("Total Expense of Married Customers in INR: ", totalExpense);

//the forEach() array method - is for iterating over array elements and executes a particular function that we provide as a callback for the forEach

const arr1 = [1, 2, 3, 4, 5];
let sum = 0;
arr1.forEach((elem) => {
    sum = sum + elem;
    //console.log(elem);
});
console.log("Sum using forEach", sum);
//forEach only iterates over each of the element it does not return any such thing. 

//entries() - we get both entries and index

const arrIterator = arr1.entries();//return an array iterator
//console.log("Array Iterator", arrIterator.next().value);//means in the 0th index it has value 1
//console.log("Array Iterator", arrIterator.next().value);//1 index it has value 2

for(const [index, element] of arrIterator){
    console.log(index, element);
}

//values() - only prints the values no index

const arrItr2 = arr1.values();

for(const value of arrItr2){
    console.log(value);
}

//flatMap() - it will take the callback function, and apply the callback function on each array. after that it will use the flat method to flattening the result by 1 level

const arr2 = [1,2,3,4];

console.log("simple map",arr2.map(item => item *2));
console.log("simple flatmap",arr2.flatMap(item => item *2));//first it will map/transform the array using the callback function then it will flatten it by one level

console.log("complex map",arr2.map(item => [item *2]));//[[2], [4], [6], [8], [10]] is what this will print
console.log("complex flatmap",arr2.flatMap(item => [item *2]));

arr2.map(item => [[item *2]]);//this will print [[[2]]]
arr2.flatMap(item => [[item *2]]);//this will print [[2]]

console.log("complex flatmap",arr2.map(item => [[item *2]]));
console.log("complex flatmap",arr2.flatMap(item => [[item *2]]));