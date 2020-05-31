import React from 'react'
import PostComponent from './Post/Post'
import s from './Posts.module.css'
import PostsReduxForm from './PostsForm/PostsReduxForm'

const Posts = (props) => {
    return (
        <div className={s.postsBlock}>
            <h3>Posts:</h3>
            <PostsReduxForm onSubmit={props.addPost} />
            <div className={s.posts}>
                {props.postsData.map(post =>
                    <PostComponent
                        id={post.id}
                        text={post.text}
                        likesCount={post.likesCount}
                        dislikesCount={post.dislikesCount}
                        key={post.id}
                    />
                )}
            </div>
        </div>
    )
}

export default Posts
