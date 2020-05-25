import React from 'react'
import Message from './Message/Message'
import s from './Message/Message.module.css'

const Messages = (props) => {
    return (<div className={s.messages}>
        <div>
            {props.messagesData.map(message =>
                <Message id={message.id}
                         text={message.text}
                         key={message.id}
                />
            )}
        </div>
        <div>
            <div>
                <textarea placeholder="Enter new message"
                          value={props.newMessageBody}
                          onChange={props.updateNewMessageBody} />
            </div>
            <div>
                <input type="button" value="Send message"
                       onClick={props.sendMessage} />
            </div>
        </div>
    </div>)
}

export default Messages
