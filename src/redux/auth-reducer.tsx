import {authAPI} from "../api/api";

const SET_USER_DATA = "SET_USER_DATA"

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

export type StateAuthType = {
    userId: null | number
    email: null | string
    login: null | string
    isAuth: boolean
}

type AuthUserType = {
    type: typeof SET_USER_DATA
    payload: StateAuthType
}

const authReducer = (state: StateAuthType = initialState, action: AuthUserType): StateAuthType => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.payload
            }
        }
        default:
            return state;
    }
}

export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean): AuthUserType => ({
    type: SET_USER_DATA,
    payload: {userId, email, login, isAuth}
});

export const getAuthUserData = () => {
    return (dispatch: any) => {
        authAPI.me().then((data: any) => {
            if (data.resultCode === 0) {
                let {id, login, email} = data.data
                dispatch(setAuthUserData(id, email, login, true))
            }
        });
    }
}

export const login = (email: string, password: string, rememberMe: boolean) => {
    return (dispatch: any) => {
        authAPI.login(email, password, rememberMe).then((data: any) => {
            if (data.resultCode === 0) {
                dispatch(getAuthUserData())
            }
        });
    }
}

export const logout = () => {
    return (dispatch: any) => {
        authAPI.logout().then((data: any) => {
            if (data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        });
    }
}

export default authReducer;