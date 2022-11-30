import React, { useEffect } from 'react';
import ChatContainer from './containers/chat-container';
import  MessageContainer from './containers/message-container';
import { FriendsContainer } from './containers/friends-list-container';
<<<<<<< HEAD
import Navbar from './containers/Navbar';
import Display from './containers/Display';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
=======
import { useSelector, useDispatch } from "react-redux";
import Auth from './components/auth';
>>>>>>> dev

const App = () => {

  const username = useSelector(state => state.users.currentUser);
     
  return (
<<<<<<< HEAD
    <div>
      <Navbar />
      <Display />
      {/* <FriendsContainer />
      <ChatContainer /> */}
    </div>
=======
    <>
      {username &&
        <div>
          {username}
          <h1>App!</h1>
          <FriendsContainer/>
          <ChatContainer/>
        </div>}
      {!username && <div className="auth-container"><Auth /></div>}
    </>
>>>>>>> dev
  );
}

export default App;
