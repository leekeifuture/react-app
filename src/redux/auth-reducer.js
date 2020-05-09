const SET_USER_DATA = 'SET_USER_DATA'

let initialState = {
    isAuth: false,
    userId: null,
    email: null,
    login: null
}

const authReducer = (state = initialState, action) => {
    if (action.type === SET_USER_DATA) {
        return {
            ...state,
            ...action.data,
            isAuth: true
        }
    }

    return state
}

export const setAuthUserData = (userId, login, email) => ({
    type: SET_USER_DATA,
    data: {userId, login, email}
})

export default authReducer
