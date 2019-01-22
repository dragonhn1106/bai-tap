import React, { Component } from "react";

class Footer extends Component {
  render() {
    console.log("gia tri font cua o input : " + this.props.showTxtSizeFont);

    return (
      <div className="row mt-3">
        <div className="col-4">
          <button
            type="button"
            className="btn btn-secondary btn-lg btn-block"
            onClick={() => {
              this.props.fontSizeGetValue(this.props.showTxtSizeFont - 1);
            }}
          >
            -
          </button>
        </div>
        <div className="col-4">
          <div>{this.props.showTxtSizeFont}</div>
        </div>
        <div className="col-4">
          <button
            type="button"
            className="btn btn-primary btn-lg btn-block"
            onClick={() => {
              this.props.fontSizeGetValue(this.props.showTxtSizeFont + 1);
            }}
          >
            +
          </button>
        </div>
      </div>
    );
  }
}

export default Footer;
