
const Result = (u, s) => {
    console.log(u, s);
    let result;
    // console.log(result);
    if (u === s) {
        result = "It's a draw!";
    }else if (u === "Rock" && s === "Paper") {
        result = "You are terminated!";
    }else if (u === "Rock" && s === "Scissors") {
        result = "You Win!";
    }else if (u === "Paper" && s === "Rock") {
        result = "You Win!";
    }else if (u === "Paper" && s === "Scissors") {
        result = "You are terminated!";
    }else if (u === "Scissors" && s === "Rock") {
        result = "You are terminated!";
    }else if (u === "Scissors" && s === "Paper") {
        result = "You Win!";
    }
    // console.log(result);    
    return result;
}



export {Result};