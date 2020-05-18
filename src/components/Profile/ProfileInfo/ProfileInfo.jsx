import React from 'react'
import defaultPhoto from '../../../assets/images/defaultPhoto.png'
import Preloader from '../../common/Preloader/Preloader'
import s from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    const getUserPhoto = (user) => {
        return user.photos.large != null
            ? user.photos.large
            : defaultPhoto
    }

    return (<>
        <div>
            <img src="https://i.imgur.com/3EWqPHM.png" alt="Beach" />
        </div>
        <div className={s.descriptionBlock}>
            <img src={getUserPhoto(props.profile)} alt="User" />
            <div>{props.profile.lookingForAJobDescription}</div>
        </div>
    </>)
}

export default ProfileInfo
