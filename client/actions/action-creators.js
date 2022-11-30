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
  const response = await fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: credentials.username,
      password: credentials.password
    })
  });
  const parsedResponse = await response.json();
  return {
    type: types.LOGIN_USER,
    payload: parsedResponse.username
  }
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