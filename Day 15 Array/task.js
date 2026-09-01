// T-001: Create an array of 5 elements using the Array Constructor.

const ele = new Array(1, 2, 3, 4, 5);

//T-002: Create an array of 3 empty slots.

let emptyArr = [,,];
console.log(emptyArr);

let sixArr = new Array(1, 2, 3, 'carrot', 5, 6);
console.log(sixArr[sixArr.length - 3]);

//T-004: Use the for loop on the above array to print elements in the odd index.

for(let i = 0; i <= sixArr.length - 1; i++){
    if(i%2!=0){
        console.log(sixArr[i]);
    }
}

// T-005: Add one element at the front and the end of an array.

sixArr.push('tomato');
sixArr.unshift('tomato');
console.log(sixArr);

//T-006: Remove an element from the front and the end of an array.

let popArr = sixArr.pop();
console.log(popArr);
console.log(sixArr);
let shiftArr = sixArr.shift();
console.log(shiftArr);
console.log(sixArr);

// T-007: Create an array containing the name of your favourite foods(10 foods). Destructure the 6th food element from the array using destructuring.

const [ , , , , , pbnj, , , , ] = ['pizza', 'chicken', 'hamburgers', 'fries', 'eggs', 'PBNJ', 'melonpan', 'meat', 'curry', 'ramen'];
console.log(pbnj);

// T-008: Take out the last 8 food items from the above array using the Array destructuring. Hint: rest parameter.

const [pizza, chicken, ...rest] = ['pizza', 'chicken', 'hamburgers', 'fries', 'eggs', 'PBNJ', 'melonpan', 'meat', 'curry', 'ramen'];
console.log(pizza);
console.log(chicken);
console.log(rest);

//Clone an Array(Shallow cloning)

const myFavFoods = ['pizza', 'chicken', 'hamburgers', 'fries', 'eggs', 'PBNJ', 'melonpan', 'meat', 'curry', 'ramen'];
const someOfMyFavs = ['ice cream', 'miso soup', ...myFavFoods];
console.log(someOfMyFavs);

//T-010: Empty an array using its length property
myFavFoods.length = 0;
console.log(myFavFoods);

//T-011: Create an array of 10 elements(number 1 to 10). Resize the array to length 6 once you find the number 5 in that array. Hint: Use for-loop.

const thisArray = [1,2,3,4,5,6,7,8,9,10];

for(let i = 0; i <= thisArray.length - 1; i++)
{
    if(thisArray[i] === 5)
    {
        console.log(thisArray[i]);
        thisArray.length -= 4;
        break;
    }
}
console.log(thisArray.length);

//T-012: Create an Array of 10 elements. Use the splice() method to empty the array.

const thisArray2 = [1,2,3,4,5,6,7,8,9,10];
thisArray2.splice(0,10);
console.log(thisArray2);

//T-013: Create an Array of 10 elements. You can empty the array in multiple ways: using the length property, using the pop() method, using the shift() method, setting the array with [], or the splice() method. Which among these methods are most efficient and why?
//setting array length to zero arr.length = 0; is the most effiecent because it takes way less time to empty the array. while with splice you need to know the array length, pop() and shif() both need a for loop to go through the entire array to empty it O(n) time,
//and arr = [] is the worst because its replacing the array not emptying it

//T-014: What happens when you concatenate two empty arrays?
const emp = [];
const emp2 = [];
emp.concat(emp2);
console.log(emp);
//it returns a brand new empty array when you concat 2 empty arrays

// T-015: How can you check if a value is partially matching with any of the elements of an Array?
//you can use the some() method to determine if a value is partially matching with any of the elements of an array.

//T-016: What is the difference between the slice() and splice() methods?
//slice() does not mute the source array/change the source array (immutable). it copies the array
//splice() deletes elements in an array, add a new element to an array, and modify an element in an array

// T-017: Create an Array of alphanumeric strings. Sort the elements in both ascending and descending orders. You must be doing this in an immutable way such that the source array never gets modified.

const alphaNum = ["1", "2", "3", "6", "8", "9", "4", "5", "7"];

console.log("Sorting Alphanumeric by descending order: ", alphaNum.sort(function(a, b){
    return a === b ? 0 : a > b ? -1 : 1; //this is for ascending sorting
}));

console.log("Sorting Alphanumeric by ascending order: ", alphaNum.sort(function(a, b){
    return a === b ? 0 : a > b ? 1 : -1; //this is for ascending sorting
}));

//T-018: Can you give examples of sparse and dense arrays?
//Sparse Arrays: One or more indices are "empty" — they don't hold a value at all, even though the array's length accounts for them. Skipping indices also counts as being sparse
//Dense Arrays: Every index from 0 to length - 1 has an actual assigned value. No gaps.

const sparseArray = new Array(5);
console.log(sparseArray);

const denseArray = [1,2,3,4,5];
console.log(denseArray);

//T-019: Give a practical usages of the .fill() method
//.fill() is great whenever you need to initialize or reset an array with a uniform value.
//1. Initializing an array with default values
//2.  Building a 2D grid / matrix
//3. Reseting state
//4. Partial fills with start/end — masking or padding sections
//5. Generating sequences (combined with map)
//6. Placeholder/skeleton UI data

// T-020: How to convert an array to a string?
//We can use .join() to convert an array into a string

const employees = [
  { id: 1, name: "Alice", projects: ["Project A", "Project B"], departmentId: 1, salary: 5000 },
  { id: 2, name: "Bob", projects: ["Project A", "Project C"], departmentId: 2, salary: 7000 },
  { id: 3, name: "Charlie", projects: ["Project A", "Project D"], departmentId: 3, salary: 4500 },
  { id: 4, name: "Diana", projects: ["Project A", "Project B"], departmentId: 1, salary: 5500 },
  { id: 5, name: "Edward", projects: ["Project E", "Project F"], departmentId: 2, salary: 8000 },
  { id: 6, name: "Fiona", projects: ["Project A", "Project B"], departmentId: 4, salary: 6000 },
  { id: 7, name: "George", projects: ["Project G", "Project B"], departmentId: 3, salary: 5200 },
  { id: 8, name: "Helen", projects: ["Project A", "Project J"], departmentId: 4, salary: 7200 },
  { id: 9, name: "Ian", projects: ["Project A", "Project B"], departmentId: 2, salary: 4800 },
  { id: 10, name: "Jane", projects: ["Project F", "Project M"], departmentId: 1, salary: 5100 },
];

const departments = [
  { id: 1, name: "HR" },
  { id: 2, name: "Engineering" },
  { id: 3, name: "Marketing" },
  { id: 4, name: "Sales" },
];

//T-021: Can you 
//  employees who work in the "Engineering" department?
const engDept = employees.filter((employees) => {
    return employees.departmentId === 2;
})

console.log(engDept);

//T-022: Create a new array that combines employee names and department names in the format: "Alice (HR)".

//try using .map to create a new array that has both name and department. check the id of the persons department. if id is employee.depId === depId(try this first if it doesnt work then go with numbers like 1,2,3,4)
// then engineering new name = ${employee.name} (${department.id.name})

const employeesNameAndDept = employees.map((employee) => {
    let empDept = "";
    if(employee.departmentId === 1){
        empDept = "HR";
    }
    else if(employee.departmentId === 2){
        empDept = "Engineering";
    }
    else if(employee.departmentId === 3){
        empDept = "Marketing";
    }
    else if(employee.departmentId === 4){
        empDept = "Sales";
    }
    employee['name'] = `${employee.name} (${empDept})`;
    return employee;
})
console.log(employeesNameAndDept);

/*
const employeesWithDept = employees.map((employee) => {
  const dept = departments.find((d) => d.id === employee.departmentId);
  return {
    ...employee,
    displayName: `${employee.name} (${dept.name})`,
  };
});
*/

//T-023: Find the highest salary among employees.
const highestPaidEmployee = employees.reduce((topEmp, employee) => {
  return employee.salary > topEmp.salary ? employee : topEmp;
});
console.log(highestPaidEmployee);


//T-024: Check if there is at least one employee in the "Sales" department.

const salesEmp = employees.some((emp) => {
    return emp.departmentId === 4;
});
console.log("Is there at least one employee in Sales? ", salesEmp);

//Cleaner Version of this
//const salesEmp = employees.some((emp) => emp.departmentId === 4);
//console.log("Is there at least one employee in Sales?", salesEmp); // true

// T-025: Write a function to filter employees earning more than 6000.
const empsWithHighSal = employees.filter((highSalEmps) => {
    if(highSalEmps.salary > 6000){
        return highSalEmps;
    }
});
console.log(empsWithHighSal);

//Cleaner Version
/*const empsWithHighSal = employees.filter((emp) => emp.salary > 6000);
console.log(empsWithHighSal);
// Bob (7000), Fiona (6000)? — check: Fiona is exactly 6000, NOT > 6000, so excluded
// Bob (7000), Edward (8000), Helen (7200)
*/
//T-026: Create an array of employee names only.

const empNames = employees.map((empNames) => {
    return empNames.name;
});
console.log(empNames);

//T-027: Calculate the total salary of all employees using
const totalSalary = employees.map((empSal) => {
    return empSal.salary;
})
.reduce((accum, salary) => {
    return accum + salary;
});
console.log(totalSalary);
//Cleaner Version and make sure to use 0 as the initial value so it doesnt throw an empty array 
/*const totalSalary = employees
  .map((emp) => emp.salary)
  .reduce((accum, salary) => accum + salary, 0);
console.log(totalSalary);
*/
//T-028: Is there any employee earning less than 5000?

const lowSalEmp = employees.find((empSal) => {
    if (empSal.salary < 5000){
        return empSal;
    }
});
console.log("Employees earning less than 5000: ",lowSalEmp);

//Cleaner Version
//const hasLowSalEmp = employees.some((emp) => emp.salary < 5000);
//console.log("Is there an employee earning less than 5000?", hasLowSalEmp); // true

//T-029: Find the first employee who earns exactly 5100. 
const empWithSal5100 = employees.find((empSal) => {
    if(empSal.salary === 5100){
        return empSal;
    }
});

console.log("Employee with exactly 5100 salary:", empWithSal5100);

//Cleaner Version
//const empWithSal5100 = employees.find((emp) => emp.salary === 5100);
//console.log(empWithSal5100);
// { id: 10, name: "Jane", departmentId: 1, salary: 5100 }

//T-030: Find the last employee in the "HR" department. findLast()

const lastHREmp = employees.findLast((emp) => {
    if(emp.departmentId === 1){
        return emp;
    }
});

console.log("The last HR Employee: ", lastHREmp);

//Cleaner way of doing this 
/*
This works because emp (a non-empty object) is truthy, so it satisfies the "truthy" check just as well as true would. 
But it's misleading — it looks like you're returning the value that becomes the result, when actually findLast() is just asking "yes or no, does this satisfy my test?" behind the scenes. 
Writing the comparison directly (emp.departmentId === 1) makes that intent clear and skips the unnecessary if block entirely.
Also worth noting: your original callback has no else branch, meaning when emp.departmentId !== 1, the function implicitly returns undefined — which is falsy, so it still works. 
But that's relying on an implicit fallthrough rather than an explicit condition, which is a bit fragile if you or someone else modifies this later.
*/
//const lastHREmp = employees.findLast((emp) => emp.departmentId === 1);
//console.log("The last HR Employee:", lastHREmp);

//Basically I should stop using if blocks for most of these i just need to put what I am searching for

//T-031: Find the first employee in the "Marketing" department.

const firstMarketingEmp = employees.find((employee) => employee.departmentId === 3);
console.log(firstMarketingEmp);

//T-032: Check if all employees earn more than 4000.

const empSal4000 = employees.every((employee) => employee.salary > 4000);
console.log("Are all employees salary greater than 4000? ",empSal4000);

//T-033: Find the first employee in the "Sales" and "HR" department.

const findSalesEmp = employees.find((employee) => employee.departmentId === 4);
const findHREmps = employees.find((employee) => employee.departmentId === 1);
console.log(findSalesEmp, findHREmps);

// T-034: Verify if all employees belong to a department listed in the departments array.
const verifyAllEmps = employees.every((employee) =>
  departments.some((dept) => dept.id === employee.departmentId)
);
console.log(verifyAllEmps);

// T-035: Log each employee's name and department name to the console.

employees.forEach((employee) => {
  const dept = departments.find((d) => d.id === employee.departmentId);

  console.log(`${employee.name} - ${dept.name}`);
});

//T-036: Extract all employee names into a single array.

const allEmpNames = employees.map((empNames) => empNames.name);
console.log(allEmpNames);

//T-037: Increment each employee's salary by 10%. use reduce
const incEmpSal = employees.map((employee) => {
  const raise = 0.10;
  return {
    ...employee,
    salary: employee.salary + employee.salary * raise,
  };
});
console.log(incEmpSal);

//T-038 Assume each employee can have multiple skills. Create an array of employee skills and flatten them. Example: [{name: "Alice", skills: ["Excel", "Management"]}, ...].

const employees2 = [
  { id: 1, name: "Alice", skills: ["Excell", "Management"], departmentId: 1, salary: 5000 },
  { id: 2, name: "Bob", skills: ["Excell", "Management"], departmentId: 2, salary: 7000 },
  { id: 3, name: "Charlie", skills: ["Excell", "Management"], departmentId: 3, salary: 4500 },
  { id: 4, name: "Diana", skills: ["Excell", "Management"], departmentId: 1, salary: 5500 },
  { id: 5, name: "Edward", skills: ["Excell", "Management"], departmentId: 2, salary: 8000 },
  { id: 6, name: "Fiona", skills: ["Excell", "Management"], departmentId: 4, salary: 6000 },
  { id: 7, name: "George", skills: ["Excell", "Management"], departmentId: 3, salary: 5200 },
  { id: 8, name: "Helen", skills: ["Excell", "Management"], departmentId: 4, salary: 7200 },
  { id: 9, name: "Ian", skills: ["Excell", "Management"], departmentId: 2, salary: 4800 },
  { id: 10, name: "Jane", skills: ["Excell", "Management"], departmentId: 1, salary: 5100 },
];

// Step 1: shape each employee as {name, skills}
const empSkills = employees2.map((employee) => ({
  name: employee.name,
  skills: employee.skills,
}));
console.log(empSkills);
// [{name: "Alice", skills: ["Excel", "Management"]}, ...]

// Step 2 (if "flatten" means: one big list of every skill across all employees):
const allSkillsFlat = employees2.flatMap((employee) => employee.skills);
console.log(allSkillsFlat);
// ["Excel", "Management", "Excel", "Management", ...] — one flat list, no per-employee structure

//T-039: Find the total salary of all employees working in the "Engineering" department.

const deptTotalSalary = employees
  .filter((emp) => emp.departmentId === 2)
  .map((emp) => emp.salary)
  .reduce((accum, salary) => accum + salary, 0);

console.log(deptTotalSalary); // 19800 (Bob 7000 + Edward 8000 + Ian 4800)

//T-040: Check if there is any department where all employees earn more than 5000.

const someDept = departments.some((dept) => {
    const emps = employees.filter((emp) => emp.departmentId === dept.id).every((emp) => emp.salary > 5000);
    return emps;
});
console.log(someDept);
//departments.some returns if SOME department has employees that earn more than 5000
//we do employees.filter() so we can filter each employee thats part of a specific department. then we use every() to check if every employee in that specific department has a salary of over 5000

// T-041: Assume each employee has a projects array (e.g., { id: 1, name: "Alice", projects: ["Project A", "Project B"] }). Find the total number of unique projects being handled across all employees.
/*
1. access employee array
2. check each employees projects
3. count the number of projects they have (reduce sounds like it can do that)
*/

const totalProjects = employees.flatMap((emp) => emp.projects);

const uniqueProjects = totalProjects.filter((project, index) => {
  return totalProjects.indexOf(project) === index;
});

