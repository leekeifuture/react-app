import * as axios from 'axios'

const baseUrl = ''

const axiosInstance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0'
})

export const socialNetworkApi = {
    getUsers(page = 1, count = 10) {
        return axiosInstance.get('/users', {params: {page, count}})
            .then(response => response.data)
    }
}
