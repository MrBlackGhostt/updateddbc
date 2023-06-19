import React, { Component } from "react";
import { connect } from "react-redux";
import { toggleNotification } from "../../actions";

class Notification extends Component {
  componentDidMount() {
    const value = setTimeout(() => {
      this.props.toggleNotification("");
      clearInterval(value);
    }, 3000);
  }
  render() {
    return (
      <div className="notification">
        <p className="notification__heading">{this.props.notification}</p>
      </div>
    );
  }
}

export default connect(null, { toggleNotification })(Notification);
