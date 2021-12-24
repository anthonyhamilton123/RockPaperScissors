function computerPlay(){
    arr = ['Rock','Paper','Scissors']
    return arr[Math.floor(Math.random() * arr.length)]
}

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



let computerWin = 1;
let playerWin = 1;
function fullRound(){
    const computerSelection = computerPlay();
    let playerSelection = prompt("rock, paper, scissors?");

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
        
    return roundResult();
}

console.log(fullRound())