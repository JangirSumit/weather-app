import React, { Component } from "react";
import WeatherMaster from "../src/components/weatherMaster";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <WeatherMaster />
      </div>
    );
  }
}

export default App;
