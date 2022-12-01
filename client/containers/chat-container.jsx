import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import MessageContainer from './message-container';

// import * as actions from '../actions'
const client = new WebSocket('ws://localhost:3002');

// imports
import {codeChangeActionCreator} from '../actions/action-creators';

function ChatContainer (props) {
  
  const username = useSelector(state => state.users.currentUser);
  console.log('current User:', username);
  const [input, setInput] = useState('');
  const [sender, setUsername] = useState(username); // will come from redux
  const [receiver, setFriendName] = useState('kevindooley'); // will come from redux
  const [chatMessages, setChatMessages] = useState([]); // will come from redux

  client.onmessage = (event) => {
    // parse incoming message event from the socket
    const message = JSON.parse(event.data);
    console.log('message data:', message);

    // if the message type is chat, then update the chat
    if (message.type === 'chat') {
      setChatMessages((prev) => [...prev, message]);
    }

    console.log('--- userTextValue ---',document.getElementById('userText').value)

    // else check if message is for the codebox
    if (message.type === 'code') {
      dispatch(codeChangeActionCreator(message.body))
    }
  }

  // maybe this should be moved, this has to do with code change dispatching //
  const dispatch = useDispatch();
    
  function submit() {
    // console.log('pressed!');
    // console.log('send message: ', input);
    const messageObj = {
        type: 'chat',
        sender,
        body: input,
        receiver
    }
    console.log('messageObj in Submit: ', messageObj);
    client.send(JSON.stringify(messageObj));
  }

  function readInput(e) {
    setInput((prev) => e.target.value)
  }

  // clears the input field after the message has been submitted
  function clearText() {
    document.getElementById('userText').value = '';
  }

  // sends the message when the user presses enter
  function handleKeypress(e){
    if(e.keyCode === 13 && document.getElementById('userText').value !== '') {
      submit();
      document.getElementById('userText').value = '';
    }
  }

  let chat = [];
  for (let i = 0; i < chatMessages.length; i++) {
    let className = 'client';
    chatMessages.sender !== username ? className = 'sender' : className = 'client';
    chat.push(
      <MessageContainer 
      key={i} 
      sender={chatMessages[i].sender} 
      message={chatMessages[i].body} 
      direction ={chatMessages[i].sender === username ? 'sentMsg' : 'msgRec'} 
      className={chatMessages[i].sender === username ? 'sender' : 'reciever'}
      boxType={chatMessages[i].sender === username ? 'messageContainerSend' : 'messageContainerRec'}/>);
  }

  return (
    <div className='chatbox-container'>
        <div id="chat">{chat}</div>
        <div id="msgAndSendBtn" style={{display: "flex"}}>
          <textarea id="userText" onChange={readInput} placeholder="Message" onKeyDown={handleKeypress} />
          <div id="sendBtn"><button onClick={function(e){submit(); clearText()}} >Send</button></div>
        </div>
    </div>
  )
}

export default ChatContainer;

