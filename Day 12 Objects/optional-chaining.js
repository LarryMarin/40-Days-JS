console.log("Optional Chaining....");

const employee = {
    salary: {
        bonus: 300
    }
};

//Optional chaining simplifies how we access properties from a nested object especially if the nested objects property can result in a null or undefined

console.log(employee.department); //undefined

console.log(employee.department.name);//the error will say Cannot read properties of undefined  (reading 'name') because department is already undefined

//const name = employee.department && employee.department.name instead of doing this to check use this

const name = employee.department?.name;

console.log(name);//this will return undefined which is what you want rather than a run time error. this is what makes optional chaining useful. if you want to get the error to be reported.
//if you are anticipating a value but the API isnt giving the value you want that to be reported. then you can omit the ? from mployee.department?.name
//but if you want to use undefined itself you can use optional chaining instead