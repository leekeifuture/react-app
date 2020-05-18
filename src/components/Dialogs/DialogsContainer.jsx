import React from 'react'
import {connect} from 'react-redux'
import {withAuthRedirect} from '../../hoc/withAuthRedirect'
import {
    sendMessageActionCreator,
    updateNewMessageBodyActionCreator
} from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs'

const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageActionCreator())
        },
        updateNewMessageBody: (body) => {
            const action = updateNewMessageBodyActionCreator(body)
            dispatch(action)
        }
    }
}

const DialogsRedirectComponent = withAuthRedirect(Dialogs)

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(DialogsRedirectComponent)

export default DialogsContainer
