import React from 'react'
import defaultPhoto from '../../../../assets/images/defaultPhoto.png'
import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.item}>
            <img className={s.userPhoto}
                 src={defaultPhoto}
                 alt="User" />
            <span className={s.message}>{props.id} | {props.text}</span>
            <div>
                <span className={s.like}>
                    <span>Like</span>
                    <span>({props.likesCount})</span>
                </span>
                &nbsp;
                <span className={s.dislike}>
                    <span>Dislike</span>
                    <span>({props.dislikesCount})</span>
                </span>
            </div>
        </div>
    )
}

export default Post
