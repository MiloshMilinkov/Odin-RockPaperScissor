const choice = ["rock", "paper", "scissor"];
const numberSources = ["./IMAGES/0.png", "./IMAGES/1.png", "./IMAGES/2.png", "./IMAGES/3.png", "./IMAGES/4.png", "./IMAGES/5.png", ];
let pIcon = document.querySelector(".mLeft");
let eIcon = document.querySelector(".mRight");
const pScore = document.querySelector(".nP");
const eScore = document.querySelector(".nE");
const rButton = document.querySelector(".restartBtn");
const buttons = document.querySelectorAll("button");
const eMessage = document.querySelector(".endMessage");
const endContainer = document.getElementById("endContainer");
const pImg = document.createElement("img");
const eImg = document.createElement("img");
eImg.setAttribute("height", "auto");
eImg.setAttribute("width", "150px");
pImg.setAttribute("height", "auto");
pImg.setAttribute("width", "150px");
let i = 0;
let pCounter = 1;
let eCounter = 1;
let ePoints = 0;
let pPoints = 0;
let gameOver = 0;


buttons.forEach((button) => {
    button.addEventListener('click', () => {


        playerPlay(button.id);
        let eChocie = enemyPlay(choice);
        let playRoundRes = playRound(button.id, eChocie);
        if (playRoundRes == 0) {} else if (playRoundRes == 1) {
            for (j = pCounter; j <= 5; j++) {
                pScore.src = numberSources[j];
                break;
            }
            pCounter++;
            pPoints++;
        } else if (playRoundRes == 2) {
            for (j = eCounter; j <= 5; j++) {
                eScore.src = numberSources[j];
                break;
            }
            eCounter++;
            ePoints++;
        }
        if (ePoints == 5 || pPoints == 5) {
            checkWinner(pPoints, ePoints);
        }

    })
})

function checkWinner(pPoints, ePoints) {
    if (pPoints > ePoints) {
        endContainer.style.visibility = "visible";
        eMessage.textContent = "Player wins!"
        rButton.addEventListener("click", reload, false);
    } else if (ePoints > pPoints) {
        endContainer.style.visibility = "visible";
        eMessage.textContent = "Enemy wins!"
        rButton.addEventListener("click", reload, false);
    } else {
        alert("Well thats a bit dumb,its a tie.....");
    }
}

function enemyPlay(choice) {
    let possibleChoice = choice[Math.floor(Math.random() * choice.length)];
    if (choice.includes(possibleChoice)) {
        if (possibleChoice == "rock") {
            eImg.src = "./IMAGES/rock.jpg"
        } else if (possibleChoice == "paper") {
            eImg.src = "./IMAGES/paper.png"
        } else if (possibleChoice == "scissor") {
            eImg.src = "./IMAGES/scissor.png"
        }
        eIcon.appendChild(eImg);
        return possibleChoice;
    } else {
        alert("Some error occurred,pls reload the page!")
    }
}

function playerPlay(buttonid) {
    if (choice.includes(buttonid)) {
        if (buttonid == "rock") {
            pImg.src = "./IMAGES/rock.jpg"
        } else if (buttonid == "paper") {
            pImg.src = "./IMAGES/paper.png"
        } else if (buttonid == "scissor") {
            pImg.src = "./IMAGES/scissor.png"
        }
        pIcon.appendChild(pImg);
    }
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

function reload() {
    i = 0;
    pCounter = 1;
    eCounter = 1;
    ePoints = 0;
    pPoints = 0;
    gameOver = 0;
    reload = location.reload();
}