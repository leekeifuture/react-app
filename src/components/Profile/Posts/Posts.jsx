import React from 'react'
import PostComponent from './Post/Post'
import s from './Posts.module.css'

const PostsComponent = (props) => {
    let postsElements = props.postsData.map(post =>
        <PostComponent
            id={post.id}
            message={post.message}
            likesCount={post.likesCount}
            dislikesCount={post.dislikesCount} />
    )

    let newPostElement = React.createRef()

    function addPost() {
        let text = newPostElement.current.value
        props.addPost(text)
        props.updateNewPostText('')
    }
    function onPostChange() {
        let text = newPostElement.current.value
        props.updateNewPostText(text)
    }

    return (
        <div className={s.postsBlock}>
            <h3>Posts:</h3>
            <div>
                <input type="text" ref={newPostElement}
                       onChange={onPostChange} />
                &nbsp;
                <input type="button" value="Add"
                       onClick={addPost} />
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default PostsComponent
