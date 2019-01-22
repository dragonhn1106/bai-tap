import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="row">
        <div
          className="col-12"
          style={{
            color: this.props.colorStyle,
            fontSize: this.props.sizeFont
          }}
        >
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Header;
