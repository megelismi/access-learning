import React, { Component } from "react"; 

class App extends Component {

  render() {
    const backgroundStyling = {
      background: "url('assets/images/landscape.png') no-repeat center center fixed"
    };

    return (
      <div className="app-container" style={backgroundStyling} />
    ); 
  }
}

export default App; 
