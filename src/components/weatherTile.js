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
    let feels_like = parseFloat(this.props.weatherDetail.main.feels_like);

    low_temp -= kelvin;
    high_temp -= kelvin;
    feels_like-=kelvin;

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
          <p style={{ paddingTop: "5px", fontSize:"17px", fontWeight: "bold" }}>
              {
                `${date.getDate()} ${monthNames[date.getMonth()]}`}<br/>
                {`${
                    date.getHours() < 10
                      ? "0" + date.getHours()
                      : date.getHours()
                  }:${
                    date.getMinutes() < 10
                      ? "0" + date.getMinutes()
                      : date.getMinutes()
                  }`}
          </p>
          <img
            src={icon}
            alt={this.props.weatherDetail.weather[0].description}
            style={{ width: "120px", height: "100px", display: "inline-block" }}
          />
          <div
            style={{
              textAlign: "left",
              paddingLeft: "10px",
              wordBreak: "break-word"
            }}
          >
            <p>
              Temp :<strong>{Math.round(low_temp, 2)}&#176;C</strong>/
              <span>{Math.round(high_temp, 2)}&#176;C</span>
            </p>
            <p>
              Feels Like :<strong>{Math.round(feels_like, 2)}&#176;C</strong>
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
            <p>
              Wind : {this.props.weatherDetail.wind.speed} km/h,{" "}
              {this.props.weatherDetail.wind.deg}&#176;
            </p>
          </div>
        </div>
      </Col>
    );
  }
}

export default WeatherTile;
