import React from 'react'
import s from './Message.module.css'

const MessageComponent = (props) => {
    let text = props.text

    return (
        <div className={s.dialog}>{text}</div>
    )
}

export default MessageComponent
