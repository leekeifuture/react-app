import React from 'react'
import s from './Dialogs.module.css'
import DialogComponent from './DialogItem/DialogItem'
import MessageComponent from './Message/Message'
import {
    sendMessageCreator,
    updateNewMessageBodyCreator
} from "../../redux/state";

const DialogsComponent = (props) => {
    let state = props.store.getState();

    let dialogsElements = state.dialogsData.map(dialog =>
        <DialogComponent id={dialog.id} name={dialog.name} />
    )

    let messagesElements = state.messagesData.map(message =>
        <MessageComponent id={message.id} text={message.text} />
    )

    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }

    let onNewMessageChange = (event) => {
        let body = event.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body))
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
                        <input type="button" value="Add post"
                               onClick={onSendMessageClick} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DialogsComponent
