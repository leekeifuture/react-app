import React from 'react'
import {Field} from 'redux-form'

const PostsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder="Write post text"
                       component="textarea"
                       name="newPostText"
                />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

export default PostsForm
