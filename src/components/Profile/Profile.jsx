import React from 'react'
import MyPostsContainer from './MyPosts/MyPostsContainer'
import ProfileInfoComponent from './ProfileInfo/ProfileInfo'

const ProfileComponent = (props) => {
    return (
        <div>
            <ProfileInfoComponent />
            <MyPostsContainer store={props.store} />
        </div>
    )
}

export default ProfileComponent
