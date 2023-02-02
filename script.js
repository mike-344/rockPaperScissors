let computerSelection;
let playerSelection;

function getComputerChoice(){
   let result=Math.floor(Math.random() * 3) + 1;

   if (result == 1){
    return "rock"
   } else if (result == 2){
    return "paper"
   } else{
    return "scissors"
   }
}

function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        return `It's a tie! You both chose ${playerSelection}`
    } else if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "paper" && computerSelection === "rock" || playerSelection === "scissors" && computerSelection === "paper"){
        return `You win! ${playerSelection} beats ${computerSelection}!`
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}!`
    }
}

playerSelection=prompt("Choose rock, paper or scissors").toLowerCase();
computerSelection=getComputerChoice();
console.log(playRound(playerSelection,computerSelection))