import React from 'react'
import defaultPhoto from '../../assets/images/avatar.png'
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

    function getFollowingState(user) {
        return <> {
            user.followed
                ? <button onClick={() => {
                    props.unfollow(user.id)
                }}>Unfollow</button>
                : <button onClick={() => {
                    props.follow(user.id)
                }}>Follow</button>
        } </>
    }

    return (
        <div>
            <div>
                {pagesNumbers.map(pageNumber => {
                    return (
                        <input
                            className={currentPage === pageNumber && s.selectedPage}
                            type="button"
                            value={pageNumber}
                            onClick={(event) => {
                                props.onPageChanged(pageNumber)
                            }} />
                    )
                })}
            </div>

            {props.users.map(user => {
                return (
                    <div key={user.id}>
                            <span>
                                <div>
                                    <img className={s.userPhoto}
                                         src={getUserPhoto(user)}
                                         alt="Avatar" />
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
        </div>
    )
}

export default Users
