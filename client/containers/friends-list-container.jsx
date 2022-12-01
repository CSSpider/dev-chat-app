import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import User from "../components/User"
//import { fetchAllUsers } from "../actions/action-creators";

export function FriendsContainer() {
    
    const userData = useSelector(state => state.users.users);
    //const toRender = [];
    const nameList = [];

    console.log("USERS LOGGED IN:", userData)

    //let userIndex = 0;
    userData.forEach(user => {
        // userIndex++;
        console.log('adding to user pool:', user);
        // toRender.push( <User username={user} key={userIndex}/> );
        nameList.push(<div className='signedInUser'>{user}</div>);
    });

    // useEffect(()=> {
    //     console.log("CHANGE");
    // }, [userData]);

    return (
        <div className="friendsList">
            <div className="header" >
                <h2 id="friendListHeader">In Chat</h2>
            </div>
            <div className="friends">
                <div className="inSession">
                    {nameList}
                </div>
                {/* {toRender} */}
            </div>
        </div>
    )
}