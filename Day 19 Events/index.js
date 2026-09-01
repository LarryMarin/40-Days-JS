console.log("Day 19 - JavaScript Events");

//What we will learn today?

/*
What is an event?
Event Handling and why?
Event Handling in Markup
Event Handling in Script
addEventListener and removeEventListener
DOM Content Loaded
Event Object
Event Capturing and Bubbling
Event Delegation
Event Default Behavior
Custom Events
Projects
Tasks
*/

//What is an Event(Browser)
//An event is just a signal that something happened in the browser

function handleClick(greeting){
    console.log(`Button Clicked with a ${greeting}`);
}

const myBtn2Elem = document.getElementById("myBtn2");

myBtn2Elem.onclick = function() {
    console.log("My Button 2 Clicked");
}


myBtn2Elem.onclick = function() {
    console.log("My Button 2 Clicked Again");
}
//the second one will always override the first one. So it prints My Button 2 Clicked Again

myBtn2Elem.onclick = () => handleClick("hola");//to call a function that needs a input we need to wrap it with another function. either an inline function or arrow function

//addEventListener and removeEventListener

const countBtnElem = document.getElementById("countBtn");

let counter = 0;
function handleCount() {
    console.log("counter", counter);
    counter++;
}

const greetMe = function() {
    console.log("Thank You");
}
/*countBtnElem.addEventListener("click", function() {
    console.log("counter", counter);
    counter++;
})*/
countBtnElem.addEventListener("click", handleCount);
countBtnElem.addEventListener("click", greetMe);

//addEventListener takes 3 parameters, the first 2 are mandatory the third is optional: 1. what kind of event are you interested in dealing with, 2. define what will happen when the event happens so our event handler
//one major advantage of addEventListener is assigning multiple event handlers for a single event. 

/*countBtnElem.removeEventListener("click", function() {
    console.log("counter", counter);
    counter++;
});*/

countBtnElem.removeEventListener("click", handleCount);
//removeEventListner takes the event we want to remove, and which event handler we want to remove
//the 2 function instances in addEventListener and removeEventListener are not the same they are compeltely different from each other. We should always create a function outside of the event listener not inline.

//DOM Content Loaded

//will never run
document.onDOMContentLoaded = function() {
    console.log("DOM Content Loaded...");
}

//this will run
function domFunc(){
    console.log("DOM Conetent Loaded...");
}
document.addEventListener("DOMContentLoaded", domFunc);

//Event Object

const searchElem = document.getElementById("search-id");

function handleChange(event){
    console.log(event);

    console.log("Target:", event.target);//where this event is happening. the element that triggered the event
    console.log("Target Name:", event.target.name);//the name of the input box
    console.log("Target Value:", event.target.value);//the value you are inserting inside the input box
    console.log("Event Type:", event.type);
    console.log("Current Target:", event.currentTarget);//very important in bubbling. the element that the event listener is attached to.

    console.log(this);//whenever you are referencing this inside an handler function using plain JS function the this refers to the element itself on which you have added the event listener. in this case the element is the input field.
}
searchElem.addEventListener("change", handleChange);




