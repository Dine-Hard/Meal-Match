import React from "react";
import { hot } from 'react-hot-loader/root';

class App extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <>
        <h1>
          DINE HARD
        </h1>
        <h4>choose wisely...</h4>
      </>
    );
  }
}

export default hot(App);