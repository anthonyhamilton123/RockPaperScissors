//Rock Paper Scissors Console game in JS as part of the Odin Project!

//Computer move pulled from a random number generator
function computerPlay(){
    arr = ['Rock','Paper','Scissors']
    return arr[Math.floor(Math.random() * arr.length)]
}

//Define playing a round, tie, player win, computer win
function playRound(playerSelection, computerSelection){
    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()){
        return "It's a tie!";
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors"){
        return "Player Wins!";
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock"){
        return "Player Wins!";
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper"){
        return "Player Wins!";
    } else {
        return "Computer Wins!"; 
    }
}


//these variables are the integer of wins, 1 and then minused for ease
let computerWin = 1;
let playerWin = 1;

//this function defines the full scope of the round
function fullRound(){
    const computerSelection = computerPlay();

    //prompt for the player to select rock, paper, scissors
    //could add a way for invalid input
    let playerSelection = prompt("rock, paper, scissors?");

    //adds to the respective win column
    function roundResult(){
        let result = playRound(playerSelection, computerSelection);
            if(result === "Player Wins!"){
                playerWin ++;
            } else if (result === "Computer Wins!"){
                computerWin ++;}
        
        return `You played ${playerSelection}
        Computer played ${computerSelection}
        ${result} 
        The score is player ${playerWin - 1} to computer ${computerWin - 1}`;
    }
        
    console.log(roundResult());
}

//game to five, will update to while loop
function game(){
    fullRound();
    fullRound();
    fullRound();
    fullRound();
    fullRound();
}

game()