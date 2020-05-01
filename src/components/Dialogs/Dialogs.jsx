import React from 'react'
import DialogComponent from './DialogItem/DialogItem'
import s from './Dialogs.module.css'
import MessageComponent from './Message/Message'

const DialogsComponent = (props) => {
    let state = props.dialogsPage

    let dialogsElements = state.dialogsData.map(dialog =>
        <DialogComponent id={dialog.id} name={dialog.name} key={dialog.id} />
    )

    let messagesElements = state.messagesData.map(message =>
        <MessageComponent id={message.id} text={message.text}
                          key={message.id} />
    )

    let newMessageBody = state.newMessageBody

    let onSendMessageClick = () => {
        props.sendMessage()
    }

    let onNewMessageChange = (event) => {
        let body = event.target.value
        props.updateNewMessageBody(body)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                        <textarea placeholder="Enter new message"
                                  value={newMessageBody}
                                  onChange={onNewMessageChange} />
                    </div>
                    <div>
                        <input type="button" value="Send message"
                               onClick={onSendMessageClick} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DialogsComponent
