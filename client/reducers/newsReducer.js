import * as types from '../constants/actionTypes'

const initialState = {
    news: [],
    display: false
}

const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.DISPLAY_NEWS:
            const display = state.display ? false : true;
            return {
                ...state,
                display
            }
        default: 
            return state;
    }
}

export default newsReducer;