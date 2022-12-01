import { combineReducers } from "redux";
import messageReducer from '../reducers/messageReducer';
import userReducer from "./userReducer";
import codeReducer from "./codeReducer";

const reducers = combineReducers({
    messages: messageReducer,
    users: userReducer,
    code: codeReducer
})

export default reducers;