import React, { Component } from "react";
import WeatherTiles from "./weatherTiles";
import TextSearch from "./textSearch";
import { Jumbotron } from "react-bootstrap";
import debounce from "../commonFunctions/debounce";
import Filters from "./filters";
import "../App.css";

class WeatherMaster extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      filterType: 1
    };
  }

  onKeyUp = debounce(value => {
    this.loadData(value);
  }, 400);

  handleFilterChange(val) {
    this.setState({
      filterType: val
    });
  }

  loadData(search) {
    let self = this;
    let url =
      "http://api.openweathermap.org/data/2.5/forecast?q=" +
      search +
      "&apikey=c009a01307a90715e546e205a780c0a6";

    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(d => {
        self.setState({
          data: d
        });
      })
      .catch(error => {
        console.log("Error : " + error);
      });
  }

  render() {
    return (
      <>
        <Jumbotron className="header">
          <h3>
            <strong>Weather forcast App</strong>
          </h3>
        </Jumbotron>
        <TextSearch onKeyUp={this.onKeyUp.bind(this)} />
        <Filters handleFilterChange={this.handleFilterChange.bind(this)} />
        <WeatherTiles
          filterText={this.state.search}
          data={this.state.data}
          filterType={this.state.filterType}
        />
      </>
    );
  }
}

export default WeatherMaster;
