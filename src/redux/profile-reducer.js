const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

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
    profile: null
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
    }

    return state
}

export const addPostActionCreator = () => ({
    type: ADD_POST
})
export const updateNewPostActionCreator = (newText) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText
})
export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    profile
})

export default profileReducer
