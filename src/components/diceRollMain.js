import { rollDice } from "../utilities/diceroll";
import {useState, useReducer} from "react";

const initialState = {
    diceSize: 20,
    diceRollResult: 0
}

function diceRollSettingsReducer(state, action){
    switch (action.type) {
        case "increment":
            // wipes out the old state object and replaces it with
            // this new returned object
            return {
                ...state, diceSize: state.diceSize + 1
            }
        case "decrement":
            let newDiceSize = state.diceSize - 1;
            if (newDiceSize <= 0){
                newDiceSize = 1;
            }
            return {
                ...state, diceSize: newDiceSize
            }
        default:
            throw new Error("Incorrect action type was used.");
            // return {...state};
    }

}

function DiceRollMain(){

    document.title = "Dice Page!";

    const [state, dispatch] = useReducer(diceRollSettingsReducer, initialState)

    const [diceRollResult, setDiceRollResult] = useState(0);


    // if (diceRollResult > 0){
    //     return (
    //         <div className="DiceRollMain">
    //             <h2>Dice Rolling page!</h2>
    
    //             <button onClick={() => setDiceRollResult(rollDice(20))}>Roll Dice</button>
    
    //             {diceRollResult > 0 && 
    //                 <div>
    //                     <h3>Dice Result</h3>
    //                     <h1>{diceRollResult}</h1>
    //                 </div>
    //             }
                
    //         </div>
    //     )
    // } else {
    //     return (
    //         <div className="DiceRollMain">
    //             <h2>Dice Rolling page!</h2>
    
    //             <button onClick={() => setDiceRollResult(rollDice(20))}>Roll Dice</button>
    
    //             {diceRollResult > 0 && 
    //                 <div>
    //                     <h3>Dice Result</h3>
    //                     <h1>{diceRollResult}</h1>
    //                 </div>
    //             }
                
    //         </div>
    //     )
    // }


    return (
        <div className="DiceRollMain">
            <h2>Dice Rolling page!</h2>

            <h3>{state.diceSize}-sided dice</h3>

            <button onClick={() => dispatch({type:"increment"})}>Increase dice size by 1</button>
            <button onClick={() => dispatch({type:"decrement"})}>Decrease dice size by 1</button>
            
            <button onClick={() => setDiceRollResult(rollDice(state.diceSize))}>Roll Dice</button>

            {diceRollResult > 0 && 
                <div>
                    <h3>Dice Result</h3>
                    <h1>{diceRollResult}</h1>
                </div>
            }
            
        </div>
    )
}

export default DiceRollMain;