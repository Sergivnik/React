import React from "react";
import Message from "../message/Message";
import "./style.css";

export default class MessageField extends React.Component {
  state = {
    messages: [
      { sender: "Робот", text: "Привет!" },
      { sender: "Робот", text: "Как дела?" },
    ],
    input: "",
  };
  componentDidUpdate() {
    if (this.state.messages[this.state.messages.length - 1].sender != "Робот") {
      setTimeout(
        () =>
          this.setState({
            messages: [
              ...this.state.messages,
              { sender: "Робот", text: "Не приставай ко мне, я робот!" },
            ],
          }),
        1000
      );
    }
  }

  handleClick = (message) => {
    this.sendMessage(message);
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleKeyUp = (event, message) => {
    if (event.keyCode === 13) {
      // Enter
      this.sendMessage(message);
    }
  };

  sendMessage = (message) => {
    this.setState({
      messages: [...this.state.messages, { text: message, sender: "me" }],
      input: "",
    });
  };

  render() {
    const messageElements = this.state.messages.map(function (item, index) {
      return <Message key={index} text={item} />;
    });
    return (
      <div className="layout">
        <div className="message-field">{messageElements}</div>
        <p>{this.state.messages.length}</p>
        <input
          name="input"
          onChange={this.handleChange}
          value={this.state.input}
          onKeyUp={(event) => this.handleKeyUp(event, this.state.input)}
        />
        <button onClick={() => this.handleClick(this.state.input)}>
          Отправить сообщение
        </button>
      </div>
    );
  }
}
