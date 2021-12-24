function computerPlay(){
    arr = ['Rock','Paper','Scissors']
    return arr[Math.floor(Math.random() * arr.length)]
}

function playRound(playerSelection, computerSelection){
    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()){
        return "It's a tie!";
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors"){
        return "Player wins this round!";
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock"){
        return "Player wins this round!";
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper"){
        return "Player wins this round!";
    } else {
        return "Computer Wins!"; 
    }
}

const playerSelection = "Rock";
const computerSelection = computerPlay();

console.log(playerSelection);
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));