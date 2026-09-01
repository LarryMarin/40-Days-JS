/*
1. Prompt the user for a number between 1 and 10.
2. Generate a number between 1 and 10.
3. If the number is higher than the user number tell the user it is higher and let them guess again. If it is lower then tell the user it is lower and let them guess again. 
4. If the user guesses the number they win.
5. Show the user the number of attempts it took them to get the correct number. (basically keep a count and increase it by one every time they guess.)
*/

function startSecretNumberGame()
{
    console.log("Secret Number Guessing Game.");
    let userChoicePrompt = window.prompt("Please choose a number between 1 and 10.");
    let count = 1;
    let min = 1, max = 10;
    let userChoice = userChoicePrompt;

    let secretNumber = Math.floor(Math.random() * 10) + 1;

    while (userChoice != secretNumber)
    {
         if(userChoice < secretNumber)
         {
            console.log("Your number is too low! Please try again.");
            userChoicePrompt = window.prompt("Please choose a number between 1 and 10.");
            userChoice = Number(userChoicePrompt);
            count++;
         }
         else if(userChoice > secretNumber)
         {
            console.log("Your number is too high! Please try again.");
            userChoicePrompt = window.prompt("Please choose a number between 1 and 10.");
            userChoice = Number(userChoicePrompt);
            count++;
         }
         else if(userChoice < min || userChoice > max)
         {
            console.log("Your number is not between 1 and 10. Please try again.");
            userChoicePrompt = window.prompt("Please choose a number between 1 and 10.");
            userChoice = Number(userChoicePrompt);
            count++;
         }
         
    }

    console.log("Congratulations! You guessed the secret number! You took ", count, " attempts to guess the secret number correctly.");

    const playAgainPrompt = prompt("Do you want to play again? (yes/no)");
    const playAgain = playAgainPrompt ? playAgainPrompt.toLocaleLowerCase() : "no";

    if (playAgain === "yes")
    {
        startSecretNumberGame();
    }
    else{
        console.log("Thanks for playing. See you next time.");
    }
}

startSecretNumberGame();