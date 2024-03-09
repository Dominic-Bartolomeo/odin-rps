const cont = document.querySelector("#container");
const div = document.createElement("div");
const message = document.createElement("div");
const score = document.createElement("div");
let cpuPoints = 0;
let plyPoints = 0;
let ties = 0;
// Generates computer choice
function getComputerChoice() {
    let choice = Math.floor(Math.random()*3) + 1;
    if (choice == 1) {
        choice = "Rock";
    } else if (choice == 2) {
        choice = "Paper";
    } else {
        choice = "Scissor";
    }
    div.textContent = "CPU selection: " + choice;
    return choice;
}



// Playing one round and declare the winner.
// t = tie, w = win, l = loss, i = Invalid
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    div.textContent = "Your selection: " + playerSelection + " || CPU selection: " + computerSelection.toLowerCase();
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


   




function playGame(playerSelection) {


    console.log("MAde is past the points");
    let computerSelection = getComputerChoice();
    let outcome = playRound(playerSelection, computerSelection);
    if (outcome == "l") {
        
        message.textContent = "You lose :(";
        cpuPoints += 1;
    }else if (outcome =="w") {
        
        message.textContent = "You win! :D";
        plyPoints += 1;
    }else if (outcome == "t") {
        
        message.textContent = "It's a tie!";
        ties += 1;
    }else {
        
        message.textContent = "Invalid Play!";
    }
    if(plyPoints > 4) {
        score.textContent = "GAME OVER";
        message.textContent = "You won the match. Congrats! :D";
    }else if(cpuPoints > 4) {
        score.textContent = "GAME OVER";
        message.textContent = "You lose the match. :(";
    }else{
    score.textContent = "Your Points: " + plyPoints + " || CPU Points: " + cpuPoints + " || Ties: " + ties;
    }
}

// console.log(playGame());

const rck = document.querySelector("#rock");
const ppr = document.querySelector("#paper");
const scr = document.querySelector("#scissor");


rck.addEventListener("click", () => {
        playGame("rock");
});
ppr.addEventListener("click", () => {
        playGame("paper");
});
scr.addEventListener("click", () => {
        playGame("scissor");
});



cont.appendChild(div);
cont.appendChild(message);
cont.appendChild(score);



