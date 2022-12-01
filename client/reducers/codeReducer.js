import * as types from '../constants/actionTypes'

const initialState = {
    code: '// Your code here'
}

const codeReducer = (state = initialState, action) => {
  let messageList;
  switch (action.type) {
    case types.UPDATE_CODEVIEW:
      console.log(action.payload);
      return {
        ...state,
        code: action.payload
      }
    default: return state;
  }
}

export default codeReducer;