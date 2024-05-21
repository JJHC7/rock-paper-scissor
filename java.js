const buttons = ["rock", "paper", "scissors"];
let Score = document.getElementById("number");


function playgame(HumanChoice){

    const ComputerChoice = buttons[Math.floor(Math.random() * 3)];
    let a = "";

    if(HumanChoice === ComputerChoice){
        a = "IT'S A TIE!";
    }
    else{
        switch(HumanChoice){
            case "rock":
                a = (ComputerChoice == "scissors") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "paper":
                a = (ComputerChoice == "rock") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "scissors":
                a = (ComputerChoice == "paper") ? "YOU WIN!" : "YOU LOSE!";
                break;
        }
    }
    
    player.textContent = `Player: ${HumanChoice}`;
    computer.textContent = `Computer: ${ComputerChoice}`;
    result.textContent = `${a}`;


        if (a=="YOU WIN!") {
            Score++
            number.textContent = `${Score}`;
        }
        
    
}   

