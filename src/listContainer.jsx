import React from "react";
import { hot } from 'react-hot-loader/root';

class ListContainer extends React.Component {
 
 
    render() {
        return (

            <div id="listContainer">
            <ul>
            <input type="checkbox"></input>
            <li>Italian</li> 
            <br></br>
            <input type="checkbox"></input>
            <li>Mexican</li>
            <br></br>
            <input type="checkbox"></input>
            <li>Chinese</li>
            <br></br>
            <input type="checkbox"></input>
            <li>Japanese</li>
            <br></br>
            <input type="checkbox"></input>
            <li>French</li>
            </ul>
            </div>
        )
    }
}

export default hot(ListContainer);