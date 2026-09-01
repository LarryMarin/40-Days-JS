console.log("Day 14: Error Handling");

//What are we going to learn today

/*
1. Different Types of Error in JavaScript
2. try...catch syntax and flow
3. Real-World Use cases with try...catch
4. Throwing Error
5. Rethrowing Error
6. The try..catch..finally
7. Creating Custom Error
8. Self Assignment Operator
*/

//parsing error - are syntactical errors. without fixing those js does not know how to run your program. it means the grammar of the programming language itself is broken and js is unable to proceed, unable to 
//interpret, unable to parse the script you are expecting. Nothing much you can do unless you fix those syntax.

//runtime error - syntax wise it looks good but when the program is running it is not matching the expected output and giving some kind of error because you have done some mistake in certain ways or another part of the program
//would have done some mistake in certain ways and you are consuming the data and the values from that which is why you are getting errors

//What is an Exception in JavaScript? 
//Ans: Exceptions are runtime errors that disrupt program execution

//Ex:

//console.log(x);//We get a reference error x is not defined

//let obj = null;
//console.log(obj.name);//we get uncaught type error: cannot read properties of null (reading 'name')

//console.log("hi" //we get a Syntax Error missing ) 

//let arr = new Array(-1);//Uncaught RangeError: Invalid array length

//decodeURIComponent("%"); //URIError
//eval("var a =;);//EvalError

//try...catch syntax allows you to catch the error in your javascript so that you can do something with that error instead of crashing your application, instead of not knowing what that error is about, or why exactly that error
//was produced

/*try{
    //logic or code
}catch(err){//err is an instance an error object. the type of error happen inside the try block all the information about that error will be inside err
    //handle error
}*/
/*
1. Code inside try block gets executed.
2. If no error in the try block, the catch block will be ignored and will not be executed
3. If there is an error in the try block, the execution of the try block will be suspended and the control will move to the catch block. In catch block you can find the error details and do what you need (do the needful).
*/

try{
    console.log("Execution starts here");
    abc;
    console.log("Execution ends here");
} catch (err) {
    console.error("An Error has occured", err);//comes out as a console error colored in red
    console.log(err);
    console.log(err.message);//prints out abc is not defined
//the error object err has 
    console.log(err.name);//prints the name of that particular error that has occured
    console.log(err.message);//prints the details of the error
    console.log(err.stack);//gives you the current call stack. gives you the information about the calls the sequence of all the calls that lead to this particular error. this is immensly useful for debugging purpose
}
//you can delete (err) and it will still run correctly

//Real-World Use Cases
 
function divideNumbers(a,b){
    try{
        if (b === 0){
            //throw new Error("Division by zero is not allowed."); throws an execption or an error from this point than program itself throwing it
            const err = new Error("Divison by zero is not allowed.");
            throw err;//if it gets executed code below this will not be executed and it will jump to the catch block
        }
        const result = a/b;
        console.log(`The result is ${result}.`);
    } catch(error){
        console.log("Got a Math Error:", error.message);
    }
}

divideNumbers(15,3);
divideNumbers(15,0);

const person = {
    name: "Tapas",
    address: {
        city: "Bangalore"
    }
}

function getPostalCode(user){
    try{
        console.log(user.address.postalCode)
    }catch (error){
        console.error("Error accessing property:", error.message);
    }
}
getPostalCode(person);

function validateAge(age){
    try{
        if(isNaN(age)){
            throw new Error(`Invalid input: Age must be a number. Your input is ${age}.`);
        }
        console.log(`User's age is ${age}.`);
    } catch (error){
        console.error("Validation Error:", error.message);
    }
}

validateAge(30);
//validateAge("Tapas");

//Rethrow

function validateForm(formData){
    try{
        if(!formData.username) throw new Error("Username is mandatory.");
        if(!formData.email.includes("@")) throw new Error("Invalid email format!");
    } catch (error){
        console.error("Validation Issues Found:", error.message);
        throw error;//rethrow
    }
    
}

try{
    validateForm({username: "Tapas", email: "bademail"});
} catch (error){
    console.error("Showing error message for user creation", error.message);//always show the error from your top level function/top level caller so this error message
}

//validateForm({username: "Tapas", email: "bademail"});

//try-catch-finally

try{
    //Code that may throw an error
} catch (error){
    //Code to handle the error
} finally{
    //Code that always runs (cleanup action)
}

//useful in closing connections (3 way handshake) or holding any resources and you want to release those resources or do more clean up like a variable is there you want to set it to null because it was holding some reference to memory

function processInformation(information){
    try{
        console.log("Processing Information...");
        if(!nformation) throw new Error("No information to process");
        console.log("Information processed");
    } catch (error){
        console.log("Error:", error.message);
    } finally{
        console.log("Cleanup: Closing database connection.");
    }
}

processInformation("tapas is teaching JS.");
//Use finally when dealing with IO, databases, anything related to resources, or any other memory related activities that you want to clean up.

//Custom Error - to handle specific use cases in specific scenarios. you can provide more meaningful error messages to your end user. this will help developers but it will help your end customer to understand what the issue is.
//it can help you in much more easier debugging then you can standardize the error handling accross different functionalities in your application. this makes it very uniform

function ValidationError(message) { //since its capital it is a constructor function
    this.name = "Validation Error";//when we want to create a property in a constructor function we will be using the this keyword
    this.message = message;
    //this.stack = new Error().stack; this allows us to create a stack in our custom message so we can view the stack to see where the error occured
}

//ValidationError.prototype = Object.create(Error.prototype); we need to do this so our custom error can have the stack

function validateCitizen(age){
    if(age < 60){
        throw new ValidationError("You are not a senior citizen.");
    }
    return "You are a senior citizen.";
}

try{
    const message = validateCitizen(85);
    console.log(message);
} catch (error){
    console.error(`${error.name}: ${error.message}`);
}

//Self Assignment Operator ?= this simplifies try-catch but it is not implemented yet

/*let x;
let y = 10;

x ?= 20; //x is undefined so x becomes 20
y ?= 30; //y is = 10 so y remains 10

console.log(x); //Output: 20
console.log(y); //Output: 10
*/
