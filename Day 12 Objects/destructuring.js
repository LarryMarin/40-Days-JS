console.log("Learn Object Destructuring....")

const student = {
    'name' : 'John Doe',
    'age': 9,
    'std': 3,
    'subjects': ['Math', 'English', 'EVS'],
    parents: {
        'father': 'Bob Doe',
        'mother': 'Jane Doe',
        'email': 'john-parents@abcde.com'
    },
    'address': {
        'street': '65/2, Brooklyn Road',
        'city': 'Carterton',
        'country': 'New Zealand',
        'zip': 5791
    }
}

/*const name = student.name;
const city = student.address.city;
console.log(name, city);
This is too much code. With destructuring we can cut down the code
*/

//const {name, age} = student;//this will access all the properties in student then on the left it will take the specific key 'name' and take its value 
//const city = student.address.city;
//console.log(name, city);

//The first use case is about adding a new variable with a default value while destructuring 

const {name, age, meal = "bread"} = student;
//let meal = student.meal ? student.meal : "bread" //if we did not use destructuring we would have had to use this entire line of code to add meal with bread into student
console.log(name, age, meal);

//The second use case is can we add a new variable with a dynamic value? Yes

const {subjects, numberOfSubject = subjects.length} = student;
console.log(numberOfSubject);//3

//Third use case is adding aliases. Need this in React, Angular. Especially when we use asynchronus calls and we need to use a variable multiple times

//We can give an alias name to our destructured variables. it is useful when there are chances of varibale name conflicts from different sources

const {std: standard} = student;//we create an alias called standard using the value of std
console.log(standard);
console.log(std);//this will return a Reference Error since we created a variable called standard not std

//4th use case is Nested Object Destructuring

/*const {address} = student;
const zip = address.zip;
console.log(zip);
We can shorten this using destructuring
*/
const {address: {zip}} = student;//need the double {} so we can go into student to access address and then take the value of zip inside of address
console.log(zip)

//Destructuring to the function parameters

/*function sendEmail(student){//the entire student object goes in
    console.log(`Sent an email to ${student.parents.email}`);

}
Since we already are accessing all of student when we call sendEmail we can just use destructuring to directly access email from parents
*/

function sendEmail({parents: {email}}){
    console.log(`Sent an email to ${email}`);
}

sendEmail(student);

//Another use case is we can destructor a functions return value

const getStudent = () => {
    return{
        'name' : 'John Doe',
        'age': 9,
        'std': 3,
        'subjects': ['Math', 'English', 'EVS'],
        parents: {
            'father': 'Bob Doe',
            'mother': 'Jane Doe',
            'email': 'john-parents@abcde.com'
        },
        'address': {
            'street': '65/2, Brooklyn Road',
            'city': 'Carterton',
            'country': 'New Zealand',
            'zip': 5791
        }
    }
}

//if we need name and subject

/*const anotherStudent = getStudent();
const anotherName = anotherStudent.name;
const anotherSubjects = anotherStudent.subjects;
*/
//we can do this isntead

const {name: anotherName, subjects: anotherSubjects} = getStudent();//we use alias here for name: anotherName and subjects: anotherSubjects

console.log(anotherName, anotherSubjects);

//Another use case is Destructuring within the loop

const students = [
    {   
        'name': 'William',
        'grade': 'A',
    },
    {
        'name': 'Tom',
        'grade': 'A+',
    },
    {
        'name': 'Bob',
        'grade': 'B',
    }
];

//Array is a collection of elements. Elements can be primitive or nonprimitive. In this case the elements are nonprimitive and they are objects.
//we can use for of loop for destructuring

for (let {name, grade} of students){//right side of the of is the array students and the left side is declaring the variable names name and grade
    console.log(name, grade);//will print out all the names and grades in the array student
}


