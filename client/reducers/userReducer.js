import * as types from '../constants/actionTypes'

const initialState = {
    currentUser: '',
    invalidCredentials: {status: false, message: ''},
    users: new Set()
}


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

        case types.ADD_CURRENT_USER:
            //const users = new Set(action.payload);
            console.log('state:', state);
            console.log('current users:', action.payload, ' existing users:', state.users);
            let users = new Set([...action.payload, ...state.users]);

            const sortedSet = Array.from(users).sort();

            users = new Set(sortedSet);

            //users.add(action.payload);
            console.log('USR REDUCER, NEW USER LIST:', users)
            return {
                ...state,
                users
            }

        default: {
            return state;
        }
    }
}

export default userReducer;