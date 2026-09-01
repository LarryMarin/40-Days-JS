//Closure is a inner function that can remember the variable from its outer function (outer scope) even after the outer function has executed.

console.log("Day 11 - Closure");

function outer(){
    let x = 10;

    return function inner(){ //using return function is how we can test if closure is working
        console.log(x);
    }
    //inner();
}

const func = outer();

console.log(func());

function outerCount(){
    let count = 0;

    return function innerCount(){
        count++;
        console.log(count);
    }
}

const retVal = outerCount();

retVal();

//Real World Closure Example

function createBankAccount(initialBalance){
    let balance = initialBalance;

    return {
        "deposit" : (amount) => {
            balance = balance + amount;
            console.log("Deposited ", amount, "Current Balance: ", balance);
        },
        "withdraw" : (amount) =>{
            if (amount > balance){
                console.log("Insufficent funds.")
            }
            else{
                balance = balance - amount;
                console.log("Withdrawn ", amount, " Current Balance: ", balance);
            }
        },
        "checkBalance": () => console.log("Current Balance: ", balance)
    }
    
}

let tapaScriptAccount = createBankAccount(100);

console.log(tapaScriptAccount);

console.log(tapaScriptAccount.deposit(300));

console.log(tapaScriptAccount.withdraw(700));

console.log(tapaScriptAccount.checkBalance());

//Closure and Memory Leak

function dealingWithBigData(){
    let bigData = new Array(10000000).fill("*");

    return function(){
        console.log(bigData[3]);
    }
}

const variable12 = dealingWithBigData();

console.log(variable12());
//Using closure can create a memory leak because we are saving a lot of data so garbage collection cannot delete it since it is in use.

//Usefulness of Closure

/*
1. You can keep the variables private without exposing them.
2. You can stop variable pollution
3. You can create a function factory (bank account example)
4. You can keep a variable alive between multiple calls.
*/

function timer(){
    let secs = 0;

    return function(){
        secs++;
        console.log("Elapsed Seconds: ", secs);
    }

}

const timerInstance = timer();

timerInstance();
timerInstance();
timerInstance();

function setupButton(){
    let clickCount = 0;

    document.getElementById("myButton").addEventListener("click", function(){
        clickCount++;
        console.log(`Button clicked ${clickCount} times.`);
    });
}

setupButton();