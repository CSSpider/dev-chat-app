import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../actions/action-creators";

const News = () => {
    //get news data from state
    // const newsData = useSelector(state => state.news);
    const dispatch = useDispatch();

    useEffect( () => {
        console.log("in use effect");
        const func = async() => {
            await dispatch(actions.getNewsActionCreator());
        }
        func();
    }, []);


    const news = useSelector(state => state.news.news);
    console.log(news);

    const arr = [];
    news.forEach(article => {
        console.log(article);
        arr.push(
            <div>
                <h4>{article.title}</h4>
                <a href={article.url}>Link to the article</a>
            </div>
        )});

    return (
        <div className="news-container">
            {arr}
        </div>
    )
}

export default News;