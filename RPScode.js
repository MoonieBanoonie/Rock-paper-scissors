let playerScore = 0;
let computerScore = 0;
const buttonContainer_div = document.getElementById("buttoncontainer");
const rock_button = document.getElementById("rock");
const paper_button = document.getElementById("paper");
const scissors_button = document.getElementById("scissors");
const playerScore_span = document.getElementById("playerScore");
const computerScore_span = document.getElementById("computerScore");
const result_p = document.querySelector(".result > p");

let soundonClick = new Audio();
soundonClick.src = "plopsound.mp3"

function mainGame(){
    rock_button.addEventListener("click", function() {
        fullgame("rock");
    });

    paper_button.addEventListener("click", function() {
        fullgame("paper")
    });

    scissors_button.addEventListener("click", function() {
        fullgame ("scissors")
    });

}

function fullgame (playerChoice){

    function computerPlay() {
        const computerChoice = ["rock", "paper", "scissors"] //ipv if else statements kun je ook een array gebruiken
        const randomChoice = Math.floor(Math.random()*3) //(zorgt ervoor dat de random nummers hele nummers zijn ipv komma getallen)
        return computerChoice[randomChoice]
    }

    computerSelection = computerPlay()
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;

    console.log ("player_choice =>" + playerChoice);
    console.log ("computer_selection =>" + computerSelection);


    if (computerSelection === playerChoice) {
            result_p.innerHTML = "It's a draw!"
        }else if (computerSelection === "rock" && playerChoice === "paper") {
            ++playerScore
            result_p.innerHTML = playerChoice + " beats " + computerSelection + ", 1 point for you!"
        }else if (computerSelection === "rock" && playerChoice === "scissors") {
            ++computerScore
            result_p.innerHTML = computerSelection + " beats " + playerChoice + ", 1 point for the Overlord!"            
        }else if (computerSelection === "paper" && playerChoice === "rock") {
            ++computerScore
            result_p.innerHTML = computerSelection + " beats " + playerChoice + ",  1 point for the Overlord!"            
        }else if (computerSelection === "paper" && playerChoice === "scissors") {
            ++playerScore
            result_p.innerHTML = playerChoice + " beats " + computerSelection + ", 1 point for you!"            
        }else if (computerSelection === "scissors" && playerChoice === "rock") {
            ++playerScore
            result_p.innerHTML = playerChoice + " beats " + computerSelection + ", 1 point for you!"            
        }else if (computerSelection === "scissors" && playerChoice === "paper") {
            ++computerScore
            result_p.innerHTML = computerSelection + " beats " + playerChoice + ", 1 point for the Overlord!"        
        }
        return (computerSelection, playerChoice)        
}

mainGame()
