
/*this funcion will randomly 
generate a rock paper or scissor.*/
function computerPlay(answer) {
let compAnswr = Math.floor(Math.random()*100) + 1;
if (compAnswr<=33) {
    answer="rock"
} else if (compAnswr>33 && compAnswr<50) {
    answer="paper"
} else {
    answer="scissor"
} return answer
}
//function playRound will pull results from computerPlay and then prompt the user for a answer.
//this function is case insensitive so no matter the case it will convert to the correct case.
//function will run the comparing if and else if statements till one is true then alert with the results.
function playRound(playerSelection, computerSelection) {
    playerSelection = prompt("rock, paper, scissor?");
    playerSelection = playerSelection.toLowerCase()

    if (playerSelection=="rock" && computerSelection=="scissor") {
        answer=alert('you win');
    } else if (playerSelection=="rock" && computerSelection=="paper") {
        answer=alert('you lose');
    } else if (playerSelection=="rock" && computerSelection=="rock") {
        answer=alert('tie');
    } else if (playerSelection=="paper" && computerSelection=="rock") {
        answer=alert('you win');
    } else if (playerSelection=="paper" && computerSelection=="scissor") {
        answer=alert('you lose');
    } else if (playerSelection=="paper" && computerSelection=="paper") {
        answer=alert('tie');
    } else if (playerSelection=="scissor" && computerSelection=="paper") {
        answer=alert('you win');
    } else if (playerSelection=="scissor" && computerSelection=="rock") {
        answer=alert('you lose');
    } else if (playerSelection=="scissor" && computerSelection=="scissor") {
        answer=alert('tie');
    } else {
        answer=alert('please correctly choose rock paper or scissor');
    } return answer
  }
  
  function score(playerScore, compScore) {
    playerScore = 0;
    if (playRound == 'you win') {
        playerScore += 1;
  } else if (playRound == 'you lose') {
        compScore +=1;
  }
    return 
}

  const playerSelection = "rock";
  const computerSelection = computerPlay();
  console.log(playRound(playerSelection, computerSelection));

  function game(){
    for (let i = 0; i < 5; i++) {
        console.log(playRound(playerSelection, computerSelection));
        
     }
}

game()
