import React from "react";
import PropTypes from "prop-types";
import "./Message.sass";
import classname from "classname";
import { ROBOT } from "../../containers/ChatContainer";

export const Message = ({ name, content }) => {
  const className = classname("message", { "message--robot": name == ROBOT });
  return (
    <div className={className}>
      <p>
        <strong>{name}: </strong>
        {content}
      </p>
    </div>
  );
};
Message.propTypes = {
  name: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
