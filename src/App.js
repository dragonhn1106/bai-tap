import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Contents from "./components/Content";
import Footer from "./components/Footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "lalalallalalalalalalalalalalal",
      color: "red",
      fontSize: 18
    };
  }
  colorGetSet = colorGet => {
    return this.setState({
      color: colorGet
    });
  };
  fontSizeGetSet = fontSizeGet => {
    return this.setState({
      fontSize: fontSizeGet
    });
  };
  render() {
    console.log("gia tri font cua App " + this.state.fontSize);

    return (
      <div className="App">
        <div className="container">
          <Header colorStyle={this.state.color} sizeFont={this.state.fontSize}>
            {this.state.name}{" "}
          </Header>{" "}
          <Contents
            colorGetSet={color => {
              this.colorGetSet(color);
            }}
          />{" "}
          <Footer
            showTxtSizeFont={this.state.fontSize}
            fontSizeGetValue={e => {
              this.fontSizeGetSet(e);
            }}
          />{" "}
        </div>{" "}
      </div>
    );
  }
}

export default App;
