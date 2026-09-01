/*
Consider the follwoing HTML:

<div id="text">This is a test. This test is only a test.</div>
Now, find and display the most frequently occurring word. Also put a count of occurance beside it.

Hints:

Use document.querySelector() or getElementById() to select the paragraph.
Convert the text into an array of words.
Use querySelector() to display the most frequent word along with the count inside another <div>.
*/

const div = document.getElementById("text");
let divText = div.innerHTML;
console.log(divText);
divText = divText.replaceAll(".", "");
const arrayOfWords = divText.split(" ");

console.log(arrayOfWords);

const findFreqWord = arrayOfWords.reduce((acc, currentWord) => {
    if(acc[currentWord]){
        acc[currentWord]++;
    }
    else{
        acc[currentWord] = 1;
    }
    return acc;
}, {})

console.log(findFreqWord);
console.log(Object.keys(findFreqWord));

let highestCount = 0;
let mostFrequentWord = "";
for(const word of Object.keys(findFreqWord)){
    if(highestCount < findFreqWord[word]){
        highestCount = findFreqWord[word];//assigns the value from this specific key to highestCount. it contains the words count
        mostFrequentWord = word;
    }
}
console.log(highestCount);
console.log(mostFrequentWord);

let resultDiv = document.querySelector("#result");
resultDiv.textContent = `The most frequent word is ${mostFrequentWord} and the count is ${highestCount}`;

//2. Create a zebra pattern
/*
Consider the following HTML:

<ul id="cars">
    <li>BMW</li>
    <li>Mahindra</li>
    <li>Audi</li>
    <li>Toyota</li>
    <li>Honda</li>
    <li>Hundai</li>
    <li>Tata</li>
    <li>Suzuki</li>
</ul>
Now put alternate colors and background colors to each of the list tags. for example,

If tne BMW is in white color text, the background should be in black color.
Then for the next car it will be reversed, the color is black and the background is white.
Then again the next one is white color and background black
So on.
*/

function changeColor(){
    const items = document.querySelectorAll("ul#cars li"); //this will give all the matching li(list) inside all ul with the id name itemList
    
    //if you have an element and if you need to retrieve the text then use the property innerText
    items.forEach((item, index) => {
        if(index % 2 == 0){
            item.style.backgroundColor = "black";
            item.style.color = "white";
        }
        else{
            item.style.backgroundColor = "white";
            item.style.color = "black";
        }
    })
}
changeColor();

//3. Write different ways we can access DOM and what they returns
/*
1. getElementById(id) we pass a id name. it will return the node with the specific id name
2. getElementsByClassName(className) we pass a class name. it will return an HTML Collection
3. getElementsByTagName(tagName) we pass a tag name. it will return an HTML Collection
4. querySelector(cssSelector) we have to pass a cssSelector. it will return the first matching element
5. querySelectorAll(cssSelector) we have to pass a cssSelector. this will return a NodeList of all the matching elements in it
*/

//4. Find and Replace Text Inside a Page
//Write a script that finds all occurrences of a word inside a <p> tag and replaces them with another word dynamically.

const p = document.querySelector("p");
let pText = p.innerText;

function replaceText(text, wordToFind, wordToReplaceWith){
    text = text.replaceAll(wordToFind, wordToReplaceWith);
    return text;
}

p.innerText = replaceText(pText, "car", "boat");

//5. Extract and Count Unique Links from a Page
//Count all the unique hyperlinks (<a>) in a page and display their count.

/*
first i need to find all hyperlinks. sounds like querySelectorAll works. gives me a NodeList
second we need to go through the NodeList. that means we need a loop to go through the NodeList (maybe transform the NodeList into an array).
while the loop is going through we have a count going on. the count will go up on every hyperlink we find.
we need to display the count.
*/

const allHyperLinks = document.querySelectorAll("a");
const hyperLinksArray = Array.from(allHyperLinks);
const hrefVals = hyperLinksArray.map((link) =>  link.href);

const totalUniqueHyperLinks = hrefVals.filter((value, index) => {
    return hrefVals.indexOf(value) === index;
});

console.log("The count of all hyper links in this page:", totalUniqueHyperLinks.length);