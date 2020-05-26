import React from 'react'
import {connect} from 'react-redux'
import {sendMessage} from '../../../redux/dialogs-reducer'
import Messages from './Messages'

class MessagesContainer extends React.Component {
    render() {
        return (
            <Messages messagesData={this.props.messagesData}
                      sendMessage={this.props.sendMessage}
            />
        )
    }
}

const mapStateToProps = (state) => ({
    messagesData: state.dialogsReducer.messagesData
})

const mapDispatchToProps = {
    sendMessage
}

export default connect(mapStateToProps, mapDispatchToProps)(MessagesContainer)
