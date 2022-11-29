import React from "react";
import { useSelector, useDispatch } from "react-redux";


function Navbar() {
    // const messages = useSelector(state => state.messages)
    return (
        <div className="navbar">
            <ul>
                <li>Option 1</li>
                <li>Option 2</li>
                <li>Option 3</li>
            </ul>
        </div>
    )
}

export default Navbar;