console.log("Day 18: DOM Manipulations");

//What will we learn today?

/*
Creating Elemenets
Inserting Elements
Modifying Content
Removing Elements
Read, Write, and Remove Attributes
Traversing/Navigating DOM
Manipulating Styles
Manipulating Classes
Controlling Visibilities
Build Projects
Tasks
*/

//Creating Elements 

const pElem = document.createElement("p");//creates a paragraph element to add to my webpage
pElem.innerText = "This is a text added dynamically.";
document.body.appendChild(pElem);//this always gets appended at the end
console.log(pElem);

//Insert Elements

const span = document.createElement("span");
span.innerText = "I am a span";
const pElement = document.querySelector("p");
document.body.insertBefore(span, pElement)//takes 2 arguments, first the element I want to add, second what is the reference element to which i want to add this new node before (we have to get this). 
//we have to invoke this on p's parent which is body (document.body to access body). its always the parent of the REFERENCE NODE

//to do it before h1.
//const h1Elem = document.querySelector("h1");
//document.body.insertBefore(span, h1Elem);


//document.body.insertBefore(span, null); this gets added to the end of the body
//console.log(pElem.nextElementSibling);//currently it returns null. but if we added an h2 after the current p it will point to h2
////document.body.insertBefore(span, pElem.nextElementSibling); if the second argument is null it will place span at the parents node last element
//document.body.insertBefore(span, pElem.nextElementSibling);//if the second argument is null it will place span at the end of the bodys last element. if its h2 then it will place span between p and h2

//Modifying Content innerHTML allows us to both read and update the content but in a more structured format. we can actually specify the complete markup using innerHTML while adding or modifying the content of your element

{
    const pElem = document.querySelector("p");
    pElem.innerHTML = "<u>Hello. How</u> are you doing?";//if we use innerText it will print the u tag as a string

    //textContent
    const divElem = document.querySelector("div");

    console.log("Inner Text", divElem.innerText);//this will not show the output because the css visibility is not there
    console.log("Text Content", divElem.textContent);//this will always print the text content
}

//innerHTML has security risks. If you use it very openly you are welcoming potential security risks. Especially Cross Side Scripting Attack (XSS) in which a hacker can inject any malicous string or a script in your application that gets executed without you 
//noticing it. Use libraries like DOM Purify.

//Removing/Replacing Elements

{
    let list = document.getElementById("myList");
    const itemToRemove = list.children[0];
    list.removeChild(itemToRemove);

    document.getElementById("removeMe").remove();
    //there are 2 ways we can remove all elements. one is to iterate through the entire html collection and remove each one. another way is by doing list.innerText = "" which will remove it. works with innerHTML too
    //another way is list.replaceChildren(). this also takes parameters that are separated with commas. replaceChildren(param1, param2)

    //const pElem = document.querySelector("p");
    //list.replaceChildren(pElem); removes all the children in list and then adds pElem to list
}

//Read, Write, and Remove Attributes

{
    const imageElem = document.querySelector("img");

    console.log(imageElem.getAttribute('src'));//or 'alt'. this allows us to get the attribute of an element

    imageElem.setAttribute("src", "banner.png");//takes 2 parameters. first is the attribute name for which we want to save the value. second we want to set it to the new image.
    imageElem.setAttribute("alt", "banner");

    imageElem.removeAttribute("height");//we pass the value we want to remove

    imageElem.hasAttribute("src");//checks if we have an attribute. returns true if we have it, false if we dont
}

//Traversing/Navigating DOM

{
    //there are 2 methods
    //parentElement and parentNode. these two are recursive so we can keep calling it on the return method. there are basically no differences between these two
    const span = document.getElementById("text");

    console.log("Parent Element", span.parentElement.parentElement);//this returns the grandparent node of span since we called parentElement twice. if we called it once it will only return the parent of span.
    console.log("Parent Node", span.parentNode.parentNode);//this returns the grandparent node of span since we called parentNode twice. if we called it once it will only return the parent of span.

    //element represents the HTML Elements 
    //what is Node? everything that gets attached to the DOM, from the document, from the body, including text node, comment node

    //children and childNodes. there are differences on what they return 
    //children return and HTMLCollection. for HTMLCollections we have to first convert it to an array to perform array methods. children return only the HTML element. 
    //childNodes return a NodeList. for NodeList we can perform array methods immediately without converting. it also returns all the nodes irrespective whether its an element node, comment node, text node, etc

    const mainElem = document.getElementById("main-id");

    console.log("Children", mainElem.children);
    console.log("Child Nodes", mainElem.childNodes);

    //console.log("Children", mainElem.firstChild);//returns the first child so in this case it would be text with /n in it. theres a lastChild
    //console.log("Child Nodes", mainElem.firstElementChild);//returns the first ELEMENT child which is p. theres a lastElementChild

    //nextSibling picks the next node on the same level of your element. so in most cases its a text node with /n in it. nextElementNode picks the next HTML element node on the same level of your element.
    //previousSibling and previousElementSibling does the opposite of their counterparts

}

//Manipulating Styles
{
    const pElem = document.getElementById("p-id");
    console.log(pElem.style);
    pElem.style.backgroundColor = "pink";
}

//Manipulating Classes

{
    const mainDivElem = document.getElementById("main-id");

    //console.log(mainDivElem.className);
    //mainDivElem.className = "secondary-class";
    //console.log(mainDivElem.className);

    //classList helps you add and remove classes
    console.log(mainDivElem.classList);//this returns a DOMTokenList and shows both classes. DOMTokenList is array-like
    /*
    mainDivElem.classList.add("test");
    mainDivElem.classList.remove("layout");
    mainDivElem.classList.replace("main-class", "secondary-class");

    console.log("Does it have test?", mainDivElem.classList.contains("test"));
    console.log("Does it have test?", mainDivElem.classList.contains("main-class"));

    mainDivElem.classList.toggle("test");//adds it if its not there. removes it if it is there. this is basically an on and off switch. since we already have test it will be removed.
    mainDivElem.classList.toggle("test");//since test is now removed it will add it back.
    */
    }

//Controlling Visibilities 

{
    const mainDivElem = document.getElementById("main-id");
    //mainDivElem.style.display = "none";//put none to hide and block to show. display none hides the element in such a way that it looks like it was never there. the space it took up will be gone
    //mainDivElem.style.visibility = "hidden";//the space it took up is still there but the element is hidden

    mainDivElem.style.opacity = "1";//0 hides it but the space it took up is still there. 0.5 it looks faded out. 1 is the maximum which is full visibility
}

