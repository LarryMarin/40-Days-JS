//Generate a Pyramid Pattern using Nested Loop as it is shown below:
for (let i = 1; i <= 5; i++)
{
    let stars = "";
    for(let j = 1; j <= i; j++)
    {
        stars += "*";
    }
    console.log(stars);
}

//Craete Multiplication Table (Using for loop). 
let n = 3;

for (let i = 1; i <= 10; i++)
{
    console.log(n*i);
}

//Find the summation of all odd numbers between 1 to 500 and print them on the console log.

let sum = 0;
for (let i = 1; i <= 500; i++)
{
    if (i % 2 !== 0)
    {
        sum += i;
    }
}
console.log(sum);

let sum1 = 0;
for (let i = 1; i <= 500; i+=2)
{
    sum1 += i;
}
console.log(sum1);

//Skipping Multiples of 3. Write a program to print numbers from 1 to 20, but skip multiples of 3.

for (let i = 1; i <=20; i++)
{
    if (i % 3 !== 0)
    {
        console.log(i);
    }
}

//Reverse Digits of a Number (Using while loop) Write a program to reverse the digits of a given number using a while loop.

let num = "6789";
count = num.length
while (count >= 0)
{
    console.log(num[count]);
    count--;
}

//Write your understanding on the difefrences between for, while, and do-while loop. Create their flow charts.
