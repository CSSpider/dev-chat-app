import React, { useState, useEffect } from 'react';
import Navbar from './containers/Navbar';
import Display from './containers/Display';
import * as actions from "./actions/action-creators";
import { useSelector, useDispatch } from "react-redux";

import Auth from './components/authentification/auth';

const App = () => {
  const dispatch = useDispatch();
  const setSession = actions.setSession;


  useEffect( () => {
    const func = async() => {
      const response = await fetch('/insess');
      const data = await response.json();
      if (data.isLoggedIn) {
        dispatch(setSession(data.username));
      }
    }
    func();
  });

  // display to determine if user is currently on the news page
  const displayNews = useSelector(state => state.news.display);
  const username = useSelector(state => state.users.currentUser);


  return (
    <>
      {username &&
        <div>
      
          <Navbar />
          <Display displayNews={displayNews} />
        
        </div>}
      {!username && <div className="auth-container"><Auth /></div>}
    </>
  );
}

export default App;
