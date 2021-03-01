import { getAuthUserData } from "./auth-reducer";

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS"

let initialState = {
    initialized: false
}

export type StateAuthType = {
    initialized: boolean
}

type AuthUserType = {
    type: typeof INITIALIZED_SUCCESS
}

const appReducer = (state: StateAuthType = initialState, action: AuthUserType): StateAuthType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS: {
            return {
                ...state,
                initialized: true
            }
        }
        default:
            return state;
    }
}

export const initializedSuccess = (): AuthUserType => ({type: INITIALIZED_SUCCESS});

export const initializeApp = () => (dispatch: any) => {
    let promise = dispatch(getAuthUserData())
    promise.then(() => {
        dispatch(initializedSuccess())
    })
}

export default appReducer;