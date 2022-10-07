
//Begin with a function called getComputerChoice that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.
//Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
//Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).
//Important note: you want to return the results of this function call
//Write a NEW function called game(). Call the playRound function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.
//Use prompt()
//const aNumber = Number(window.prompt("Type a number", ""));
//let sign = prompt("What's your sign?");

//if (sign.toLowerCase() === "scorpio") {
//    alert("Wow! I'm a Scorpio too!");
//  }

// there are many ways to use the prompt feature
// sign = window.prompt(); // open the blank prompt window
// sign = prompt();       //  open the blank prompt window
// sign = window.prompt('Are you feeling lucky'); // open the window with Text "Are you feeling lucky"
// sign = window.prompt('Are you feeling lucky', 'sure'); // open the window with Text "Are you feeling lucky" and default value "sure"

let value2;
//const playerSelection2 = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
//const computerSelection2 = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);
let playerSelection = "";
let computerSelection = "";
let playerWin;
let computerWin;
let tieGame;
let playerScore = 0;
let computerScore = 0;
let roundScore = 0;
let computerWins = "Computer wins round";
let playerWins = "Player wins round";

function getComputerChoice(x) {
  if (value2 == 1) {
    return "rock";
  } else if (value2 == 2) {
    return "scissor";
  } else {
    return "paper";
  }
}

function oneRound(x, y) {
  value2 = Math.round(Math.random() * (3 - 1) + 1);
  playerSelection = prompt("Pick one: Rock, Paper, or Scissors").toLowerCase();

  if (playerSelection == computerSelection) {
    tieGame = `Its a tie: ${playerSelection} ties with ${computerSelection}`;
    return tieGame;
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    playerWin = `You win: ${playerSelection} beats ${computerSelection}`;
    playerScore++;
    return playerWin;
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    playerWin = `You win: ${playerSelection} beats ${computerSelection}`;
    playerScore++;
    return playerWin;
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    playerWin = `You win: ${playerSelection} beats ${computerSelection}`;
    playerScore++;
    return playerWin;
  } else {
    computerWin = `You lose: ${computerSelection} beats ${playerSelection}`;
    computerScore++;
    return computerWin;
  }
}
function rock1(){
  value2 = Math.round(Math.random() * (3 - 1) + 1);
  computerSelection = getComputerChoice(value2);
  if (computerSelection == 'rock') {
    console.log(tieGame = `Its a tie: rock ties with ${computerSelection}`);
    return tieGame;
  } else if (computerSelection == "scissor") {
    console.log(playerWin = `You win: rock beats ${computerSelection}`);
    playerScore++;
    return playerWin;
  } else if (computerSelection == "paper") {
    console.log(computerWin = `You lose: ${computerSelection} beats rock`);
    computerScore++;
    return computerWin;}
    
  }

  function paper1(){
    value2 = Math.round(Math.random() * (3 - 1) + 1);
    computerSelection = getComputerChoice(value2);
    if (computerSelection == 'paper') {
      console.log(tieGame = `Its a tie: paper ties with ${computerSelection}`);
      return tieGame;
    } else if (computerSelection == "rock") {
      console.log(playerWin = `You win: paper beats ${computerSelection}`);
      playerScore++;
      return playerWin;
    } else if (computerSelection == "scissor") {
      console.log(computerWin = `You lose: ${computerSelection} beats paper`);
      computerScore++;
      return computerWin;}
      else{return};
    }

    function scissor1(){
      value2 = Math.round(Math.random() * (3 - 1) + 1);
      computerSelection = getComputerChoice(value2);
      if (computerSelection == 'scissor') {
        console.log(tieGame = `Its a tie: scissor ties with ${computerSelection}`);
        return tieGame;
      } else if (computerSelection == "paper") {
        console.log(playerWin = `You win: scissor beats ${computerSelection}`);
        playerScore++;
        return playerWin;
      } else if (computerSelection == "paper") {
        console.log(computerWin = `You scissor: ${computerSelection} beats Rock`);
        computerScore++;
        return computerWin;}
        else{return};
      }
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissor = document.querySelector('#scissor');

rock.onclick = rock1;
paper.onclick = paper1;
scissor.onclick = scissor1;


/*paper.addEventListener('click', () => {playerSelection = 'paper'
console.log(playerSelection);
});

scissor.addEventListener('click', () => {playerSelection = 'scissor'
console.log(playerSelection);
});
*/






















/*function game(x) {
  for (let i = 0; i < 50; i++) {
    getComputerChoice(value2);
    computerSelection = getComputerChoice(value2);
    console.log(oneRound(playerSelection, computerSelection));
    console.log(playerScore);
    console.log(computerScore);
    if (playerScore == 5) {
      console.log(playerWins);
    } else if (computerScore == 5) {
      console.log(computerWins);
    }
    if (playerScore == 5 || computerScore == 5) {
      break;
    }
  }
}
game();
*/
