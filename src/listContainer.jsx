import React, { useState, useEffect } from "react";
import { hot } from 'react-hot-loader/root';
import FoodOption from "./foodOption";

function ListContainer() {
    const tally = {};
    const options = ['Italian', 'Mexican', 'Thai', 'Korean'];

    options.forEach(el => 
        tally[el] = 0
    );
    
    const [vote, setVote] = useState('nobody yet');
    const [tallyData, setTallyData] = useState(null);

    const fetchData = async () => {
        const response = await fetch('VOTE DATA FROM BACKEND!');
        const data = await response.json();
        setTallyData(data);
    };

    const upvoteFunc = (selection) => {
        setVote(selection);
        if(selection !== 'nobody yet'){
            tally[selection] = tally[selection] + 1;
            setTallyData({...tally});
        };
    };

    const list = [];
    options.forEach(el => {
        list.push(
            <FoodOption key={el} value={el} currVote={vote} voteFunc={upvoteFunc}/>
            );
        }
    );
    return (
            <div>
                {list}
                {tallyData && (
                    <div>
                        <h2>Current Tally:</h2>
                        <ul>
                            {options.map(option => (
                                <li className="tallyList" key={option}>
                                    {option}: {tallyData[option]}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        );
    }

export default hot(ListContainer);
