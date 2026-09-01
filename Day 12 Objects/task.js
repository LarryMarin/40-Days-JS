//1. What will the output be and why?

const user = { name: "Alex", age: undefined };
console.log(user.age ?? "Not provided");
//The output will be Not provided since the key age in the object user has its value set to undefined and in console.log user.age ?? is checking if user.age is undefined or not

//2. What will happen if we try to modify a frozen object

const obj = Object.freeze({ a: 1 });
obj.a = 2;
console.log(obj.a);
//The object cannot be modified at all if it is frozen so console.log will print out 1.

//3. Given an object with deeply nested properties, extract name, company, and address.city using destructuring

const person = {
  name: "Tapas",
  company: {
    name: "tapaScript",
    location: {
      city: "Bangalore",
      zip: "94107"
    }
  }
};

const {name: personName, company: {name: companyName, location: {city}}} = person;
console.log(personName, companyName, city);

//4. Build a Student Management System. 
/*
Store student details in an object (name, age, grades).
Implement a method to calculate the average grade.
*/

let student = {
    name: "John",
    age: 18, 
    grades: [70, 80, 90, 100],
    averageGrade(){
        let total = 0;
        for (let grade of this.grades)
        {
            total += grade;
        }
        return total/this.grades.length;
    }
} 

console.log(`${student.name}'s average is ${student.averageGrade()}`);

//5. Book Store Inventory System
/*
Store books in an object.
Add functionality to check availability and restock books.
*/

let bookStore = {
    books: [
        { title: "Harry Potter", author: "Rowling", quantity: 5 },
        { title: "The Hobbit", author: "Tolkien", quantity: 0 },
    ],
    checkAvailability(title) {
        for (let book of this.books) {
            if (book.title === title) {
                if (book.quantity > 0) {
                    console.log(`${title} is available. ${book.quantity} copies left.`);
                } else {
                    console.log(`${title} is out of stock.`);
                }
            }
        }
    },
    restock(title, amount) {
    for (let book of this.books) {
        if (book.title === title) {
            book.quantity += amount;
            console.log(`${title} restocked. New quantity: ${book.quantity}`);
        }
    }
}
};

bookStore.checkAvailability("Harry Potter"); // Harry Potter is available. 5 copies left.
bookStore.checkAvailability("The Hobbit");   // The Hobbit is out of stock.
bookStore.restock("The Hobbit", 3);

//6. What is the difference between Object.keys() and Object.entries()? Explain with examples
//The difference is that Object.keys() gets all the keys from inside the object. Object.entries() converts an object into an array.

//7. 7. How do you check if an object has a certain property?
//We can use Optional Chaining to check if an object has a certain propterty ex. object.department?.name 

//8. What will be the output and why?

const person1 = { name: "John" };
const newPerson = person1;
newPerson.name = "Doe";
console.log(person1.name);
//The output will be Doe because we are replacing newPersone.name original value of John with Doe.

//9. What’s the best way to deeply copy a nested object? Expalin with examples
//Using a structured clone will allow you to deeply copy a nested object.

//10. Loop and print values using Object destructuiring

const users = [
  {
      'name': 'Alex',
      'address': '15th Park Avenue',
      'age': 43
  },
  {
      'name': 'Bob',
      'address': 'Canada',
      'age': 53
  },
  {
      'name': 'Carl',
      'address': 'Bangalore',
      'age': 26
  }
];

for (let {name, address, age} of users){
    console.log(name, address, age);
}