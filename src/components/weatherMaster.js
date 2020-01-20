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
      filterType: 1,
      search:""
    };
  }

  onKeyUp = debounce(value => {
    this.setState({
      search: value
    });
    this.loadData(value);
  }, 300);

  handleFilterChange(val) {
    this.setState({
      filterType: val
    });
    this.loadData();
  }

  loadData() {
    let self = this;
    let url =
      "https://api.openweathermap.org/data/2.5/forecast?q=" +
      this.state.search +
      "&apikey=c009a01307a90715e546e205a780c0a6";

      if (this.state.filterType === 2) {
        url+="&cnt=5"
      }

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
            <strong>Indra</strong>
          </h3>
          <small>Weather forecast</small>
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
