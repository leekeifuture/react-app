import {socialNetworkApi} from '../api/socialNetworkApi'

const SET_USER_DATA = 'SET_USER_DATA'

const initialState = {
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

export const authMe = () => {
    return (dispatch) => {
        socialNetworkApi.authMe()
            .then(data => {
                    if (data.resultCode === 0) {
                        const {id, login, email} = data.data
                        dispatch(setAuthUserData(id, login, email))
                    }
                }, error => {
                    console.error(error)
                }
            )
    }
}

export default authReducer
