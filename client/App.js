import React from 'react';
import Navbar from './containers/Navbar';
import Display from './containers/Display';
import { useSelector,  useDispatch } from "react-redux";
import * as actions from './actions/action-creators';
import Auth from './components/authentification/auth';
import News from './containers/News-Container';

const App = () => {

  // display to determine if user is currently on the news page
  const displayNews = useSelector(state => state.news.display);
  const username = useSelector(state => state.users.currentUser);
  console.log(displayNews, ' displaynews');

  console.log('username App.js', username); 
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
