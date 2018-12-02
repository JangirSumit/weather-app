import React, { Component } from "react";
import WeatherTile from "./weatherTile";
import { Grid, Row } from "react-bootstrap";
import "../App.css";

class WeatherTiles extends Component {
  addDays(theDate, days) {
    return new Date(theDate.getTime() + days * 24 * 60 * 60 * 1000);
  }

  getFiveDayData() {
    let newDate;
    let newData = [];
    let dates = [];
    this.props.data.list.forEach(d => {
      for (let i = 0; i < 5; i++) {
        newDate = this.addDays(new Date(), i);
        let date = new Date(d.dt_txt);

        let date1 =
          newDate.getMonth() +
          "/" +
          newDate.getDate() +
          "/" +
          newDate.getFullYear();

        let date2 =
          date.getMonth() + "/" + date.getDate() + "/" + date.getFullYear();

        if (date1 === date2 && dates.indexOf(date1) === -1) {
          newData.push(d);
          dates.push(date1);
        }
      }
    });
    return newData;
  }

  render() {
    if (!this.props.data.list || this.props.data.list.length <= 0)
      return <div>No Data</div>;

    let tiles = this.getFiveDayData(this.props.data.list).map(weatherDetail => {
      return (
        <WeatherTile weatherDetail={weatherDetail} key={weatherDetail.dt} />
      );
    });

    return (
      <div>
        <h2>
          {this.props.data.city.name},{this.props.data.city.country}
        </h2>
        <div>{tiles}</div>
        <Grid>
          <Row className="show-grid" />
        </Grid>
      </div>
    );
  }
}

export default WeatherTiles;
