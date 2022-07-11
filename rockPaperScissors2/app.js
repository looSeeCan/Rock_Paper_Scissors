import { SkyNetChoice } from "./components/skynet.js";

const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");//this selects all the buttons and places it in a variable

let userChoice;

const click = (e) => {
    // console.log(e);
    userChoice = e.target.id;//when I push a button. the (e), which is the pointerevent, targets the buttons id, in this case "Rock", "Paper", "Scissors."
    // console.log(userChoice);
    userChoiceDisplay.innerHTML = userChoice;//the display for Your Choice displays the target id
    let a = SkyNetChoice(userChoice);//call SkyNetChoice component and return the value from Result component
    resultDisplay.innerHTML = a;//display it in the Result
}

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', click))//here, I am using the forEach to loop thru the three buttons in htnml

// possibleChoices.forEach((possibleChoice) => {//this is the same thing as ^
//     possibleChoice.addEventListener('click', click);
// })


