import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Codebox from "./Codebox";
import Chatbox from "./Chatbox";
import News from "./News-Container";
import { FriendsContainer } from "./friends-list-container";


const Display = ({ displayNews }) => {
    // const messages = useSelector(state => state.messages)
    return (
        <div className="display">
            { displayNews && <News />}
            { !displayNews && 
               <>
                <FriendsContainer />
                <Chatbox />
                <Codebox />
               </>
            }
        </div>
    )
}

export default Display;