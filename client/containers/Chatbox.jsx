import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ChatContainer from "./chat-container";


function Chatbox() {
    // const messages = useSelector(state => state.messages)
    return (
        <div className="chatbox">
            <h1>Chatbox</h1>
            <ChatContainer />
        </div>
    )
}

export default Chatbox;