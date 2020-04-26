import * as axios from 'axios'
import React from 'react'
import {connect} from 'react-redux'
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    toggleIsFetching,
    unfollowAC
} from '../../redux/users-reducer'
import Preloader from '../common/Preloader/Preloader';
import Users from './Users'

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true)

        let baseUrl = 'https://social-network.samuraijs.com/api/1.0/'
        axios.get(baseUrl + 'users', {
            params: {
                page: this.props.currentPage,
                count: this.props.pageSize
            }
        }).then(
            (response) => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)

                this.props.toggleIsFetching(false)
            }, (error) => {
                console.error(error)
            }
        )
    }

    onPageChanged = (pageNumber) => {
        this.props.toggleIsFetching(true)

        this.props.setCurrentPage(pageNumber)

        let baseUrl = 'https://social-network.samuraijs.com/api/1.0/'
        axios.get(baseUrl + 'users', {
            params: {
                page: pageNumber,
                count: this.props.pageSize
            }
        }).then(
            (response) => {
                this.props.setUsers(response.data.items)

                this.props.toggleIsFetching(false)
            }, (error) => {
                console.error(error)
            }
        )
    }

    render() {
        return (<>
            {this.props.isFetching
                ? <Preloader />
                : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                users={this.props.users} />
        </>)
    }
}

let mapStateToProps = (state) => {
    let usersPage = state.usersPage

    return {
        users: usersPage.users,
        pageSize: usersPage.pageSize,
        totalUsersCount: usersPage.totalUsersCount,
        currentPage: usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount))
        },
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetching(isFetching))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
