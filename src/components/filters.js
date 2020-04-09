import React, { Component } from "react";
import {
  ButtonToolbar,
  ToggleButton,
  ToggleButtonGroup
} from "react-bootstrap";
import "../App.css";

class TextSearch extends Component {
  handleChange(val) {
    this.props.handleFilterChange(val);
  }

  render() {
    return (
      <center>
        <ButtonToolbar
          align="center"
          style={{ width: "auto", display: "inline-block" }}
        >
          <ToggleButtonGroup
            type="radio"
            name="options"
            defaultValue={1}
            onChange={this.handleChange.bind(this)}
          >
            <ToggleButton value={1}>Today</ToggleButton>
            <ToggleButton value={2}>next 5 days</ToggleButton>
          </ToggleButtonGroup>
        </ButtonToolbar>
      </center>
    );
  }
}

export default TextSearch;
