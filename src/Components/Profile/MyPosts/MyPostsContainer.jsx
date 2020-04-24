import {connect} from 'react-redux'
import {
    addPostActionCreator,
    updateNewPostActionCreator
} from '../../../redux/profile-reducer'
import MyPostsComponent from './MyPosts'

let mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData,
        newPostData: state.profilePage.newPostData
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        updateNewPostData: (newText) => {
            let action = updateNewPostActionCreator(newText)
            dispatch(action)
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPostsComponent)

export default MyPostsContainer
