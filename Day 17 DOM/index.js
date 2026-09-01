//DOM - Document Object Model
//DOM is actually a programming interface for your web document

/*
DOM Types
1. Document - represents the entire page and it is the root node of the DOM tree
document.head shows us the head in console. We can do document.title, document.body, etc
*/
console.log(document);

/*
2. Node - A generic term for any elements in the DOM tree. Element Node, Text Node, Attribute Node
3. Element - A specific type of node that represents HTML tags/elements
4. NodeList - An array of nodes
5. Attr - represents the attribute of a node
    //<img src = "/" alt = "some image" />
6. NameNodeMap - A collection of Attr type of nodes 
*/

//Accessing the DOM
//You can add a tag, id, or class name

//By ID
let titleElem = document.getElementById("heading");
console.log(titleElem);

//By Class
let infoElems = document.getElementsByClassName("info");
console.log(infoElems);
console.log(infoElems[0], infoElems[1]);
[...infoElems].forEach((elem) => {
    console.log(elem);
});

//by tag name

let pTagElems = document.getElementsByTagName("p");//this gives me an HTMLCollection of all the paragraphs
console.log(pTagElems);

//Selectors - Query Selector and Query Selector All

//Query Selector - gives the first instance of the element being called

let para = document.querySelector("p.info"); //this gives me the first instance of a paragraph with the class named info
console.log("using query selector", para);

//querySelectorAll - returns a NodeList
let paras = document.querySelectorAll("p.info");//gives me a NodeList of all the paragraphs with the class name info
console.log("using query selector all", paras);

let hOne = document.querySelector("#heading");//# means we are trying to select an element using an ID
console.log("using query selector", hOne);

/*
DOM Access Methods:
1. getElementById(id) we pass a id name
2. getElementByClassName(className) we pass a class name
3. getElementByTagName(tagName) we pass a tag name
4. querySelector(cssSelector) we have to pass a cssSelector. it will return the first matching element
5. querySelectorAll(cssSelector) we have to pass a cssSelector. this will return a NodeList of all the matching elements in it
*/

//Mini Project - 1: Highlighter App

function highlightText(){
    console.log("About to highlight a text...");

    let elements = document.querySelectorAll("p.info");
    elements.forEach((element) => {
        element.style.backgroundColor = "yellow";
    })
}

function filterList(){
    const inputElem = document.getElementById("searchInput");
    const input = inputElem.value;

    const items = document.querySelectorAll("ul#itemList li"); //this will give all the matching li(list) inside all ul with the id name itemList
    
    //if you have an element and if you need to retrieve the text then use the property innerText
    items.forEach((item) => {
        item.style.display = item.innerText.toLowerCase().includes(input.toLowerCase()) ? "block" : "none"
    })
}

//DevTools and DOM
