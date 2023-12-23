import React from "react";
import { hot } from 'react-hot-loader/root';
import ListContainer from "./listContainer";


class App extends React.Component {
  render() {
    return (
      <>
        <h1>
          DINE HARD
        </h1>
        <h4>choose wisely...</h4>
        <ListContainer />
      </>
    );
  }
}

export default hot(App);