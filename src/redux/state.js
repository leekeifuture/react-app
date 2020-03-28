let rerenderEntireTree = () => {

}

let state = {
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
}

export const addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0,
        dislikesCount: 0
    }

    state.profileData.postsData.push(newPost)
    rerenderEntireTree()
}

export const updateNewPostText = (newText) => {
    state.profileData.newPostData = newText
    rerenderEntireTree()
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer
}

export default state
