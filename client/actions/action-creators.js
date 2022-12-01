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

// update username
export const setSession = username =>({
  type: types.LOGIN_USER,
  payload: username
})

//login user
export const signInUser = credentials => async dispatch => {
  // making a fetch request to the backend
  // sending username and password
  const response = await fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: credentials.username,
      password: credentials.password
  })});
  const data = await response.json();
  let action = {};
  if (data.err) {
    action = invalidCredentialsActionCreator('Invalid username or password');
  } else {
    action.type = types.LOGIN_USER,
    action.payload = data.username
  }
  return dispatch(action);
}

export const invalidCredentialsActionCreator = str => ({
  type: types.USER_ERROR,
  payload: str
});

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
  let action = {};
  if (data.err) {
    action = invalidCredentialsActionCreator('This username or email is already taken');
  } else {
    action.type = types.LOGIN_USER,
    action.payload = data.username
  }
  return dispatch(action);
}

// sign up user 
export const codeChangeActionCreator = codeBody => {
  return ({
    type: types.UPDATE_CODEVIEW,
    payload: codeBody
  });
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