const totalUniqueProjects = uniqueProjects.length;
console.log(totalUniqueProjects);

// T-042: For each employee, find their department name and return an array of employee names with their department names.

const empsDept = employees.map((emps) => {
    const deptNames = departments.find((d) => d.id === emps.departmentId);
    return `${emps.name} ${deptNames.name}`;
});
console.log(empsDept);

 //T-043: Get a list of names of employees earning more than 6000.

 const empList = employees.filter((emp) => emp.salary > 6000).map((emp) => emp.name);

 console.log(empList);

 // T-044: Write a for-of loop to print the names of all employees from the employees array.

 for(const employee of employees)
 {
    console.log(employee.name);
 }

 //T-045: Using a for-of loop, print the names of employees earning more than 5000.

  for(const employee of employees)
 {
    if(employee.salary > 5000)
        console.log("Found employees earning more than 5000: ", employee.name);
 }

//T-046: Modify the for-of loop to destructure each employee object and log their name and salary.


for(const {name, salary} of employees){
    console.log(name, salary);
}

//T-047: Write a for-of loop to match employees with their departments and print the results.

for(const employee of employees)
{
    for(const department of departments){
        if(employee.departmentId === department.id){
            console.log(employee.name, department.name);
            break;
        }
    }
}

//T-048: Use Array.prototype.entries() with a for-of loop to print the index and name of each employee.

const empEntries = employees.entries();

for(const [index, name] of empEntries){
    console.log(index, name.name);
}

//T-049: Given the array-like object below, access the second element and log it:

const arrayLike = { 0: "First", 1: "Second", length: 2 };

console.log(arrayLike[1]);

// T-050: Write a function that takes a variable number of arguments and converts the arguments object into a real array using Array.from.

function variableArgs(){
    const argArr = Array.from(arguments);
    console.log(argArr);
}

//T-051: Write a snippet to select all div elements on a webpage (using document.querySelectorAll) and convert the resulting NodeList into an array.

//const divArray = Array.from(document.querySelectorAll("div"));

//T-052: Merge these two arrays into a single array:

const arr1 = [1, 2];
const arr2 = [3, 4];

const mergedArrays = arr1.concat(arr2);
console.log(mergedArrays);

//T-053: Create an array of n duplicate values using Array.from. Input: Create an array with 5 "A" values. Output: ["A", "A", "A", "A", "A"]

function duplicateArr(n, value){
    const dupArr = Array.from({length: n}, () => value);
    return dupArr;
}
console.log(duplicateArr(7, "b"));

// T-054: Use Array.from to convert a string like "Hello" into an array of characters.

function convertString(string){
    const converted = Array.from(string);
    return converted;
}
console.log(convertString("Hello"));

// T-055: For the array, ['apple', 'banana', 'apricot', 'mango', 'blueberry'], group words by their first letter using group().

const fruitArr = ['apple', 'banana', 'apricot', 'mango', 'blueberry'];

const groupFruits = Object.groupBy(fruitArr, fruit => fruit[0]);
console.log(groupFruits);

//T-057: From this array [3, 7, 3, 2, 3, 8, 7, 7], find the most repeated number. Hint: Use array method.

const nums = [3, 7, 3, 2, 3, 8, 7, 7];

const counts = nums.reduce((acc, num) => {
  if (acc[num] != undefined) {
    acc[num]++;
  } else {
    acc[num] = 1;
  }
  return acc; 
}, {});
// counts = {3: 3, 7: 3, 2: 1, 8: 1}

const entries = Object.entries(counts);
// entries = [["3", 3], ["7", 3], ["2", 1], ["8", 1]]

const entriesReduced = entries.reduce((bestPair, currentPair) => {
  return bestPair[1] > currentPair[1] ? bestPair : currentPair;
});

console.log(entriesReduced);

// T-058: Find the median of [5, 2, 9, 1, 3, 6, 8].

const medianArr = [5, 2, 9, 1, 3, 6, 8];

