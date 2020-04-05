import React from 'react'
import {
    addPostActionCreator,
    updateNewPostActionCreator
} from '../../../redux/profile-reducer'
import MyPostsComponent from './MyPosts'

const MyPostsContainer = (props) => {
    let state = props.store.getState()

    let addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }

    let onPostChange = (newText) => {
        let action = updateNewPostActionCreator(newText)
        props.store.dispatch(action)
    }

    return (
        <MyPostsComponent updateNewPostText={onPostChange}
                          addPost={addPost}
                          postsData={state.profilePage.postsData}
                          newPostText={state.profilePage.newPostText} />
    )
}

export default MyPostsContainer
