import React from 'react'
import {connect} from 'react-redux'
import {compose} from 'redux'
import {withAuthRedirect} from '../../hoc/withAuthRedirect'
import {sendMessage, updateNewMessageBody} from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs'

class DialogsContainer extends React.Component {
    render() {
        return (
            <Dialogs dialogsData={this.props.dialogsData} />
        )
    }
}

const mapStateToProps = (state) => ({
    dialogsData: state.dialogsReducer.dialogsData
})

const mapDispatchToProps = {
    sendMessage,
    updateNewMessageBody
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(DialogsContainer)
