import React, { useState } from "react";
import { hot } from 'react-hot-loader/root';
import FoodOption from "./foodOption";

function ListContainer() {

    // tally object holds voting results 
        // when fully functional, tally will come in from the db on load
    const tally= {};

    // tallyprint array will hold html elements to print the tally
    const tallyPrint = [];

    // options array holds food option strings -- will come from db eventually
        // NOTE: add another prop for each option--id--and state var checkedBoxId so that only one box can be checked at a time
    const options = ['italian', 'mexican', 'thai', 'korean'];

    // populate tally obj -- won't be necessary when data comes from db
    options.forEach(el => 
        tally[el] = 0
    );

    // vote state var allows child component to pass data up here to parent component
        // upvoteFunc updates tally
    const [vote, setVote] = useState("nobody yet");
    const upvoteFunc = (selection) => {
        setVote(selection);
        tally[selection] = tally[selection] + 1;
        // prints in browser console rn
        console.log(tally);
    };

    // list array holds html element for each food option
    const list = [];
    options.forEach(el => {
        list.push(
            <FoodOption key={el} value={el} voteFunc={upvoteFunc}/>
            );
        }
    );

    // trying to update tallyPrint as vote changes, not working yet
    for(let option in tally){
        tallyPrint.push(
            <h4>{option}: {tally[option]}</h4>
        )
    }

    // will probably want to add a submit button at the bottom of this div
        // submit should send a POST to the db to update the tally
        // then receive updated tally response and render that

    return (

            <div id="listContainer">

                {list}

            <h1>you voted for: {vote}</h1>
            
            {tallyPrint}

            </div>

        );
    }


export default hot(ListContainer);