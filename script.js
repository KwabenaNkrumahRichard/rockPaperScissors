function getComputerChoice (){
    let random = Math.ceil(Math.random()*3);
    
    let choice ;
    if(random == 1){
        choice ='rock';
    }

    else if(random == 2){
        choice ='paper';
    }

    else{
        choice = 'scissors';
    }
    
    return choice;
}


function playRound(playerSelection,computerSelection){

    playerSelection = playerSelection.toLowerCase();

    if (playerSelection==computerSelection){
        
        draw++;
    }

    else if(playerSelection =='rock' && computerSelection == 'scissors'
            || playerSelection=='scissors' && computerSelection == 'paper'
            || playerSelection == 'paper' && computerSelection =='rock'){
        
        playerScore++;
    }

    else{
        
        computerScore++;
    }
    
}


function playGame(){

    for(i = 0;i < 5;i++){
    const playerSelection = prompt('ROCK PAPER SCISSORS');
    const computerSelection = getComputerChoice();
    playRound(playerSelection,computerSelection);
    }

    console.log(`You won ${playerScore}\nYou draw ${draw}` );
}

let playerScore = 0,computerScore = 0,draw =0;

playGame();