import { combineReducers } from "redux";
import messageReducer from '../reducers/messageReducer';
import userReducer from "./userReducer";
import codeReducer from "./codeReducer";
import newsReducer from "./newsReducer";

const reducers = combineReducers({
    messages: messageReducer,
    users: userReducer,
    code: codeReducer,
    news: newsReducer
})

export default reducers;