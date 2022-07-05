let num = ['rock','paper','scissor']

function computerPlay(num){
    return num[Math.floor(Math.random()*num.length)]
}
//console.log(computerPlay(num);

function playRound(playerSelection, computerSelection) {
    /*rock > scissor 
    scissor > paper 
    paper > rock*/
    if (computerSelection == 'rock') {
        let message = "It's a tie"
        return message
    } else if (computerSelection == 'scissor') {
        let message = "You win"
        return message
    } else if (computerSelection == 'paper') {
        let message = "You lose"
        return message
    }

    

        
    }
  
  
  const playerSelection = "rock";
  const computerSelection = computerPlay(num);
  console.log(playRound(playerSelection, computerSelection));
  