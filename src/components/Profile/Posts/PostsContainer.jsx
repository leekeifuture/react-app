import {connect} from 'react-redux'
import {addPost} from '../../../redux/profile-reducer'
import Posts from './Posts'

const mapStateToProps = (state) => ({
    postsData: state.profileReducer.postsData
})

const mapDispatchToProps = {addPost}

export default connect(mapStateToProps, mapDispatchToProps)(Posts)
