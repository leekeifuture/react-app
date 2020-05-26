import {reduxForm} from 'redux-form'
import MessagesForm from './MessagesFrom'

const MessagesReduxForm = reduxForm({form: 'messagesForm'})(MessagesForm)

export default MessagesReduxForm
