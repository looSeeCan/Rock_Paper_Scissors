import { Result } from "./result.js";

const SkyNetChoiceDisplay = document.getElementById("computer-choice");

const SkyNetChoice = (userChoice) => {
    const randomNumber = Math.floor(Math.random() * 3 + (1));//get a random integer from one to 3
    let skyNetChoices;
    console.log(randomNumber);

    if (randomNumber === 1) {
        skyNetChoices = "Rock";
    }else if (randomNumber === 2) {
        skyNetChoices = "Paper";
    }else if (randomNumber === 3) {
        skyNetChoices = "Scissors";
    };

    SkyNetChoiceDisplay.innerHTML = skyNetChoices;

    let b = Result(userChoice, skyNetChoices);//call the Result component, passing in arguments
    // console.log(b);
    return b;//return results from Result
};



export {SkyNetChoice};