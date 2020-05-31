import {reduxForm} from 'redux-form'
import PostsForm from './PostsForm'

const PostsReduxForm = reduxForm({form: 'postsForm'})(PostsForm)

export default PostsReduxForm
