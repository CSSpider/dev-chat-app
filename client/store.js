// globalized state 
import reducers from "./reducers/index";
// to call async functions we need to use redux-think middleware
import thunk from "redux-thunk" 
import { createStore, applyMiddleware } from "redux";

const store = createStore (
    reducers,  applyMiddleware(thunk)
);

export default store;
