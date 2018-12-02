import React, { Component } from "react";
import { Thumbnail, Col } from "react-bootstrap";
import "../App.css";

class WeatherTile extends Component {
  render() {
    const kelvin = 273.15;
    let date = new Date(this.props.weatherDetail.dt_txt);
    let icon =
      "http://openweathermap.org/img/w/" +
      this.props.weatherDetail.weather[0].icon +
      ".png";
    let low_temp = parseFloat(this.props.weatherDetail.main.temp_min);
    let high_temp = parseFloat(this.props.weatherDetail.main.temp_min);

    low_temp -= kelvin;
    high_temp -= kelvin;

    return (
      <Col className="weather-tile">
        <div>
          <h3>
            {date.getDate()}/{date.getMonth()}/{date.getFullYear()}
          </h3>
          <img
            src={icon}
            style={{ width: "120px", height: "120px", display: "inline-block" }}
          />
          <p>
            <strong>{Math.round(low_temp, 2)}&#176;</strong>/
            <span>{Math.round(high_temp, 2)}&#176;</span>
          </p>
          <p>Humidity : {this.props.weatherDetail.humidity}</p>
          <p>Weather : {this.props.weatherDetail.weather[0].description}</p>
        </div>
      </Col>
    );
  }
}

export default WeatherTile;
