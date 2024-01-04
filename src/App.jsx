import React from "react";
import ListContainer from "./listContainer";

// main app component holds the logo and the list container component

function App(){
    return (
      <div className='body'>
          <h1 className='header'>
            DINE HARD
          </h1>
        <div className='optionsContainer'>
          <ListContainer/>
        </div>
      </div>
    );
};

export default App;