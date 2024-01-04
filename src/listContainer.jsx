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
        try{
            const counter = {};
            let popularCount;
            const response = await fetch('http://localhost:3000/api/tally');
            const data = await response.json();
            for (let i = 0; i < data.length; i++) {
                counter[cuisine] = data.count;
            }
            popularCount = Math.max(...Object.values(tally))
            setTallyData(popularCount);
        }catch (error) {
            console.log('Error in the fetchData function in listContainer')
        }
    };

    const upvoteFunc = async (selection) => {
        // try {
        //     await fetch('http://localhost:3000/api', {
        //         mode: 'no-cors',
        //         method: 'POST',
        //         headers: {
        //             'Content-Type':'application/json'
        //         },
        //         body: JSON.stringify({name:'KingDANG'})
        //     });
        //     if (response.ok) {
        //         console.log('added to db')
        //     }
        // }catch (error){
        //     console.log('Error in upvoteFunc ', error)
        // };
        setVote(selection);
        if(selection !== 'nobody yet'){
            tally[selection] = tally[selection] + 1;
            setTallyData({...tally});
            fetchData(); 
            //UNCOMMENT AFTER ACTUALLY BEING ABLE TO FETCH DATA
        };
    };

    const list = [];
    options.forEach(el => {
        list.push(
            <FoodOption key={el} value={el} currVote={vote} upvoteFunc={upvoteFunc}/>
            );
        }
    );
    return (
            <div>
                {list}
                {tallyData && (
                    <div>
                        <h2>Current Tally:</h2>
                        <ul className='list'>
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
