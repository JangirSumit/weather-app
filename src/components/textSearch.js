import React, { Component } from "react";
import { FormGroup, FormControl } from "react-bootstrap";
import "../App.css";

class TextSearch extends Component {
  onKeyUp(event) {
    this.props.onKeyUp(event.target.value);
  }

  render() {
    return (
      <form>
        <FormGroup controlId="formBasicText">
          <FormControl
            type="text"
            onChange={this.onKeyUp.bind(this)}
            placeholder="seach by city name..."
            style={{ width: "95%", display: "inline-block" }}
          />
        </FormGroup>
      </form>
    );
  }
}

export default TextSearch;
