import React from 'react'
import s from './Dialogs.module.css'
import DialogComponent from './DialogItem/DialogItem'
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
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default DialogsComponent
