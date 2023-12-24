import React, { useState } from "react";

export default function FoodOption(props){
    // deconctruct the props
    const { value, voteFunc } = props;

    // declare state var to tell if this box is checked
    const [isChecked, setIsChecked] = useState(false);

    // event handler for when a box is checked
        // update isChecked value
    const handleCheck = (e) => {
       setIsChecked(!isChecked);
        // if it was not checked, tell the parent element it is checked now
       if(!isChecked) voteFunc(value);
   }

    return (
        <div className="foodOption">
            <input type="checkbox"
                key={value}
                checked={isChecked}  
                onChange={handleCheck}
            />
            
                {value}

            <h5>{isChecked ? "yes it is checked" : "no it is not checked"}</h5>

            </div>
    )
}