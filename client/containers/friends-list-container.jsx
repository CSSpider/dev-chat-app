import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import User from "../components/User"
import { fetchAllUsers } from "../actions/action-creators";

export function FriendsContainer() {
    const dispatch = useDispatch();
    useEffect((async () => {
        const res = await fetchAllUsers()();
        dispatch(res);
    }), [])

    const userData = useSelector(state => state.users.users);
    const toRender = [];

    userData.forEach(user => {
        toRender.push(<User username={user.username} firstname={user.firstname} lastname={user.lastname}/>);
    });

    return (
        <div className="friendsList">
            {toRender}
        </div>
    )
}