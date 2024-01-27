let userScore=0;
let compScore=0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.getElementById("user-score");
const compScorePara = document.getElementById("computer-score");

const drawGame=()=>{
    msg.innerText = "Game was Draw. Play again.";
    msg.style.backgroundColor = "#081b31";
}

const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
  };

const showWinner=(userWin, compChoice,userChoice)=>{
    if(userWin){
        console.log("You win");
        userScore++;
        userScorePara.innerText = userScore;
        // msg.innerText="You Win";
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        console.log("You loose");
        compScore++;
        compScorePara.innerText = compScore;
        // msg.innerText="You Loose";
        msg.innerText = `You Lost! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red    ";
    }
}

const playGame=(userChoice) =>{
    console.log("user choice =",userChoice);
    const compChoice = genCompChoice();
    console.log("comp choice=",compChoice);
    if(userChoice===compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if (userChoice === "rock") {
      //scissors, paper
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
      //rock, scissors
            userWin = compChoice === "scissors" ? false : true;
        } else {
      //rock, paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,compChoice,userChoice);
    }
} 

choices.forEach((choice) =>{
    // console.log(choice);
    choice.addEventListener("click", ()=>{
        // console.log("clicked");
        const userChoice= choice.getAttribute("id");
        playGame(userChoice);
    });
});