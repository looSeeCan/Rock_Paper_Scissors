import { GenerateComputerChoice } from "./components/generateComputerChoice.js";

const computerChoiceDisplay = document.createElement("h1");
const userChoiceDisplay = document.createElement("h1");
const resultDisplay = document.createElement('h1');
const gameGrid = document.getElementById("game");

gameGrid.append(userChoiceDisplay, computerChoiceDisplay, resultDisplay);

const choices = ["Rock", "Paper", "Scissors"];
let userChoice;


const handleClick = (e) => {
    userChoice = e.target.id;
    console.log("userChoice:", userChoice);
    userChoiceDisplay.innerHTML = `John Connor: ${userChoice}`;
    GenerateComputerChoice(userChoice, choices, computerChoiceDisplay, resultDisplay);
    // console.log(a);
};


for (let i = 0; i < choices.length; i++) {//loops thru the choices array and 
    const button = document.createElement("button");//creates a button element for each index in the array
    button.id = choices[i];//gives an id name to each element that was created. The element is named according to the index in the array
    button.innerHTML = choices[i];//gives the button a name accordingly
    button.addEventListener("click", handleClick);//gives the button an eventListener
    gameGrid.appendChild(button);//append to the div that has an id of "game"
};

