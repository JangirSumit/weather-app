import React, { Component } from "react";
import { Col } from "react-bootstrap";
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
    let high_temp = parseFloat(this.props.weatherDetail.main.temp_max);

    low_temp -= kelvin;
    high_temp -= kelvin;

    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];

    return (
      <Col className="weather-tile">
        <div>
          <p style={{ paddingTop: "5px" }}>
            <a
              href="javascript:void(0);"
              style={{
                textDecoration: "none",
                fontWeight: "bold",
                fontSize: "large"
              }}
            >
              {date.getDate()} {monthNames[date.getMonth()]}
            </a>
          </p>
          <img
            src={icon}
            alt={this.props.weatherDetail.weather[0].description}
            style={{ width: "120px", height: "120px", display: "inline-block" }}
          />
          <div
            style={{
              textAlign: "left",
              paddingLeft: "10px",
              wordBreak: "break-word"
            }}
          >
            <p>
              <strong>{Math.round(low_temp, 2)}&#176;</strong>/
              <span>{Math.round(high_temp, 2)}&#176;</span>
            </p>
            <p
              style={{
                wordBreak: "break-word"
              }}
            >
              <span>Humidity : </span>
              <span>{this.props.weatherDetail.main.humidity}</span>
            </p>
            <p
              style={{
                wordBreak: "break-word"
              }}
            >
              <span>Weather : </span>
              <span>{this.props.weatherDetail.weather[0].description}</span>
            </p>
          </div>
        </div>
      </Col>
    );
  }
}

export default WeatherTile;
