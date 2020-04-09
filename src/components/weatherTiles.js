import React, { Component } from "react";
import WeatherTile from "./weatherTile";
import "../App.css";

class WeatherTiles extends Component {
  addDays(theDate, days) {
    return new Date(theDate.getTime() + days * 24 * 60 * 60 * 1000);
  }

  getPerHourData() {
    let newData = [];
    let dates = [];
    let date = new Date();
    let date1 =
      date.getMonth() + "/" + date.getDate() + "/" + date.getFullYear();

    this.props.data.list.forEach(d => {
      let dt = new Date(d.dt_txt);
      let date2 = dt.getMonth() + "/" + dt.getDate() + "/" + dt.getFullYear();

      if (date1 === date2) {
        newData.push(d);
        dates.push(`${dt.getHours()}:${dt.getMinutes()}`);
      }
    });
    return newData;
  }

  render() {
    if (!this.props.data.list || this.props.data.list.length <= 0)
      return <div>No Data</div>;

    let tiles = {};

    if (this.props.filterType === 1) {
      tiles = this.getPerHourData(this.props.data.list).map(weatherDetail => {
        return (
          <WeatherTile
            weatherDetail={weatherDetail}
            key={weatherDetail.dt}
            filterType={this.props.filterType}
          />
        );
      });
    } else {
      tiles = this.props.data.list.map(weatherDetail => {
        return (
          <WeatherTile weatherDetail={weatherDetail} key={weatherDetail.dt} />
        );
      });
    }

    return (
      <div>
        <h2>
          {this.props.data.city.name},{this.props.data.city.country}
        </h2>
        <p>
          Lat: {this.props.data.city.coord.lat}, Long:{" "}
          {this.props.data.city.coord.lon}
        </p>
        <div className="tiles-container">{tiles}</div>
      </div>
    );
  }
}

export default WeatherTiles;
