import React from 'react';
import Navbar from './containers/Navbar';
import Display from './containers/Display';
import { useSelector } from "react-redux";
import Auth from './components/authentification/auth';

const App = () => {

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
