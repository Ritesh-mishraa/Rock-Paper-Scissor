let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");
const userScorepara = document.querySelector("#user-Score");
const compScorepara = document.querySelector("#comp-Score");

const genCompChoice = () => {
    const options = ["rock","paper","Scissors"];
    const randidx = Math.floor(Math.random() * 3);
    return options[randidx];
}

const drawGame = () => {
    console.log("Game was draw");
    msg.innerText = "Game Draw. Play again!";
    msg.style.backgroundColor = "black";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorepara.innerText = userScore;
        console.log("You win!");
        msg.innerText = "You win!";
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorepara.innerText = compScore;

        console.log("You lost!");
        msg.innerText = "You Lose!";
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    console.log("user choice =", userChoice);

    const compChoice = genCompChoice();
    console.log("Computer choice = ", compChoice);

    if(userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            userWin = compChoice === "Scissors" ? false : true;
        }
        else{
            userWin = compChoice === "rock" ? false : true;
        }
    showWinner(userWin, userChoice, compChoice);
    }
};


choices.forEach((choice) => {
    choice.addEventListener("click", ()=>{
        const userChoice= choice.getAttribute("id");
        playGame(userChoice);
    });
});