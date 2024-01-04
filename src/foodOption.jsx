import React, { useState } from "react";

export default function FoodOption(props){
    // deconctruct the props
    const { value, upvoteFunc, currVote } = props;

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
       setIsChecked(e.target.checked);
        // if it was not checked, tell the parent element it is checked now
       if(e.target.checked){
        upvoteFunc(value)
        try {
                await fetch('http://localhost:3000/api/cuisines', {
                mode: 'no-cors',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({name:'what'})
            })
        }catch(error) {
            console.log('error')
        }
       }
   }


    return (
        <div className="foodOption">
            <input className="box"
                type="checkbox"
                key={value}
                checked={currVote === value}
                onChange={handleCheck}
            />
                {isChecked}
                {value}
{/* 
            <h5>{isChecked ? "yes this one is checked" : "no this one is not checked"}</h5> */}

            </div>
    )
}