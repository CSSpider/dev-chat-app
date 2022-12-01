import React, { useEffect } from 'react';
import ChatContainer from './containers/chat-container';
import  MessageContainer from './containers/message-container';
import { FriendsContainer } from './containers/friends-list-container';
import Navbar from './containers/Navbar';
import Display from './containers/Display';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import Auth from './components/auth';
import "./styles.css";

const App = () => {

  const username = useSelector(state => state.users.currentUser);
  console.log('username App.js', username); 
  return (
    <>
      {username &&
        <div>
          
          {/* <FriendsContainer/> */}
          {/* <ChatContainer/> */}
          <Navbar />
          {/* {username} */}
          <Display />
          
        </div>}
      {!username && <div className="auth-container"><Auth /></div>}
    </>
  );
}

export default App;
