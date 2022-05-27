const choice = ["rock", "paper", "scissor"];


function computerPlay(choice) {
    let possibleChoice = choice[Math.floor(Math.random() * choice.length)];
    return possibleChoice
}

function playerPlay() {
    let playerChoice
    do {
        playerChoice = prompt("Enter your move:").toLowerCase();
        if (!choice.includes(playerChoice)) {
            alert("Incorrect,please change your input!");
        }
    }
    while (!choice.includes(playerChoice));
    return playerChoice;
}

function playRound(pChoice, cChoice) {

    let resultFlag = -1;
    if (pChoice == cChoice) {
        resultFlag = 0;
    } else if (pChoice == "rock") {
        if (cChoice == "paper") {
            resultFlag = 2;
        } else {
            resultFlag = 1;
        }
    } else if (pChoice == "paper") {
        if (cChoice == "scissor") {
            resultFlag = 2;
        } else {
            resultFlag = 1;
        }
    } else if (pChoice == "scissor") {
        if (cChoice == "rock") {
            resultFlag = 2;
        } else {
            resultFlag = 1;
        }
    }
    return resultFlag;
}

function PlayGame() {
    let cPoints = 0;
    let pPoints = 0;
    for (let i = 0; i < 5; i++) {
        let playerChoice = playerPlay();
        let computerChoice = computerPlay(choice);
        let playRoundRes = playRound(playerChoice, computerChoice);
        if (playRoundRes == 0) {
            alert("Uhh tiee...")
        } else if (playRoundRes == 1) {
            alert("Player wins the round!");
            pPoints++;
        } else if (playRoundRes == 2) {
            alert("Computer wins the round!");
            cPoints++;
        } else if (playRoundRes == -1) {
            alert("Some weird error happend,hmmm,gonna break....");
        }
    }
    if (pPoints > cPoints) {
        alert("Player is the winner!");
    } else if (cPoints > pPoints) {
        alert("Computer is the winner!");
    } else {
        alert("Well thats a bit dumb,its a tie.....");
    }
}
PlayGame();