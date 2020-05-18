import React from 'react'
import DialogComponent from './DialogItem/DialogItem'
import s from './Dialogs.module.css'
import MessageComponent from './Message/Message'

const Dialogs = (props) => {
    const onSendMessageClick = () => {
        props.sendMessage()
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {props.dialogsPage.dialogsData.map(dialog =>
                    <DialogComponent id={dialog.id}
                                     name={dialog.name}
                                     key={dialog.id}
                    />
                )}
            </div>
            <div className={s.messages}>
                <div>
                    {props.dialogsPage.messagesData.map(message =>
                        <MessageComponent id={message.id}
                                          text={message.text}
                                          key={message.id}
                        />
                    )}
                </div>
                <div>
                    <div>
                        <textarea placeholder="Enter new message"
                                  value={props.dialogsPage.newMessageBody}
                                  onChange={event =>
                                      props.updateNewMessageBody(event.target.value)} />
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

export default Dialogs
