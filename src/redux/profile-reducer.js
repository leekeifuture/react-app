const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
    postsData: [
        {
            id: 1,
            message: 'My first post!',
            likesCount: 12,
            dislikesCount: 1
        },
        {
            id: 2,
            message: 'Hello world!!!',
            likesCount: 34,
            dislikesCount: 2
        }
    ],
    newPostData: 'New post text'
}

const profileReducer = (state = initialState, action) => {
    if (action.type === ADD_POST) {
        let newPost = {
            id: 5,
            message: state.newPostData,
            likesCount: 0,
            dislikesCount: 0
        }

        state.postsData.push(newPost)
        state.newPostData = ''
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
        state.newPostData = action.newText
    }

    return state
}

export const addPostActionCreator = () => ({
    type: ADD_POST
})

export const updateNewPostActionCreator = (newText) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: newText
})

export default profileReducer
