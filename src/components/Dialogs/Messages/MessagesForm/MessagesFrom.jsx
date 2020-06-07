import React from 'react'
import {Field} from 'redux-form'
import {
    maxLengthCreator,
    required
} from '../../../../utils/validators/validators'
import {Textarea} from '../../../common/FormsControls/FormsControls'

const maxLength100 = maxLengthCreator(100)

const MessagesForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder="Enter new message"
                       component={Textarea}
                       validate={[required, maxLength100]}
                       name="newMessageBody"
                />
            </div>
            <div>
                <button>Send message</button>
            </div>
        </form>
    )
}

export default MessagesForm
