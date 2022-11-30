import React, { useEffect } from 'react';
import ChatContainer from './containers/chat-container';
import  MessageContainer from './containers/message-container';
import { FriendsContainer } from './containers/friends-list-container';
import { useSelector, useDispatch } from "react-redux";
import Auth from './components/auth';

const App = () => {
  const username = useSelector(state => state.users.currentUser);
     
  return (
    <>
      {username &&
        <div>
          <h1>App!</h1>
          <FriendsContainer/>
          <ChatContainer/>
        </div>}
      {!username && <Auth />}
    </>
  );
}

export default App;
