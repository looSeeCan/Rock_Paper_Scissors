

const Skynet = () => {
    //create a random num generator that selects rock paper or scissors.
    const ranNum = Math.floor(Math.random() * (4 - (1)) + (1));//gives a random integer from 1 to 3
    console.log(ranNum);

    let skyNetChooses;

    if (ranNum === 1) {
        skyNetChooses = "Rock";
        // console.log(skyNetChooses);
    }else if (ranNum === 2 ) {
        skyNetChooses = "Paper";
        // console.log(skyNetChooses);
    }else if (ranNum === 3) {
        skyNetChooses = "Scissors";
        // console.log(skyNetChooses);
    }

    return skyNetChooses; 
};

export {Skynet};