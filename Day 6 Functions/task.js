//Write a Function to convert celsius to fahrenheit

function celsiusToFahrenheit(celsius){
    let fahrenheit = ((celsius * 9/5) +32);
    console.log(fahrenheit);
}

celsiusToFahrenheit(32);

//Create a function that returns the maximum of two numbers

function findMax(num1, num2)
{
    if(num1 > num2)
        return num1;
    else
        return num2;
}

let max = findMax(-10, -5);
console.log(max);

//Function to check if a string is a palindrome

function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;//gives us the last index using length - 1 (if length is 9 -> 9-1 = 8 -> maximum index number is 8 since we start with index 0)
  
  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

console.log(isPalindrome("racecar"));

//Wrtie a function to find the factorial of a number. 

function factorial(n) {
  let expression = "";
  let result = 1;

  for (let i = n; i >= 1; i--) {
    result = result * i;
    if (i === 1) {
      expression = expression + i;
    } else {
      expression = expression + i + " * ";
    }
  }

  return n + "! = " + expression + " = " + result;
}

console.log(factorial(5));

//Write a function to capitalize the first letter of each word in a sentence. Write a function capitalizeWords(sentence) 
//that takes a sentence and capitalizes the first letter of each word. You can use the toUpperCase() method of string to convert the lowercase to uppercase.

function capitalizeWords(sentence) {
  let result = "";
  let capitalizeNext = true;

  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === " ") {
      result = result + sentence[i];
      capitalizeNext = true;
    } 
    else if (capitalizeNext) {
      result = result + sentence[i].toUpperCase();
      capitalizeNext = false;
    } 
    else {
      result = result + sentence[i];
    }
  }

  return result;
}

console.log(capitalizeWords("i want a hot dog"));

//Use an IIFE to print "Hello, JavaScript" Write an IIFE that prints "Hello, JavaScript!" to the console. Here the Second word must be supplied using paramneter and argument.

(function(word){
    console.log("Hello,", word);
})("JavaScript")

//Create a simple CallBack function. Write a function greet(name, callback), where callback prints a message using the name parameter.

function greet(name, callback) {
  callback(name);
}

function printMessage(name) {
  console.log("Hello, " + name + "! Welcome!");
}

greet("Alice", printMessage);

//Write a function to Count Vowels in a String. Write a function countVowels(str) that counts the number of vowels (a, e, i, o, u) in a given string.

function countVowels(str){
  let vowels = 0;
  for(let i=0; i <= str.length; i++)
  {
    if(str[i]==='a' || str[i]==='e' || str[i]==='i' || str[i]==='o' || str[i]==='u')
      vowels+=1;
  }
  console.log(str, " has ", vowels, "vowels");
}

countVowels("I like hot dogs");