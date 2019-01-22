import React, { Component } from "react";

class Contents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      red: "red",
      blue: "blue",
      green: "green"
    };
  }
  ColorRedOnclick = selectColor => {
    return this.props.colorGetSet(selectColor);
  };
  render() {
    return (
      <div className="row Color">
        <div
          className="col-4 red"
          onClick={() => {
            this.ColorRedOnclick(this.state.red);
          }}
        />
        <div
          className="col-4 blue"
          onClick={() => {
            this.ColorRedOnclick(this.state.blue);
          }}
        />
        <div
          className="col-4 green"
          onClick={() => {
            this.ColorRedOnclick(this.state.green);
          }}
        />
      </div>
    );
  }
}

export default Contents;
