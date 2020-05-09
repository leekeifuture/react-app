import React from 'react'
import {connect} from 'react-redux'
import {socialNetworkApi} from '../../api/socialNetworkApi'
import {
    addToFollowingUsers,
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    unfollow
} from '../../redux/users-reducer'
import Preloader from '../common/Preloader/Preloader'
import Users from './Users'

class UsersContainer extends React.Component {
    onPageChanged = (pageNumber) => {
        this.props.toggleIsFetching(true)

        this.props.setCurrentPage(pageNumber)

        socialNetworkApi.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                    this.props.setUsers(data.items)

                    this.props.toggleIsFetching(false)
                }, error => {
                    console.error(error)
                }
            )
    }

    componentDidMount() {
        this.props.toggleIsFetching(true)

        socialNetworkApi.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                    this.props.setUsers(data.items)
                    this.props.setTotalUsersCount(data.totalCount)

                    this.props.toggleIsFetching(false)
                }, error => {
                    console.error(error)
                }
            )
    }

    render() {
        return (<>
            {this.props.isFetching
                ? <Preloader />
                : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   users={this.props.users}
                   followingUsers={this.props.followingUsers}
                   addToFollowingUsers={this.props.addToFollowingUsers}
            />
        </>)
    }
}

let mapStateToProps = (state) => ({
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingUsers: state.usersPage.followingUsers
})

let mapDispatchToProps = {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
    addToFollowingUsers
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
