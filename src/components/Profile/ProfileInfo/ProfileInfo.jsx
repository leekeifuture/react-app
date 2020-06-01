import React from 'react'
import defaultPhoto from '../../../assets/images/defaultPhoto.png'
import Preloader from '../../common/Preloader/Preloader'
import s from './ProfileInfo.module.css'
import ProfileStatus from './ProfileStatus/ProfileStatus'

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    const getUserPhoto = (user) => {
        return user.photos.large != null
            ? user.photos.large
            : defaultPhoto
    }

    return (
        <div className={s.descriptionBlock}>
            <img src={getUserPhoto(props.profile)} alt="User" />
            <ProfileStatus status={props.status}
                           updateStatus={props.updateStatus} />
            <div>{props.profile.lookingForAJobDescription}</div>
        </div>
    )
}

export default ProfileInfo
