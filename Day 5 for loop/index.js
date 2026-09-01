console.log("Day 05");

//for loop
//A for loop is best when we know exactly how many times we need to run a block of code

/*for (initialization; condition; update)
{

}
*/

for (let count = 1; count <= 5; count++)
{
    console.log("Iteration/Loop", count);
}

let sum = -0;
for (let i = 1; i <= 100; i++)
{
    if (i % 2 === 0)
    {
        sum += i;
    }
}

console.log("Sum is", sum);

let language = "JavaScript";

for (let i = 0; i < language.length; i++)
{
    console.log(language.charAt(i));
}

for (let i = 1; i <= 3; i++)
{
    for (let j = 1; j <= 3; j++)
    {
        console.log("Row", i, "Col", j);
    }
}

//break and continue. Break stops execution. 

for (let i = 1; i <= 5; i++)
{
    if (i === 3) //putting break; here and no braces works. console.log(i); break;
    {
        console.log(i);
        break;
    }
}
//use break for exiting the current loop. continue is skipping the particular iteration/loop and going to the next one

for (let i = 1; i <= 5; i++)
{
    if (i === 3) continue;
        console.log(i);
}

for (let i=1, j=10; i <= 10 && j >= 1; i++, j--)//this is how we can use 2 counters without using 2 loops
{
    console.log(i, j);
}


for (let i = 1; i <= 5; i++)
{
    let stars = "";
    for(let j = 1; j <= i; j++)
    {
        stars += "*";
    }
    console.log(stars);
}
//while loop
//When you do not know how many times you want to run a block of code. A while loop runs as long as a given condition is true. Its best when we dont know in advance how many iterations we need. While condition is true execute this

/*while (condition)
{
    code
}*/

let counter = 1;
while (counter <= 5)
{
    console.log(counter);
    counter++;
}
//do while loop
//When you want to run the loop at least once. Do while loop ensures that the code executes at least once before checking the condition. Do code then check while condition. If true continue do

/*do
{
    //code
} while (condition);
*/

let num = 1;
do
{
    console.log(num);
    num++
} while (num <=5)

//Infinite Loop. Happens when the exit condition is never met
/*for (;;)
{
    console.log()
}*/