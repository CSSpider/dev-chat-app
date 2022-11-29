import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import MessageContainer from './message-container';
// import * as actions from '../actions'
const client = new WebSocket('ws://localhost:3002');

function ChatContainer (props) {
  const [input, setInput] = useState('');
  const [sender, setUsername] = useState('arthursu'); // will come from redux
  const [receiver, setFriendName] = useState('kevindooley'); // will come from redux
  const [chatMessages, setChatMessages] = useState([
    {
      body: 'hi',
      sender: 'arthursu',
      receiver: 'kevindooley'
    },
    {
      body: 'yoyo',
      sender: 'kevindooley',
      receiver: 'arthursu'
    },
    {
      body: 'my guy',
      sender: 'arthursu',
      receiver: 'kevindooley'
    }]); // will come from redux
//   console.log('client in component', client)
//   client.on('open', () => {
//     client.send('hello');
//   })
  // client.onopen = (event) => {
  //   client.send(JSON.stringify(sender, ' has connected'));
  //   // console.log('here')
  // };

  client.onmessage = (event) => {
    const message = JSON.parse(event.data);
    console.log('message in chatbox: ', message.body);
    console.log('chatMessages: ', chatMessages);
    setChatMessages((prev) => [...prev, message]);
  }

  

  function submit() {
    console.log('pressed!');
    console.log('send message: ', input);
    const messageObj = {
        sender,
        body: input,
        receiver
    }
    console.log('messageObj: ', messageObj);
    client.send(JSON.stringify(messageObj));
  }

  function readInput(e) {
    setInput((prev) => e.target.value)
  }

  let chat = [];
  for (let i = 0; i < chatMessages.length; i++) {
    let className = 'client';
    if (chatMessages.sender !== sender) className = 'friend';
    chat.push(<MessageContainer message={chatMessages[i].body} className={className}/>);
  }

  return (
    <div className='chatbox-container'>
        <div>{chat}</div>
        <div id="messageInput"><input onChange={readInput}/></div>
        <div><button onClick={submit}>Submit Chat</button></div>
        
    </div>
  )
}

export default ChatContainer;