import React, { useState, useEffect } from "react";
import { hot } from 'react-hot-loader/root';
import FoodOption from "./foodOption";

function ListContainer(props) {
    const { user_id } = props
    const tally = {};
    const options = ['Japanese', 'Mexican', 'Thai', 'Korean'];
    
    options.forEach(el => 
        tally[el] = 0
        );
        
        const [vote, setVote] = useState('nobody yet');
        const [tallyData, setTallyData] = useState(null);
        const [ counter, setCounter ] = useState(0)

    const fetchData = async () => {
        try{
            const counter = {};
            const response = await fetch('http://localhost:3000/api/tally');
            const data = await response.json();
            for (let i = 0; i < data.length; i++) {
                counter[data[i].cuisine_choice] = data[i].count;
            }
            setCounter(counter);
            console.log(counter)

        }catch (error) {
            console.log('Error in the fetchData function in listContainer')
        }
    };


    const upvoteFunc = async (selection) => {
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
            <FoodOption key={el} value={el} currVote={vote} upvoteFunc={upvoteFunc} user_id={user_id}/>
            );
        }
    );

    // useEffect( (option) => {
    //     fetch('http://localhost:3000/api/tally')
    //         .then(response => response.json())
    //         .then(data => {
    //             for (let i = 0; i< data.length; i++) {
    //                 if (data[i].cuisine_choice == option) {
    //                     setCount(data[i].count)
    //                 }
    //             }
    //             console.log(data)
    //         })
    // })


    return (
            <div>
                {list}
                {(
                    <div>
                        <h2>Current Tally:</h2>
                        <ul className='list'>
                            {options.map(option => (
                                <li className="tallyList" key={option}>
                                    {option}: {counter[option]}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        );
    }

export default hot(ListContainer);
