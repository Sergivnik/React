import React, { Component } from "react";
import { Chat } from "../components/chat/Chat";

export const ROBOT = "Robot";

export class ChatContainer extends Component {
  state = {
    messages: [
      { name: ROBOT, content: "Привет!" },
      { name: ROBOT, content: "Как дела?" },
    ],
  };

  componentDidUpdate() {
    setTimeout(() => {
      const lastMessage = this.state.messages[this.state.messages.length - 1];
      if (lastMessage.name != ROBOT) {
        this.handleSendMessage({
          name: ROBOT,
          content: `Hello ${lastMessage.name}, I'm Robot`,
        });
      }
    }, 3000);
  }

  handleSendMessage = (message) => {
    this.setState((state) => ({
      messages: [...state.messages, message],
    }));
  };
  render() {
    return (
      <div id="ChatContainer">
        <Chat
          messages={this.state.messages}
          onSendMessage={this.handleSendMessage}
        />
      </div>
    );
  }
}
