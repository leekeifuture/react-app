import profileReducer from './profile-reducer'
import dialogsReducer from './dialogs-reducer'
import sidebarReducer from './sidebar-reducer'

let store = {
    _state: {
        profilePage: {
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
        dialogsPage: {
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
    },
    _callSubscriber() {
        console.log('State changed')
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber(this._state)
    }
}

export default store

window.store = store
