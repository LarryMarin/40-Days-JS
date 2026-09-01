
/* Assumption
1. We have to prompt the user to get their inputs.
2. The Computer's selection will be random.
3. We have to compare user and computers choice.
4. We need to announce the winner.
5. After the winner announcement we may want to ask the user if they want to play again or quit the game. 
*/
//window.alert and window.prompt allows us to take user input only from the browser
function rockPaperScissorsGame(){
    console.log("Getting started with the Rock, Paper, or Scissors game.");
    const userChoicePrompt = window.prompt("Enter Rock, Paper, or Scissors.");
    const userChoice = userChoicePrompt.toLowerCase();//will turn the users input to lowercase so we can check the input easily later

    //the computer gets a random number from 1 to 3
    let computerChoice;
    const randomNumber = Math.floor(Math.random() * 3) + 1;//the +1 makes sure we always get a whole number from 1-3

    /*if (randomNumber === 1)
        computerChoice = "rock";
    else if (randomNumber === 2)
        computerChoice = "paper";
    else
        computerChoice = "scissors";
    */
    //we check the computers random number using switch cases
    switch (randomNumber)
    {
        case 1:
            computerChoice = "rock";
            break;
        case 2:
            computerChoice = "paper";
            break;
        case 3:
            computerChoice = "scissors"; 
            break;
    }
    
    console.log("User selected", userChoice);
    console.log("Computer selected", computerChoice);

    if 
    (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    )
    {
        console.log("The user Wins, YAY!");
    }
    
    
    else if(userChoice === computerChoice)
    {
        console.log("It is a tie.")
    }
    
    else if
    (
        (userChoice === "rock" && computerChoice === "paper") ||
        (userChoice === "paper" && computerChoice === "scissors") ||
        (userChoice === "scissors" && computerChoice === "rock")
    )
    {
        console.log("The computer wins.");
    }

    else
    {
        console.log("Please check the input, we did not understand it.");
    }

    const playAgainPrompt = prompt("Do you want to play again? (yes/no)");
    const playAgain = playAgainPrompt ? playAgainPrompt.toLocaleLowerCase() : "no";

    if (playAgain === "yes")
    {
        rockPaperScissorsGame();
    }
    else{
        console.log("Thanks for playing. See you next time.");
    }

}

//start this game
rockPaperScissorsGame();