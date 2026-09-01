console.log("Day 20 - DOM: Advanced Tips");

//Efficent DOM Traversal

const parent = document.querySelector('.card');
const firstChild = parent.firstElementChild;
const next = firstChild.nextElementSibling;
const lastChild = parent.lastElementChild;
const parentOfElement = firstChild.parentElement;

//this is the most efficent way to traverse the dom rather than adding id or class names to individual elements/individual element query. 

//Templates and Cloning

//Anything added to a template is added as a fragment. That means it does not get added to the DOM directly but it is there as an element for you to access.

const template = document.getElementById('card-template');
const clone = template.content.cloneNode(true);
clone.querySelector('.title').textContent = "DOM Advance Topic";
clone.querySelector('.desc').textContent = "How you are learning something new.";

document.body.appendChild(clone);

//Document Fragment and Range
//Document Fragment is like a container which you cannot really see on your webpage that is used to group a bunch of DOM Nodes before you attach to the main DOM. Why do we do that? Helps improve performance by reducing the repainting of your web UI
//because every time you change a tiny piece on your DOM you are actually repainting your UI. The less you repaint the performance will be improved.

//DOM Fragment
// - Not part of the main DOM tree until you insert it
// - Acts like a temporary container
// - Great for building chunks of DOM before adding them.

const fragment = document.createDocumentFragment();

for (let i = 0; i<=3; i++){
    const li = document.createElement('li');
    li.textContent = `Item ${i}`;
    fragment.appendChild(li);
}

document.getElementById("list").appendChild(fragment);

//Range - represents a fragment of a document that is between two boundary points if you want to have a fragment that can be represented using a range.
//Works like a text or node. Used for highlighting certain content or replacing certain content. Useful for rich text editor.

const p = document.getElementById('para');

const range = document.createRange();

range.setStart(p.firstChild, 6);//After "Hello ". start from <strong>
range.setEnd(p.childNodes[2], 4);//goes to the end of " and".

const content = range.cloneContents();

console.log(content);//" <strong>world</strong> and" //this is a fragment

//Shadow DOM
//DOM is a representation of the entire web page structure. We use DOM for all standard HTML element access putting dynamic behavior into it, for rendering, for manipulating the page content. All these elements are fully accessible and they can be modifed by
//JS and the CSS you can change it at any time.

//Shadow DOM is not like the normal DOM. Its mostly useful for creating something called web components. It is mostly isolated where the isolated styling, the isolated logic can be encapsulated. Its a separate encapsulated DOM tree which can be
//attached to any of our regular HTML elements. We call that as Shadow Host. This is mostly used inside a custom element. With raw JS HTMl you can create custom elements
//These custom elements hide its internal structure so the outside world cannot access them unless the developer exposes it

const shadowHost = document.querySelector('#box');
const shadow = shadowHost.attachShadow({mode: 'open'});//open allows people to access it. closed will not.\
shadow.innerHTML= `<style>p {color: red; }</style><p>Hello Shadow!</p>`;

//Advanced Class Manipulation

const btn = document.querySelector('.btn');
btn.classList.add('active');
btn.classList.remove('disabled');
btn.classList.toggle('visible');
btn.classList.replace('error', 'success');

//Handling Large Scale DOM Updates

function addItems(count) {
    const frag = document.createDocumentFragment();
    for (let i = 0; i < count; i++) {
      const div = document.createElement('div');
      div.textContent = `Item ${i}`;
      frag.appendChild(div);
    }
    document.body.appendChild(frag);//instead of repainting the DOM body a thousand times inside the loop we repaint it once outside of the loop
  }

addItems(10);

//Mutation Observer
//You will use this when you want to watch the changes in your DOM

//const observer = new MutationObserver(callback);
//observer.observe(targetNode, config);//targetNode is the node you want to watch, config is the type of mutation you are looking out for

const target = document.getElementById('watchMe');

const observer = new MutationObserver((mutationList, observerReference) => {
    for (const mutation of mutationList){
        console.log(`Type of mutation: ${mutation.type}`);
        if(mutation.type === 'childList'){
            console.log('A child node was added or removed');
        }
        if(mutation.type === 'attributes'){
            console.log(`Attribute ${mutation.attributeName} was changed`);
        }
        if(mutation.type === 'characterData'){
            console.log(`Text content has changed to: ${mutation.target.data}`);
        }
    }
});

const config = {
    subtree: true,
    characterData: true,
    childList: true,
    attributes: true
}
observer.observe(target, config)
//mutation list is what are the different kind of mutations happened on this target node that we are observing

function changeDom(){
    target.textContent = "Goodbye";
    target.setAttribute("data-status", "Changed");
}