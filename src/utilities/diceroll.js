
function rollDice(diceSize){
    // let diceResult = Math.random() * diceSize + 1;

    let diceResult = Math.floor(Math.random() * diceSize) + 1;
    // let diceResult = Math.ceil(Math.random() * diceSize);

    return diceResult;
}

// console.log(rollDice(6));

export {
    rollDice
};