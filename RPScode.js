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
            result_p.innerHTML = playerChoice + " beats " + computerSelection + ", 1 point for you!"
            playerScore++  
        }else if (computerSelection === "rock" && playerChoice === "scissors") {
            result_p.innerHTML = computerSelection + " beats " + playerChoice + ", 1 point for the Overlord!" 
            computerScore++
        }else if (computerSelection === "paper" && playerChoice === "rock") {
            result_p.innerHTML = computerSelection + " beats " + playerChoice + ",  1 point for the Overlord!"
            computerScore++
        }else if (computerSelection === "paper" && playerChoice === "scissors") {
            result_p.innerHTML = playerChoice + " beats " + computerSelection + ", 1 point for you!"
            playerScore++
        }else if (computerSelection === "scissors" && playerChoice === "rock") {
            result_p.innerHTML = playerChoice + " beats " + computerSelection + ", 1 point for you!"
            playerScore++ 
        }else if (computerSelection === "scissors" && playerChoice === "paper") {
            result_p.innerHTML = computerSelection + " beats " + playerChoice + ", 1 point for the Overlord!"
            computerScore++
        }
        return (computerSelection, playerChoice)
    
        
}


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
mainGame()


// function finalResults(winner){
//     if (playerScore === "5"){
//         result_p.innerHTML = "Congratulations, you won the game!"
//     } else if (computerScore === "5"){
//         result_p.innerHTML = "You lose! All hail the Overlord!"
//     }
//  return winner
// }

// finalResults();
    
   


// // function for a full game of rock paper scissors//
// function fullgame(){


// // // Function where the player is able to choose rock, paper or scissors and the game receives input from player//
//     function playerSelection (){
//         let playerInput = ["rock", "paper", "scissors"]
//         if (playerInput == "rock"){
//             return "rock"
//         }else if (playerInput == "paper"){
//             return "paper"
//         }else (playerInput == "scissors" )
//             return "scissors"
//     }
    
// let playerChoice = playerSelection()

// //function for a round of rock, paper or scissors including outcomes
// function gameRound(computerSelection, playerChoice){
    
//      if (computerSelection === playerChoice) {
//             alert (tieMessage + "YOU: " + playerScore + " & COMPUTER: " + computerScore)
//         }else if (computerSelection === "rock" && playerChoice === "paper") {
//             playerScore++
//             alert ("It's a win for you! The computer chose ROCK. YOU: " + playerScore + " & COMPUTER: " + computerScore)
//         }else if (computerSelection === "rock" && playerChoice === "scissors") {
//             computerScore++
//             alert ("It's a no from me dog. The computer chose ROCK. YOU: " + playerScore + " & COMPUTER: " + computerScore)
//         }else if (computerSelection === "paper" && playerChoice === "rock") {
//             computerScore++
//             alert ("It's a no from me dog. The computer chose PAPER. YOU: " + playerScore + " & COMPUTER: " + computerScore) 
//         }else if (computerSelection === "paper" && playerChoice === "scissors") {
//             playerScore++
//             alert ("It's a win for you! The computer chose PAPER. YOU: " + playerScore + " & COMPUTER: " + computerScore) 
//         }else if (computerSelection === "scissors" && playerChoice === "rock") {
//             playerScore++
//             alert ("It's a win for you! The computer chose SCISSORS. YOU: " + playerScore + " & COMPUTER: " + computerScore) 
    
//         }else if (computerSelection === "scissors" && playerChoice === "paper") {
//             computerScore++
//             alert ("It's a no from me dog. The computer chose SCISSORS. YOU: " + playerScore + " & COMPUTER: " + computerScore) 
//         }else{
//             alert (inputMessage)
//         }   
//     return (computerSelection, playerChoice)
//     }
// gameRound(computerSelection,playerChoice)

// }

//loop function for 5 rounds of rock paper scissors
        
// for (i=0;i<5;i++){
//     fullgame()
// }
//function where the player is declared winner or loser
// function results(){
//         if (playerScore > computerScore){
//             alert ("You won the game!")
//         }else if (playerScore < computerScore){
//             alert ("Sorry, you lost the game...")
//         }else{
//             alert ("No winners nor losers.")
//         }
//         return (playerScore,computerScore) 
//     }
// let declarationResult = results()
// console.log (declarationResult)
// let playagain = alert ("Rematch? Press CTRL-R")