import React from 'react'
import {NavLink} from 'react-router-dom'
import defaultPhoto from '../../assets/images/defaultPhoto.png'
import s from './Users.module.css'

const Users = (props) => {
    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    const pagesNumbers = Array(pagesCount).fill()
        .map((_, number) => number + 1)

    const getUserPhoto = (user) => {
        return user.photos.small != null
            ? user.photos.small
            : defaultPhoto
    }

    const getInputClassName = (pageNumber) => {
        return props.currentPage === pageNumber
            ? s.selectedPage
            : null
    }

    const getFollowingButton = (user) => {
        return (<> {
            user.followed
                ? <button
                    disabled={props.followingUsers.some(userId => userId === user.id)}
                    onClick={event => props.unfollowUser(user.id)}>
                    Unfollow
                </button>
                : <button
                    disabled={props.followingUsers.some(userId => userId === user.id)}
                    onClick={event => props.followUser(user.id)}>
                    Follow
                </button>
        } </>)
    }

    return (<>
        <div>
            {pagesNumbers.map(pageNumber => {
                return (
                    <input
                        className={getInputClassName(pageNumber)}
                        type="button"
                        value={pageNumber}
                        onClick={event => props.onPageChanged(pageNumber)}
                        key={pageNumber}
                    />
                )
            })}
        </div>

        {props.users.map(user => {
            return (
                <div key={user.id}>
                    <span>
                        <div>
                            <NavLink to={`/profile/${user.id}`}>
                                <img className={s.userPhoto}
                                     src={getUserPhoto(user)}
                                     alt="User" />
                            </NavLink>
                        </div>
                        <div>
                            {getFollowingButton(user)}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                        </span>
                        <span>
                            <div>{'user.location.country'}</div>
                            <div>{'user.location.city'}</div>
                        </span>
                    </span>
                </div>
            )
        })}
    </>)
}

export default Users
