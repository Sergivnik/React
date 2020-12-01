import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import "./ChatForm.sass";

function useInput(initialState) {
  const [state, setState] = useState(initialState);

  const setInput = (event) => {
    setState(event.currentTarget.value);
  };
  return [state, setInput];
}

export const ChatForm = ({ onSendMessage }) => {
  const [name, setName] = useInput("User");
  const [content, setContent] = useInput("");
  let text ;
  //const textarea = useRef();

  //   useEffect(() => {
  //     textarea.current.focus();
  //   }, []);

  const onSubmit = (event) => {
    onSendMessage({ name, content });
    text = "";
  };
  return (
    <form className="ChatForm" onSubmit={onSubmit}>
      <TextField
        name="name"
        value={name}
        label="Имя"
        onChange={setName}
        variant="outlined"
      />
      <TextField
        className="TextField"
        variant="outlined"
        label="Сообщение"
        autoFocus
        required
        name="content"
        placeholder="Enter message"
        onChange={setContent}
        value={text}
      />

      <Button
        variant="contained"
        color="primary"
        onClick={onSubmit}
        endIcon={<Icon>send</Icon>}
      >
        Send
      </Button>
    </form>
  );
};
ChatForm.propTypes = {
  onSendMessage: PropTypes.func.isRequired,
};