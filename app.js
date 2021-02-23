let userChoice;
let computerChoice;
let userCount = 0;
let compCount = 0;
let randomNum;

//stores scoreboard components
const userScore = document.querySelector('#user-score');
const compScore = document.querySelector('#computer-score');


//store choice buttons
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissor');

//store reaction message
const resultMessage = document.querySelector('.reaction');

//stores the computer's decision
const decision = document.querySelector('#computer-choice');



//finds a random number between 0 and 1
function random() {
    randomNum = Math.random();
}



function computerDecision() {
    random();
    if (randomNum < 0.34) {
        computerChoice = "rock";
    } else if(randomNum <= 0.67) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    console.log("computer picked " + computerChoice);

    //adds the proper png to the screen
    // decision.style.backgroundImage = ;
}


function results() {
    if (computerChoice == userChoice) {
        resultMessage.textContent = ("It was a tie, both get points!");
        userCount++;
        userScore.textContent = userCount;
        compCount++;
        compScore.textContent = userCount;
    }
    else if (computerChoice === 'rock' && userChoice === 'paper') {
        resultMessage.textContent = ("paper beats rock! you won!");
        userCount++;
        userScore.textContent = userCount;
      } 
    else if (computerChoice === 'rock' && userChoice === 'scissors') {
        resultMessage.textContent = ("rock beats scissors!, you lost! ");
        compCount++;
        compScore.textContent = compCount;
      }
    else if (computerChoice === 'paper' && userChoice === 'rock') {
        resultMessage.textContent = ("rock beats paper, you lost!");
        compCount++;
        compScore.textContent = compCount;
      } 
    else if (computerChoice === 'paper' && userChoice === 'scissors') {
        resultMessage.textContent = ("scissors beats paper, you won!");
        userCount++;
        userScore.textContent = userCount;
      } 
    else if (computerChoice === 'scissors' && userChoice === 'rock') {
        resultMessage.textContent = ("rock beats scissors, you won!");
        userCount++;
        userScore.textContent = userCount;
      } 
    else if (computerChoice === 'scissors' && userChoice === 'paper') {
        resultMessage.textContent = ("scissors beats paper, you lost!");
        compCount++;
        compScore.textContent = compCount;
      }
      console.log("user score is currently: " + userCount);
      console.log("computer score is currently: " + compCount);
}



  //checks to see which button was pressed
  rock.addEventListener("click", function () {
    console.log("player picked rock");
    userChoice= "rock";
    computerDecision();
    results();
  });

  paper.addEventListener("click", function () {
    console.log("player picked paper");
    userChoice= "paper";
    computerDecision();
    results();
  });

  scissors.addEventListener("click", function () {
    console.log("player picked scissors");
    userChoice= "scissors";
    computerDecision();
    results();
  });