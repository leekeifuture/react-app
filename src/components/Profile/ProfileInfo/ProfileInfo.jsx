import React from 'react'
import s from './ProfileInfo.module.css'

const ProfileInfoComponent = () => {
    return (
        <div>
            <div>
                <img
                    src="https://q-cf.bstatic.com/images/hotel/max1024x768/220/220680927.jpg"
                    alt="Beach" />
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfoComponent
