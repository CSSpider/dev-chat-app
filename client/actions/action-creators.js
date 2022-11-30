import { parse } from 'requirejs';
import * as types from '../constants/actionTypes'
import dispatch, { useDispatch } from 'react-redux'
import store from '../store';

//create user
export const addMessageActionCreator = message => ({
    type: types.ADD_MESSAGE,
    payload: message,
  });

//load users
export const fetchAllUsers = () => async dispatch => {
  console.log("dispatch", dispatch)
  const response = await fetch ('/users')
  const parsedResponse = await response.json();
  console.log('payload is:', parsedResponse)
  return {
    type: types.LOAD_USERS,
    payload: parsedResponse
  }
}

//login user
export const signInUser = credentials => async dispatch => {
  // making a fetch request to the backend
  // sending username and password
  fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: credentials.username,
        password: credentials.password
      })})
      .then(response => response.json())
      .then(data => dispatch({
        type: types.LOGIN_USER,
        payload: data.username
      }))
      .catch(err => {
        err;
      });
  console.log('Error occured');
}

// sign up user 
export const signUpUser = credentials => async dispatch => {
  console.log('sign up in dispatch')
  const response = await fetch('/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: credentials.username,
      firstName: credentials.firstName,
      lastName: credentials.lastName,
      email: credentials.email,
      password: credentials.password
    })
  });
  const data = await response.json();
  return( dispatch({
    type: types.SIGN_UP_USER,
    payload: data.username
  }));
}

//load messages
/*
export const fetchMessages = (user, friend) => async (dispatch) => {
  console.log('USER', user);
  console.log('FRIEND', friend);
  const string = `/users/${user}/${friend}`;
  console.log('++++++++++++++++++++++++++', string);
  const response = await fetch(`/users/${user}/${friend}`);
  const parsedResponse = await response.json();
  console.log('ppppppppppp', parsedResponse);
  return {
    type: types.LOAD_MESSAGES,
    payload: parsedResponse,
  };
};
*/


//send a message