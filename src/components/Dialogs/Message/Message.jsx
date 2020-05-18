import React from 'react'
import s from './Message.module.css'

const MessageComponent = (props) => {
    return (
        <div className={s.dialog}>{props.text}</div>
    )
}

export default MessageComponent
