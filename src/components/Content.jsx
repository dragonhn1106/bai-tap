import React, { Component } from "react";

class Contents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: ["red", "blue", "green"]
    };
  }
  ColorRedOnclick = selectColor => {
    return this.props.colorGetSet(selectColor);
  };
  showColor = color => {
    return {
      backgroundColor: color,
      height: "108px"
    };
  };
  render() {
    var elemColor = this.state.color.map((value, index) => {
      return (
        <div
          className="col-4 "
          key={index}
          style={this.showColor(value)}
          onClick={() => {
            this.ColorRedOnclick(value);
          }}
        />
      );
    });
    return <div className="row Color">{elemColor}</div>;
  }
}

export default Contents;
