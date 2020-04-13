import React from 'react'
import {connect} from 'react-redux'
import {
    addPostActionCreator,
    updateNewPostActionCreator
} from '../../../redux/profile-reducer'
import MyPostsComponent from './MyPosts'

let mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        updateNewPostText: (newText) => {
            let action = updateNewPostActionCreator(newText)
            dispatch(action)
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPostsComponent)

export default MyPostsContainer
