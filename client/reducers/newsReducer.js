import * as types from '../constants/actionTypes'

const initialState = {
    news: [],
    display: false
}

const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.DISPLAY_NEWS:
            console.log(action);
            const display = action.payload === 'toNews' ? true : false;
            return {
                ...state,
                display
            }
        case types.GET_NEWS:
            const news = action.payload;
            return {
                ...state,
                news
            }
        default: 
            return state;
    }
}

export default newsReducer;