import React from 'react'
import s from './Dialogs.module.css'
import DialogComponent from './Dialog/Dialog'
import MessageComponent from './Message/Message'

const DialogsComponent = (props) => {
    let dialogsElements = props.dialogsData.map(dialog =>
        <DialogComponent id={dialog.id} name={dialog.name} />
    )

    let messagesElements = props.messagesData.map(message =>
        <MessageComponent id={message.id} text={message.text} />
    )

    return (
        <div className={s.dialogs}>
            {dialogsElements}
            {messagesElements}
        </div>
    )
}

export default DialogsComponent
