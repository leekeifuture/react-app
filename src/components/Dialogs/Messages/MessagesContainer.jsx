import React from 'react'
import {connect} from 'react-redux'
import {compose} from 'redux'
import {withAuthRedirect} from '../../../hoc/withAuthRedirect'
import {sendMessage, updateNewMessageBody} from '../../../redux/dialogs-reducer'
import Messages from './Messages'

class MessagesContainer extends React.Component {
    render() {
        return (
            <Messages messagesData={this.props.messagesData}
                      newMessageBody={this.props.newMessageBody}
                      sendMessage={this.props.sendMessage}
                      updateNewMessageBody={this.props.updateNewMessageBody} />
        )
    }
}

const mapStateToProps = (state) => ({
    messagesData: state.dialogsReducer.messagesData,
    newMessageBody: state.dialogsReducer.newMessageBody
})

const mapDispatchToProps = {
    sendMessage,
    updateNewMessageBody
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(MessagesContainer)
