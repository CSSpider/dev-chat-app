import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../actions/action-creators";

const News = () => {
    //get news data from state
    // const newsData = useSelector(state => state.news);
    const dispatch = useDispatch();
    const news = useSelector(state => state.news.news);

    useEffect( () => {
        console.log("in use effect");
        dispatch(actions.getNewsActionCreator());
    }, []);

    return (
        <div className="news-container">
        </div>
    )
}

export default News;