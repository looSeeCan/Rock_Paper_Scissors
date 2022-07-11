import { Skynet } from "./skynet.js";
import { FateIsWhatYouMakeOfIt } from "./fateIsWhatYouMakeOfIt.js";

    let rock = document.querySelector(".rock");//select the rock btn from html

    const RockFunc = () => {
        const skyNetChooses = Skynet();//player has selected rock, now we call on the Skynet component
        console.log("skyNetChooses:", skyNetChooses);
        //now that I have a return from skynet. Skynets choice. I want to compare them to see who wins
        
        //call the fateIsWhatYouMakeOfIt function 
        FateIsWhatYouMakeOfIt(skyNetChooses);

        switch(skyNetChooses) {//I want to make this reusable. Add it to FateIsWhatYouMakeOfIt
            case "Rock":
                console.log("Rocks");
                FateIsWhatYouMakeOfIt();
                break;
            case "Paper":
                console.log("Papers");
                break;
            case "Scissors":
                console.log("Scissors");
                break;
            default:
        }
    }

    rock.addEventListener("click", RockFunc)//click event, and call the function. remember to call the function here without the "()".
    



export {RockFunc};




