import React from 'react'
import Message from './Message/Message'
import s from './Message/Message.module.css'
import MessagesReduxForm from './MessagesForm/MessagesReduxForm'

const Messages = (props) => {
    return (
        <div className={s.messages}>
            <div>
                {props.messagesData.map(message =>
                    <Message id={message.id}
                             text={message.text}
                             key={message.id}
                    />
                )}
            </div>
            <MessagesReduxForm
                onSubmit={formData => props.sendMessage(formData.newMessageBody)} />
        </div>
    )
}

export default Messages
