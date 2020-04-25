import React from 'react'
import defaultPhoto from '../../../../assets/images/avatar.png'
import s from './Post.module.css'

const PostComponent = (props) => {
    let id = props.id
    let text = props.text
    let likesCount = props.likesCount
    let dislikesCount = props.dislikesCount

    return (
        <div className={s.item}>
            <img className={s.userPhoto}
                 src={defaultPhoto}
                 alt="Avatar" />
            <span className={s.message}>{id} | {text}</span>
            <div>
                <span className={s.like}>
                    <span>Like</span>
                    <span>({likesCount})</span>
                </span>
                &nbsp;
                <span className={s.dislike}>
                    <span>Dislike</span>
                    <span>({dislikesCount})</span>
                </span>
            </div>
        </div>
    )
}

export default PostComponent
