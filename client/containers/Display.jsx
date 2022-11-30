import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Codebox from "./Codebox";
import Chatbox from "./Chatbox";
import { FriendsContainer } from "./friends-list-container";



function Display() {
    // const messages = useSelector(state => state.messages)
    return (
        <div className="display">
            <FriendsContainer />
            <Chatbox />
            <Codebox />
        </div>
    )
}

export default Display;