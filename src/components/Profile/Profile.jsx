import React from 'react'
import PostsComponent from './MyPosts/MyPosts'
import ProfileInfoComponent from './ProfileInfo/ProfileInfo'

const ProfileComponent = (props) => {
    return (
        <div>
            <ProfileInfoComponent />
            <PostsComponent
                postsData={props.profileData.postsData}
                newPostData={props.profileData.newPostData}
                dispatch={props.dispatch} />
        </div>
    )
}

export default ProfileComponent
