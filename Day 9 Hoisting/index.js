console.log('name is ', name);
var name;
name = 'tom';
console.log('name is ', name);
//This will still work because  var name is hoisted (pulled up) to the top by JavaScript during execution time. So line 1 will print 'name is '. This is why we do not use var because it can create a lot of bugs.
//With let it will give you an error saying cannot access name before initialization. With let in the Global Execution Context Creation Phase name will not be initialized with undefine or anything. In case of var
//the memory will be created for the variable and will be initialized with undefined. in the case of let the variables memory will be created but will not be initialized with anything. It is there but it is not
//for any usage until and unless it has a value assigned to it so you cannot use it. With const this will not work because const cannot be changed after it is initialized and it needs to be initialized to work.
//if you do const name = "tom"; and try to call name a line before it was initialized it will give you the error that you cannot access name before initialization.

//Temporal Dead Zone (TDZ)
//Temporla Dead Zone is an area where you cannot access a variable until it is initialized 

//If you are trying to access a variable in TDZ you will get a reference error

//The Temporal Dead Zone in a block starts where the code in the block starts. It ends when your variable is initialized with a value. If you try to access a variable in between the TDZ start and TDZ end you will
//get a reference error.

//Function Hoisting

chase();

function chase()
{
    console.log('Tom chases Jerry!');

    caught();
}

function caught(){
    console.log('Tom caught Jerry :(');
}

//In the Global Execution Context Creation Phase the functions chase() and caught() are both initialized and have their memory created. Hoisting means the creation phase in the Execution Context GEC or the FEC when JS creates the 
//memory of a variable or a funciton and initialize and if possible initialized them. 

test();

var test = function(){
    console.log('I am being tested');
}

//this will not work.
/*
GEC:
CP:
test: undefined (memory for a variable called test is created)
EP:
Error since a variable cannot be a function 

*/