import React, { useState } from "react";
import { hot } from 'react-hot-loader/root';
import FoodOption from "./foodOption";

function ListContainer() {

    // tally object holds voting results 
        // when fully functional, tally will come in from the db on load
        // may want to try making this a state var to make it rerender on change
    const tally = {};

    // tallyprint array will hold html elements to print the tally
    let tallyPrint = [];

    // options array holds food option strings -- will come from db eventually
        // NOTE: add another prop for each option--id--and state var checkedBoxId so that only one box can be checked at a time
    const options = ['italian', 'mexican', 'thai', 'korean'];

    // populate tally obj -- won't be necessary when data comes from db
        // currently this just logs to browser console
    options.forEach(el => 
        tally[el] = 0
    );

    // vote state var allows child component to pass data up here to parent component
        // upvoteFunc updates tally
    const [vote, setVote] = useState('nobody yet');
    const upvoteFunc = (selection) => {
        setVote(selection);
        if(selection !== 'nobody yet'){
            tally[selection] = tally[selection] + 1;
        };
        // prints in browser console rn
        console.log('tally: ', tally);
        updateTallyPrint();
        console.log('tallyPrint: ', tallyPrint)
        // clear the other checkboxes on change
        
    };

    // list array holds html element for each food option
    const list = [];
    options.forEach(el => {
        list.push(
            <FoodOption key={el} value={el} currVote={vote} voteFunc={upvoteFunc}/>
            );
        }
    );

    // trying to rerender the tally as vote changes, not working yet
        // but the updated html elements are in the tallyPrint array
    const updateTallyPrint = () => {
        tallyPrint = [];
        for(let option in tally){
            tallyPrint.push(
                <h4 key={option}> {option}: {tally[option]} </h4>
            )
        }
    };

    updateTallyPrint();

    // will probably want to add a submit button at the bottom of this div
        // submit should send a POST to the db to update the tally
        // then receive updated tally response and render that

    return (

            <div>

                {list}

            {/* <h1>you voted for: {vote}</h1> */}
            
            {tallyPrint}

            </div>

        );
    }


export default hot(ListContainer);

