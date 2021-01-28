const SET_USER_DATA = "SET_USER_DATA"

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

type StateType = typeof initialState

type AuthUserType = {
    type: typeof SET_USER_DATA
    data: {
        userId: number
        email: string
        login: string
    }
}

const authReducer = (state: StateType = initialState, action: AuthUserType) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        }
        default:
            return state;
    }
}

export const setAuthUserData = (userId: number, email: string, login: string): AuthUserType => ({type: SET_USER_DATA, data: {userId, email, login}});

export default authReducer;