import React from 'react'
import MyPostsContainer from './MyPosts/MyPostsContainer'
import ProfileInfoComponent from './ProfileInfo/ProfileInfo'

const ProfileComponent = () => {
    return (
        <div>
            <ProfileInfoComponent />
            <MyPostsContainer />
        </div>
    )
}

export default ProfileComponent
