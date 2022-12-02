import React from "react";

export default function User (props) {
    console.log('USER added- props', props)
    console.log('USER added:', props.username)
    // console.log('rendering User', props)
    return (
        <div id={props.id} key={props.id} className="user">{props.username}</div>
    );
}