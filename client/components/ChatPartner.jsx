import React from "react";
import { useSelector, useDispatch } from "react-redux";

function ChatPartner () {
    // const {username, firstname, lastname} = props;
    // console.log('rendering User', props)
    return (
        <div className="chatPartner">
            <h3>Chat Partner Name</h3>
            {/* <div className="user">{firstname}</div> */}
        </div>
    )
}

export default ChatPartner;