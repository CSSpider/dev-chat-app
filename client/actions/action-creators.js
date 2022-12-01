import { parse } from 'requirejs';
import * as types from '../constants/actionTypes'
import dispatch, { useDispatch } from 'react-redux'
import store from '../store';

//create user
export const addMessageActionCreator = message => ({
    type: types.ADD_MESSAGE,
    payload: message,
  });


// update username
export const setSession = username =>({
  type: types.LOGIN_USER,
  payload: username
})

//login user
export const signInUser = credentials => async dispatch => {
  // making a fetch request to the backend
  // sending username and password
  try {
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
  } catch(err) {
    console.log(err);
  }
}

export const invalidCredentialsActionCreator = str => ({
  type: types.USER_ERROR,
  payload: str
});

// sign up user 
export const signUpUser = credentials => async dispatch => {
  try {
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
  } catch(err) {
    console.log('Unexpected error');
  }
}

// sign up user 
export const codeChangeActionCreator = codeBody => {
  return ({
    type: types.UPDATE_CODEVIEW,
    payload: codeBody
  });
}

// new user signin
export const newUserEnterActionCreator = newUser => {
  return ({
    type: types.ADD_CURRENT_USER,
    payload: newUser
  })
}

// get news
export const newsActionCreator = (str) => {
  return ({
    type: types.DISPLAY_NEWS,
    payload: str
  })
}

// getting news with fetch requests
export const getNewsActionCreator = () => async dispatch =>  {
  console.log('in news');
  try {
    const response = await fetch('/news');
    const data = await response.json();
    console.log(data);
    return dispatch({
      type: types.GET_NEWS,
      payload: data
    });
  } catch(err) {
    console.log(err);
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