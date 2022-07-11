import { GetResult } from "./getResult.js";



const GenerateComputerChoice = (userChoice, choices, computerChoiceDisplay, resultDisplay) => {
    const randomNum = Math.floor(Math.random() * choices.length);
    console.log(randomNum);
    const randomChoice = choices[randomNum];
    console.log("computer:", randomChoice);
    computerChoiceDisplay.innerHTML = `SkyNet: ${randomChoice}`;
    const b = GetResult(randomChoice, userChoice, resultDisplay);
    return b;
};

export {GenerateComputerChoice};