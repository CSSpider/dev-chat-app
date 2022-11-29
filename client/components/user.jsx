import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function User (props) {
    const {username, firstname, lastname} = props;
    // console.log('rendering User', props)
    return (
        <div className="user">{firstname}</div>
    )
}