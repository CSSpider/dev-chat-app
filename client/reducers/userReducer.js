import * as types from '../constants/actionTypes'

const initialState = {
    currentUser: '',
    invalidCredentials: {status: false, message: ''},
    users: []
}

// const testInitialState = {users:[{username: "camkelly",
// firstName: "Cam",
// lastName: "Kelly"}]
// }

const userReducer = (state = initialState, action) => {
    let currentUser = '';
    switch (action.type) {
        case types.LOGIN_USER:
            console.log('in login user');
            currentUser = action.payload;
            return {
                ...state,
                currentUser
            }
        case types.SIGN_UP_USER:
            console.log('in sign up user');
            currentUser = action.payload;
            return {
                ...state,
                currentUser
            }

        case types.USER_ERROR:
            console.log('in error user');
            let invalidCredentials = {}
            invalidCredentials.status = state.invalidCredentials.status ? false : true;
            invalidCredentials.message = action.payload;
            return {
                ...state,
                invalidCredentials
            }

        case types.LOAD_USERS:
            console.log('in load users case');
            const users = action.payload;
            return {
                ...state,
                users
            }
            //action to authentificate a user
        default: {
            return state;
        }
    }
}

export default userReducer;