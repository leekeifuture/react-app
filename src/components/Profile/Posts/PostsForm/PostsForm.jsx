import React from 'react'
import {Field} from 'redux-form'
import {
    maxLengthCreator,
    required
} from '../../../../utils/validators/validators'
import {Textarea} from '../../../common/FormsControls/FormsControls'

const maxLength10 = maxLengthCreator(10)

const PostsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder="Write post text"
                       component={Textarea}
                       name="newPostText"
                       validate={[required, maxLength10]}
                />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

export default PostsForm
