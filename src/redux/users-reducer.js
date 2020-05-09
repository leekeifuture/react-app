const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const SET_FOLLOWING_USERS = 'SET_FOLLOWING_USERS'

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingUsers: []
}

const usersReducer = (state = initialState, action) => {
    if (action.type === FOLLOW) {
        return {
            ...state,
            users: state.users.map(user => {
                if (user.id === action.userId) {
                    return {...user, followed: true}
                }
                return user
            })
        }
    } else if (action.type === UNFOLLOW) {
        return {
            ...state,
            users: state.users.map(user => {
                if (user.id === action.userId) {
                    return {...user, followed: false}
                }
                return user
            })
        }
    } else if (action.type === SET_USERS) {
        return {
            ...state,
            users: [...action.users]
        }
    } else if (action.type === SET_CURRENT_PAGE) {
        return {
            ...state,
            currentPage: action.pageNumber
        }
    } else if (action.type === SET_TOTAL_USERS_COUNT) {
        return {
            ...state,
            totalUsersCount: action.totalCount
        }
    } else if (action.type === TOGGLE_IS_FETCHING) {
        return {
            ...state,
            isFetching: action.isFetching
        }
    } else if (action.type === SET_FOLLOWING_USERS) {
        return {
            ...state,
            followingUsers: action.isFetching
                ? [...state.followingUsers, action.userId]
                : state.followingUsers.filter(userId => userId !== action.userId)
        }
    }

    return state
}

export const follow = (userId) => ({type: FOLLOW, userId})
export const unfollow = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (pageNumber) => ({
    type: SET_CURRENT_PAGE,
    pageNumber
})
export const setTotalUsersCount = (totalCount) => ({
    type: SET_TOTAL_USERS_COUNT,
    totalCount
})
export const toggleIsFetching = (isFetching) => ({
    type: TOGGLE_IS_FETCHING,
    isFetching
})
export const addToFollowingUsers = (isFetching, userId) => ({
    type: SET_FOLLOWING_USERS,
    isFetching,
    userId
})

export default usersReducer
