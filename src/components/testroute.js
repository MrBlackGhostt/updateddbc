import React, { Component } from "react";
import AboutUs from "./about";

class TestRoute extends Component {
  componentDidMount() {
    console.log(this.props.match.params.tourid);
  }
  render() {
    return (
      <div>
        <AboutUs />
      </div>
    );
  }
}

export default TestRoute;
