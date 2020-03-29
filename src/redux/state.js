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
        ]
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
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: postMessage,
                likesCount: 0,
                dislikesCount: 0
            }

            this._state.profileData.postsData.push(newPost)
            this._callSubscriber(this._state)
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profileData.newPostData = action.newText
            this._callSubscriber(this._state)
        }
    }
}

export default store

window.store = store
