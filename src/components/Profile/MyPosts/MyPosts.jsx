import React from 'react'
import PostComponent from './Post/Post'
import s from './MyPosts.module.css'
import {
    addPostActionCreator,
    updateNewPostActionCreator
} from '../../../redux/state'

const PostsComponent = (props) => {
    let postsElements = props.postsData.map(post =>
        <PostComponent
            message={post.message}
            likesCount={post.likesCount}
            dislikesCount={post.dislikesCount} />
    )

    let newPostElement = React.createRef()

    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    let onPostChange = () => {
        let newText = newPostElement.current.value
        let action = updateNewPostActionCreator(newText)
        props.dispatch(action)
    }

    return (
        <div className={s.postsBlock}>
            <h3>Posts:</h3>
            <div>
                <textarea value={props.newPostData}
                          ref={newPostElement}
                          onChange={onPostChange} />
                &nbsp;
                <input type="button" value="Add post"
                       onClick={addPost} />
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default PostsComponent
