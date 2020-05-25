import {connect} from 'react-redux'
import {addPost, setNewPost} from '../../../redux/profile-reducer'
import MyPostsComponent from './MyPosts'

const mapStateToProps = (state) => {
    return {
        postsData: state.profileReducer.postsData,
        newPostData: state.profileReducer.newPostData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPost())
        },
        setNewPostData: (newText) => {
            const action = setNewPost(newText)
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyPostsComponent)
