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
      query: "",
    };
  }

  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;

        this.loadData(`lat=${latitude}&lon=${longitude}`);
      });
    }
  }

  onKeyUp = debounce((value) => {
    this.loadData("q=" + value);
  }, 400);

  handleFilterChange(val) {
    this.setState({
      filterType: val,
    });
    this.loadData(this.state.query);
  }

  loadData(search) {
    let self = this;
    let url =
      "http://api.openweathermap.org/data/2.5/forecast?" +
      search +
      "&apikey=c009a01307a90715e546e205a780c0a6";

    if (this.state.filterType === 2) {
      url += "&cnt=5";
    }

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((d) => {
        self.setState({
          data: d,
          query: search,
        });
      })
      .catch((error) => {
        console.log("Error : " + error);
      });
  }

  render() {
    return (
      <>
        <div className="header jumbotron">
          <img
            src="http://localhost:3000/indra.ico"
            width="56"
            alt=""
            style={{ display: "inline-block", verticalAlign: "unset" }}
          />
          <div style={{ display: "inline-block", paddingLeft: "5px" }}>
            <h3 style={{ marginTop: "0px !imprtant" }}>
              <strong>Indra</strong>
            </h3>
            <small>Weather forecast</small>
          </div>
        </div>
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
