import React from "react";
import { Message } from "../message/Message";
import PropTypes from "prop-types";
import "./MessageList.css";

export const MessageList = ({ messages })=> {
  return (
    <div className="message-list">
      {messages.map((item, index) => (
        <Message {...item} key={index} />
      ))}
    </div>
  );
};
MessageList.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape(Message.propTypes)),
};
