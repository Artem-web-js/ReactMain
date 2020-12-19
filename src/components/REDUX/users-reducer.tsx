const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"

type UsersType = {
    id: number
    photoURL: string
    followed: boolean
    fullName: string
    status: string
    location: {city: string, country: string}
}

export type UsersReducerState = {
    users: Array<UsersType>
}

let initialState: UsersReducerState = {
    users: [
        {
            id: 1,
            photoURL: "https://imhung.com/wp-content/uploads/2019/11/users-vector-icon-png_260862.jpg",
            followed: false,
            fullName: "Artem",
            status: "I'm a boss",
            location: {city: "Kyiv", country: "Ukraine"}
        },
        {
            id: 2,
            photoURL: "https://png.pngtree.com/png-clipart/20190922/original/pngtree-business-male-user-avatar-vector-png-image_4774078.jpg",
            followed: false,
            fullName: "Maks",
            status: "I'm a dumb",
            location: {city: "Piter", country: "Russia"}
        },
        {
            id: 3,
            photoURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa0-4Ry22Bx8q_n4CXoXIUp2qmIsNoxMOc3w&usqp=CAU",
            followed: false,
            fullName: "Sabina",
            status: "I'm a queen",
            location: {city: "Tbilisi", country: "Georgia"}
        }
    ]
};

const usersReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case SET_USERS: {
            return {...state, users: [...state.users, ...action.users]}
        }
        default:
            return state;
    }
}

export const followAC = (userID: number) => ({type: FOLLOW, userID});
export const unfollowAC = (userID: number) => ({type: UNFOLLOW, userID});
export const setUsersAC = (userID: number) => ({type: SET_USERS, userID});

export default usersReducer;