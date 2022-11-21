function getComputerChoice() {
    const handof = ['ROCK','PAPER','SCISSORS'];
    const randomNum = Math.floor(Math.random() * 3);
    return handof[randomNum];
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection == computerSelection){
        return 'Its a tie'
    }
    else if(playerSelection && computerSelection == 'PAPER'){
        return "You Lose! Paper beats Rock";
    }
    else{
        return "You Win! Rock beats Scissors";
    }
    }

    const game = ()=>{
        for(let i = 0; i < 5; i++){
            let playerSelection = "roCk";
            playerSelection = playerSelection.toUpperCase();
            const computerSelection = getComputerChoice();
            console.log(playRound(playerSelection, computerSelection)); 
        }
    }


    game();