import {PostsType} from "../components/Profile/Profile";
import {DialogsItemProps} from "../components/Dialogs/DialogItem/DialogItem";
import {userAPI, profileAPI} from "../api/api";
import {AppStateType} from "./redux-store";
import {ThunkAction} from "redux-thunk";

export type ProfilePageType = {
    posts: Array<PostsType>
    dialogsData: Array<DialogsItemProps>
    profile: null
    status: string
    newPost: string
    photos: any
}

type ActionsType = ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setStatus>
    | ReturnType<typeof deletePost>
    | ReturnType<typeof savePhotoSuccess>

let initialState: ProfilePageType = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 15},
        {id: 2, message: "It is my first post!", likesCount: 20}
    ],
    dialogsData: [
        {
            id: 1,
            name: "Artem",
            src: "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
        },
        {
            id: 2,
            name: "Maks",
            src: "https://iso.500px.com/wp-content/uploads/2016/11/stock-photo-159533631-1500x1000.jpg"
        },
        {
            id: 3,
            name: "Sergey",
            src: "https://picjumbo.com/wp-content/uploads/alone-with-his-thoughts-1080x720.jpg"
        },
        {
            id: 4,
            name: "Alina",
            src: "https://www.pinkvilla.com/files/styles/gallery-section/public/mouni_roys_these_stunning_photos_will_leave_you_spellbound_check_it_out.jpg?itok=h_J5SVj3"
        },
        {
            id: 5,
            name: "Sabina",
            src: "https://i2.wp.com/www.alphr.com/wp-content/uploads/2018/04/how_to_back_up_photos_on_google_photos.jpg?resize=563%2C563&ssl=1"
        },
        {
            id: 6,
            name: "Veronika",
            src: "https://i.pinimg.com/originals/6d/c8/7a/6dc87ad6f004abcdfee40c25299b9502.jpg"
        }
    ],
    profile: null,
    status: '',
    newPost: '',
    photos: null
};

export const profileReducer = (state: ProfilePageType = initialState, action: ActionsType) => {
    switch (action.type) {
        case "ADD_POST":
            const newPost: PostsType = {
                id: 5,
                message: action.newPost,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost]
            }
        case "SET_USER_PROFILE":
            return {
                ...state,
                profile: action.profile
            }
        case "SET_STATUS":
            return {
                ...state,
                status: action.status
            }
        case "DELETE_USER_POST":
            return {
                ...state,
                posts: state.posts.filter(post => post.id !== action.id)
            }
        case "SAVE_PHOTO_SUCCESS": {
            // @ts-ignore
            return {...state, profile: {...state.profile, photos: action.photos}}
        }
        default:
            return state;
    }
}

export const addPostActionCreator = (newPost: string) => ({type: "ADD_POST", newPost} as const);
export const setUserProfile = (profile: any) => ({type: "SET_USER_PROFILE", profile} as const);
export const setStatus = (status: string) => ({type: "SET_STATUS", status} as const);
export const deletePost = (id: any) => ({type: "DELETE_USER_POST", id} as const);
export const savePhotoSuccess = (photos: any) => ({type: "SAVE_PHOTO_SUCCESS", photos} as const);

//thunks Type
type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsType>

//thunks

export const getUserProfile = (userId: string): ThunkType => async (dispatch) => {
    const response = await userAPI.getProfile(userId)
    dispatch(setUserProfile(response.data))
};

export const getStatus = (userId: string): ThunkType => async (dispatch) => {
    const response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data))
};

export const updateStatus = (status: string): ThunkType => async (dispatch) => {
    const response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
};

export const savePhoto = (file: any): ThunkType => async (dispatch) => {
    const response = await profileAPI.savePhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos))
    }
};

export default profileReducer;