import React from "react";
import { useSelector, useDispatch } from "react-redux";
// import * as actions from '../actions'

function MessageContainer(props) {
    console.log('props', props)
    // const messages = useSelector(state => state.messages)
    return (
        <div>
            <div className="sender">
            {props.sender}
            </div>
            <div className="messageContainer">
                <div className={props.className}>
                {props.message}
                </div>
            </div>  
        </div>  
    )
}

export default MessageContainer;