import * as axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0'
})

export const socialNetworkApi = {
    authMe() {
        return axiosInstance.get('/auth/me', {withCredentials: true})
            .then(response => response.data)
    },
    getUsers(page = 1, count = 10) {
        return axiosInstance.get('/users', {params: {page, count}})
            .then(response => response.data)
    },
    getProfileData(userId = 2) {
        return axiosInstance.get(`/profile/${userId}`)
            .then(response => response.data)
    },
    followUser(userId) {
        return axiosInstance.post(`/follow/${userId}`, {}, {
            headers: {'API-KEY': ''}
        }).then(response => response.data)
    },
    unfollowUser(userId) {
        return axiosInstance.post(`/unfollow/${userId}`, {}, {
            headers: {'API-KEY': ''}
        }).then(response => response.data)
    }
}
