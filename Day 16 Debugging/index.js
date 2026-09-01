//What is Debugging?
//the thing that that gets introduced and change the behavior of the application the way it is supposed to be vs now the mismatch is called a bug
//the process of tracking the issue/bug is called debugging and then we do the removal of the bug once you debug and find it that particular phase is called fixing

//the most used way to find a bug is console.log()


const print = function() {
    const name = document.getElementById('m_name').value;
    const wish = document.getElementById('m_wish').value;

    const message = 'Hello '
                        + name
                        + ', Your wish `'
                        + wish
                        + '` may come true!';
    logger(message);
    document.getElementById('output').innerHTML = '<span class="message">' + message + '</span>';
}

const logger = function(text) {
    console.log('**** I am a logger function ****');
    console.log(text);
}

/*to open debugger we either press f12 or right click the webpage and click inspect. its helpful for logging purposes. logging is when you want to know what exactly is going on with the functionality, the function, with the code execution flow or error
flow. you want to check back at at later point in time looking into the series of actions, reading into the series of action, identify what would have gone wrong. this is really important especially for your customer scenario

chrome debugger has 3 sections:
file navigation
code editor section
debugger section

CTRL + P opens a search tab where we can search for specific files

A breakpoint is a point in our code where we want our code execuiton to be passed so we can start looking at the things there or around it to identify what kind of problem our code may be having
Step F9
We want to run or simulate our applications use case flow once more. Reproducing that issue means we perform the same steps as the customer so we can reproduce that problem they had.
Step allows you to step through line by line of your JS code. Step also goes through functions line by line and if a function has a function call in it then it will enter that function, go through every line in that function and then go back to the funcion that 
called it.
This is really good if you do not have an idea where the problem may be.
Step Over F10
Step Over allows you to execute your code and the function without stepping in unless you have a breakpoint in the function. You will use this if you are sure there is no problem with the functions.

Resume/Jump F8
Jumps from breakpoint to breakpoint
Step Into F11
to investigate a function in a greater depth
Step Out Shift F11
whenever you want to come out of a function you step out

To disable all debugging click on deactivate breakpoints.

Conditional breakpoint will allow you to pause your execution of your code at a specific point but only when a specific condition is met
Use this when under which condition your application maybe failing
To add a conditional breakpoint we right click and then press add a conditional breakpoint. in there we add the condition like name === 'John' it will add the conditional breakpoint

Event Listener Breakpoints
shows all possible events on our web application 

Setting DOM Breakpoints
you can set breakpoints at code execution when something is added to the DOM removed from the DOM or changed in the DOM
We go to the elements tab, right click on one of the lines, then go to break on and choose how the break point will be activated

Scope shows you the scope of the current function/variable/value
Call stack shows you the call stack of certain functions/executions
Watch lets you add any variables you want to watch 
In VS we can use debugger to add a breakpoint in the code  
*/