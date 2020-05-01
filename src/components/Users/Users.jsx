import React from 'react'
import {NavLink} from 'react-router-dom'
import {socialNetworkApi} from '../../api/socialNetworkApi'
import defaultPhoto from '../../assets/images/defaultPhoto.png'
import s from './Users.module.css'

let Users = (props) => {
    let currentPage = props.currentPage

    let totalUsersCount = props.totalUsersCount
    let pageSize = props.pageSize
    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    let pagesNumbers = Array(pagesCount).fill()
        .map((_, number) => number + 1)

    let getUserPhoto = (user) => {
        return user.photos.small != null
            ? user.photos.small
            : defaultPhoto
    }

    let getInputClassName = (pageNumber) => {
        return currentPage === pageNumber
            ? s.selectedPage
            : null
    }

    let followUser = (userId) => {
        socialNetworkApi.followUser(userId)
            .then(data => {
                    if (!data.resultCode) {
                        props.follow(userId)
                    }
                }, error => {
                    console.error(error)
                }
            )
    }

    let unfollowUser = (userId) => {
        socialNetworkApi.unfollowUser(userId)
            .then(data => {
                    if (!data.resultCode) {
                        props.unfollow(userId)
                    }
                }, error => {
                    console.error(error)
                }
            )
    }

    let getFollowingState = (user) => {
        return (<> {
            user.followed
                ? <button onClick={() => {
                    unfollowUser(user.id)
                }}>Unfollow</button>
                : <button onClick={() => {
                    followUser(user.id)
                }}>Follow</button>
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
                        onClick={(event) => {
                            props.onPageChanged(pageNumber)
                        }}
                        key={pageNumber} />
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
                            {getFollowingState(user)}
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
