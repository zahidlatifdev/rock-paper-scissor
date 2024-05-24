let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const resetGame = document.querySelector("#reset-game");

const generateCompChoice = () => {
    let options = ["rock", "paper", "scissors"];
    const rnd = Math.floor(Math.random() * 3);
    return options[rnd];
};

const drawGame = () => {
    console.log("Game is draw.");
    msg.innerText = "Game was draw!";
    msg.style.backgroundColor = "gold";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        console.log("You won.");
        msg.innerText = `Congratulations! You won.`;
        msg.style.backgroundColor = "green";
        userScore++;
        document.querySelector("#user-score").innerText = userScore;
    } else {
        console.log("You lost.");
        msg.innerText = "Oops! You lost.";
        msg.style.backgroundColor = "red";
        compScore++;
        document.querySelector("#comp-score").innerText = compScore;
    }
    document.querySelector("#user-choice").innerText = userChoice;
    document.querySelector("#comp-choice").innerText = compChoice;
};

resetGame.addEventListener("click", () => {
    msg.innerText = "Play your move";
    msg.style.backgroundColor = "#081b31";
    compScore = 0;
    document.querySelector("#comp-score").innerText = compScore;
    document.querySelector("#comp-choice").innerText = "";
    userScore = 0;
    document.querySelector("#user-score").innerText = userScore;
    document.querySelector("#comp-choice").innerText = "";
});

const playGame = (userChoice) => {
    console.log("User Choice = ", userChoice);
    const compChoice = generateCompChoice();
    console.log("Comp Choice = ", compChoice);
    if (userChoice === compChoice) {
        drawGame();
    } else {
        userWin = true;
        if (userChoice === "rock" && compChoice === "scissors") {
            userWin = true;
        } else if (userChoice === "paper" && compChoice === "rock") {
            userWin = true;
        } else if (userChoice === "scissors" && compChoice === "paper") {
            userWin = true;
        } else {
            userWin = false;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log("choice clicked", userChoice);
        playGame(userChoice);
    });
});
