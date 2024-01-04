import React from "react";
import ListContainer from "./listContainer";
import Name from "./Name"

// main app component holds the logo and the list container component

function App(){
    return (
      <div className='body'>
          <h1 className='header'>
            DINE HARD
          </h1>
        <div>
          <Name />
        </div>
        <div className='optionsContainer'>
          <ListContainer/>
        </div>
      </div>
    );
};

export default App;