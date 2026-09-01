console.log("Event Bubbling, Capturing and Delegation");

//The event starts bubbling starting from the target and it starts going upwards to its parent reaching towards the document level. This always happens when you click on an event.
//In event bubbling the event starts from the target element and bubbles up through its ancestors.

//The Flow is: Child -> Parent -> Grandparent -> Document

//Bubbling - this is on by default

document.getElementById("grandparent").addEventListener("click", () => {
    console.log("Grandparent Clicked");
});

document.getElementById("parent").addEventListener("click", () => {
    console.log("Parent Clicked");
});

document.getElementById("child").addEventListener("click", () => {
    console.log("Child Clicked");
});

//Capturing - by default Capturing is disabled. You can enable capture phase if you want. to enable it pass a true as the last argument

//In event capturing the event flows from the outmost ancestors down to the target element. It happens before the actual target handles the event.

document.getElementById("grandparent").addEventListener("click", () => {
    console.log("Grandparent Clicked");
}, true);

document.getElementById("parent").addEventListener("click", () => {
    console.log("Parent Clicked");
}, true);

document.getElementById("child").addEventListener("click", () => {
    console.log("Child Clicked");
}, true);

//Event Delegation - it is a technique where you add a single listener to a parent element instead of adding individual event listeners to all its children

document.getElementById("itemList").addEventListener("click", () => {
    if (event.target.tagName === "LI"){
        console.log(`You clicked on ${event.target.innerContent}`);
    }
});

//Stop Propagation

document.getElementById("father").addEventListener("click", () => {
    console.log("Parent Clicked");
});

document.getElementById("child").addEventListener("click", (e) => {
    e.stopPropagation();
    console.log("Child Clicked");
});

//This makes it so when we click the button it will only print the child not the parent. This stops bubbling. Stops propagating up the heiarchy.