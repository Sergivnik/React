import React from "react";
import PropTypes from "prop-types";
import "./style.css";

export default class Message extends React.Component {
  render() {
    return (
      <div
        className="message"
        style={{
          alignSelf:
            this.props.text.sender != "Робот" ? "flex-start" : "flex-end",
        }}
      >
        <div>{this.props.text.text}</div>
        <div className="message-sender">{this.props.text.sender}</div>
      </div>
    );
  }
}
Message.propTypes = {
  text: PropTypes.object.isRequired,
};
