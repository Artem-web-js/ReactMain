import axios from "axios";
import {UsersItemsType} from "../redux/users-reducer";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
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
    getProfile(id: string) {
        return instance
            .get<{ items: Array<UsersItemsType>, totalCount: number }>(`profile/${id}`)
    }
}

export const authAPI = {
    me() {
        return instance
            .get(`auth/me`)
            .then((response) => response.data);
    }
}