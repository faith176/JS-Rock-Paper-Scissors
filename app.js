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
//image to correspond to the computer's decision 
let img = "url('icons/rock2.png')";

//stores the user's decision
const decisionUser = document.querySelector('#user-choice');

//image to correspond to the user's decision
let imgUser = "url('icons/rock2.png')";




//finds a random number between 0 and 1
function random() {
    randomNum = Math.random();
}


//has the computer randomly pick between rock, paper, and scissors
function computerDecision() {
    random();
    if (randomNum < 0.34) {
        computerChoice = "rock";
        img = "url('icons/rock2.png')";
    } else if(randomNum <= 0.67) {
        computerChoice = "paper";
        img = "url('icons/paper2.png')";
    } else {
        computerChoice = "scissors";
        img = "url('icons/scissor2.png')";
    }
    console.log("computer picked " + computerChoice);

    //adds the proper png to the screen for computer's decision
    decision.style.backgroundImage = img;
}

//displays the appropriate results message for each individual outcome
function results() {
    if (computerChoice == userChoice) {
        resultMessage.textContent = ("It was a tie, both get points!");
        userCount++;
        userScore.textContent = userCount;
        compCount++;
        compScore.textContent = compCount;
    }
    else if (computerChoice === 'rock' && userChoice === 'paper') {
        resultMessage.textContent = ("Paper beats Rock, you won!");
        userCount++;
        userScore.textContent = userCount;
      } 
    else if (computerChoice === 'rock' && userChoice === 'scissors') {
        resultMessage.textContent = ("Rock beats Scissors, you lost! ");
        compCount++;
        compScore.textContent = compCount;
      }
    else if (computerChoice === 'paper' && userChoice === 'rock') {
        resultMessage.textContent = ("Paper beats Rock, you lost!");
        compCount++;
        compScore.textContent = compCount;
      } 
    else if (computerChoice === 'paper' && userChoice === 'scissors') {
        resultMessage.textContent = ("Scissors beats Paper, you won!");
        userCount++;
        userScore.textContent = userCount;
      } 
    else if (computerChoice === 'scissors' && userChoice === 'rock') {
        resultMessage.textContent = ("Rock beats Scissors, you won!");
        userCount++;
        userScore.textContent = userCount;
      } 
    else if (computerChoice === 'scissors' && userChoice === 'paper') {
        resultMessage.textContent = ("Scissors beats Paper, you lost!");
        compCount++;
        compScore.textContent = compCount;
      }
      console.log("user score is currently: " + userCount);
      console.log("computer score is currently: " + compCount);
}



  //Event listeners to check which button was pressed

  //handles if the rock button was pressed
  rock.addEventListener("click", function () {
    console.log("player picked rock");
    userChoice= "rock";
    imgUser = "url('icons/rock2.png')";
    //adds the proper png to the screen for user's decision
    decisionUser.style.backgroundImage = imgUser;
    computerDecision();
    results();
  });

//handles if the paper button was pressed
  paper.addEventListener("click", function () {
    console.log("player picked paper");
    userChoice= "paper";
    imgUser = "url('icons/paper2.png')";
    //adds the proper png to the screen for user's decision
    decisionUser.style.backgroundImage = imgUser;
    computerDecision();
    results();
  });

  //handles if the scissors button was pressed
  scissors.addEventListener("click", function () {
    console.log("player picked scissors");
    userChoice= "scissors";
    imgUser = "url('icons/scissor2.png')";
    //adds the proper png to the screen for user's decision
    decisionUser.style.backgroundImage = imgUser;
    computerDecision();
    results();
  });
