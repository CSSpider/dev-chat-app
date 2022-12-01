import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ChatPartner from "../components/chatPartner";
import ChatContainer from "./chat-container";


function Chatbox() {
    // const messages = useSelector(state => state.messages)
    return (
        <div className="chatbox">
            {/* <ChatPartner /> */}
            <ChatContainer />
        </div>
    )
}

export default Chatbox;