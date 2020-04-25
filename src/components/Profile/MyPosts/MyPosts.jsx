import React from 'react'
import s from './MyPosts.module.css'
import PostComponent from './Post/Post'

const MyPostsComponent = (props) => {
    let postsElements = props.postsData.map(post =>
        <PostComponent
            id={post.id}
            text={post.text}
            likesCount={post.likesCount}
            dislikesCount={post.dislikesCount}
            key={post.id}/>
    )

    let newPostElement = React.createRef()

    let onAddPost = () => {
        props.addPost()
    }

    let onPostChange = () => {
        let newText = newPostElement.current.value
        props.updateNewPostData(newText)
    }

    return (
        <div className={s.postsBlock}>
            <h3>Posts:</h3>
            <div>
                <div>
                    <textarea value={props.newPostData}
                              ref={newPostElement}
                              onChange={onPostChange} />
                </div>
                <div>
                    <input type="button" value="Add post"
                           onClick={onAddPost} />
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPostsComponent
