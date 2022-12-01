import React from "react";
import { useDispatch } from "react-redux";
import * as actions from "../actions/action-creators";

const Navbar = props=> {
    //use disptach here
    // pass action creator to the disptach
      // dispatcher for news
    const dispatch = useDispatch();
    const displayAction = actions.newsActionCreator;

    return (
        <div className="navbar">
            <ul>
                <li onClick={() => dispatch(displayAction())} >Top Tech News</li>
                <li onClick={() => dispatch(displayAction())}>Chat</li>
                <li>Option 3</li>
            </ul>
        </div>
    )
}

export default Navbar;