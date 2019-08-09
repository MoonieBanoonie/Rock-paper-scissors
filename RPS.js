const tieMessage = ("It's a tie my dude...")
const inputMessage = ("Choose rock, paper or scissors bruh")
let playerScore = 0
let computerScore = 0

// function for a full game of rock paper scissors//

function fullgame(){
    
// function where the computer randomly selects rock, paper or scissors//

    function computerPlay() {
        let computerChoice = Math.floor(Math.random()*3)

        if (computerChoice === 0){
            return "rock"
        }else if (computerChoice === 1){
            return "paper"
        }else{
            return "scissors"
        }
        return computerChoice
    }

const computerSelection = computerPlay()
console.log (computerSelection)

// Function where the player is able to choose rock, paper or scissors and the game receives input from player//

    function playerSelection (){
        let playerInput = prompt ("Choose Rock, Paper or Scissors").toLowerCase();

        if (playerInput == "rock"){
            return "rock"
        }else if (playerInput == "paper"){
            return "paper"
        }else if (playerInput == "scissors" ){
            return "scissors"
        }else{
            return prompt ("OMG just choose rock, paper or scissors!")
        }
    return playerInput
    }

let playerChoice = playerSelection()
console.log (playerChoice)


//function for a round of rock, paper or scissors including outcomes
    function gameRound(computerSelection, playerchoice){
    
        if (computerSelection === playerChoice) {
            alert (tieMessage + "YOU: " + playerScore + " & COMPUTER: " + computerScore)

        }else if (computerSelection === "rock" && playerChoice === "paper") {
            playerScore++
            alert ("It's a win for you! The computer chose ROCK. YOU: " + playerScore + " & COMPUTER: " + computerScore)

        }else if (computerSelection === "rock" && playerChoice === "scissors") {
            computerScore++
            alert ("It's a no from me dog. The computer chose ROCK. YOU: " + playerScore + " & COMPUTER: " + computerScore)

        }else if (computerSelection === "paper" && playerChoice === "rock") {
            computerScore++
            alert ("It's a no from me dog. The computer chose PAPER. YOU: " + playerScore + " & COMPUTER: " + computerScore) 

        }else if (computerSelection === "paper" && playerChoice === "scissors") {
            playerScore++
            alert ("It's a win for you! The computer chose PAPER. YOU: " + playerScore + " & COMPUTER: " + computerScore) 

        }else if (computerSelection === "scissors" && playerChoice === "rock") {
            playerScore++
            alert ("It's a win for you! The computer chose SCISSORS. YOU: " + playerScore + " & COMPUTER: " + computerScore) 
    
        }else if (computerSelection === "scissors" && playerChoice === "paper") {
            computerScore++
            alert ("It's a no from me dog. The computer chose SCISSORS. YOU: " + playerScore + " & COMPUTER: " + computerScore) 
        }else{
            alert (inputMessage)
        }   
    return (computerSelection, playerChoice)
    }   
   
console.log (gameRound(computerSelection,playerChoice))



}

fullgame()
fullgame()
fullgame()
fullgame()
fullgame()

//function where the player is declared winner or loser

function results(){
        if (playerScore > computerScore){
            alert ("You won the game!")

        }else if (playerScore < computerScore){
            alert ("Sorry, you lost the game...")

        }else{
            alert ("No winners nor losers.")
        }
        return (playerScore,computerScore) 
    }

let declarationResult = results()
console.log (declarationResult)

let playagain = alert ("Rematch? Press CTRL-R")
