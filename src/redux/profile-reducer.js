import {socialNetworkApi} from '../api/socialNetworkApi'

const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'

const initialState = {
    postsData: [
        {
            id: 1,
            text: 'My first post!',
            likesCount: 12,
            dislikesCount: 1
        },
        {
            id: 2,
            text: 'Hello world!!!',
            likesCount: 34,
            dislikesCount: 2
        }
    ],
    newPostData: 'New post text',
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {
    if (action.type === UPDATE_NEW_POST_TEXT) {
        return {
            ...state,
            newPostData: action.newText
        }
    } else if (action.type === ADD_POST) {
        const postsData = state.postsData
        const newPostData = state.newPostData.trim()

        if (newPostData.length > 0) {
            const currentId = postsData[postsData.length - 1]['id']
            const newId = currentId + 1
            const newPost = {
                id: newId,
                text: newPostData,
                likesCount: 0,
                dislikesCount: 0
            }
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostData: ''
            }
        }
    } else if (action.type === SET_USER_PROFILE) {
        return {
            ...state,
            profile: action.profile
        }
    } else if (action.type === SET_STATUS) {
        return {
            ...state,
            status: action.status
        }
    }

    return state
}

export const addPost = () => ({
    type: ADD_POST
})
export const setNewPost = (newText) => ({
    type: UPDATE_NEW_POST_TEXT, newText
})
export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE, profile
})
export const setStatus = (status) => ({
    type: SET_STATUS, status
})

export const getUserProfile = (userId) => (dispatch) => {
    socialNetworkApi.getProfileData(userId)
        .then(data => {
                dispatch(setUserProfile(data))
            }, error => {
                console.error(error)
            }
        )
}
export const getStatus = (userId) => (dispatch) => {
    socialNetworkApi.getStatus(userId)
        .then(data => {
                dispatch(setStatus(data))
            }, error => {
                console.error(error)
            }
        )
}
export const updateStatus = (status) => (dispatch) => {
    socialNetworkApi.updateStatus(status)
        .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setStatus(status))
                }
            }, error => {
                console.error(error)
            }
        )
}

export default profileReducer
