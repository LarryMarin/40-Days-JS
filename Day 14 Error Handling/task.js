//1. What will be the output of the following code?
try {
    let r = p + 50;
    console.log(r);
} catch (error) {
    console.log("An error occurred:", error.name);
}
//The output will be a reference error because p has not been defined

//2.Write a function processPayment(amount) that checks if the amount is positive and not exceeding balance. If any condition fails, throw appropriate errors

function processPayment(amount){
    let balance = 500;
    if(amount < 0)
    {
        throw new Error("Amount is negative. Please enter a positive amount.");
    }
    else if(amount > balance)
    {
        throw new Error("Amount is greater than balance. Please enter a reasonable amount.");
    }

}
processPayment(50);

//3. Implement a custom error handling system for an e-commerce website that categorizes errors as

function UserError(message){
    this.name = "User Error";
    this.message = message;
}

function PaymentError(message){
    this.name = "Payment Error";
    this.message = message;
}

function ServerError(message){
    this.name = "Server Error";
    this.message = message;
}

function EmailError(message){
    this.name = "Email Error";
    this.message = message;
}

//4. Simulate an API call function fetchData(url). If the URL does not start with "https", throw an "Invalid URL" error. Handle it using try...catch

function fetchData(url){
    try{
        if(!url.link.includes("https")) throw new Error("The URL must contain HTTPS at the beginning.")
    } catch (error) {
        console.error("Invalid URL.");
    }
}

//5. Implement a custom error type ValidationError using constructor functions to handle form validation errors

function ValidationError(message){
    this.name = "Validation Error";
    this.message = message;
}

function validateUser(formData){
    try{
        if(!formData.username) throw new ValidationError("Invalid username. Please enter a valid username.");
        if(formData.age<0) throw new ValidationError("Invalid age. Please enter a valid age");
    } catch (error){
        console.error("Validation Error:", error.message);
        throw error;
    }
}
const userInput = { username: "larry", age: -2 };
validateUser(userInput);

// Output:
// ValidationError: Username cannot be empty
// ValidationError: Age must be a positive number

//6. Write a function readFile(filePath) that simulates reading a file. If the file does not exist (simulate with a condition), throw a "File not found" error. Handle the error with try...catch. 
//Make sure you have code to handle releasing the IO resources

function readFile(filePath){
    try{
        if(!filePath) throw new Error("File not found.");
    } catch (error) {
        console.error("File not found", error.message);
    } finally {
        console.log("Cleanup: Releasing IO resources.");
    }
}

//Write a function parseJson(str) that takes a JSON string and tries to parse it using JSON.parse(). If parsing fails, catch the error and return "Invalid JSON"

function parseJson(str){
     try{
        if(!JSON.parse(str)) throw new Error("Invalid JSON.");
     } catch (error){
        console.error("Invalid JSON", error.message);
     }
}

//8. What is the purpose of throw in JavaScript
//It creates a new error manually

//9. What does the finally block do in a try...catch statement?
//Runs regardless of whether an error occurs or not. It is used for cleanup activities.

