/*
Lexical means related to something. Lexical enviorment means how and where your code is physically placed so that JavaScript as a language can look into the lexically placement of your code pieces and make sure
that it adheres to the grammar of the language so that it passes through and is able to execute your code.
Execution context means that the code that is currently running and everything surronding that that is helping to run it. 
Context means a set of circumstances or the fact that helps running certain events or taking care of certain situations. Gives more information about an event or a situation.
Execution context gives you more information about the current code that JavaScript is running and everything surronding that helps run this.

Global Execution Context.
Global means everything and anything outside of a function.

this and window are both true.
*/

/*function sayName(){
    var name = "someName";//this is lexically placed inside sayName
    console.log("The name is ", name);
}*/

var name = "Tom";

function sayName(){
    console.log(this.name);
}

/*
GEC:

Creation Phase
1. window object
2. this keyword
3. window === this
4. creating phase will allocate memory for varibale name and function sayName
5. name will be initialized with undefined.
6, the function body will be placed directly into memory 

Execution Phase:
1. It will assign the value "Tom" to the variable name
*/

/*Function Execution Context (FEC)
*/

var name = 'Tom';

function tom(){
    console.log(this.name + ' Runs');
}

/*
GEC
    Creation Phase
        name: undefined
        tom(): allocated in memory
    Execution Phase
       name: "Tom"
       tom: execute
    FEC (For tom())
         Creation Phase
            checks if there is a local variable in the function. if there is a local variable in the function or the function parameter it is going to allocate memory for that and initialize it as undefined
        Execution Phase
            FEC (for log() from console)
                Creation Phase

                Execution Phase
*/

/*
 NonPrimitives do not go in the stack they go into the heap
Primitives go into the stack
But nonprimitives address will be stored in the stack
Once the execution phase is done it will be removed from the stack. Garbage collection will clean up the unused memory addresses in the heap.
*/