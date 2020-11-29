import React from 'react';
import Message from '../message/Message';
import '../MessageField/style.css';

export default class MessageField extends React.Component {
   state = {
       messages: [
           {name:"Федор", text: "Привет!"}
            ]
   };
   componentDidUpdate() {
       if (this.state.messages[this.state.messages.length-1].name!="Робот") {
           setTimeout(() =>
           this.setState(
               { messages: [ ...this.state.messages, {name:"Робот", text:'Не приставай ко мне, я робот!'} ] }),
           1000);
       }
   }


   handleClick = () => {
       this.setState({ messages: [ ...this.state.messages, {name:"Федор", text: "Как дела?"} ] });
   };

   render() {
       const messageElements = this.state.messages.map(function (text, index){
           console.log(index);
           return (<Message key={ index } text={ text } />)});
        
       return <div id="main" className="message-field">
           { messageElements }
            <p>{this.state.messages.length}</p>
           <button onClick={ this.handleClick }>Отправить сообщение</button>
       </div>
   }
}
