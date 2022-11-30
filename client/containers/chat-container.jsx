import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import MessageContainer from './message-container';
// import * as actions from '../actions'
const client = new WebSocket('ws://localhost:3002');

// imports
import {codeChangeActionCreator} from '../actions/action-creators';

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

    console.log('chatMessages', chatMessages);

  client.onmessage = (event) => {
    // parse incoming message event from the socket
    const message = JSON.parse(event.data);
    console.log('message data:', message);

    // if the message type is chat, then update the chat
    if (message.type === 'chat') {
      setChatMessages((prev) => [...prev, message]);
    }

    // else check if message is for the codebox
    if (message.type === 'code') {
      dispatch(codeChangeActionCreator(message.body))
    }
  }

  // maybe this should be moved, this has to do with code change dispatching //
  const dispatch = useDispatch();
    
  function submit() {
    console.log('pressed!');
    console.log('send message: ', input);
    const messageObj = {
        type: 'chat',
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
    chat.push(<MessageContainer sender={chatMessages[i].sender} message={chatMessages[i].body} className={className}/>);
  }

  return (
    <div className='chatbox-container'>
        <div id="chat">{chat}</div>
        <div id="msgAndSendBtn" style={{display: "flex"}}>
          <input onChange={readInput} placeholder="Message" />
          <div id="sendBtn"><button onClick={submit}>Send</button></div>
        </div>
    </div>
  )
}

export default ChatContainer;

/*
import { useSelector, useDispatch } from "react-redux";

export function FriendsContainer() {
    const dispatch = useDispatch();
    useEffect((async () => {
        const res = await fetchAllUsers()();
        dispatch(res);
    }), [])

    const userData = useSelector(state => state.users.users);
    */