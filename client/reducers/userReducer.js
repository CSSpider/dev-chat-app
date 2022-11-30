import * as types from '../constants/actionTypes'

const initialState = {
    currentUser: '',
    users: []
}

// const testInitialState = {users:[{username: "camkelly",
// firstName: "Cam",
// lastName: "Kelly"}]
// }

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOAD_USERS:
            console.log('in load users case');
            const users = action.payload;
            return {
                ...state,
                users
            }
            //action to authentificate a user
        case types.LOGIN_USER:
            console.log('in login user');
            const currentUser = action.payload;
            return {
                ...state,
                currentUser
            }
        default: {
            return state;
        }
    }
}

export default userReducer;