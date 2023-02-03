let computerSelection;
let playerSelection;
let playerScore = 0;
let computerScore = 0;

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
        return `It's a tie! You both chose ${playerSelection}`;
    } else if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "paper" && computerSelection === "rock" || playerSelection === "scissors" && computerSelection === "paper"){
        playerScore= ++playerScore;
        return `You win! ${playerSelection} beats ${computerSelection}!`
    } else {
        computerScore= ++computerScore;
        return `You lose! ${computerSelection} beats ${playerSelection}!`
    }
}

function game(){
    for(let i = 0; i < 5; i++) {
        playerSelection=prompt("Choose rock, paper or scissors").toLowerCase();
        computerSelection=getComputerChoice();
        console.log(playRound(playerSelection,computerSelection))
        if (i == 4){
            if (playerScore == computerScore){
                console.log(`You won ${playerScore} rounds and the computer won ${computerScore} rounds, It's a tie!`)
            } else if(playerScore<computerScore){
                console.log(`You won ${playerScore} rounds and the computer won ${computerScore} rounds, you lose!`)
            } else{
                console.log(`You won ${playerScore} rounds and the computer won ${computerScore} rounds, you win!`)
            }
            
        }
    }
    
}

game();

