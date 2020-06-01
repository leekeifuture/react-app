import React from 'react'
import {Field} from 'redux-form'

const MessagesForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder="Enter new message"
                       component="textarea"
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
