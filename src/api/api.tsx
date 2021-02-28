import axios from "axios";
import {UsersItemsType} from "../redux/users-reducer";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "9e4686de-4379-4e75-89bc-e99abdd3cdc3"
    }
})

export const userAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance
            .get<{ items: Array<UsersItemsType>, totalCount: number }>(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    followUser(id: number) {
        return instance
            .post(`follow/${id}`)
            .then(response => response.data)
    },
    unfollowUser(id: number) {
        return instance
            .delete(`follow/${id}`)
            .then(response => response.data)
    },
    getProfile(userId: string) {
        console.warn('Obsolete method. Please use profileAPI object.')
        return profileAPI.getProfile(userId)
    }
}

export const profileAPI = {
    getProfile(userId: string) {
        return instance
            .get<{ items: Array<UsersItemsType>}>(`profile/${userId}`)
    },
    getStatus(userId: string) {
        return instance
            .get<{ items: Array<UsersItemsType>}>(`profile/status/${userId}`)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status`, {status})
    }
}

export const authAPI = {
    me() {
        return instance
            .get(`auth/me`)
            .then((response) => response.data);
    },
    login(email: string, password: string, rememberMe: boolean = false) {
        return instance
            .post(`auth/login`, {email, password, rememberMe})
    },
    logout() {
        return instance
            .delete(`auth/login`)
    }
}