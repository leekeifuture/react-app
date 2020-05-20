import * as axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    withCredentials: true,
    headers: {
        'API-KEY': process.env.REACT_APP_API_KEY
    }
})

export const socialNetworkApi = {
    authMe() {
        return axiosInstance.get('/auth/me')
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
        return axiosInstance.post(`/follow/${userId}`)
            .then(response => response.data)
    },
    unfollowUser(userId) {
        return axiosInstance.delete(`/follow/${userId}`)
            .then(response => response.data)
    },
    getStatus(userId) {
        return axiosInstance.get(`/profile/status/${userId}`)
            .then(response => response.data)
    },
    updateStatus(status) {
        return axiosInstance.put(`/profile/status`, {status})
            .then(response => response.data)
    }
}