const medianSorted = medianArr.sort(function(a,b) {
    return a === b ? 0 : a > b ? 1 : -1; //this is for ascending sorting
});
function findingMedian(){
    let med = 0;
    let elem = 0;
    let elem2 = 0;
    
if(medianSorted.length %2 !=0){
    elem = Math.floor((medianSorted.length-1)/2);
    return med = medianSorted[elem];
}
else{
    elem = Math.floor(medianSorted.length/2);
    elem2 = elem - 1;
    med = (medianSorted[elem] + medianSorted[elem2])/2;
    return med;
}
}

console.log(findingMedian());

//T-059: Convert this array [['a', 1], ['b', 2], ['c', 3]], into { a: 1, b: 2, c: 3 } using array method(s).
const basicArr = [['a', 1], ['b', 2], ['c', 3]];
const convertedArray = basicArr.reduce((acc, currentValue) =>{
    acc[currentValue[0]] = currentValue[1];
    return acc;
}, {})

console.log(convertedArray);

//T-060: Flatten and convert all letters to uppercase in one step using flatMap(). Here is input array: [['a', 'b'], ['c', 'd']].

const lowerCaseArr = [['a', 'b'], ['c', 'd']];
const upperCaseArr = lowerCaseArr.flatMap((arr) => arr.map((letter) => letter.toUpperCase()));
console.log(upperCaseArr);

// T-061: Count the occurrences of each fruit in this array: ['apple', 'banana', 'apple', 'mango', 'banana', 'banana']

const fruits = ['apple', 'banana', 'apple', 'mango', 'banana', 'banana'];
const countFruits = fruits.reduce((acc, currentFruit) => {
if (acc[currentFruit] != undefined) {
    acc[currentFruit]++;
  } else {
    acc[currentFruit] = 1;
  }
  return acc; 
}, [])

console.log(countFruits);

// T-062: Extract extract [‘b’, ‘c’, ‘d’] using slice() from this array: ['a', 'b', 'c', 'd', 'e']

const lettersArray = ['a', 'b', 'c', 'd', 'e'];
const slicedArray = lettersArray.slice(1,4);//starts at index 1. ends at index 4 exclusive(does not retrieve the 4th index)
console.log(slicedArray);

// T-063: Sort the array [9, 3, 1, 6, 8] in ascending order using toSorted()

const unsortedArr = [9, 3, 1, 6, 8];
const toSortArr = unsortedArr.toSorted();
console.log(toSortArr);

// T-064: Reverse [1, 2, 3, 4, 5] using toReversed() and compare it with reverse()

const sortedArr = [1, 2, 3, 4, 5];
const toReverseArr = sortedArr.toReversed();
const reverseArr = sortedArr.reverse();
console.log("toReverse() array",toReverseArr);
console.log("reverse() array", reverseArr);
console.log("Are they equal?",toReverseArr === reverseArr);

// T-065: Group the follwing array elements based on age(Adult vs Non-Adult):

const users = [
  { name: 'Alice', age: 55 },
  { name: 'Bob', age: 3 },
  { name: 'Charlie', age: 25 },
];

const groupedByAge = Object.groupBy(users, ({age}) => {
    return age >=21 ? "Adults" : "Non-Adults";
})
console.log(groupedByAge);

//T-066: Find the longest word in this sentence using Array and Array methods: "40 Days of JavaScript by tapaScript is a powerful initiative".

const sentence = "40 Days of JavaScript by tapaScript is a powerful initiative";
const splitArray = sentence.split(" ");
console.log(splitArray);


const longestWord = splitArray.reduce((acc, currentWord) => {
    //so current word needs to check the length of the current word then we need to compare it with acc
    //acc will hold the word with the longest length
    if(acc.length > currentWord.length)
        return acc;
    else{
        acc = currentWord;
        return acc;
    }
})

console.log(longestWord);

// T-067: Find common elements between two arrays, [1, 2, 3, 4], [3, 4, 5, 6]

const a1 = [1, 2, 3, 4];
const a2 = [3, 4, 5, 6];

const commonElems = a1.filter((item) => a2.includes(item));
console.log(commonElems);