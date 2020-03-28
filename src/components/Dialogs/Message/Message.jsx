import React from 'react'
import s from './Message.module.css'

const MessageComponent = (props) => {
    return (
        <div className={s.messages}>
            <div className={s.message}>
                {props.text}
            </div>
        </div>
    )
}

export default MessageComponent
