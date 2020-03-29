import React from 'react'
import s from './Message.module.css'

const MessageComponent = (props) => {
    let message = props.message

    return (
        <div className={s.dialog}>{message}</div>
    )
}

export default MessageComponent
