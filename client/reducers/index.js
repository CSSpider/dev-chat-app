import { combineReducers } from "redux";
import messageReducer from '../reducers/messageReducer'
import userReducer from "./userReducer";

const reducers = combineReducers({
    messages: messageReducer,
    users: userReducer
})

export default reducers;