import React from 'react'
import {
    sendMessageCreator,
    updateNewMessageBodyCreator
} from '../../redux/dialogs-reducer'
import DialogsComponent from './Dialogs'

const DialogsContainer = (props) => {
    let state = props.store.getState().dialogsPage

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }

    let onNewMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }

    return (
        <DialogsComponent updateNewMessageBody={onNewMessageChange}
                          sendMessage={onSendMessageClick}
                          dialogsPage={state} />
    )
}

export default DialogsContainer
