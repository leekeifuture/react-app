const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let store = {
    _state: {
        profileData: {
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
        },
        dialogsData: [
            {id: 1, name: 'Vasya'},
            {id: 2, name: 'Kolya'}
        ],
        messagesData: [
            {id: 1, text: 'Message 1'},
            {id: 2, text: 'Message 2'}
        ],
        newMessageBody: ''
    },
    _callSubscriber() {
        console.log('State changed')
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profileData.newPostData,
                likesCount: 0,
                dislikesCount: 0
            }

            this._state.profileData.postsData.push(newPost)
            this._state.profileData.newPostData = ''
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profileData.newPostData = action.newText
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.newMessageBody = action.body
            this._callSubscriber(this._state)
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.newMessageBody
            let messagesData = this._state.messagesData
            let currentId = messagesData[messagesData.length - 1]['id']
            let newId = currentId + 1
            messagesData.push({id: newId, text: body})

            this._state.newMessageBody = ''
            this._callSubscriber(this._state)
        }
    }
}

export const addPostActionCreator = () => ({
    type: ADD_POST
})

export const updateNewPostActionCreator = (newText) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: newText
})

export const sendMessageCreator = () => ({
    type: SEND_MESSAGE
})

export const updateNewMessageBodyCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body
})

export default store

window.store = store
