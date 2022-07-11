

const GetResult = (randomChoice, userChoice, resultDisplay) => {
    console.log(userChoice + randomChoice);
    switch (userChoice + randomChoice) {
        case "RockScissors":
        case 'PaperRock':
        case "ScissorsPaper":
            resultDisplay.innerHTML = "John Connor Wins. Hasta la vista, baby";
            break;
        case "ScissorsRock":
        case "RockPaper":
        case "PaperScissors":
            resultDisplay.innerHTML = "You are terminated! SkyNet Wins.";
            break;
        case userChoice + userChoice:
            resultDisplay.innerHTML = "Draw. There is no fate but what we make for ourselves.";
    };  
};

export {GetResult};