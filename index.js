let player = 0;
let computer = 0;

function getComputerChoice() {
    const handof = ['ROCK','PAPER','SCISSORS'];
    const randomNum = Math.floor(Math.random() * 3);
    return handof[randomNum];
}

function playRound(button) {
  player == 5 || computer == 5 ? gameOn = false : gameOn = true;
  if(gameOn == false) return;

  const playerSelection = button.innerText;
  const computerSelection = getComputerChoice();
  player == 5 || computer == 5 ? gameOn = false : gameOn = true;
  console.log(gameOn);
  /*switch(gameOn){

  }*/

  if (playerSelection == computerSelection) {
    roundOutcome.innerHTML = "Draw!";
  } else if (playerSelection == "ROCK" && computerSelection == "PAPER") {
    computer++;
    cpuScore.innerText = computer;
    roundOutcome.innerHTML = `Lost Round! ${computerSelection} beats ${playerSelection}`;
  } else if (playerSelection == "PAPER" && computerSelection == "SCISSORS") {
    computer++;
    cpuScore.innerText = computer;
    roundOutcome.innerHTML = `Lost Round! ${computerSelection} beats ${playerSelection}`;
  } else if (playerSelection == "SCISSORS" && computerSelection == "ROCK") {
    computer++;
    cpuScore.innerText = computer;
    roundOutcome.innerHTML = `Lost Round! ${computerSelection} beats ${playerSelection}`;
  } else {
    player++;
    playerScore.innerText = player;
    roundOutcome.innerHTML = `Won Round! ${playerSelection} beats ${computerSelection}`;
  }
}

    const game = ()=>{
        for(let i = 0; i < 5; i++){
            const computerSelection = getComputerChoice();
            console.log(playRound(playerSelection, computerSelection)); 
        }
        console.log(`Player ${player} : ${computer} Computer`);
        if(player > computer){
            console.log("You Win!");
        }
        else if(player == computer){
            console.log("It's a tie!")
        }
        else{
            console.log("You Lost!")
        }
    }
    
    let playerSelection = window.prompt('input hand');
    playerSelection = playerSelection.toUpperCase();
    
    game();