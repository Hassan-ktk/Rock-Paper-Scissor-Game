let userScore=0;
let compScore=0;
const choices =document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorepara=document.querySelector("#user-score");
const compScorepara=document.querySelector("#comp-score");

const genCompChoice = () => {
    //rock,paper,scissor
    const option= ["rock","paper","scissor"];
    const randIdx = Math.floor(Math.random()*3);
    return option[randIdx];
};

const drawGame = () => {
     console.log("Game was Draw");
     msg.innerText= "Game was Draw. Play again.";
     msg.style.backgroundColor ="#081b31";
};

const showWinner = (userWin,userChoice,computerChoice) => {
    if(userWin){
        console.log("You Win!");
        userScore++;
        userScorepara.innerText =userScore;
        msg.innerText=`You win! Your ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor ="Green";
    }
    else{
        console.log("You loss!");
        compScore++;
        compScorepara.innerText =compScore;
        msg.innerText=`You loss! ${computerChoice} beats your ${userChoice}`;
        msg.style.backgroundColor ="red";
    }
};

const playGame = (userChoice) => {
    console.log("User choice =" ,userChoice);
    //genrate computer choice 
    const computerChoice= genCompChoice();
    console.log("computer choice =" ,computerChoice);

    if(userChoice === computerChoice)
    {
        //draw 
        drawGame();
    }
    else{
        let userWin =true;
        if(userChoice === "rock")
        {
           userWin= computerChoice === "paper" ? false:true;
        }
        else if( userChoice === "paper") {
            userWin = computerChoice === "scissor" ? false:true;
        }
        else {
            userWin = computerChoice === "rock" ? false:true;
        }
        showWinner(userWin,userChoice,computerChoice);
    }
};

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

