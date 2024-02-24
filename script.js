// Generates computer choice
function getComputerChoice() {
    let choice = Math.floor(Math.random()*3) + 1;
    if (choice == 1) {
        choice = "Rock";
    } else if (choice == 2) {
        choice = "Paper";
    } else {
        choice = "Scissors";
    }
    return choice;
}

// Playing one round and declare the winner.
// t = tie, w = win, l = loss, i = Invalid
function playRound(playerSelection, computerSelection) {
    playerSelection.toLowerCase();
    if (playerSelection == "rock") {
        if (computerSelection == "Rock") {
            return "t";
        } else if (computerSelection == "Paper") {
            return "l";
        } else if (computerSelection == "Scissor"){
            return "w";
        }else {
            return "i";
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "Rock") {
            return "w";
        } else if (computerSelection == "Paper") {
            return "t";
        } else if (computerSelection == "Scissor"){
            return "l";
        }else {
            return "i";
        }
    } else {
        if (computerSelection == "Rock") {
            return "l";
        } else if (computerSelection == "Paper") {
            return "w";
        } else if (computerSelection == "Scissor") {
            return "t";
        } else {
            return "i";
        }
    }
}

// Playing 5 rounds and keep total score
function playGame() {
    let cpuPoints = 0;
    let plyPoints = 0;
    // loop
    let playerSelection = prompt("What is your play?")
    const computerSelection = getComputerChoice();
    let outcome = playRound(playerSelection, computerSelection);
    if (outcome == "l") {
        console.log("You lose :(");
        cpuPoints += 1;
    }else if (outcome =="w") {
        console.log("You win! :D");
        plyPoints += 1;
    }else if (outcome == "t") {
        console.log("It's a tie!");
    }else {
        console.log("Invalid Play!");
    }

    if (cpuPoints > plyPoints) {
        console.log("The computer won! Womp. Womp")
    }
}

console.log(playRound(playerSelection, computerSelection));