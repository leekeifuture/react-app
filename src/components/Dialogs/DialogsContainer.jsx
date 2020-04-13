import React from 'react'
import {connect} from 'react-redux'
import {
    sendMessageActionCreator,
    updateNewMessageBodyActionCreator
} from '../../redux/dialogs-reducer'
import DialogsComponent from './Dialogs'

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: () => {
            dispatch(sendMessageActionCreator())
        },
        sendMessage: (body) => {
            let action = updateNewMessageBodyActionCreator(body)
            dispatch(action)
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(DialogsComponent)

export default DialogsContainer
