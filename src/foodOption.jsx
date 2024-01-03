import React, { useState } from "react";

export default function FoodOption(props){
    // deconctruct the props
    const { value, voteFunc, currVote } = props;

    // declare state var to tell if this box is checked
    const [isChecked, setIsChecked] = useState(false);

    const [ addTally, setTally ] = useState([]);

    // event handler for when a box is checked
        // update isChecked value
//     const handleCheck = (e) => {
//        setIsChecked(!isChecked);
//         // if it was not checked, tell the parent element it is checked now
//        if(!isChecked){
//         voteFunc(value)
//        } else {
//         voteFunc('nobody yet');
//        }
//    }

const handleCheck = async (e) => {
    try {
        const response = await fetch('http://localhost:3000/api', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: {
                user_id: 5,
                name: 'Hello'
            }
        });
        if (response.ok) {
            console.log('added to db')
        }
    }
    catch(err) {
        console.log('why')
    }
}

    return (
        <div className="foodOption">
            <input className="box"
                type="checkbox"
                key={value}
                checked={isChecked}
                onChange={handleCheck}
            />
                {isChecked}
                {value}
{/* 
            <h5>{isChecked ? "yes this one is checked" : "no this one is not checked"}</h5> */}

            </div>
    )
}